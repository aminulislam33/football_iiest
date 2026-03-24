'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const positions = ['All', 'Goalkeeper', 'Defender', 'Midfielder', 'Forward'];

const players = [
  { id: 1,  name: 'Arjun Ghosh',      number: 1,  position: 'Goalkeeper', year: '4th Year', goals: 0,  assists: 0,  caps: 22, img: null },
  { id: 2,  name: 'Rahul Sen',         number: 5,  position: 'Defender',   year: '3rd Year', goals: 2,  assists: 3,  caps: 18, img: null },
  { id: 3,  name: 'Debayan Das',       number: 6,  position: 'Defender',   year: '4th Year', goals: 1,  assists: 2,  caps: 20, img: null },
  { id: 4,  name: 'Soham Bose',        number: 4,  position: 'Defender',   year: '2nd Year', goals: 0,  assists: 4,  caps: 14, img: null },
  { id: 5,  name: 'Pritam Roy',        number: 3,  position: 'Defender',   year: '3rd Year', goals: 3,  assists: 1,  caps: 17, img: null },
  { id: 6,  name: 'Ankit Sharma',      number: 8,  position: 'Midfielder', year: '4th Year', goals: 6,  assists: 9,  caps: 22, img: null },
  { id: 7,  name: 'Sayan Mukherjee',   number: 10, position: 'Midfielder', year: '3rd Year', goals: 8,  assists: 11, caps: 21, img: null },
  { id: 8,  name: 'Rishav Datta',      number: 7,  position: 'Midfielder', year: '2nd Year', goals: 4,  assists: 7,  caps: 16, img: null },
  { id: 9,  name: 'Tuhin Pal',         number: 14, position: 'Midfielder', year: '1st Year', goals: 2,  assists: 5,  caps: 10, img: null },
  { id: 10, name: 'Subhajit Mondal',   number: 11, position: 'Forward',    year: '4th Year', goals: 14, assists: 6,  caps: 22, img: null },
  { id: 11, name: 'Aditya Kundu',      number: 9,  position: 'Forward',    year: '3rd Year', goals: 11, assists: 4,  caps: 19, img: null },
  { id: 12, name: 'Niloy Chatterjee',  number: 17, position: 'Forward',    year: '2nd Year', goals: 7,  assists: 3,  caps: 13, img: null },
];

const positionColors = {
  Goalkeeper: { bg: 'bg-amber-500/15',   text: 'text-amber-400',  border: 'border-amber-500/30'  },
  Defender:   { bg: 'bg-blue-500/15',    text: 'text-blue-400',   border: 'border-blue-500/30'   },
  Midfielder: { bg: 'bg-emerald-500/15', text: 'text-emerald-400',border: 'border-emerald-500/30'},
  Forward:    { bg: 'bg-rose-500/15',    text: 'text-rose-400',   border: 'border-rose-500/30'   },
};

const initials = (name) => name.split(' ').map(n => n[0]).join('').slice(0, 2);

const avatarBg = (id) => {
  const palette = [
    'from-amber-700 to-amber-900',
    'from-emerald-700 to-emerald-900',
    'from-blue-700 to-blue-900',
    'from-rose-700 to-rose-900',
    'from-violet-700 to-violet-900',
  ];
  return palette[id % palette.length];
};

const cardVariants = {
  hidden:  { opacity: 0, y: 24, scale: 0.97 },
  visible: (i) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] } }),
  exit:    { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

export default function TeamPage() {
  const [activePos, setActivePos] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = activePos === 'All'
    ? players
    : players.filter(p => p.position === activePos);

  const captain = players.find(p => p.number === 10);

  return (
    <main className="min-h-screen bg-[#080b08] text-[#e8e3d8]">

      {/* ── PAGE HEADER ── */}
      <div className="relative pt-24 pb-16 px-6 text-center overflow-hidden">
        {/* subtle pitch lines bg */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #b5e550 0%, transparent 60%)' }} />

        <motion.div
          className="flex items-center justify-center gap-4 mb-4"
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        >
          <span className="block w-12 h-px bg-[#c9a84c]/60" />
          <span className="text-[10px] tracking-[4px] uppercase text-[#c9a84c] font-medium">IIEST Shibpur</span>
          <span className="block w-12 h-px bg-[#c9a84c]/60" />
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl font-light tracking-tight text-[#f0ebe0] mb-3"
          style={{ fontFamily: 'Georgia, serif' }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }}
        >
          The <em className="italic text-[#c9a84c]">Squad</em>
        </motion.h1>

        <motion.p
          className="text-sm font-light text-[#e8e3d8]/45 tracking-wide"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
        >
          {players.length} Players · 2024–25 Season
        </motion.p>

        {/* gold rule */}
        <motion.div
          className="mx-auto mt-8 h-px w-32"
          style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
        />
      </div>

      {/* ── CAPTAIN SPOTLIGHT ── */}
      {captain && (
        <motion.div
          className="max-w-4xl mx-auto px-6 mb-16"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="relative border border-[#c9a84c]/25 bg-white/[0.025] p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start overflow-hidden">
            {/* corner brackets */}
            <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#c9a84c]" />
            <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#c9a84c]" />

            {/* avatar */}
            <div className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${avatarBg(captain.id)} flex items-center justify-center shrink-0 ring-2 ring-[#c9a84c]/40`}>
              <span className="text-2xl font-light text-white/90 tracking-wider">{initials(captain.name)}</span>
              <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#c9a84c] flex items-center justify-center text-[10px] font-bold text-[#080b08]">C</span>
            </div>

            <div className="text-center sm:text-left flex-1">
              <div className="text-[10px] tracking-[3px] uppercase text-[#c9a84c] mb-1">Captain</div>
              <div className="text-3xl font-light text-[#f0ebe0] mb-1" style={{ fontFamily: 'Georgia, serif' }}>{captain.name}</div>
              <div className="text-sm text-[#e8e3d8]/50 mb-5">{captain.position} · #{captain.number} · {captain.year}</div>
              <div className="flex gap-8 justify-center sm:justify-start">
                {[['Goals', captain.goals], ['Assists', captain.assists], ['Caps', captain.caps]].map(([label, val]) => (
                  <div key={label} className="text-center">
                    <div className="text-2xl font-light text-[#f0ebe0]">{val}</div>
                    <div className="text-[10px] tracking-[2px] uppercase text-[#e8e3d8]/40 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* ── POSITION FILTER ── */}
      <div className="max-w-5xl mx-auto px-6 mb-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {positions.map((pos) => (
            <button
              key={pos}
              onClick={() => setActivePos(pos)}
              className={`px-5 py-2 text-[11px] tracking-[2.5px] uppercase font-medium border transition-all duration-200 ${
                activePos === pos
                  ? 'bg-[#c9a84c] text-[#080b08] border-[#c9a84c]'
                  : 'bg-transparent text-[#e8e3d8]/55 border-[#e8e3d8]/15 hover:border-[#c9a84c]/50 hover:text-[#e8e3d8]/80'
              }`}
            >
              {pos}
            </button>
          ))}
        </div>
      </div>

      {/* ── PLAYER GRID ── */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((player, i) => {
              const col = positionColors[player.position];
              return (
                <motion.div
                  key={player.id}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  onClick={() => setSelected(selected?.id === player.id ? null : player)}
                  className="relative border border-[#e8e3d8]/8 bg-white/[0.025] cursor-pointer group
                             hover:border-[#c9a84c]/35 hover:bg-white/[0.04] transition-all duration-250 select-none"
                >
                  {/* jersey number top-right */}
                  <div className="absolute top-3 right-3 font-light text-[#e8e3d8]/20 text-3xl leading-none"
                    style={{ fontFamily: 'Georgia, serif' }}>
                    {player.number}
                  </div>

                  {/* avatar */}
                  <div className="p-5 pb-3 flex flex-col items-center gap-3">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${avatarBg(player.id)} flex items-center justify-center ring-1 ring-white/10 group-hover:ring-[#c9a84c]/30 transition-all`}>
                      <span className="text-base font-light text-white/85 tracking-wider">{initials(player.name)}</span>
                    </div>

                    <div className="text-center w-full">
                      <div className="text-[13px] font-medium text-[#f0ebe0] leading-tight mb-1 truncate px-1">{player.name}</div>
                      <div className={`inline-flex items-center px-2 py-0.5 text-[9px] tracking-[2px] uppercase border ${col.bg} ${col.text} ${col.border}`}>
                        {player.position}
                      </div>
                    </div>
                  </div>

                  {/* stats row */}
                  <div className="border-t border-[#e8e3d8]/8 grid grid-cols-3 divide-x divide-[#e8e3d8]/8">
                    {[['G', player.goals], ['A', player.assists], ['C', player.caps]].map(([lbl, val]) => (
                      <div key={lbl} className="py-2 text-center">
                        <div className="text-[13px] font-light text-[#e8e3d8]/80">{val}</div>
                        <div className="text-[8px] tracking-[1.5px] uppercase text-[#e8e3d8]/30">{lbl}</div>
                      </div>
                    ))}
                  </div>

                  {/* expanded detail */}
                  <AnimatePresence>
                    {selected?.id === player.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-[#c9a84c]/20"
                      >
                        <div className="px-4 py-3 space-y-1.5">
                          {[['Year', player.year], ['Position', player.position], ['Jersey', `#${player.number}`]].map(([k, v]) => (
                            <div key={k} className="flex justify-between items-center">
                              <span className="text-[10px] tracking-[1.5px] uppercase text-[#e8e3d8]/35">{k}</span>
                              <span className="text-[11px] text-[#e8e3d8]/70">{v}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-[#e8e3d8]/30 text-sm tracking-widest uppercase">
            No players found
          </div>
        )}
      </div>
    </main>
  );
}