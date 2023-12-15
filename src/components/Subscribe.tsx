"use client";
import React, { useEffect, useState } from "react";
import MenuItem from "./ui/MenuItem";
import { subscribeStore } from "@/store/store";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import classNames from "classnames";

export default function Subscribe() {
  const { subList } = subscribeStore();
  const [subItems, setSubItems] = useState<SubscribeMenuInfo[]>();
  const [search, setSearch] = useState<string>("");

  const itemsFilter = (sch: string) => {
    setSearch(sch);
    if (sch) {
      setSubItems(
        subList.filter((s) => s.name.toLowerCase().includes(sch.toLowerCase()))
      );
    } else {
      setSubItems([...subList]);
    }
  };

  useEffect(() => {
    setSubItems(subList);
  }, [subList]);
  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <HiMiniMagnifyingGlass className="absolute w-6 h-6 m-2" />
            <input
              className={classNames({
                "flex justify-start items-center rounded-full": true,
                "py-2 px-9": true,
                "outline-none border-2 border-neutral-500 text-sm": true,
                " focus:outline-sky-300 outline-4 opacity-50": true,
              })}
              placeholder="검색"
              value={search}
              onChange={(e) => itemsFilter(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {subItems &&
            subItems.map(
              (sub) =>
                sub.visible && (
                  <MenuItem
                    key={sub.name}
                    image={sub.image}
                    name={sub.name}
                    color={sub.color}
                  />
                )
            )}
        </div>
      </div>
    </div>
  );
}
