'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function PlayerCard({ player, teamName }) {
  const performanceScore = (player.goals * 2 + player.assists) / (player.matches || 1);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-field-dark to-field-green rounded-lg border border-gold border-opacity-30 p-4 hover:border-opacity-100 transition-smooth"
    >
      <div className="text-center">
        {/* Jersey Number */}
        <div className="w-16 h-16 mx-auto mb-3 bg-black bg-opacity-40 rounded-full flex items-center justify-center border-2 border-gold">
          <span className="text-3xl font-bold text-gold">{player.number}</span>
        </div>

        {/* Player Info */}
        <h3 className="text-lg font-bold text-white mb-1">{player.name}</h3>
        <p className="text-sm text-gold font-semibold mb-2">{player.position}</p>
        <p className="text-xs text-gray-400 mb-4">{teamName}</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="bg-black bg-opacity-30 rounded p-2">
            <p className="text-lg font-bold text-green-400">{player.goals}</p>
            <p className="text-xs text-gray-400">Goals</p>
          </div>
          <div className="bg-black bg-opacity-30 rounded p-2">
            <p className="text-lg font-bold text-blue-400">{player.assists}</p>
            <p className="text-xs text-gray-400">Assists</p>
          </div>
          <div className="bg-black bg-opacity-30 rounded p-2">
            <p className="text-lg font-bold text-purple-400">{player.matches}</p>
            <p className="text-xs text-gray-400">Matches</p>
          </div>
        </div>

        {/* Performance Badge */}
        <div className="flex items-center justify-center gap-1 text-xs bg-gold bg-opacity-10 text-gold px-2 py-1 rounded">
          <Zap size={12} />
          <span className="font-semibold">{performanceScore.toFixed(1)} Score</span>
        </div>
      </div>
    </motion.div>
  );
}
