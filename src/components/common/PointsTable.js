'use client';

import { motion } from 'framer-motion';
import { Trophy, Flame } from 'lucide-react';

export default function PointsTable({ standings, teams }) {
  const getTeamById = (teamId) => teams.find(t => t.id === teamId);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-br from-field-dark to-field-green rounded-xl border border-gold border-opacity-30 overflow-hidden"
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-black bg-opacity-40 border-b border-gold border-opacity-50">
              <th className="px-4 py-3 text-left text-gold font-bold">#</th>
              <th className="px-4 py-3 text-left text-gold font-bold">Team</th>
              <th className="px-4 py-3 text-center text-gold font-bold">P</th>
              <th className="px-4 py-3 text-center text-gold font-bold">W</th>
              <th className="px-4 py-3 text-center text-gold font-bold">D</th>
              <th className="px-4 py-3 text-center text-gold font-bold">L</th>
              <th className="px-4 py-3 text-center text-gold font-bold">GF</th>
              <th className="px-4 py-3 text-center text-gold font-bold">GA</th>
              <th className="px-4 py-3 text-right text-gold font-bold">Pts</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((entry, index) => {
              const team = getTeamById(entry.teamId);
              const isLeader = index === 0;

              return (
                <motion.tr
                  key={`standing-${entry.teamId}`}
                  whileHover={{ backgroundColor: 'rgba(26, 93, 63, 0.5)' }}
                  className={`border-b border-field-green border-opacity-30 transition-colors ${
                    isLeader ? 'bg-gold bg-opacity-10' : ''
                  }`}
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {isLeader && <Flame size={18} className="text-gold" />}
                      <span className="font-bold text-white">{entry.position}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{team?.logo}</span>
                      <div>
                        <p className="font-bold text-white">{team?.name}</p>
                        <p className="text-xs text-gray-400">{team?.shortName}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center text-white font-bold">{entry.goalsFor + entry.goalsAgainst || entry.matches}</td>
                  <td className="px-4 py-3 text-center text-green-400 font-bold">{entry.wins}</td>
                  <td className="px-4 py-3 text-center text-yellow-400 font-bold">{entry.draws}</td>
                  <td className="px-4 py-3 text-center text-red-400 font-bold">{entry.losses}</td>
                  <td className="px-4 py-3 text-center text-blue-400 font-bold">{entry.goalsFor}</td>
                  <td className="px-4 py-3 text-center text-red-300 font-bold">{entry.goalsAgainst}</td>
                  <td className="px-4 py-3 text-right">
                    <span className={`font-bold text-lg ${isLeader ? 'text-gold' : 'text-white'}`}>
                      {entry.points}
                    </span>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
