'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import MatchCard from '@/components/common/MatchCard';
import CountdownTimer from '@/components/common/CountdownTimer';
import { getUpcomingMatches } from '@/lib/utils';

export default function UpcomingMatches({ matches, teams }) {
  const upcomingMatches = getUpcomingMatches(matches, 3);
  const getTeamById = (id) => teams.find(t => t.id === id);

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
            <span className="text-[10px] tracking-[4px] uppercase text-[#c9a84c] font-medium">Fixtures</span>
            <span className="block w-12 h-px bg-[#c9a84c]/50" />
          </div>
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl font-light text-[#f0ebe0] tracking-tight">
            Upcoming <em className="italic text-[#c9a84c]">Matches</em>
          </h2>
          <p className="mt-3 text-sm font-light text-[#e8e3d8]/40 tracking-wide">
            Get ready for thrilling matchups
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {upcomingMatches.map((match, i) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-3"
            >
              <MatchCard
                match={match}
                homeTeam={getTeamById(match.homeTeamId)}
                awayTeam={getTeamById(match.awayTeamId)}
              />
              {/* countdown strip */}
              <div className="border border-[#c9a84c]/15 bg-[#c9a84c]/05 px-4 py-2.5">
                <div className="text-[8px] tracking-[2.5px] uppercase text-[#c9a84c]/60 mb-1">
                  Kicks off in
                </div>
                <CountdownTimer dateString={match.date} timeString={match.time} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        {upcomingMatches.length > 0 && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <Link
              href="/tournaments"
              className="inline-flex items-center gap-3 px-8 py-3 border border-[#e8e3d8]/15 text-[11px] tracking-[2.5px] uppercase font-medium text-[#e8e3d8]/50 hover:border-[#c9a84c]/40 hover:text-[#c9a84c] transition-all duration-250"
            >
              View All Matches
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none"
                   stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}