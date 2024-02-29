'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function NotificationButton() {
  const notify = () => {
    if (!('Notification' in window)) {
      alert('This browser does not support system notifications');
    } else if (Notification.permission === 'granted') {
      const notification = new Notification('web notification test!');
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(function (permission) {
        if (permission === 'granted') {
          const notification = new Notification('web notification test!');
        }
      });
    }
  };

  return (
    <div>
      <motion.button
        className="text-xs rounded-full p-2 bg-neutral-400 text-white"
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        onClick={notify}
      >
        Notify me!
      </motion.button>
    </div>
  );
}
