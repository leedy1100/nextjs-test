"use client";
import React, { useEffect, useState } from "react";
import MenuItem from "./ui/MenuItem";
import { mySubStore, subscribeStore } from "@/store/store";

export default function Subscribe() {
  const { subList } = subscribeStore();
  const { subscribe } = mySubStore();

  return (
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
                  subscribe={sub?.subscribe}
                  color={sub.color}
                  action={subscribe}
                />
              )
          )}
      </div>
    </div>
  );
}
