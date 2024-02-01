"use client";

import { mySubStore } from "@/store/subscribeStore";
import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import MenuItem from "./ui/MenuItem";

export default function MySubscribe() {
  const [subItems, setSubItems] = useState<SubscribeMenuInfo[]>([]);
  const { subList, subscribeDelete } = mySubStore();
  const totalFeeMySub = useMemo(() => {
    let total = 0;
    subItems?.forEach((subItem) => {
      if (subItem.fee) total += subItem.fee;
    });
    return total;
  }, [subItems]);

  const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
    ssr: false,
  });

  const deleteConfirm = (name: string) => {
    if (confirm(`${name} 구독을 취소하시겠습니까?`)) {
      subscribeDelete(name);
    }
  };

  useEffect(() => {
    setSubItems(subList);
  }, [subList]);
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center items-end m-4 font-bold text-xl text-center">
        <div className="text-sm mr-2">Total</div>
        <div className="">
          <AnimatedNumbers
            includeComma
            transitions={(index) => ({
              type: "spring",
              duration: index + 0.2,
            })}
            animateToNumber={totalFeeMySub}
            fontStyle={{
              fontSize: 30,
              color: "",
            }}
          />
        </div>
        <div className="text-sm  ml-1">KRW</div>
      </div>
      <hr className="mb-8 border-slate-300" />
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-4 max-w-[600px]">
          {subItems.length > 0 ? (
            subItems.map(
              (sub) =>
                sub.visible && (
                  <MenuItem
                    key={sub.name}
                    image={sub.image}
                    name={sub.name}
                    subscribe={sub.subscribe}
                    color={sub.color}
                    fee={sub.fee}
                    isDisable={false}
                    click={() => deleteConfirm(sub.name)}
                  />
                ),
            )
          ) : (
            <div className="text-xs text-center text-neutral-400 font-bold m-4">
              구독 중인 서비스가 없습니다.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
