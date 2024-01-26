"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  isVisible: boolean;
  children: React.ReactNode;
};

export default function PageWrapper({ isVisible, children }: Props) {
  return (
    <AnimatePresence exitBeforeEnter>
      {isVisible && (
        <motion.div
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
            pageExit: {
              opacity: 0,
            },
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
