"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {
  isOn: boolean;
  toggleNotifications: () => void;
};

export default function SwitchButton({ isOn, toggleNotifications }: Props) {
  return (
    <div
      className={`flex justify-start items-center w-16 h-10 rounded-full p-1 cursor-pointer ${
        isOn ? "justify-end bg-[#c0eb75]" : "bg-neutral-300"
      }`}
      onClick={toggleNotifications}
    >
      <motion.div
        className="w-8 h-8 bg-white rounded-full"
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
      />
    </div>
  );
}
