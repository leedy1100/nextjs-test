"use client";

import React, { useEffect, useMemo } from "react";
import Image from "next/image";
import { HiMiniPlus, HiMiniMinus } from "react-icons/hi2";
import { mySubStore } from "@/store/subscribeStore";
import { motion } from "framer-motion";

type Props = {
  name: string;
  image: string;
  subscribe?: boolean;
  color: string;
  fee?: number;
  click?: () => void;
  isDisable?: boolean;
};

type ColorItemType = {
  [key: string]: string;
};

const colorItem: ColorItemType = {
  red1: "bg-[#e03131]",
  red2: "bg-[#f03e3e]",
  blue1: "bg-[#364fc7]",
  blue2: "bg-[#142878]",
  gray1: "bg-[#ced4da]",
  green1: "bg-[#1ed760]",
  yellow1: "bg-[#FFE95F]",
};

export default function MenuItem({
  image,
  name,
  subscribe = false,
  color,
  fee,
  click,
  isDisable,
}: Props) {
  const { subList } = mySubStore();

  const isSub = useMemo(() => {
    const serviceNm = subList.filter((s) => s.name === name);
    return serviceNm.length > 0;
  }, [name, subList]);

  return (
    <motion.button
      className={`flex justify-center items-center w-[150px] p-2 md:w-full md:min-w-[292px] md:p-4 rounded-xl ${colorItem[color]} cursor-pointer`}
      whileTap={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      onClick={click}
      disabled={isDisable ?? isSub}
    >
      <div className="flex justify-center items-center w-10 rounded-full mx-2  ">
        <Image src={image ?? ""} alt="" width={30} height={30} />
      </div>
      <div className="w-[calc(100%-104px)] text-white hidden md:block">
        {name}
      </div>
      <div className="mx-4 text-white dark:text-white">
        {fee?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </div>
      {isSub ? (
        <HiMiniMinus className="w-6 h-6 text-white dark:text-white" />
      ) : (
        <HiMiniPlus className="w-6 h-6 text-white dark:text-white" />
      )}
    </motion.button>
  );
}
