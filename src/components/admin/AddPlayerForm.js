'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSportsStore } from '@/store/store';
import { X } from 'lucide-react';

export default function AddPlayerForm({ onClose, onSubmit }) {
  const store = useSportsStore();
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    position: 'Midfielder',
    teamId: store.teams[0]?.id || 1,
    goals: 0,
    assists: 0,
    matches: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    store.addPlayer({
      ...formData,
      number: parseInt(formData.number),
      goals: parseInt(formData.goals),
      assists: parseInt(formData.assists),
      matches: parseInt(formData.matches),
      teamId: parseInt(formData.teamId)
    });
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
          <h2 className="text-2xl font-bold text-gold">Add Player</h2>
          <button type="button" onClick={onClose} className="text-gold hover:text-white">
            <X />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gold mb-2">Player Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-black bg-opacity-30 border border-gold border-opacity-50 text-white"
              placeholder="Player Name"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gold mb-2">Jersey Number</label>
              <input
                type="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-black bg-opacity-30 border border-gold border-opacity-50 text-white"
                min="1"
                max="99"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gold mb-2">Position</label>
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-black bg-opacity-30 border border-gold border-opacity-50 text-white"
              >
                <option>Goalkeeper</option>
                <option>Defender</option>
                <option>Midfielder</option>
                <option>Forward</option>
                <option>Striker</option>
                <option>Winger</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gold mb-2">Team</label>
            <select
              name="teamId"
              value={formData.teamId}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-black bg-opacity-30 border border-gold border-opacity-50 text-white"
            >
              {store.teams.map(team => (
                <option key={team.id} value={team.id}>{team.name}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-sm font-semibold text-gold mb-2">Goals</label>
              <input
                type="number"
                name="goals"
                value={formData.goals}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-black bg-opacity-30 border border-gold border-opacity-50 text-white"
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gold mb-2">Assists</label>
              <input
                type="number"
                name="assists"
                value={formData.assists}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-black bg-opacity-30 border border-gold border-opacity-50 text-white"
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gold mb-2">Matches</label>
              <input
                type="number"
                name="matches"
                value={formData.matches}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-black bg-opacity-30 border border-gold border-opacity-50 text-white"
                min="0"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button type="submit" className="btn-primary flex-1">
            Add Player
          </button>
          <button type="button" onClick={onClose} className="btn-secondary flex-1">
            Cancel
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
}
