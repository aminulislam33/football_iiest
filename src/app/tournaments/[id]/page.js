'use client';

import { use } from 'react';
import { tournaments, matches, teams, leagueStandings } from '@/data/mockData';
import MatchCard from '@/components/common/MatchCard';
import PointsTable from '@/components/common/PointsTable';
import KnockoutBracket from '@/components/common/KnockoutBracket';
import FootballPitch from '@/components/common/FootballPitch';
import PastTournamentCard from '@/components/common/PastTournamentCard';
import { motion } from 'framer-motion';
import { Trophy, Users, Target } from 'lucide-react';

const lastSeason = {
  title: 'IIEST Football League 2025',
  edition: '12th',
  shortName: "IFL 5.0",
  description: 'The flagship football tournament of IIEST Shibpur, held annually on the historic Oval ground since 1982.',
  startDate: '2025-01-10',
  endDate: '2025-01-28',
  format: 'knockout',
  teams: [
    { id: 1, name: 'Civil FC',      shortName: 'CIV', group: 'A' },
    { id: 2, name: 'Mech United',   shortName: 'MCH', group: 'A' },
    { id: 3, name: 'EE Dynamos',    shortName: 'EED', group: 'B' },
    { id: 4, name: 'CSE Wanderers', shortName: 'CSW', group: 'B' },
    { id: 5, name: 'Arch Rovers',   shortName: 'ARR', group: 'C' },
    { id: 6, name: 'IT Strikers',   shortName: 'ITS', group: 'C' },
    { id: 7, name: 'ECE Eagles',    shortName: 'ECE', group: 'D' },
    { id: 8, name: 'Chem Blasters', shortName: 'CHB', group: 'D' },
  ],
  fixtures: [
    { id: 1, round: 'Quarter Final', date: '2025-01-10', home: 1, away: 2, homeScore: 3, awayScore: 1, played: true },
    { id: 2, round: 'Quarter Final', date: '2025-01-11', home: 3, away: 4, homeScore: 0, awayScore: 2, played: true },
    { id: 3, round: 'Quarter Final', date: '2025-01-12', home: 5, away: 6, homeScore: 1, awayScore: 1, played: true, penaltyWinner: 5 },
    { id: 4, round: 'Quarter Final', date: '2025-01-13', home: 7, away: 8, homeScore: 2, awayScore: 0, played: true },
    { id: 5, round: 'Semi Final',    date: '2025-01-20', home: 1, away: 4, homeScore: 2, awayScore: 3, played: true },
    { id: 6, round: 'Semi Final',    date: '2025-01-21', home: 5, away: 7, homeScore: 1, awayScore: 0, played: true },
    { id: 7, round: 'Final',         date: '2025-01-28', home: 4, away: 5, homeScore: 2, awayScore: 1, played: true },
  ],
  winner: 4,
  runnerUp: 5,
};

export default function TournamentDetailPage({ params }) {
  const { id } = use(params);
  const tournamentId = parseInt(id);
  const tournament = tournaments.find(t => t.id === tournamentId);
  const tournamentMatches = matches.filter(m => m.tournament === tournamentId);
  const tournamentTeams = teams.filter(t => tournament?.teams.includes(t.id));

  if (!tournament) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#080b08]">
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[#c9a84c] mb-4">Tournament Not Found</h1>
          <p className="text-[#e8e3d8]/40">The tournament you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const groupedMatches = {
    upcoming: tournamentMatches.filter(m => m.status === 'upcoming'),
    completed: tournamentMatches.filter(m => m.status === 'completed')
  };

  const getTeamById = (teamId) => teams.find(t => t.id === teamId);

  return (
    <main className="bg-[#080b08] text-[#e8e3d8] overflow-x-hidden min-h-screen">
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[600px] flex items-end overflow-hidden">
        {/* Football Pitch Background */}
        <FootballPitch />

        {/* Overlays */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#080b08] via-[#080b08]/60 to-transparent" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#080b08]/80 via-[#080b08]/25 to-transparent" />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_70%_40%,rgba(184,148,60,0.07)_0%,transparent_60%)]" />

        {/* Gold top rule */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[3px] z-20 origin-center"
          style={{ background: 'linear-gradient(90deg, transparent, #c9a84c 25%, #e8c97a 60%, transparent)' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Hero text */}
        <motion.div className="relative z-10 px-14 pb-20 max-w-3xl">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="block w-14 h-px bg-[#c9a84c] opacity-60" />
            <span className="text-[10px] tracking-[4px] uppercase text-[#c9a84c] font-medium">
              IIEST Football Championship
            </span>
            <span className="block w-14 h-px bg-[#c9a84c] opacity-60" />
          </motion.div>

          <motion.h1
            className="font-[family-name:var(--font-cormorant)] text-[clamp(48px,7vw,100px)] font-light leading-[0.9] tracking-[-1px] text-[#f0ebe0]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {tournament.name}
          </motion.h1>

          <motion.p
            className="mt-5 text-[15px] font-light leading-relaxed text-[#e8e3d8]/50 max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            {tournament.description}
          </motion.p>
        </motion.div>
      </section>

      {/* ── TOURNAMENT INFO ── */}
      <section className="relative px-8 md:px-14 py-16 bg-[#0c100c] border-b border-[#c9a84c]/15">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(201,168,76,0.04)_0%,transparent_65%)] pointer-events-none" />
        <motion.div
          className="max-w-6xl mx-auto relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-[#080b08] border border-[#c9a84c]/25 rounded-lg p-6">
              <Trophy className="text-[#c9a84c] mb-2" size={28} />
              <p className="text-2xl md:text-3xl font-bold text-[#f0ebe0]">{tournament.teams.length}</p>
              <p className="text-[11px] tracking-[2px] uppercase text-[#e8e3d8]/35 mt-2">Teams</p>
            </div>
            <div className="bg-[#080b08] border border-[#c9a84c]/25 rounded-lg p-6">
              <Users className="text-[#c9a84c] mb-2" size={28} />
              <p className="text-2xl md:text-3xl font-bold text-[#f0ebe0]">{tournamentMatches.length}</p>
              <p className="text-[11px] tracking-[2px] uppercase text-[#e8e3d8]/35 mt-2">Matches</p>
            </div>
            <div className="bg-[#080b08] border border-[#c9a84c]/25 rounded-lg p-6">
              <Target className="text-[#c9a84c] mb-2" size={28} />
              <p className="text-2xl md:text-3xl font-bold text-[#f0ebe0] capitalize">{tournament.format}</p>
              <p className="text-[11px] tracking-[2px] uppercase text-[#e8e3d8]/35 mt-2">Format</p>
            </div>
            <div className={`rounded-lg p-6 border ${tournament.status === 'ongoing' ? 'bg-emerald-500/20 border-emerald-500/40' :
                tournament.status === 'upcoming' ? 'bg-blue-500/20 border-blue-500/40' :
                  'bg-[#c9a84c]/20 border-[#c9a84c]/40'
              }`}>
              <div className={`text-2xl md:text-3xl font-bold mb-2 capitalize ${tournament.status === 'ongoing' ? 'text-emerald-400' :
                  tournament.status === 'upcoming' ? 'text-blue-400' :
                    'text-[#c9a84c]'
                }`}>
                {tournament.status}
              </div>
              <p className="text-[11px] tracking-[2px] uppercase text-[#e8e3d8]/35">Status</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 md:px-14 py-20">
        {/* Fixtures Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="block w-12 h-px bg-[#c9a84c]/50" />
            <span className="text-[10px] tracking-[4px] uppercase text-[#c9a84c] font-medium">Competition Details</span>
            <span className="block w-12 h-px bg-[#c9a84c]/50" />
          </div>

          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light mb-12 text-[#f0ebe0] tracking-tight">
            Fixtures & Standings
          </h2>

          {/* Knockout Bracket */}
          {tournament.format === 'knockout' && (
            <div className="mb-16">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#f0ebe0] mb-8 tracking-tight">Tournament Bracket</h3>
              <KnockoutBracket matches={tournamentMatches} teams={teams} />
            </div>
          )}

          {/* Upcoming Matches */}
          {groupedMatches.upcoming.length > 0 && (
            <div className="mb-16">
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#f0ebe0] mb-8 tracking-tight">Upcoming Matches</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupedMatches.upcoming.map((match, index) => (
                  <motion.div
                    key={`upcoming-match-${match.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <MatchCard
                      match={match}
                      homeTeam={getTeamById(match.homeTeamId)}
                      awayTeam={getTeamById(match.awayTeamId)}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Completed Matches */}
          {groupedMatches.completed.length > 0 && (
            <div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#f0ebe0] mb-8 tracking-tight">Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupedMatches.completed.map((match, index) => (
                  <motion.div
                    key={`completed-match-${match.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <MatchCard
                      match={match}
                      homeTeam={getTeamById(match.homeTeamId)}
                      awayTeam={getTeamById(match.awayTeamId)}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.section>

        {/* Points Table - For Leagues */}
        {tournament.format === 'league' && leagueStandings[tournament.id] && (
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-24 mt-24"
          >
            <div className="flex items-center gap-4 mb-12">
              <span className="block w-12 h-px bg-[#c9a84c]/50" />
              <span className="text-[10px] tracking-[4px] uppercase text-[#c9a84c] font-medium">League Table</span>
              <span className="block w-12 h-px bg-[#c9a84c]/50" />
            </div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light mb-12 text-[#f0ebe0] tracking-tight">Points Table</h2>
            <PointsTable standings={leagueStandings[tournament.id]} teams={teams} />
          </motion.section>
        )}

        {/* Teams */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="block w-12 h-px bg-[#c9a84c]/50" />
            <span className="text-[10px] tracking-[4px] uppercase text-[#c9a84c] font-medium">Teams</span>
            <span className="block w-12 h-px bg-[#c9a84c]/50" />
          </div>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light mb-12 text-[#f0ebe0] tracking-tight">Participating Teams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tournamentTeams.map((team, index) => (
              <motion.div
                key={`tournament-team-${team.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-[#0c100c] border border-[#c9a84c]/25 rounded-lg p-8 hover:border-[#c9a84c]/60 transition-all duration-300 overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(201,168,76,0.1)_0%,transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-5xl mb-3">{team.logo}</p>
                      <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[#f0ebe0]">{team.name}</h3>
                      <p className="text-[10px] tracking-[2px] uppercase text-[#c9a84c] mt-1">{team.shortName}</p>
                    </div>
                    <Trophy className="text-[#c9a84c] opacity-40 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                  </div>
                  <div className="text-[12px] tracking-[1px] text-[#e8e3d8]/50 group-hover:text-[#e8e3d8]/70 transition-colors duration-300">
                    <p className="mb-1"><span className="text-[#c9a84c]">Manager:</span> {team.manager}</p>
                    <p><span className="text-[#c9a84c]">Venue:</span> {team.venue}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Past Tournament Section - Full Width */}
      <section className="px-8 md:px-14 py-24 bg-gradient-to-b from-[#080b08] via-[#0c100c] to-[#080b08]">
        <div className="max-w-6xl mx-auto">
          <PastTournamentCard tournament={lastSeason} />
        </div>
      </section>
    </main>
  );
}
