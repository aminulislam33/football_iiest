'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Trophy, Users } from 'lucide-react';

export default function TeamCard({ team }) {
  const winPercentage = team.matches > 0 ? Math.round((team.wins / team.matches) * 100) : 0;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-field-dark to-field-green rounded-xl border border-gold border-opacity-30 overflow-hidden group cursor-pointer hover:border-opacity-100 transition-smooth shadow-lg hover:shadow-stadium"
    >
      <Link href={`/teams/${team.id}`}>
        <div className="p-6">
          {/* Team Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-5xl mb-2">{team.logo}</p>
              <h3 className="text-xl font-bold text-white group-hover:text-gold transition-smooth">
                {team.name}
              </h3>
              <p className="text-sm text-gold font-semibold">{team.shortName}</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-gold">{team.points}</p>
              <p className="text-xs text-gray-400">Points</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            <div className="bg-black bg-opacity-30 rounded p-3 text-center">
              <p className="text-lg font-bold text-white">{team.matches}</p>
              <p className="text-xs text-gray-400">Played</p>
            </div>
            <div className="bg-green-500 bg-opacity-20 rounded p-3 text-center">
              <p className="text-lg font-bold text-green-400">{team.wins}</p>
              <p className="text-xs text-gray-400">Wins</p>
            </div>
            <div className="bg-yellow-500 bg-opacity-20 rounded p-3 text-center">
              <p className="text-lg font-bold text-yellow-400">{team.draws}</p>
              <p className="text-xs text-gray-400">Draws</p>
            </div>
            <div className="bg-red-500 bg-opacity-20 rounded p-3 text-center">
              <p className="text-lg font-bold text-red-400">{team.losses}</p>
              <p className="text-xs text-gray-400">Losses</p>
            </div>
          </div>

          {/* Manager and Venue */}
          <div className="space-y-2 mb-4 pb-4 border-b border-field-green border-opacity-50 text-sm text-gray-400">
            <p>Manager: <span className="text-white font-semibold">{team.manager}</span></p>
            <p>Venue: <span className="text-white font-semibold">{team.venue}</span></p>
          </div>

          {/* Players and Link */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gold">
              <Users size={16} />
              <span className="text-sm font-semibold">{team.players.length} Players</span>
            </div>
            <span className="text-xs bg-gold bg-opacity-10 text-gold px-3 py-1 rounded group-hover:bg-opacity-20 transition-smooth">
              View Details →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
