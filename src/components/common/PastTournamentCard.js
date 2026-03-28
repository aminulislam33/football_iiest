'use client';

import { motion } from 'framer-motion';
import { Trophy, Calendar, Users } from 'lucide-react';

export default function PastTournamentCard({ tournament }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative mt-32 mb-20"
    >
      {/* Football Pitch Background */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Light to dark gradient background */}
          <defs>
            <linearGradient id="fieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2d5a2d" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#1a3d1a" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#080b08" stopOpacity="0.8" />
            </linearGradient>
            <pattern id="gridPattern" width="150" height="100" patternUnits="userSpaceOnUse">
              <path d="M 150 0 L 0 0 0 100" fill="none" stroke="#3d7a3d" strokeWidth="1" opacity="0.3" />
            </pattern>
          </defs>

          {/* Grass field background with gradient */}
          <rect width="1200" height="800" fill="url(#fieldGradient)" />

          {/* Pitch border */}
          <rect x="50" y="50" width="1100" height="700" fill="none" stroke="#5a9a5a" strokeWidth="3" opacity="0.6" />

          {/* Half-way line */}
          <line x1="600" y1="50" x2="600" y2="750" stroke="#5a9a5a" strokeWidth="3" opacity="0.5" />

          {/* Center circle */}
          <circle cx="600" cy="400" r="80" fill="none" stroke="#5a9a5a" strokeWidth="3" opacity="0.5" />

          {/* Center spot */}
          <circle cx="600" cy="400" r="5" fill="#5a9a5a" opacity="0.7" />

          {/* Left penalty area */}
          <rect x="50" y="225" width="180" height="350" fill="none" stroke="#5a9a5a" strokeWidth="2.5" opacity="0.5" />

          {/* Right penalty area */}
          <rect x="970" y="225" width="180" height="350" fill="none" stroke="#5a9a5a" strokeWidth="2.5" opacity="0.5" />

          {/* Grid pattern overlay */}
          <rect x="50" y="50" width="1100" height="700" fill="url(#gridPattern)" />
        </svg>

        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080b08]/40 to-[#080b08]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 rounded-2xl border border-[#c9a84c]/30 bg-[#0c100c]/90 backdrop-blur-sm p-12 md:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Tournament Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-8 h-px bg-[#c9a84c]/50" />
              <span className="text-[10px] tracking-[3px] uppercase text-[#c9a84c] font-medium">Last Season</span>
            </div>

            <h3 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#f0ebe0] mb-2 leading-tight">
              {tournament.title}
            </h3>

            <p className="text-[14px] text-[#c9a84c] font-light mb-6 tracking-widest">
              {tournament.edition} Edition
            </p>

            <p className="text-base text-[#e8e3d8]/70 leading-relaxed mb-8">
              {tournament.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 pb-8 border-b border-[#c9a84c]/20">
              <div>
                <div className="text-3xl font-bold text-[#c9a84c] mb-1">{tournament.teams.length}</div>
                <p className="text-[11px] tracking-[2px] uppercase text-[#e8e3d8]/50">Teams</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#c9a84c] mb-1">{tournament.fixtures.length}</div>
                <p className="text-[11px] tracking-[2px] uppercase text-[#e8e3d8]/50">Matches</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#c9a84c] mb-1 capitalize">{tournament.format}</div>
                <p className="text-[11px] tracking-[2px] uppercase text-[#e8e3d8]/50">Format</p>
              </div>
            </div>

            {/* Winner Info */}
            <div className="space-y-4">
              <p className="text-[10px] tracking-[2px] uppercase text-[#c9a84c] font-medium mb-3">Tournament Winner</p>
              <div className="flex items-center gap-3">
                <Trophy className="text-[#c9a84c]" size={24} />
                <div>
                  <p className="text-2xl font-light text-[#f0ebe0]">
                    {tournament.teams.find(t => t.id === tournament.winner)?.name}
                  </p>
                  <p className="text-[12px] text-[#e8e3d8]/50">Champion</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Timeline & Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Date Range */}
            <div className="bg-[#080b08]/60 border border-[#c9a84c]/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-[#c9a84c]" size={20} />
                <p className="text-[11px] tracking-[2px] uppercase text-[#c9a84c] font-medium">Tournament Dates</p>
              </div>
              <p className="text-base text-[#f0ebe0] mb-1">{tournament.startDate}</p>
              <p className="text-base text-[#e8e3d8]/60">to {tournament.endDate}</p>
            </div>

            {/* Key Highlights */}
            <div className="bg-[#080b08]/60 border border-[#c9a84c]/20 rounded-lg p-6">
              <p className="text-[11px] tracking-[2px] uppercase text-[#c9a84c] font-medium mb-4">Highlights</p>
              <div className="space-y-3">
                {tournament.fixtures.slice(0, 3).map((fixture, i) => (
                  <div key={i} className="flex items-center justify-between text-sm pb-2 border-b border-[#c9a84c]/10 last:border-0">
                    <span className="text-[#e8e3d8]/70">{fixture.round}</span>
                    <span className="text-[#c9a84c] font-medium">
                      {fixture.homeScore} - {fixture.awayScore}
                    </span>
                  </div>
                ))}
                {tournament.fixtures.length > 3 && (
                  <p className="text-[12px] text-[#e8e3d8]/50 italic pt-2">
                    ... and {tournament.fixtures.length - 3} more matches
                  </p>
                )}
              </div>
            </div>

            {/* Runner Up */}
            <div className="bg-[#080b08]/60 border border-[#c9a84c]/20 rounded-lg p-6">
              <p className="text-[11px] tracking-[2px] uppercase text-[#c9a84c] font-medium mb-3">Runner Up</p>
              <p className="text-lg text-[#f0ebe0]">
                {tournament.teams.find(t => t.id === tournament.runnerUp)?.name}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
