"use client";
import React from "react";
import MenuItem from "./ui/MenuItem";
import { subscribeStore } from "@/store/store";

export default function Subscribe() {
  const { subList } = subscribeStore();

  return (
    <div>
      <div className="flex flex-col w-full">
        <div></div>
        <div className="flex flex-col gap-4">
          {subList &&
            subList.map(
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
