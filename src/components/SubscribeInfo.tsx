"use client";

import { subscribeStore } from "@/store/subscribeStore";
import React, { useState } from "react";
import { HiMiniXCircle } from "react-icons/hi2";

type Props = {
  color: string;
  name: string;
  fee?: number;
  click: () => void;
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

export default function SubscribeInfo({ color, name, fee = 0, click }: Props) {
  const { modalOpen, setModalOpen } = subscribeStore();
  const [inputFee, setInputFee] = useState<number>(fee);

  const onChangeFee = (f: string) => {
    const regExp = /^[0-9]*$/;
    if (!regExp.test(f.split(",").join(""))) {
      return;
    }
    setInputFee(Number(f.split(",").join("")));
  };

  return (
    <div className={`w-full h-full text-white ${colorItem[color]}`}>
      <div className="flex justify-end">
        <button className="rounded-full p-2" onClick={click}>
          <HiMiniXCircle className="w-8 h-8" />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <p>
          <span className="font-bold text-lg">{name}</span> 구독료
        </p>
        <div className="relative flex justify-end items-center">
          <input
            className="flex justify-start items-center p-2 w-full outline-none border-2 border-slate-300 rounded-full text-black"
            placeholder="0"
            type="tel"
            onChange={(e) => onChangeFee(e.target.value)}
            value={inputFee?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          />
          <p className="absolute text-center text-sm font-bold mr-4 text-black">
            KRW
          </p>
        </div>
        <div className="p-4 text-center">
          <button
            className="text-xs font-bold text-slate-400 underline underline-offset-2 hover:text-slate-700"
            onClick={() => {
              setModalOpen(modalOpen);
            }}
          >
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
}
