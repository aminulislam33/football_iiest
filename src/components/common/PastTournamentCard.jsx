'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, Trophy, ChevronDown, ChevronUp } from 'lucide-react';

// ─── SAMPLE DATA SHAPE (pass this as `tournament` prop) ───────────────────
// const sampleTournament = {
//   title: 'The Oval Cup',
//   edition: '12th',
//   shortName: 'OC\'25',
//   description: 'The flagship inter-department football tournament of IIEST Shibpur, held annually on the historic Oval ground since 1982.',
//   startDate: '2025-01-10',
//   endDate: '2025-01-28',
//   format: 'knockout',          // 'knockout' | 'league' | 'league+knockout'
//   teams: [
//     { id: 1, name: 'Civil FC',       shortName: 'CIV', group: 'A' },
//     { id: 2, name: 'Mech United',    shortName: 'MCH', group: 'A' },
//     { id: 3, name: 'EE Dynamos',     shortName: 'EED', group: 'B' },
//     { id: 4, name: 'CSE Wanderers',  shortName: 'CSW', group: 'B' },
//     { id: 5, name: 'Arch Rovers',    shortName: 'ARR', group: 'C' },
//     { id: 6, name: 'IT Strikers',    shortName: 'ITS', group: 'C' },
//     { id: 7, name: 'ECE Eagles',     shortName: 'ECE', group: 'D' },
//     { id: 8, name: 'Chem Blasters',  shortName: 'CHB', group: 'D' },
//   ],
//   fixtures: [
//     { id: 1, round: 'Quarter Final', date: '2025-01-10', home: 1, away: 2, homeScore: 3, awayScore: 1, played: true  },
//     { id: 2, round: 'Quarter Final', date: '2025-01-11', home: 3, away: 4, homeScore: 0, awayScore: 2, played: true  },
//     { id: 3, round: 'Quarter Final', date: '2025-01-12', home: 5, away: 6, homeScore: 1, awayScore: 1, played: true, penaltyWinner: 5 },
//     { id: 4, round: 'Quarter Final', date: '2025-01-13', home: 7, away: 8, homeScore: 2, awayScore: 0, played: true  },
//     { id: 5, round: 'Semi Final',    date: '2025-01-20', home: 1, away: 4, homeScore: 2, awayScore: 3, played: true  },
//     { id: 6, round: 'Semi Final',    date: '2025-01-21', home: 5, away: 7, homeScore: 1, awayScore: 0, played: true  },
//     { id: 7, round: 'Final',         date: '2025-01-28', home: 4, away: 5, homeScore: 2, awayScore: 1, played: true  },
//   ],
//   winner: 4,
//   runnerUp: 5,
// };

const formatDate = (d) =>
  new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

const formatLabel = { knockout: 'Knockout', league: 'League', 'league+knockout': 'League + Knockout' };

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

// ─── FIXTURE ROW ─────────────────────────────────────────────────────────────
function FixtureRow({ fixture, teams }) {
  const getTeam = (id) => teams.find((t) => t.id === id) ?? { name: 'TBD', shortName: '?' };
  const home = getTeam(fixture.home);
  const away = getTeam(fixture.away);

  const homeWon = fixture.played && (
    fixture.penaltyWinner
      ? fixture.penaltyWinner === fixture.home
      : fixture.homeScore > fixture.awayScore
  );
  const awayWon = fixture.played && (
    fixture.penaltyWinner
      ? fixture.penaltyWinner === fixture.away
      : fixture.awayScore > fixture.homeScore
  );

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 py-3
                    border-b border-[#e8e3d8]/06 last:border-0">
      {/* home */}
      <div className="flex items-center justify-end gap-2 min-w-0">
        <span className={`text-[13px] font-medium truncate ${homeWon ? 'text-[#f0ebe0]' : 'text-[#e8e3d8]/50'}`}>
          {home.name}
        </span>
        <span className="text-[9px] tracking-[1.5px] uppercase px-1.5 py-0.5
                         border border-[#e8e3d8]/12 text-[#e8e3d8]/35 shrink-0">
          {home.shortName}
        </span>
      </div>

      {/* score / vs */}
      <div className="flex items-center gap-1.5 shrink-0">
        {fixture.played ? (
          <>
            <span className={`text-[18px] font-light min-w-[20px] text-center leading-none
                              ${homeWon ? 'text-[#f0ebe0]' : 'text-[#e8e3d8]/40'}`}>
              {fixture.homeScore}
            </span>
            <span className="text-[10px] text-[#e8e3d8]/25 font-light">—</span>
            <span className={`text-[18px] font-light min-w-[20px] text-center leading-none
                              ${awayWon ? 'text-[#f0ebe0]' : 'text-[#e8e3d8]/40'}`}>
              {fixture.awayScore}
            </span>
            {fixture.penaltyWinner && (
              <span className="text-[7px] tracking-[1px] uppercase text-[#c9a84c]/60 ml-1">pen</span>
            )}
          </>
        ) : (
          <span className="text-[11px] tracking-[2px] text-[#e8e3d8]/25 font-light">vs</span>
        )}
      </div>

      {/* away */}
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-[9px] tracking-[1.5px] uppercase px-1.5 py-0.5
                         border border-[#e8e3d8]/12 text-[#e8e3d8]/35 shrink-0">
          {away.shortName}
        </span>
        <span className={`text-[13px] font-medium truncate ${awayWon ? 'text-[#f0ebe0]' : 'text-[#e8e3d8]/50'}`}>
          {away.name}
        </span>
      </div>
    </div>
  );
}

// ─── ROUND BLOCK ─────────────────────────────────────────────────────────────
function RoundBlock({ round, fixtures, teams }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border border-[#e8e3d8]/08 mb-3 last:mb-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-3
                   hover:bg-white/[0.02] transition-colors duration-200"
      >
        <span className="text-[10px] tracking-[3px] uppercase text-[#c9a84c] font-medium">
          {round}
        </span>
        <span className="text-[#e8e3d8]/30">
          {open
            ? <ChevronUp className="w-3.5 h-3.5" />
            : <ChevronDown className="w-3.5 h-3.5" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden"
          >
            <div className="px-5 border-t border-[#e8e3d8]/06">
              {fixtures.map((f) => (
                <FixtureRow key={f.id} fixture={f} teams={teams} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function PastTournamentCard({ tournament }) {
  const [tab, setTab] = useState('fixtures'); // 'fixtures' | 'teams'

  if (!tournament) return null;

  const {
    title, edition, shortName, description,
    startDate, endDate, format, teams, fixtures,
    winner, runnerUp,
  } = tournament;

  const winnerTeam   = teams.find((t) => t.id === winner);
  const runnerUpTeam = teams.find((t) => t.id === runnerUp);

  // group fixtures by round
  const rounds = fixtures.reduce((acc, f) => {
    if (!acc[f.round]) acc[f.round] = [];
    acc[f.round].push(f);
    return acc;
  }, {});

  return (
    <motion.div {...fadeUp} className="max-w-3xl mx-auto">

      {/* ── HEADER CARD ── */}
      <div className="relative border border-[#c9a84c]/22 bg-white/[0.025] p-7 sm:p-9 mb-4 overflow-hidden">
        {/* corner brackets */}
        <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#c9a84c]" />
        <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#c9a84c]" />

        {/* shortName watermark */}
        <div className="absolute -right-3 -bottom-4 font-[family-name:var(--font-cormorant)]
                        text-[88px] font-light italic text-[#e8e3d8]/[0.04] select-none leading-none pointer-events-none">
          {shortName}
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-6">

          {/* left: title block */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[9px] tracking-[3px] uppercase text-[#c9a84c]/70 font-medium">
                Last Season
              </span>
              <span className="w-px h-3 bg-[#c9a84c]/25" />
              <span className="text-[9px] tracking-[2px] uppercase text-[#e8e3d8]/30">
                {edition} Edition
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(28px,4vw,42px)]
                           font-light text-[#f0ebe0] leading-tight tracking-tight mb-1">
              {title}
            </h2>
            <p className="text-[10px] tracking-[3px] uppercase text-[#c9a84c] font-medium mb-4">
              {shortName}
            </p>
            <p className="text-[13.5px] font-light leading-[1.75] text-[#e8e3d8]/55 max-w-md">
              {description}
            </p>
          </div>

          {/* right: meta pills */}
          <div className="flex sm:flex-col gap-3 flex-wrap shrink-0">
            <div className="flex flex-col gap-0.5">
              <span className="text-[8px] tracking-[2px] uppercase text-[#e8e3d8]/30">Duration</span>
              <span className="text-[12px] font-medium text-[#f0ebe0]">
                {formatDate(startDate)} — {formatDate(endDate)}
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[8px] tracking-[2px] uppercase text-[#e8e3d8]/30">Format</span>
              <span className="text-[12px] font-medium text-[#f0ebe0]">
                {formatLabel[format] ?? format}
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[8px] tracking-[2px] uppercase text-[#e8e3d8]/30">Teams</span>
              <span className="text-[12px] font-medium text-[#f0ebe0]">{teams.length}</span>
            </div>
          </div>
        </div>

        {/* ── WINNER STRIP ── */}
        {winnerTeam && (
          <div className="relative z-10 mt-7 pt-5 border-t border-[#e8e3d8]/08
                          flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-3">
              <Trophy className="w-4 h-4 text-[#c9a84c]" />
              <div>
                <div className="text-[8px] tracking-[2px] uppercase text-[#e8e3d8]/30 mb-0.5">Champion</div>
                <div className="text-[14px] font-medium text-[#f0ebe0]">{winnerTeam.name}</div>
              </div>
            </div>
            {runnerUpTeam && (
              <>
                <div className="w-px h-8 bg-[#e8e3d8]/10" />
                <div>
                  <div className="text-[8px] tracking-[2px] uppercase text-[#e8e3d8]/30 mb-0.5">Runner-up</div>
                  <div className="text-[13px] font-light text-[#e8e3d8]/55">{runnerUpTeam.name}</div>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* ── TABS ── */}
      <div className="flex border-b border-[#e8e3d8]/08 mb-4">
        {['fixtures', 'teams'].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-6 py-3 text-[10px] tracking-[2.5px] uppercase font-medium
                        border-b-2 transition-colors duration-200
                        ${tab === t
                          ? 'border-[#c9a84c] text-[#c9a84c]'
                          : 'border-transparent text-[#e8e3d8]/35 hover:text-[#e8e3d8]/60'}`}
          >
            {t === 'fixtures' ? 'Fixtures & Results' : 'Teams'}
          </button>
        ))}
      </div>

      {/* ── FIXTURES TAB ── */}
      <AnimatePresence mode="wait">
        {tab === 'fixtures' && (
          <motion.div
            key="fixtures"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}
          >
            {Object.entries(rounds).map(([round, rxs]) => (
              <RoundBlock key={round} round={round} fixtures={rxs} teams={teams} />
            ))}
          </motion.div>
        )}

        {/* ── TEAMS TAB ── */}
        {tab === 'teams' && (
          <motion.div
            key="teams"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}
          >
            {/* group by group if groups exist, else flat list */}
            {(() => {
              const hasGroups = teams.some((t) => t.group);
              if (!hasGroups) {
                return (
                  <div className="border border-[#e8e3d8]/08 divide-y divide-[#e8e3d8]/06">
                    {teams.map((team, i) => (
                      <div key={team.id}
                           className="flex items-center gap-4 px-5 py-3.5">
                        <span className="text-[#e8e3d8]/20 text-[12px] font-light w-5 text-right shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-[9px] tracking-[1.5px] uppercase px-2 py-0.5
                                         border border-[#e8e3d8]/12 text-[#e8e3d8]/35 shrink-0">
                          {team.shortName}
                        </span>
                        <span className="text-[13px] font-medium text-[#e8e3d8]/75">{team.name}</span>
                        {team.id === winner && (
                          <Trophy className="w-3.5 h-3.5 text-[#c9a84c] ml-auto" />
                        )}
                      </div>
                    ))}
                  </div>
                );
              }

              const groups = teams.reduce((acc, t) => {
                if (!acc[t.group]) acc[t.group] = [];
                acc[t.group].push(t);
                return acc;
              }, {});

              return (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(groups).map(([grp, grpTeams]) => (
                    <div key={grp} className="border border-[#e8e3d8]/08">
                      <div className="px-4 py-2.5 border-b border-[#e8e3d8]/06">
                        <span className="text-[9px] tracking-[2.5px] uppercase text-[#c9a84c]/70">
                          Group {grp}
                        </span>
                      </div>
                      {grpTeams.map((team) => (
                        <div key={team.id}
                             className="flex items-center gap-3 px-4 py-3
                                        border-b border-[#e8e3d8]/05 last:border-0">
                          <span className="text-[9px] tracking-[1.5px] uppercase px-1.5 py-0.5
                                           border border-[#e8e3d8]/12 text-[#e8e3d8]/35 shrink-0">
                            {team.shortName}
                          </span>
                          <span className="text-[13px] font-medium text-[#e8e3d8]/75 flex-1">
                            {team.name}
                          </span>
                          {team.id === winner && (
                            <Trophy className="w-3.5 h-3.5 text-[#c9a84c]" />
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}