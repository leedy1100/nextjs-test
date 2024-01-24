"use client";

import React from "react";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.3,
    },
  },
};

export default function CircleButton() {
  return (
    <motion.button
      className="w-12 h-12 bg-blue-500 rounded-full text-white flex items-center justify-center"
      variants={buttonVariants}
      whileHover="hover"
    >
      Click
    </motion.button>
  );
}
