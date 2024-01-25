"use client";

import { motion } from "framer-motion";

type Props = {
  animationType:
    | "bounce"
    | "shiver"
    | "float"
    | "spring"
    | "pulse"
    | "wiggle"
    | "visibleWiggle";
  shape?: "circle" | "square";
  text?: string;
};

// 애니메이션 효과
const animations = {
  bounce: {
    whileTap: { y: ["0px", "10px", "0px"] },
    transition: { duration: 0.3 },
  },
  shiver: {
    whileTap: { rotate: [0, 3, -3, 3, -3, 0] },
    transition: { duration: 0.2 },
  },
  float: {
    whileTap: { y: ["0px", "-10px", "0px"] },
    transition: { duration: 0.3 },
    onHoverStart: () => {
      console.log("Hover started");
    },
    onHoverEnd: () => {
      console.log("Hover ended");
    },
  },
  spring: {
    whileTap: { scale: 0.9 },
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
  pulse: {
    whileTap: { scale: 1.1 },
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
  wiggle: {
    whileTap: { x: [0, 5, -5, 5, -5, 0] },
    transition: { duration: 0.2 },
  },
  visibleWiggle: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { x: [0, 5, -5, 5, -5, 0] },
    transition: { duration: 0.2 },
  },
};

export default function AnimatedButton({
  animationType,
  shape = "square",
  text = "AnimatedButton",
}: Props) {
  return (
    <motion.button
      className={`w-[150px] p-4 bg-blue-500 text-white flex items-center justify-center ${
        shape === "circle" ? "rounded-full" : "rounded-xl"
      }`}
      {...animations[animationType]}
    >
      {text}
    </motion.button>
  );
}
