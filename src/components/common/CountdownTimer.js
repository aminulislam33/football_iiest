'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { getCountdownTime } from '@/lib/utils';

export default function CountdownTimer({ dateString, timeString }) {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const updateCountdown = () => {
      const time = getCountdownTime(dateString, timeString);
      if (time.days === 0 && time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
        setIsExpired(true);
      }
      setCountdown(time);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [dateString, timeString]);

  if (isExpired) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 bg-green-500 bg-opacity-20 text-green-400 rounded-lg font-semibold" suppressHydrationWarning>
        <Clock size={16} />
        <span>Match In Progress!</span>
      </div>
    );
  }

  if (!isMounted) {
    return (
      <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-field-dark to-field-green rounded-lg border border-gold border-opacity-30">
        <Clock className="text-gold" size={20} />
        <div className="flex gap-4 font-mono font-bold">
          <div className="text-center">
            <p className="text-xl md:text-2xl text-gold">00</p>
            <p className="text-xs text-gray-400">Hrs</p>
          </div>
          <div className="text-center">
            <p className="text-xl md:text-2xl text-gold">00</p>
            <p className="text-xs text-gray-400">Min</p>
          </div>
          <div className="text-center">
            <p className="text-xl md:text-2xl text-gold">00</p>
            <p className="text-xs text-gray-400">Sec</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-field-dark to-field-green rounded-lg border border-gold border-opacity-30"
      suppressHydrationWarning
    >
      <Clock className="text-gold" size={20} />
      <div className="flex gap-4 font-mono font-bold" suppressHydrationWarning>
        {countdown.days > 0 && (
          <motion.div
            key="days"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center"
          >
            <p className="text-xl md:text-2xl text-gold">{String(countdown.days).padStart(2, '0')}</p>
            <p className="text-xs text-gray-400">Days</p>
          </motion.div>
        )}
        <motion.div
          key="hours"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl text-gold">{String(countdown.hours).padStart(2, '0')}</p>
          <p className="text-xs text-gray-400">Hrs</p>
        </motion.div>
        <motion.div
          key="minutes"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl text-gold">{String(countdown.minutes).padStart(2, '0')}</p>
          <p className="text-xs text-gray-400">Min</p>
        </motion.div>
        <motion.div
          key="seconds"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl text-gold">{String(countdown.seconds).padStart(2, '0')}</p>
          <p className="text-xs text-gray-400">Sec</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
