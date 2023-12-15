"use client";
import { mySubStore } from "@/store/store";
import React, { useCallback, useEffect, useState } from "react";
import MenuItem from "./ui/MenuItem";
import dynamic from "next/dynamic";

export default function MySubscribe() {
  const [subItems, setSubItems] = useState<SubscribeMenuInfo[]>([]);
  const { subList } = mySubStore();

  const totalFeeMySub = useCallback(() => {
    let total = 0;
    subItems?.forEach((subItem) => {
      if (subItem.fee) total += subItem.fee;
    });
    return total;
  }, [subItems]);

  const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
    ssr: false,
  });

  useEffect(() => {
    setSubItems(subList);
  }, [subList]);
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center items-end m-4 font-bold text-xl text-center">
        <div className="text-sm text-neutral-500 mr-2">Total</div>
        <div className="leading-6">
          <AnimatedNumbers
            includeComma
            className={""}
            transitions={(index) => ({
              type: "spring",
              duration: index + 0.2,
            })}
            animateToNumber={totalFeeMySub()}
            fontStyle={{
              fontSize: 20,
              color: "",
            }}
          />
        </div>
        <div className="text-sm text-neutral-500 ml-1">KRW</div>
      </div>
      <hr className="mb-8 border-slate-300" />
      <div className="flex flex-col gap-4">
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
                />
              )
          )
        ) : (
          <div className="text-xs text-center text-neutral-400 font-bold m-4">
            구독 중인 서비스가 없습니다.
          </div>
        )}
      </div>
    </div>
  );
}
