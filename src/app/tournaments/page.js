import { tournaments } from '@/data/mockData';
import TournamentsHero from './TournamentsHero';

export const metadata = {
  title: 'Tournaments - IIEST Football',
  description: 'Explore all college football tournaments at IIEST',
};

const statusStyles = {
  ongoing: {
    label: 'Ongoing',
    badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
  },
  upcoming: {
    label: 'Upcoming',
    badge: 'bg-blue-500/15 text-blue-300 border-blue-500/30'
  },
  completed: {
    label: 'Completed',
    badge: 'bg-white/10 text-gray-200 border-white/20'
  }
};

export default function TournamentsPage() {
  return (
    <>
      <TournamentsHero />

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="mt-4 text-base text-[#e8e3d8]/60 max-w-2xl mx-auto">
              A complete rundown of every competition hosted by IIEST Football, including their status,
              format, and timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tournaments.map((tournament) => {
              const status = statusStyles[tournament.status] ?? statusStyles.upcoming;
              return (
                <article
                  key={tournament.id}
                  className="relative border border-[#e8e3d8]/10 bg-white/[0.025] p-8 flex flex-col gap-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] tracking-[3px] uppercase text-[#c9a84c]">
                      {tournament.shortName}
                    </span>
                    <span className={`px-3 py-1 text-[10px] tracking-[2px] uppercase font-medium border ${status.badge}`}>
                      {status.label}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-light text-[#f0ebe0] mb-2">
                      {tournament.name}
                    </h3>
                    <p className="text-sm text-[#e8e3d8]/65 leading-relaxed">
                      {tournament.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm text-[#e8e3d8]/70">
                    <div>
                      <p className="text-xs uppercase tracking-[2px] text-[#c9a84c]/80 mb-1">Format</p>
                      <p className="text-base text-[#f0ebe0] capitalize">{tournament.format}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[2px] text-[#c9a84c]/80 mb-1">Teams</p>
                      <p className="text-base text-[#f0ebe0]">{tournament.teams.length}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[2px] text-[#c9a84c]/80 mb-1">Start</p>
                      <p className="text-base text-[#f0ebe0]">{tournament.startDate}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[2px] text-[#c9a84c]/80 mb-1">End</p>
                      <p className="text-base text-[#f0ebe0]">{tournament.endDate}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
