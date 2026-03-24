import HeroSection from '@/components/home/HeroSection';
import TournamentHighlights from '@/components/home/TournamentHighlights';
import UpcomingMatches from '@/components/home/UpcomingMatches';
import LatestResults from '@/components/home/LatestResults';
import { tournaments, matches, teams } from '@/data/mockData';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TournamentHighlights tournaments={tournaments} />
      <UpcomingMatches matches={matches} teams={teams} />
      <LatestResults matches={matches} teams={teams} />
    </>
  );
}
