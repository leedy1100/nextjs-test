"use client";

import React, { useEffect, useMemo, useState } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { subscribeStore } from "@/store/subscribeStore";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import MenuItem from "./ui/MenuItem";
import SubscribeInfo from "./SubscribeInfo";

export default function Subscribe() {
  const { subList } = subscribeStore();
  const [subItems, setSubItems] = useState<SubscribeMenuInfo[]>();
  const [search, setSearch] = useState<string>("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const itemsFilter = (sch: string) => {
    setSearch(sch);
    if (sch) {
      setSubItems(
        subList.filter((s) => s.name.toLowerCase().includes(sch.toLowerCase())),
      );
    } else {
      setSubItems([...subList]);
    }
  };

  const filterSubscribe = subList.filter(
    (s: { name: string | null }) => s.name === selectedId,
  );

  useEffect(() => {
    setSubItems(subList);
  }, [subList]);

  useEffect(() => {
    if (selectedId) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedId]);

  return (
    <div className="flex flex-col justify-center">
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
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center md:justify-start gap-4 max-w-[600px]">
          {subItems &&
            subItems.map(
              (sub) =>
                sub.visible && (
                  <motion.div key={sub.name} className="" layoutId={sub.name}>
                    <MenuItem
                      image={sub.image}
                      name={sub.name}
                      color={sub.color}
                      click={() => setSelectedId(sub.name)}
                    />
                  </motion.div>
                ),
            )}
        </div>
      </div>
      <AnimatePresence>
        {selectedId && (
          <div>
            <motion.div
              className="fixed z-[60] w-4/5 h-[40%] top-[15%] left-[10%]"
              layoutId={selectedId}
              transition={{ duration: 0.2 }}
              exit={{ opacity: 0 }}
            >
              {filterSubscribe.map((s) => (
                <SubscribeInfo
                  key={s.name}
                  color={s.color}
                  name={s.name}
                  fee={s.fee}
                  click={() => setSelectedId(null)}
                />
              ))}
            </motion.div>
            <div
              className="fixed w-screen h-screen z-50 bg-black opacity-50 left-0 top-0"
              onClick={() => setSelectedId(null)}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
