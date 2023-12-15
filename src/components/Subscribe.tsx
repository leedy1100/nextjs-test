"use client";
import React, { useEffect, useState } from "react";
import MenuItem from "./ui/MenuItem";
import { subscribeStore } from "@/store/store";

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
          <input
            className="flex justify-start items-center p-2 outline-none border-2 border-neutral-500 rounded-full text-sm placeholder:italic placeholder:text-slate-400"
            placeholder="검색"
            value={search}
            onChange={(e) => itemsFilter(e.target.value)}
          />
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
