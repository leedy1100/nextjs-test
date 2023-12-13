"use client";
import { mySubStore } from "@/store/store";
import React, { useEffect, useState } from "react";
import MenuItem from "./ui/MenuItem";

export default function MySubscribe() {
  const [subItems, setSubItems] = useState<SubscribeMenuInfo[]>();
  const { subList, subscribeDelete } = mySubStore();

  useEffect(() => {
    setSubItems(subList);
  }, [subList]);
  return (
    <div className="flex flex-col w-full">
      <div></div>
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
                  action={subscribeDelete}
                />
              )
          )}
      </div>
    </div>
  );
}
