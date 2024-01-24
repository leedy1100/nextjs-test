"use client";

import useCountStoreBase from "@/store/countStore";
import { inc, setText, useBoundStore } from "@/store/boundStore";
import React, { useEffect, useState } from "react";
import CountButton from "./ui/CountButton";

export default function CtrlState() {
  const [tempCnt, setTempCnt] = useState(0);
  const [tempStorage, setTempStorage] = useState<string | null>();

  const { count, storage, increaseCount, resetCount, getStorage, openAlert } =
    useCountStoreBase();

  const { cnt, text } = useBoundStore();

  // const count = useCountStore.use.count();
  // const storage = useCountStore.use.storage();
  // const increaseCount = useCountStore.use.increaseCount();
  // const resetCount = useCountStore.use.resetCount();
  // const getStorage = useCountStore.use.getStorage();
  // const openAlert = useCountStore.use.openAlert();

  useEffect(() => {
    setTempCnt(count);
    setTempStorage(storage);
  }, [count, storage]);
  return (
    <div>
      <div className="flex flex-col gap-2">
        <p className="mt-4 text-lg font-bold">Auto Generating Selectors</p>
        <CountButton onClick={() => increaseCount()} text="count 증가" />
        <CountButton onClick={() => resetCount()} text="count 리셋" />
      </div>
      <div>count 건 : {tempCnt}</div>
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
        {text} 건 : {cnt}
      </div>
      <div className="flex flex-col gap-2">
        <p className="mt-4 text-lg font-bold">local storage</p>
        <CountButton
          onClick={() => getStorage()}
          text="localstorage 불러오기"
        />
      </div>
      <div>local storage : {tempStorage}</div>
      <div className="flex flex-col gap-2">
        <p className="mt-4 text-lg font-bold">alert</p>
        <CountButton onClick={() => openAlert()} text="Open Alert" />
      </div>
    </div>
  );
}
