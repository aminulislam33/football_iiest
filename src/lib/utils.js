export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export const formatTime = (timeString) => {
  const [hours, minutes] = timeString.split(':');
  return `${String(parseInt(hours)).padStart(2, '0')}:${String(parseInt(minutes)).padStart(2, '0')}`;
};

export const getTeamById = (teamId, teams) => {
  return teams.find(team => team.id === teamId);
};

export const getTournamentById = (tournamentId, tournaments) => {
  return tournaments.find(tournament => tournament.id === tournamentId);
};

export const getPlayersByTeam = (teamId, players) => {
  return players.filter(player => player.teamId === teamId);
};

export const getMatchesByTournament = (tournamentId, matches) => {
  return matches.filter(match => match.tournament === tournamentId);
};

export const getTournamentMatches = (tournamentId, matches) => {
  return matches.filter(match => match.tournament === tournamentId);
};

export const getUpcomingMatches = (matches, limit = null) => {
  const upcoming = matches
    .filter(match => match.status === 'upcoming')
    .sort((a, b) => new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time));
  
  return limit ? upcoming.slice(0, limit) : upcoming;
};

export const getLatestResults = (matches, limit = null) => {
  const completed = matches
    .filter(match => match.status === 'completed')
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  
  return limit ? completed.slice(0, limit) : completed;
};

export const getTopScorers = (players, limit = 5) => {
  return players
    .sort((a, b) => b.goals - a.goals)
    .slice(0, limit);
};

export const getTeamStats = (teamId, matches, teams) => {
  const team = getTeamById(teamId, teams);
  return team ? { ...team } : null;
};

export const isMatchLive = (match) => {
  if (match.status !== 'upcoming') return false;
  
  const matchDateTime = new Date(match.date + ' ' + match.time);
  const now = new Date();
  const diffInMinutes = (matchDateTime - now) / (1000 * 60);
  
  return diffInMinutes <= 15 && diffInMinutes >= 0;
};

export const getCountdownTime = (dateString, timeString) => {
  const matchDateTime = new Date(dateString + ' ' + timeString);
  const now = new Date();
  const diff = matchDateTime - now;

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
