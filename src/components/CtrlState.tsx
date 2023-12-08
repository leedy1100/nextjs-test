"use client";
import { CountStore } from "@/store/store";
import React from "react";
import CountButton from "./ui/CountButton";

export default function CtrlState() {
  const count = CountStore((state) => state.count);
  const increaseCount = CountStore((state) => state.increaseCount);
  const resetCount = CountStore((state) => state.resetCount);

  return (
    <div>
      <div className="flex flex-col gap-2">
        <CountButton onClick={() => increaseCount(count)} text="count 증가" />
        <CountButton onClick={() => resetCount()} text="count 리셋" />
      </div>
      <div>건 수 : {count}</div>
    </div>
  );
}
