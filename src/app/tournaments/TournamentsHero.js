'use client';

import { motion } from 'framer-motion';

export default function TournamentsHero() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle section divider glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,168,76,0.04)_0%,transparent_60%)] pointer-events-none" />
      
      {/* Top rule */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px"
           style={{ background: 'linear-gradient(90deg,transparent,#c9a84c,transparent)' }} />

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="block w-12 h-px bg-[#c9a84c]/50" />
            <span className="text-[10px] tracking-[4px] uppercase text-[#c9a84c] font-medium">Competitions</span>
            <span className="block w-12 h-px bg-[#c9a84c]/50" />
          </div>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl font-light text-[#f0ebe0] tracking-tight mb-4">
            All <em className="italic text-[#c9a84c]">Tournaments</em>
          </h1>
          <p className="mt-3 text-sm font-light text-[#e8e3d8]/40 tracking-wide">
            Join the most exciting college football events of the season
          </p>
        </motion.div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-px"
           style={{ background: 'linear-gradient(90deg,transparent,#c9a84c,transparent)' }} />
    </section>
  );
}
