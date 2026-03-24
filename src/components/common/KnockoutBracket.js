'use client';

import { motion } from 'framer-motion';

export default function KnockoutBracket({ matches, teams }) {
  const getTeamById = (teamId) => teams.find(t => t.id === teamId);

  const getBracketRound = (matches, roundName) => {
    return matches.filter(m => m.stage === roundName);
  };

  const rounds = ['Quarterfinal', 'Semifinal', 'Final'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-br from-field-dark to-field-green rounded-xl border border-gold border-opacity-30 p-6 overflow-x-auto"
    >
      <div className="flex gap-8 min-w-max pb-6">
        {rounds.map((round) => {
          const roundMatches = getBracketRound(matches, round);

          return (
            <div key={round} className="flex flex-col">
              <h3 className="text-gold font-bold mb-6 text-center text-lg">{round}</h3>
              <div className="flex flex-col gap-8 justify-center">
                {roundMatches.map((match) => {
                  const homeTeam = getTeamById(match.homeTeamId);
                  const awayTeam = getTeamById(match.awayTeamId);

                  return (
                    <motion.div
                      key={`bracket-match-${match.id}`}
                      whileHover={{ scale: 1.05 }}
                      className="w-64 bg-black bg-opacity-40 border border-gold border-opacity-50 rounded-lg p-4 hover:border-opacity-100 transition-smooth"
                    >
                      {/* Home Team */}
                      <div className="flex items-center justify-between mb-3 pb-3 border-b border-gold border-opacity-30">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{homeTeam?.logo}</span>
                          <span className="font-semibold text-white text-sm">{homeTeam?.shortName}</span>
                        </div>
                        {match.status === 'completed' && (
                          <span className="text-lg font-bold text-gold">{match.homeScore}</span>
                        )}
                      </div>

                      {/* Away Team */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{awayTeam?.logo}</span>
                          <span className="font-semibold text-white text-sm">{awayTeam?.shortName}</span>
                        </div>
                        {match.status === 'completed' && (
                          <span className="text-lg font-bold text-gold">{match.awayScore}</span>
                        )}
                      </div>

                      {/* Status Badge */}
                      {match.status === 'upcoming' && (
                        <div className="mt-3 pt-3 border-t border-gold border-opacity-30 text-center text-xs text-gold font-semibold">
                          TBD
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
