'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { formatDate, formatTime } from '@/lib/utils';
import { Clock, MapPin } from 'lucide-react';

export default function MatchCard({ match, homeTeam, awayTeam, showLink = true }) {
  const isCompleted = match.status === 'completed';
  const isUpcoming = match.status === 'upcoming';

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="match-card group cursor-pointer overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gold to-transparent opacity-0 group-hover:opacity-10 transition-opacity" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-gold font-bold text-sm">{match.stage}</h3>
            <p className="text-xs text-gray-400">{formatDate(match.date)}</p>
          </div>
          {isCompleted && (
            <span className="px-2 py-1 bg-green-500 bg-opacity-20 text-green-400 rounded text-xs font-bold">
              FINAL
            </span>
          )}
          {isUpcoming && (
            <span className="px-2 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded text-xs font-bold">
              UPCOMING
            </span>
          )}
        </div>

        {/* Teams and Score */}
        <div className="flex items-center justify-between gap-4 my-6">
          <div className="flex-1 text-center">
            {homeTeam?.logo && <p className="text-2xl mb-2">{homeTeam.logo}</p>}
            <p className="font-bold text-white line-clamp-2">{homeTeam?.name || 'Team'}</p>
          </div>

          <div className="flex flex-col items-center">
            {isCompleted ? (
              <div className="text-4xl font-bold text-gold">
                {match.homeScore} - {match.awayScore}
              </div>
            ) : (
              <div className="text-2xl text-gold font-bold">vs</div>
            )}
            <p className="text-xs text-gray-400 mt-2">{formatTime(match.time)}</p>
          </div>

          <div className="flex-1 text-center">
            {awayTeam?.logo && <p className="text-2xl mb-2">{awayTeam.logo}</p>}
            <p className="font-bold text-white line-clamp-2">{awayTeam?.name || 'Team'}</p>
          </div>
        </div>

        {/* Venue */}
        <div className="flex items-center justify-center gap-2 text-gray-400 text-xs pt-4 border-t border-field-green border-opacity-50">
          <MapPin size={14} />
          <span>{match.venue}</span>
        </div>
      </div>
    </motion.div>
  );
}
