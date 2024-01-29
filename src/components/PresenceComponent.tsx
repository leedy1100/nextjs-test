"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "./ui/AnimatedButton";

export default function PresenceComponent() {
  const [isVisible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(!isVisible);
  };

  return (
    <div className="flex flex-wrap gap-4">
      <button
        className="w-[300px] h-[56px] bg-[#63e6be] active:bg-[#12b886] rounded-full"
        onClick={handleClick}
      >
        {isVisible ? "Hide" : "Show"}
      </button>
      <AnimatePresence>
        {isVisible && (
          <AnimatedButton animationType="visibleWiggle" text="visibleWiggle" />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isVisible && (
          <motion.button
            className="w-full p-4 bg-blue-500 text-white flex items-center justify-center rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            This is a fade in/out component
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
