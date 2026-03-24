'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSportsStore } from '@/store/store';
import { X } from 'lucide-react';

export default function AddTeamForm({ onClose, onSubmit }) {
  const store = useSportsStore();
  const [formData, setFormData] = useState({
    name: '',
    shortName: '',
    logo: null,
    color: '#FF6B35',
    manager: '',
    venue: '',
    players: [],
    matches: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    points: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    store.addTeam(formData);
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
          <h2 className="text-2xl font-bold text-gold">Add Team</h2>
          <button type="button" onClick={onClose} className="text-gold hover:text-white">
            <X />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gold mb-2">Team Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-black bg-opacity-30 border border-gold border-opacity-50 text-white"
              placeholder="Team Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gold mb-2">Short Name</label>
            <input
              type="text"
              name="shortName"
              value={formData.shortName}
              onChange={handleChange}
              maxLength="4"
              className="w-full px-3 py-2 rounded bg-black bg-opacity-30 border border-gold border-opacity-50 text-white"
              placeholder="e.g., PHW"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gold mb-2">Team Logo (Emoji)</label>
            <input
              type="text"
              name="logo"
              value={formData.logo}
              onChange={handleChange}
              maxLength="2"
              className="w-full px-3 py-2 rounded bg-black bg-opacity-30 border border-gold border-opacity-50 text-white text-2xl"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gold mb-2">Manager Name</label>
            <input
              type="text"
              name="manager"
              value={formData.manager}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-black bg-opacity-30 border border-gold border-opacity-50 text-white"
              placeholder="Manager Name"
              required
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
              placeholder="Team Venue"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gold mb-2">Team Color</label>
            <input
              type="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="w-full h-10 rounded border border-gold border-opacity-50 cursor-pointer"
            />
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button type="submit" className="btn-primary flex-1">
            Add Team
          </button>
          <button type="button" onClick={onClose} className="btn-secondary flex-1">
            Cancel
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
}
