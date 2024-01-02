"use client";

import React, { memo, useEffect, useState } from "react";
import Image from "next/image";
import { HiMiniPlus, HiMiniMinus } from "react-icons/hi2";
import { mySubStore, subscribeStore } from "@/store/store";
import { usePathname } from "next/navigation";

type Props = {
  name: string;
  image: string;
  subscribe?: boolean;
  color: string;
  fee?: number;
};

type ColorItemType = {
  [key: string]: string;
};

export default memo(function MenuItem({
  image,
  name,
  subscribe = false,
  color,
  fee,
}: Props) {
  const colorItem: ColorItemType = {
    red1: "bg-[#e03131]",
    red2: "bg-[#f03e3e]",
    blue1: "bg-[#364fc7]",
    blue2: "bg-[#142878]",
    gray1: "bg-[#ced4da]",
    green1: "bg-[#1ed760]",
    yellow1: "bg-[#FFE95F]",
  };

  const { modalOpen, setModalOpen, selectName } = subscribeStore();
  const { subList, subscribeDelete } = mySubStore();
  const pathname = usePathname();

  const [subYn, setSubYn] = useState(false);

  const actionBtn = (nm: string) => {
    let subcrbYn = false;
    subList.forEach((s) => {
      if (s.name === nm) subcrbYn = true;
    });
    if (subcrbYn || subscribe) {
      const deleteConfirm = confirm("내 구독 목록에서 삭제하시겠습니까?");
      if (deleteConfirm) subscribeDelete(nm);
    }
    if (!subcrbYn && pathname === "/subscribe") {
      selectName(nm);
      setModalOpen(modalOpen);
    }
  };

  useEffect(() => {
    const serviceNm = subList.filter((s) => s.name === name);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    serviceNm.length > 0 ? setSubYn(true) : setSubYn(false);
  }, [name, subList]);

  return (
    <div
      className={`flex justify-start items-center w-full rounded-full ${colorItem[color]} p-4 active:opacity-70 cursor-pointer`}
      onClick={() => actionBtn(name)}
    >
      <div className="flex justify-center items-center w-10 rounded-full mx-2  ">
        <Image src={image ?? ""} alt="" width={30} height={30} />
      </div>
      <div className="w-[calc(100%-104px)] text-white">{name}</div>
      <div className="mx-4 text-white dark:text-white">
        {fee?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </div>
      {subYn ? (
        <HiMiniMinus className="w-6 h-6 text-white dark:text-white" />
      ) : (
        <HiMiniPlus className="w-6 h-6 text-white dark:text-white" />
      )}
    </div>
  );
});
