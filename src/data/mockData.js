export const tournaments = [
  {
    id: 1,
    name: 'Inter-College Invitational Cup',
    description: 'The most prestigious tournament featuring top colleges competing for glory',
    shortName: 'IC Cup',
    format: 'knockout',
    startDate: '2024-04-15',
    endDate: '2024-05-30',
    teams: [1, 2, 3, 4, 5, 6],
    status: 'ongoing'
  },
  {
    id: 2,
    name: 'Inter-Year Tournament',
    description: 'Annual battle between different batches and years',
    shortName: 'IY Cup',
    format: 'league',
    startDate: '2024-03-20',
    endDate: '2024-04-20',
    teams: [7, 8, 9, 10],
    status: 'ongoing'
  },
  {
    id: 3,
    name: 'Inter-Department League',
    description: 'Departmental rivalry showcasing departmental pride and performance',
    shortName: 'ID League',
    format: 'league',
    startDate: '2024-05-01',
    endDate: '2024-06-30',
    teams: [11, 12, 13, 14, 15],
    status: 'upcoming'
  },
  {
    id: 4,
    name: "Freshers' Knockout",
    description: 'An exciting tournament exclusively for first-year students',
    shortName: 'Freshers KO',
    format: 'knockout',
    startDate: '2024-03-10',
    endDate: '2024-04-10',
    teams: [16, 17, 18, 19, 20],
    status: 'completed'
  }
];

export const teams = [
  {
    id: 1,
    name: 'Phoenix Warriors',
    shortName: 'PHW',
    logo: null,
    color: '#FF6B35',
    manager: 'Rajesh Kumar',
    venue: 'Main Campus Field',
    players: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    matches: 8,
    wins: 6,
    draws: 1,
    losses: 1,
    points: 19
  },
  {
    id: 2,
    name: 'Thunder Strikers',
    shortName: 'TS',
    logo: null,
    color: '#004E89',
    manager: 'Priya Sharma',
    venue: 'North Field',
    players: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    matches: 8,
    wins: 5,
    draws: 2,
    losses: 1,
    points: 17
  },
  {
    id: 3,
    name: 'Dragon Force',
    shortName: 'DF',
    logo: null,
    color: '#F77F00',
    manager: 'Amit Patel',
    venue: 'South Field',
    players: [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
    matches: 8,
    wins: 4,
    draws: 3,
    losses: 1,
    points: 15
  },
  {
    id: 4,
    name: 'Ghost Riders',
    shortName: 'GR',
    logo: null,
    color: '#06A77D',
    manager: 'Neha Singh',
    venue: 'West Field',
    players: [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
    matches: 7,
    wins: 5,
    draws: 0,
    losses: 2,
    points: 15
  },
  {
    id: 5,
    name: 'Storm Breakers',
    shortName: 'SB',
    logo: null,
    color: '#D62828',
    manager: 'Vikram Singh',
    venue: 'East Field',
    players: [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55],
    matches: 7,
    wins: 3,
    draws: 2,
    losses: 2,
    points: 11
  },
  {
    id: 6,
    name: 'Titan United',
    shortName: 'TU',
    logo: null,
    color: '#2E8B57',
    manager: 'Arun Kumar',
    venue: 'Central Field',
    players: [56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66],
    matches: 7,
    wins: 2,
    draws: 3,
    losses: 2,
    points: 9
  },
  {
    id: 7,
    name: 'Silver Eagles',
    shortName: 'SE',
    logo: null,
    color: '#C0C0C0',
    manager: 'Deepak Verma',
    venue: 'Secondary Field',
    players: [67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77],
    matches: 6,
    wins: 4,
    draws: 1,
    losses: 1,
    points: 13
  },
  {
    id: 8,
    name: 'Golden Hawks',
    shortName: 'GH',
    logo: null,
    color: '#FFD700',
    manager: 'Sakshi Gupta',
    venue: 'Tertiary Field',
    players: [78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88],
    matches: 6,
    wins: 3,
    draws: 1,
    losses: 2,
    points: 10
  },
];

export const players = [
  { id: 1, name: 'Arjun Reddy', number: 10, position: 'Striker', teamId: 1, goals: 8, assists: 3, matches: 8 },
  { id: 2, name: 'Ravi Kumar', number: 7, position: 'Forward', teamId: 1, goals: 5, assists: 4, matches: 8 },
  { id: 3, name: 'Nikhil Sharma', number: 4, position: 'Midfielder', teamId: 1, goals: 2, assists: 6, matches: 8 },
  { id: 4, name: 'Rohan Singh', number: 5, position: 'Defender', teamId: 1, goals: 0, assists: 1, matches: 8 },
  { id: 5, name: 'Vikram Patel', number: 1, position: 'Goalkeeper', teamId: 1, goals: 0, assists: 0, matches: 8 },
  { id: 6, name: 'Sanjay Yadav', number: 6, position: 'Defender', teamId: 1, goals: 0, assists: 0, matches: 7 },
  { id: 7, name: 'Harsh Verma', number: 8, position: 'Midfielder', teamId: 1, goals: 1, assists: 2, matches: 8 },
  { id: 8, name: 'Ankit Malhar', number: 9, position: 'Forward', teamId: 1, goals: 3, assists: 2, matches: 8 },
  { id: 9, name: 'Kabir Khan', number: 11, position: 'Winger', teamId: 1, goals: 2, assists: 3, matches: 6 },
  { id: 10, name: 'Aditya Chopra', number: 3, position: 'Defender', teamId: 1, goals: 0, assists: 0, matches: 8 },
  { id: 11, name: 'Rohit Taneja', number: 2, position: 'Defender', teamId: 1, goals: 0, assists: 1, matches: 7 },

  { id: 12, name: 'Ayush Gupta', number: 10, position: 'Striker', teamId: 2, goals: 7, assists: 2, matches: 8 },
  { id: 13, name: 'Pranav Menon', number: 7, position: 'Forward', teamId: 2, goals: 6, assists: 3, matches: 8 },
  { id: 14, name: 'Siddharth Dey', number: 4, position: 'Midfielder', teamId: 2, goals: 1, assists: 5, matches: 8 },
  { id: 15, name: 'Karan Bhat', number: 5, position: 'Defender', teamId: 2, goals: 0, assists: 0, matches: 8 },
  { id: 16, name: 'Akshay Kapoor', number: 1, position: 'Goalkeeper', teamId: 2, goals: 0, assists: 0, matches: 8 },
  { id: 17, name: 'Vishal Rao', number: 6, position: 'Defender', teamId: 2, goals: 0, assists: 1, matches: 8 },
  { id: 18, name: 'Sameer Khan', number: 8, position: 'Midfielder', teamId: 2, goals: 2, assists: 3, matches: 8 },
  { id: 19, name: 'Naveen Sharma', number: 9, position: 'Forward', teamId: 2, goals: 2, assists: 1, matches: 7 },
  { id: 20, name: 'Aditya Bhatt', number: 11, position: 'Winger', teamId: 2, goals: 1, assists: 4, matches: 8 },
  { id: 21, name: 'Rahul Nair', number: 3, position: 'Defender', teamId: 2, goals: 0, assists: 0, matches: 8 },
  { id: 22, name: 'Jay Patel', number: 2, position: 'Defender', teamId: 2, goals: 1, assists: 0, matches: 8 },

  { id: 23, name: 'Varun Maharaj', number: 10, position: 'Striker', teamId: 3, goals: 6, assists: 2, matches: 8 },
  { id: 24, name: 'Mohit Sharma', number: 7, position: 'Forward', teamId: 3, goals: 4, assists: 3, matches: 8 },
  { id: 25, name: 'Rishik Garg', number: 4, position: 'Midfielder', teamId: 3, goals: 2, assists: 4, matches: 8 },
];

export const matches = [
  {
    id: 1,
    tournament: 1,
    homeTeamId: 1,
    awayTeamId: 2,
    homeScore: 2,
    awayScore: 1,
    date: '2024-04-15',
    time: '15:00',
    venue: 'Main Stadium',
    status: 'completed',
    stage: 'Quarterfinal'
  },
  {
    id: 2,
    tournament: 1,
    homeTeamId: 3,
    awayTeamId: 4,
    homeScore: 1,
    awayScore: 1,
    date: '2024-04-16',
    time: '16:00',
    venue: 'Secondary Field',
    status: 'completed',
    stage: 'Quarterfinal'
  },
  {
    id: 3,
    tournament: 2,
    homeTeamId: 7,
    awayTeamId: 8,
    homeScore: 3,
    awayScore: 2,
    date: '2024-04-18',
    time: '14:00',
    venue: 'Central Stadium',
    status: 'completed',
    stage: 'Match Day 6'
  },
  {
    id: 4,
    tournament: 1,
    homeTeamId: 1,
    awayTeamId: 3,
    homeScore: null,
    awayScore: null,
    date: '2024-04-22',
    time: '15:30',
    venue: 'Main Stadium',
    status: 'upcoming',
    stage: 'Semifinal'
  },
  {
    id: 5,
    tournament: 2,
    homeTeamId: 5,
    awayTeamId: 6,
    homeScore: null,
    awayScore: null,
    date: '2024-04-23',
    time: '14:00',
    venue: 'Central Stadium',
    status: 'upcoming',
    stage: 'Match Day 7'
  },
  {
    id: 6,
    tournament: 2,
    homeTeamId: 7,
    awayTeamId: 9,
    homeScore: null,
    awayScore: null,
    date: '2024-04-28',
    time: '15:00',
    venue: 'North Field',
    status: 'upcoming',
    stage: 'Match Day 8'
  },
  {
    id: 7,
    tournament: 1,
    homeTeamId: 2,
    awayTeamId: 4,
    homeScore: null,
    awayScore: null,
    date: '2024-04-23',
    time: '16:00',
    venue: 'Main Stadium',
    status: 'upcoming',
    stage: 'Semifinal'
  }
];

export const leagueStandings = {
  2: [
    { position: 1, teamId: 1, wins: 6, draws: 1, losses: 1, points: 19, goalsFor: 18, goalsAgainst: 6 },
    { position: 2, teamId: 2, wins: 5, draws: 2, losses: 1, points: 17, goalsFor: 16, goalsAgainst: 8 },
    { position: 3, teamId: 3, wins: 4, draws: 3, losses: 1, points: 15, goalsFor: 14, goalsAgainst: 9 },
    { position: 4, teamId: 4, wins: 2, draws: 3, losses: 2, points: 9, goalsFor: 8, goalsAgainst: 12 }
  ]
};

export const galleryImages = [
  { id: 1, title: 'Opening Ceremony', image: null, description: 'Inaugural event with team performances' },
  { id: 2, title: 'IC Cup Final', image: null, description: 'Intense final match moments' },
  { id: 3, title: 'Goal Celebration', image: null, description: 'Winning goal celebration' },
  { id: 4, title: 'Team Lineup', image: null, description: 'Pre-match team formation' },
  { id: 5, title: 'Victory Moment', image: null, description: 'Championship winning moment' },
  { id: 6, title: 'Fan Support', image: null, description: 'Amazing crowd energy' },
  { id: 7, title: 'Award Ceremony', image: null, description: 'Medal distribution event' },
  { id: 8, title: 'Stadium View', image: null, description: 'Packed stadium atmosphere' }
];
