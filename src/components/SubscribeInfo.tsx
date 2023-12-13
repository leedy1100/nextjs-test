"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function SubscribeInfo() {
  const [fee, setFee] = useState<string>("");
  const pathname = usePathname();
  const serviceName = (path: string) => {
    const pathArr = path.split("/");
    return pathArr[pathArr.length - 1];
  };

  const onChangeFee = (fee: string) => {
    const tempFee = fee.split(",").join("");
    console.log(tempFee);
    const regExp = /^[0-9]*$/;
    if (regExp.test(tempFee)) {
      setFee(tempFee.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p>{serviceName(pathname)}</p>
      <p>구독료</p>
      <div className="relative flex justify-end items-center">
        <input
          className="flex justify-start items-center p-2 outline-none border-2 border-slate-300 rounded-full"
          placeholder="0"
          type="tel"
          onChange={(e) => onChangeFee(e.target.value)}
          value={fee}
        />
        <p className="absolute text-center mr-4">원</p>
      </div>
    </div>
  );
}
