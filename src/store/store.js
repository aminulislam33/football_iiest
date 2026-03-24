'use client';

import { create } from 'zustand';
import { tournaments, teams, matches, players, leagueStandings, galleryImages } from '@/data/mockData';

export const useSportsStore = create((set, get) => ({
  // Data
  tournaments,
  teams,
  matches,
  players,
  leagueStandings,
  galleryImages,

  // UI State
  isDarkMode: true,
  searchQuery: '',

  // Admin State
  editingMatch: null,
  editingTeam: null,
  editingPlayer: null,

  // Actions
  setDarkMode: (isDark) => set({ isDarkMode: isDark }),
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),

  setSearchQuery: (query) => set({ searchQuery: query }),

  // Match management
  addMatch: (match) =>
    set((state) => ({
      matches: [...state.matches, { ...match, id: state.matches.length + 1 }],
    })),

  updateMatch: (id, updatedMatch) =>
    set((state) => ({
      matches: state.matches.map((match) =>
        match.id === id ? { ...match, ...updatedMatch } : match
      ),
    })),

  deleteMatch: (id) =>
    set((state) => ({
      matches: state.matches.filter((match) => match.id !== id),
    })),

  // Team management
  addTeam: (team) =>
    set((state) => ({
      teams: [...state.teams, { ...team, id: state.teams.length + 1 }],
    })),

  updateTeam: (id, updatedTeam) =>
    set((state) => ({
      teams: state.teams.map((team) =>
        team.id === id ? { ...team, ...updatedTeam } : team
      ),
    })),

  deleteTeam: (id) =>
    set((state) => ({
      teams: state.teams.filter((team) => team.id !== id),
    })),

  // Player management
  addPlayer: (player) =>
    set((state) => ({
      players: [...state.players, { ...player, id: state.players.length + 1 }],
    })),

  updatePlayer: (id, updatedPlayer) =>
    set((state) => ({
      players: state.players.map((player) =>
        player.id === id ? { ...player, ...updatedPlayer } : player
      ),
    })),

  deletePlayer: (id) =>
    set((state) => ({
      players: state.players.filter((player) => player.id !== id),
    })),

  // Set editing state
  setEditingMatch: (match) => set({ editingMatch: match }),
  setEditingTeam: (team) => set({ editingTeam: team }),
  setEditingPlayer: (player) => set({ editingPlayer: player }),

  clearEditing: () =>
    set({
      editingMatch: null,
      editingTeam: null,
      editingPlayer: null,
    }),

  // Getters
  getTournamentById: (id) => get().tournaments.find((t) => t.id === id),
  getTeamById: (id) => get().teams.find((t) => t.id === id),
  getPlayerById: (id) => get().players.find((p) => p.id === id),
  getMatchById: (id) => get().matches.find((m) => m.id === id),
}));
