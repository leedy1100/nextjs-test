"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-[72px] md:top-[96px] left-0 right-0 w-full h-2 bg-blue-500 origin-[0%]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
