import { tournaments, matches, teams } from '@/data/mockData';
import TournamentHighlights from '@/components/home/TournamentHighlights';
import { motion } from 'framer-motion';

export const metadata = {
  title: 'Tournaments - IIEST Football',
  description: 'Explore all college football tournaments at IIEST',
};

export default function TournamentsPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">All Tournaments</h1>
          <p className="text-gray-400 text-lg">Join the most exciting college football events of the season</p>
        </div>

        {/* Tournaments */}
        <TournamentHighlights tournaments={tournaments} />

        {/* Additional Info */}
        <div className="mt-20 bg-gradient-to-r from-field-dark via-field-green to-field-dark rounded-xl border border-gold border-opacity-30 p-8 text-center">
          <h2 className="text-2xl font-bold text-gold mb-4">Tournament Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-white">{tournaments.length}</p>
              <p className="text-gray-400">Total Tournaments</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">{new Set(matches.map(m => m.tournament)).size}</p>
              <p className="text-gray-400">Active Tournaments</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">{matches.length}</p>
              <p className="text-gray-400">Scheduled Matches</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
