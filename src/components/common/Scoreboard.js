'use client';

import { motion } from 'framer-motion';

export default function Scoreboard({ match, homeTeam, awayTeam, showDetails = false }) {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      className="bg-gradient-to-r from-stadium-black via-field-dark to-stadium-black rounded-2xl border-2 border-gold shadow-stadium overflow-hidden"
    >
      <div className="p-8 md:p-12">
        {/* Score Display */}
        <div className="flex items-center justify-between mb-8">
          {/* Home Team */}
          <div className="flex-1 text-center">
            {homeTeam?.logo && <p className="text-5xl mb-3">{homeTeam.logo}</p>}
            <h3 className="text-xl font-bold text-white mb-2">{homeTeam?.name}</h3>
            {match.status === 'completed' && (
              <div className="text-sm text-gray-400 mb-4">{homeTeam?.shortName}</div>
            )}
          </div>

          {/* Score */}
          <div className="flex-shrink-0 mx-8">
            {match.status === 'completed' ? (
              <div className="text-center">
                <div className="font-scoreboard text-gold font-bold drop-shadow-lg shadow-stadium">
                  <span className="text-6xl md:text-7xl">{match.homeScore}</span>
                </div>
                <p className="text-xl text-gray-400 mt-2 font-bold">-</p>
                <div className="font-scoreboard text-gold font-bold drop-shadow-lg shadow-stadium">
                  <span className="text-6xl md:text-7xl">{match.awayScore}</span>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-2xl text-gold font-bold">vs</p>
              </div>
            )}
          </div>

          {/* Away Team */}
          <div className="flex-1 text-center">
            {awayTeam?.logo && <p className="text-5xl mb-3">{awayTeam.logo}</p>}
            <h3 className="text-xl font-bold text-white mb-2">{awayTeam?.name}</h3>
            {match.status === 'completed' && (
              <div className="text-sm text-gray-400 mb-4">{awayTeam?.shortName}</div>
            )}
          </div>
        </div>

        {/* Match Details */}
        {showDetails && (
          <div className="border-t border-gold border-opacity-30 pt-6 mt-6">
            <div className="grid grid-cols-3 gap-4 text-sm md:text-base">
              <div>
                <p className="text-gray-400 mb-1">Stage</p>
                <p className="text-gold font-bold">{match.stage}</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Venue</p>
                <p className="text-white font-bold">{match.venue}</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Status</p>
                <p className="text-green-400 font-bold capitalize">{match.status}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
