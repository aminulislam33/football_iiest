'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSportsStore } from '@/store/store';
import { X } from 'lucide-react';

export default function AddMatchForm({ onClose, onSubmit }) {
  const store = useSportsStore();
  const [formData, setFormData] = useState({
    tournament: 1,
    homeTeamId: 1,
    awayTeamId: 2,
    homeScore: '',
    awayScore: '',
    date: '',
    time: '15:00',
    venue: '',
    status: 'upcoming',
    stage: 'Match Day 1'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const match = {
      ...formData,
      homeScore: formData.status === 'completed' ? parseInt(formData.homeScore) : null,
      awayScore: formData.status === 'completed' ? parseInt(formData.awayScore) : null,
    };
    store.addMatch(match);
    onSubmit?.();
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <motion.form
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-field-dark to-field-green rounded-xl border border-gold border-opacity-50 p-8 max-w-md w-full max-h-screen overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gold">Add Match</h2>
          <button type="button" onClick={onClose} className="text-gold hover:text-white">
            <X />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gold mb-2">Tournament</label>
            <select
              name="tournament"
              value={formData.tournament}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-black bg-opacity-30 border border-gold border-opacity-50 text-white"
            >
              {store.tournaments.map(t => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gold mb-2">Home Team</label>
              <select
                name="homeTeamId"
                value={formData.homeTeamId}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-black bg-opacity-30 border border-gold border-opacity-50 text-white"
              >
                {store.teams.map(t => (
                  <option key={t.id} value={t.id}>{t.shortName}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gold mb-2">Away Team</label>
              <select
                name="awayTeamId"
                value={formData.awayTeamId}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-black bg-opacity-30 border border-gold border-opacity-50 text-white"
              >
                {store.teams.map(t => (
                  <option key={t.id} value={t.id}>{t.shortName}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gold mb-2">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-black bg-opacity-30 border border-gold border-opacity-50 text-white"
            >
              <option value="upcoming">Upcoming</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {formData.status === 'completed' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gold mb-2">Home Score</label>
                <input
                  type="number"
                  name="homeScore"
                  value={formData.homeScore}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded bg-black bg-opacity-30 border border-gold border-opacity-50 text-white"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gold mb-2">Away Score</label>
                <input
                  type="number"
                  name="awayScore"
                  value={formData.awayScore}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded bg-black bg-opacity-30 border border-gold border-opacity-50 text-white"
                  min="0"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-gold mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-black bg-opacity-30 border border-gold border-opacity-50 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gold mb-2">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-black bg-opacity-30 border border-gold border-opacity-50 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gold mb-2">Venue</label>
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-black bg-opacity-30 border border-gold border-opacity-50 text-white"
              placeholder="Stadium Name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gold mb-2">Stage</label>
            <input
              type="text"
              name="stage"
              value={formData.stage}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-black bg-opacity-30 border border-gold border-opacity-50 text-white"
              placeholder="e.g., Quarterfinal"
            />
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button type="submit" className="btn-primary flex-1">
            Add Match
          </button>
          <button type="button" onClick={onClose} className="btn-secondary flex-1">
            Cancel
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
}
