'use client';

import { use } from 'react';
import { teams, players, matches } from '@/data/mockData';
import PlayerCard from '@/components/common/PlayerCard';
import MatchCard from '@/components/common/MatchCard';
import { motion } from 'framer-motion';
import { Trophy, Users, Target, Flame } from 'lucide-react';

export default function TeamDetailPage({ params }) {
  const { id } = use(params);
  const teamId = parseInt(id);
  const team = teams.find(t => t.id === teamId);
  const teamPlayers = players.filter(p => p.teamId === teamId);
  const teamMatches = matches.filter(m => m.homeTeamId === teamId || m.awayTeamId === teamId);

  if (!team) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gold mb-4">Team Not Found</h1>
          <p className="text-gray-400">The team you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const getTeamById = (teamId) => teams.find(t => t.id === teamId);

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-field-dark via-field-green to-field-dark border-b-2 border-gold border-opacity-30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-8 mb-8">
            <div className="text-8xl">{team.logo}</div>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">{team.name}</h1>
              <p className="text-2xl text-gold font-bold">{team.shortName}</p>
              <p className="text-gray-300 mt-2">Manager: {team.manager}</p>
              <p className="text-gray-300">Venue: {team.venue}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
            <div className="bg-black bg-opacity-40 rounded-lg p-4 border border-gold border-opacity-30">
              <p className="text-gold font-bold">{team.points}</p>
              <p className="text-sm text-gray-400">Points</p>
            </div>
            <div className="bg-green-500 bg-opacity-20 rounded-lg p-4 border border-green-400 border-opacity-30">
              <p className="text-green-400 font-bold">{team.wins}</p>
              <p className="text-sm text-gray-400">Wins</p>
            </div>
            <div className="bg-yellow-500 bg-opacity-20 rounded-lg p-4 border border-yellow-400 border-opacity-30">
              <p className="text-yellow-400 font-bold">{team.draws}</p>
              <p className="text-sm text-gray-400">Draws</p>
            </div>
            <div className="bg-red-500 bg-opacity-20 rounded-lg p-4 border border-red-400 border-opacity-30">
              <p className="text-red-400 font-bold">{team.losses}</p>
              <p className="text-sm text-gray-400">Losses</p>
            </div>
            <div className="bg-blue-500 bg-opacity-20 rounded-lg p-4 border border-blue-400 border-opacity-30">
              <p className="text-blue-400 font-bold">{team.matches}</p>
              <p className="text-sm text-gray-400">Played</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Players */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gold mb-8">Squad</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamPlayers.map((player, index) => (
              <motion.div
                key={`team-player-${player.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <PlayerCard player={player} teamName={team.name} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Matches */}
        {teamMatches.length > 0 && (
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gold mb-8">Matches</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMatches.map((match, index) => (
                <motion.div
                  key={`team-match-${match.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <MatchCard
                    match={match}
                    homeTeam={getTeamById(match.homeTeamId)}
                    awayTeam={getTeamById(match.awayTeamId)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
