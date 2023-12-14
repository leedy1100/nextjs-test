"use client";
import { mySubStore } from "@/store/store";
import React, { useCallback, useEffect, useState } from "react";
import MenuItem from "./ui/MenuItem";
import AnimatedNumbers from "react-animated-numbers";

export default function MySubscribe() {
  const [subItems, setSubItems] = useState<SubscribeMenuInfo[]>();
  const { subList } = mySubStore();

  const totalFeeMySub = useCallback(() => {
    let total = 0;
    subItems?.forEach((subItem) => {
      if (subItem.fee) total += subItem.fee;
    });
    return total;
  }, [subItems]);

  useEffect(() => {
    setSubItems(subList);
  }, [subList]);
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center items-end m-4 font-bold text-xl text-center">
        <div className="text-sm text-neutral-500 mr-2">Total</div>
        <div>
          <AnimatedNumbers
            includeComma
            className={""}
            transitions={(index) => ({
              type: "spring",
              duration: index,
            })}
            animateToNumber={totalFeeMySub()}
            fontStyle={{
              fontSize: 20,
              color: "black",
            }}
          />
        </div>
        <div className="text-sm text-neutral-500">KRW</div>
      </div>
      <hr className="mb-8 border-slate-300" />
      <div className="flex flex-col gap-4">
        {subItems &&
          subItems.map(
            (sub) =>
              sub.visible && (
                <MenuItem
                  key={sub.name}
                  image={sub.image}
                  name={sub.name}
                  subscribe={sub.subscribe}
                  color={sub.color}
                />
              )
          )}
      </div>
    </div>
  );
}
