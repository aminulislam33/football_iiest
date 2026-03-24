'use client';

import { useState } from 'react';
import { useSportsStore } from '@/store/store';
import { motion } from 'framer-motion';
import { Trash2, Edit2, Plus } from 'lucide-react';
import AddMatchForm from '@/components/admin/AddMatchForm';
import AddTeamForm from '@/components/admin/AddTeamForm';
import AddPlayerForm from '@/components/admin/AddPlayerForm';

export default function AdminPage() {
  const store = useSportsStore();
  const [activeTab, setActiveTab] = useState('matches');
  const [showAddForm, setShowAddForm] = useState(null);

  const tabs = [
    { id: 'matches', label: 'Matches', count: store.matches.length },
    { id: 'teams', label: 'Teams', count: store.teams.length },
    { id: 'players', label: 'Players', count: store.players.length },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="section-title">Admin Panel</h1>
          <p className="text-gray-400 text-lg">Manage tournaments, teams, and players</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-smooth ${
                activeTab === tab.id
                  ? 'bg-gold text-black'
                  : 'bg-field-green text-white hover:bg-field-dark'
              }`}
            >
              {tab.label} ({tab.count})
            </motion.button>
          ))}
        </div>

        {/* Add Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAddForm(activeTab)}
          className="btn-primary mb-8 flex items-center gap-2"
        >
          <Plus size={20} />
          Add {activeTab === 'matches' ? 'Match' : activeTab === 'teams' ? 'Team' : 'Player'}
        </motion.button>

        {/* Content */}
        <div className="grid gap-6">
          {/* Matches Tab */}
          {activeTab === 'matches' && (
            <div className="space-y-4">
              {store.matches.map((match) => (
                <motion.div
                  key={`admin-match-${match.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-gradient-to-r from-field-dark to-field-green rounded-lg p-6 border border-gold border-opacity-30 flex items-center justify-between hover:border-opacity-100 transition-smooth"
                >
                  <div className="flex-1">
                    <p className="font-bold text-white">
                      {store.teams.find(t => t.id === match.homeTeamId)?.name} vs{' '}
                      {store.teams.find(t => t.id === match.awayTeamId)?.name}
                    </p>
                    <p className="text-sm text-gray-400">{match.date} • {match.venue}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-black hover:bg-opacity-30 rounded transition-smooth text-gold">
                      <Edit2 size={18} />
                    </button>
                    <button
                      onClick={() => store.deleteMatch(match.id)}
                      className="p-2 hover:bg-red-500 hover:bg-opacity-30 rounded transition-smooth text-red-400"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Teams Tab */}
          {activeTab === 'teams' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {store.teams.map((team) => (
                <motion.div
                  key={`admin-team-${team.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-gradient-to-br from-field-dark to-field-green rounded-lg p-6 border border-gold border-opacity-30 hover:border-opacity-100 transition-smooth"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-3xl mb-2">{team.logo}</p>
                      <h3 className="font-bold text-white">{team.name}</h3>
                      <p className="text-sm text-gold">{team.shortName}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-black hover:bg-opacity-30 rounded text-gold">
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => store.deleteTeam(team.id)}
                        className="p-2 hover:bg-red-500 hover:bg-opacity-30 rounded text-red-400"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 line-clamp-2">{team.manager}</p>
                </motion.div>
              ))}
            </div>
          )}

          {/* Players Tab */}
          {activeTab === 'players' && (
            <div className="space-y-4">
              {store.players.map((player) => (
                <motion.div
                  key={`admin-player-${player.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-gradient-to-r from-field-dark to-field-green rounded-lg p-6 border border-gold border-opacity-30 flex items-center justify-between hover:border-opacity-100 transition-smooth"
                >
                  <div className="flex-1">
                    <p className="font-bold text-white">
                      #{player.number} {player.name}
                    </p>
                    <p className="text-sm text-gray-400">
                      {player.position} • {store.teams.find(t => t.id === player.teamId)?.name}
                    </p>
                  </div>
                  <div className="text-center mr-4">
                    <p className="text-green-400 font-bold">{player.goals}</p>
                    <p className="text-xs text-gray-400">Goals</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-black hover:bg-opacity-30 rounded text-gold">
                      <Edit2 size={18} />
                    </button>
                    <button
                      onClick={() => store.deletePlayer(player.id)}
                      className="p-2 hover:bg-red-500 hover:bg-opacity-30 rounded text-red-400"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Forms */}
      {showAddForm === 'matches' && (
        <AddMatchForm onClose={() => setShowAddForm(null)} />
      )}
      {showAddForm === 'teams' && (
        <AddTeamForm onClose={() => setShowAddForm(null)} />
      )}
      {showAddForm === 'players' && (
        <AddPlayerForm onClose={() => setShowAddForm(null)} />
      )}
    </section>
  );
}
