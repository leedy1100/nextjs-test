"use client";
import React, { memo } from "react";
import Image from "next/image";
import { HiMiniPlus, HiMiniMinus } from "react-icons/hi2";
import { mySubStore } from "@/store/store";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  name: string;
  image?: string;
  subscribe?: boolean;
  color: string;
  fee?: number;
};

type colorItemType = {
  [key: string]: string;
};

export default memo(function MenuItem({
  image,
  name,
  subscribe,
  color,
  fee,
}: Props) {
  const colorItem: colorItemType = {
    red1: "bg-[#e03131]",
    red2: "bg-[#f03e3e]",
    blue1: "bg-[#364fc7]",
  };
  const { subList, subscribeAdd, subscribeDelete } = mySubStore();
  const pathname = usePathname();
  const router = useRouter();

  const subScribeBtn = () => {
    let subYn = false;
    subList.forEach((s) => {
      if (s.name === name) subYn = true;
    });

    if (subYn || subscribe) {
      return <HiMiniMinus className="w-6 h-6 text-white dark:text-white" />;
    } else {
      return <HiMiniPlus className="w-6 h-6 text-white dark:text-white" />;
    }
  };

  const actionBtn = (name: string) => {
    let subYn = false;
    subList.forEach((s) => {
      if (s.name === name) subYn = true;
    });
    if (subYn || subscribe) {
      const deleteConfirm = confirm("내 구독 목록에서 삭제하시겠습니까?");
      if (deleteConfirm) subscribeDelete(name);
    }
    if (!subYn && pathname === "/subscribe") {
      router.push(`/subscribe/my/${name}`);
    }
  };

  return (
    <div
      className={`flex justify-start items-center w-full rounded-full ${colorItem[color]} p-4 active:opacity-70 cursor-pointer`}
      onClick={() => actionBtn(name)}
    >
      <div className="w-20 pl-2 ">
        <Image src={image ?? ""} alt="" width={30} height={30} />
      </div>
      <div className="w-[calc(100%-104px)] text-white">{name}</div>
      <div className="mx-4 text-white dark:text-white">
        {fee?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </div>
      {subScribeBtn()}
    </div>
  );
});
