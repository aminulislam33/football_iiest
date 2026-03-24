'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import MatchCard from '@/components/common/MatchCard';
import { getLatestResults } from '@/lib/utils';

export default function LatestResults({ matches, teams }) {
  const latestResults = getLatestResults(matches, 3);
  const getTeamById = (id) => teams.find(t => t.id === id);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* subtle section divider glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,168,76,0.04)_0%,transparent_60%)] pointer-events-none" />
      {/* top + bottom rules */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px"
           style={{ background: 'linear-gradient(90deg,transparent,#c9a84c,transparent)' }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-px"
           style={{ background: 'linear-gradient(90deg,transparent,#c9a84c,transparent)' }} />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="block w-12 h-px bg-[#c9a84c]/50" />
            <span className="text-[10px] tracking-[4px] uppercase text-[#c9a84c] font-medium">Results</span>
            <span className="block w-12 h-px bg-[#c9a84c]/50" />
          </div>
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl font-light text-[#f0ebe0] tracking-tight">
            Latest <em className="italic text-[#c9a84c]">Results</em>
          </h2>
          <p className="mt-3 text-sm font-light text-[#e8e3d8]/40 tracking-wide">
            Recent match outcomes and highlights
          </p>
        </motion.div>

        {latestResults.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {latestResults.map((match, i) => (
                <motion.div
                  key={match.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <MatchCard
                    match={match}
                    homeTeam={getTeamById(match.homeTeamId)}
                    awayTeam={getTeamById(match.awayTeamId)}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
            >
              <Link
                href="/tournaments"
                className="inline-flex items-center gap-3 px-8 py-3 border border-[#e8e3d8]/15
                           text-[11px] tracking-[2.5px] uppercase font-medium text-[#e8e3d8]/50
                           hover:border-[#c9a84c]/40 hover:text-[#c9a84c] transition-all duration-250"
              >
                View All Results
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none"
                     stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </Link>
            </motion.div>
          </>
        ) : (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-px h-12 bg-[#c9a84c]/30 mx-auto mb-6" />
            <p className="text-sm font-light text-[#e8e3d8]/35 tracking-widest uppercase">
              No results yet — tournaments coming soon
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}