"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-[72px] md:top-[96px] left-0 right-0 w-full h-1 bg-black dark:bg-white origin-[0%]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
