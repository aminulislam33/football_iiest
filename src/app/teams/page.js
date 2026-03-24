import { teams } from '@/data/mockData';
import TeamCard from '@/components/common/TeamCard';

export const metadata = {
  title: 'Teams - IIEST Football',
  description: 'Explore all college football teams at IIEST',
};

export default function TeamsPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">All Teams</h1>
          <p className="text-gray-400 text-lg">Meet the competing teams in IIEST Football</p>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teams.map((team, index) => (
            <div key={`team-card-${team.id}`} style={{ animationDelay: `${index * 0.1}s` }} className="animate-fadeIn">
              <TeamCard team={team} />
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="bg-gradient-to-r from-field-dark via-field-green to-field-dark rounded-xl border border-gold border-opacity-30 p-8">
          <h2 className="text-2xl font-bold text-gold mb-6">How to Read Team Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div>
              <p className="text-white font-semibold mb-2">Points</p>
              <p className="text-gray-400">Teams earn 3 points for a win, 1 for a draw, 0 for a loss</p>
            </div>
            <div>
              <p className="text-white font-semibold mb-2">Record</p>
              <p className="text-gray-400">Displayed as Matches (Wins-Draws-Losses)</p>
            </div>
            <div>
              <p className="text-white font-semibold mb-2">Manager</p>
              <p className="text-gray-400">Lead coach managing team strategy and players</p>
            </div>
            <div>
              <p className="text-white font-semibold mb-2">Venue</p>
              <p className="text-gray-400">Primary home ground for matches</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
