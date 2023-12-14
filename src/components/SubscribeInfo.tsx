"use client";
import { mySubStore } from "@/store/store";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SubscribeInfo() {
  const { subscribeAdd } = mySubStore();

  const [fee, setFee] = useState<string>("");
  const [subscribeName, setSubscribeName] = useState<string>("");

  const pathname = usePathname();
  const router = useRouter();

  const serviceName = () => {
    const pathArr = pathname.replace(/%20/g, " ").split("/");
    setSubscribeName(pathArr[pathArr.length - 1]);
  };

  const onChangeFee = (fee: string) => {
    const tempFee = fee.split(",").join("");

    const regExp = /^[0-9]*$/;
    if (regExp.test(tempFee)) {
      setFee(tempFee);
    }
  };

  const addMySubscribe = () => {
    subscribeAdd(subscribeName, fee);
    router.push("/subscribe/my");
  };

  useEffect(() => {
    serviceName();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <p>
        <span className="font-bold text-lg">{subscribeName}</span> 구독료
      </p>
      <div className="relative flex justify-end items-center">
        <input
          className="flex justify-start items-center p-2 outline-none border-2 border-slate-300 rounded-full"
          placeholder="0"
          type="tel"
          onChange={(e) => onChangeFee(e.target.value)}
          value={fee.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        />
        <p className="absolute text-center mr-4">원</p>
      </div>
      <div className="p-4 text-center">
        <button
          className="text-xs font-bold text-slate-400 underline underline-offset-2 hover:text-slate-700"
          onClick={() => addMySubscribe()}
        >
          등록하기
        </button>
      </div>
    </div>
  );
}
