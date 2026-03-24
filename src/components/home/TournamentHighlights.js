'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Trophy, Users, Target, Flame } from 'lucide-react';

const iconMap = {
  1: Trophy,
  2: Flame,
  3: Target,
  4: Users,
};

const statusConfig = {
  ongoing:  { label: 'Live',     cls: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' },
  upcoming: { label: 'Upcoming', cls: 'bg-blue-500/15   text-blue-400   border-blue-500/30'    },
  completed:{ label: 'Ended',    cls: 'bg-white/8       text-white/35   border-white/12'        },
};

const fadeIn = (i, dir = 0) => ({
  initial:     { opacity: 0, x: dir },
  whileInView: { opacity: 1, x: 0  },
  viewport:    { once: true, margin: '-50px' },
  transition:  { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
});

export default function TournamentHighlights({ tournaments }) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="block w-12 h-px bg-[#c9a84c]/50" />
            <span className="text-[10px] tracking-[4px] uppercase text-[#c9a84c] font-medium">Competitions</span>
            <span className="block w-12 h-px bg-[#c9a84c]/50" />
          </div>
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl font-light text-[#f0ebe0] tracking-tight">
            Major <em className="italic text-[#c9a84c]">Tournaments</em>
          </h2>
          <p className="mt-3 text-sm font-light text-[#e8e3d8]/40 tracking-wide">
            Compete in prestigious competitions
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tournaments.slice(0, 4).map((t, i) => {
            const Icon = iconMap[t.id] ?? Trophy;
            const st = statusConfig[t.status] ?? statusConfig.completed;
            return (
              <motion.div key={t.id} {...fadeIn(i, i % 2 === 0 ? -20 : 20)}>
                <Link href={`/tournaments/${t.id}`} className="group block h-full">
                  <div className="relative h-full border border-[#e8e3d8]/8 bg-white/[0.025] hover:border-[#c9a84c]/35 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden p-8">

                    {/* corner brackets */}
                    <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#c9a84c]/40 group-hover:border-[#c9a84c] transition-colors duration-300" />
                    <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#c9a84c]/40 group-hover:border-[#c9a84c] transition-colors duration-300" />

                    {/* watermark icon */}
                    <div className="absolute -bottom-3 -right-3 text-[#e8e3d8]/[0.04] group-hover:text-[#c9a84c]/[0.07] transition-colors duration-300">
                      <Icon className="w-28 h-28" />
                    </div>

                    {/* top row */}
                    <div className="flex items-start justify-between mb-6 relative z-10">
                      <div className="w-11 h-11 border border-[#c9a84c]/30 bg-[#c9a84c]/08 flex items-center justify-center text-[#c9a84c] group-hover:bg-[#c9a84c]/15 transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`px-3 py-1 text-[9px] tracking-[2px] uppercase font-medium border ${st.cls}`}>
                        {st.label}
                      </span>
                    </div>

                    {/* name */}
                    <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#f0ebe0] group-hover:text-[#c9a84c] transition-colors duration-300 mb-2 relative z-10">
                      {t.name}
                    </h3>

                    <p className="text-[13px] font-light text-[#e8e3d8]/45 leading-relaxed mb-6 relative z-10">
                      {t.description}
                    </p>

                    {/* stats footer */}
                    <div className="relative z-10 pt-5 border-t border-[#e8e3d8]/8 flex items-center justify-between">
                      <div className="flex gap-6">
                        <div>
                          <div className="text-lg font-light text-[#f0ebe0]">{t.teams.length}</div>
                          <div className="text-[9px] tracking-[2px] uppercase text-[#e8e3d8]/35 mt-0.5">Teams</div>
                        </div>
                        <div>
                          <div className="text-lg font-light text-[#f0ebe0]">
                            {t.format === 'knockout' ? 'KO' : 'League'}
                          </div>
                          <div className="text-[9px] tracking-[2px] uppercase text-[#e8e3d8]/35 mt-0.5">Format</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] tracking-[2px] uppercase text-[#e8e3d8]/35 group-hover:text-[#c9a84c] transition-colors duration-300">
                        View
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
                             stroke="currentColor" strokeWidth="1.5">
                          <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/tournaments"
            className="inline-flex items-center gap-3 px-8 py-3 border border-[#c9a84c]/40 text-[11px] tracking-[2.5px] uppercase font-medium text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#080b08] transition-all duration-250"
          >
            Explore All Tournaments
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none"
                 stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}