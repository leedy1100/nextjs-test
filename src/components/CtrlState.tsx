"use client";
import { inc, setText, useBoundStore, useCountStore } from "@/store/store";
import React from "react";
import CountButton from "./ui/CountButton";

export default function CtrlState() {
  const cnt = useCountStore((state) => state.count);
  const increaseCount = useCountStore((state) => state.increaseCount);
  const resetCount = useCountStore((state) => state.resetCount);

  const { count, text } = useBoundStore();

  return (
    <div>
      <div className="flex flex-col gap-2">
        <CountButton onClick={() => increaseCount(cnt)} text="count 증가" />
        <CountButton onClick={() => resetCount()} text="count 리셋" />
      </div>
      <div>count 건 : {cnt}</div>
      <div className="flex flex-col gap-2">
        <CountButton onClick={() => inc()} text={`${text} 증가`} />
        <input
          className="min-w-32 h-12 p-2 rounded-md border-2"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
      <div>
        {text} 건 : {count}
      </div>
    </div>
  );
}
