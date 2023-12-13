"use client";
import React from "react";
import Image from "next/image";
import { HiMiniPlus, HiMiniMinus } from "react-icons/hi2";
import { mySubStore } from "@/store/store";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  name: string;
  image?: string;
  subscribe?: boolean;
  color: string;
  action: (name: string) => void;
};

type colorItemType = {
  [key: string]: string;
};

export default function MenuItem({
  image,
  name,
  subscribe,
  color,
  action,
}: Props) {
  const colorItem: colorItemType = {
    red1: "bg-[#e03131]",
    red2: "bg-[#f03e3e]",
    blue1: "bg-[#364fc7]",
  };
  const { subList, subscribeDelete } = mySubStore();
  const pathname = usePathname();
  const router = useRouter();

  const goSubscribeInfo = (name: string) => {
    router.push(`/subscribe/my/${name}`);
  };

  const subScribeBtn = () => {
    let subYn = false;
    subList.forEach((s) => {
      if (s.name === name) subYn = true;
    });

    if (subYn && pathname === "/subscribe") {
      return (
        <button
          className="rounded-full active:shadow"
          onClick={() => subscribeDelete(name)}
        >
          <HiMiniMinus className="w-6 h-6" />
        </button>
      );
    }
    if (!subYn && pathname === "/subscribe") {
      return (
        <button
          className="rounded-full active:shadow"
          onClick={() => goSubscribeInfo(name)}
        >
          <HiMiniPlus className="w-6 h-6" />
        </button>
      );
    }
    return (
      <button
        className="rounded-full active:shadow"
        onClick={() => action(name)}
      >
        <HiMiniMinus className="w-6 h-6" />
      </button>
    );
  };

  return (
    <div
      className={`flex justify-start items-center w-full rounded-full ${colorItem[color]} p-4`}
    >
      <div className="w-20 pl-2 ">
        <Image src={image ?? ""} alt="" width={30} height={30} />
      </div>
      <div className="w-[calc(100%-104px)] text-white">{name}</div>
      {subScribeBtn()}
    </div>
  );
}
