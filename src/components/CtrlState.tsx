"use client";
import { inc, setText, useBoundStore, useCountStore } from "@/store/store";
import React, { useEffect, useState } from "react";
import CountButton from "./ui/CountButton";

export default function CtrlState() {
  // const [tempCnt, setTempCnt] = useState(0);

  const { count, text } = useBoundStore();

  const cnt = useCountStore.use.count();
  const { increaseCount, resetCount } = useCountStore.use.actions();

  // useEffect(() => {
  //   setTempCnt(cnt);
  // }, [cnt]);
  return (
    <div>
      <div className="flex flex-col gap-2">
        <p className="mt-4 text-lg font-bold">Auto Generating Selectors</p>
        <CountButton onClick={() => increaseCount()} text="count 증가" />
        <CountButton onClick={() => resetCount()} text="count 리셋" />
      </div>
      <div>count 건 : {cnt}</div>
      <div className="flex flex-col gap-2">
        <p className="mt-4 text-lg font-bold">no store actions</p>
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
