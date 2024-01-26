import PageWrapper from "@/components/common/PageWrapper";
import Item from "@/components/ui/Item";
import Link from "next/link";
import React from "react";

export default function Grid() {
  const itemArr = [
    "D",
    "O",
    "O",
    "Y",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  const itemArr2 = ["D", "O", "O", "Y"];
  return (
    <PageWrapper>
      <section>
        <Link href="/">Main 이동</Link>
        <div className="mt-10 ">
          <h1 className="font-bold text-white text-xl bg-slate-400">
            grid 샘플
          </h1>
          <p>grid-row-3</p>
          <div className="grid grid-rows-3 grid-flow-col bg-yellow-300 p-4 text-center gap-2 ">
            {itemArr.map((v, i) => (
              <Item key={i} text={v} />
            ))}
          </div>
          <p>grid-rows-2 md:grid-rows-6</p>
          <div className="grid grid-rows-2 grid-flow-col md:grid-rows-6 bg-yellow-300 p-4 text-center gap-2">
            {itemArr.map((v, i) => (
              <Item key={i} text={v} />
            ))}
          </div>
          <p>grid-cols-3</p>
          <div className="grid grid-cols-3 grid-flow-row bg-yellow-300 p-4 text-center gap-2">
            {itemArr.map((v, i) => (
              <Item key={i} text={v} />
            ))}
          </div>
          <p>grid rows start, end</p>
          <div className="grid grid-cols-6 bg-yellow-300 p-4 text-center gap-4">
            <div className="row-start-2 row-span-4 bg-green-500 border-2 border-black">
              01
            </div>
            <div className="row-start-1 row-end-3 bg-green-500 border-2 border-black">
              02
            </div>
            <div className="row-end-7 row-span-2 bg-green-500 border-2 border-black">
              03
            </div>
            <div className="row-start-1 row-end-7 bg-green-500 border-2 border-black">
              04
            </div>
          </div>
          <p>grid cols start, end</p>
          <div className="grid grid-cols-6 bg-yellow-300 p-4 text-center gap-4">
            <div className="col-start-2 col-span-4 bg-green-500 border-2 border-black">
              01
            </div>
            <div className="col-start-1 col-end-3 bg-green-500 border-2 border-black">
              02
            </div>
            <div className="col-end-7 col-span-2 bg-green-500 border-2 border-black">
              03
            </div>
            <div className="col-start-1 col-end-7 bg-green-500 border-2 border-black">
              04
            </div>
          </div>
          <p>grid-flow-row</p>
          <div className="grid grid-flow-row bg-yellow-300 p-4 text-center gap-2">
            {itemArr2.map((v, i) => (
              <Item key={i} text={v} />
            ))}
          </div>
          <p>grid-flow-col</p>
          <div className="grid grid-flow-col  bg-yellow-300 p-4 text-center gap-2">
            {itemArr2.map((v, i) => (
              <Item key={i} text={v} />
            ))}
          </div>
          <p>grid justify-stretch</p>
          <div className="grid grid-flow-col justify-stretch bg-yellow-300 p-4 text-center gap-2">
            {itemArr2.map((v, i) => (
              <Item key={i} text={v} st="w-full" />
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
