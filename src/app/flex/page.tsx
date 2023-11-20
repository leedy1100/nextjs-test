import Item from "@/components/Item";
import Link from "next/link";
import React from "react";

export default function Flex() {
  const itemArr = ["D", "O", "O", "Y"];
  return (
    <section className="">
      <Link href="/">Main 이동</Link>
      <div className="mt-10">
        <h1 className="font-bold text-white text-xl bg-slate-400">flex 방향</h1>
        <p>
          flex-row
          <span className="text-blue-400">(tailwind 표현: flex-row)</span>
        </p>
        <div className="flex flex-row bg-yellow-300 p-4 text-center gap-2">
          {itemArr.map((v, i) => (
            <Item key={i} text={v} />
          ))}
        </div>
        <p>
          flex-row-reverse
          <span className="text-blue-400">
            (tailwind 표현: flex-row-reverse)
          </span>
        </p>
        <div className="flex flex-row-reverse bg-yellow-300 p-4 text-center gap-2">
          {itemArr.map((v, i) => (
            <Item key={i} text={v} />
          ))}
        </div>
        <p>
          flex-column
          <span className="text-blue-400">(tailwind 표현: flex-col)</span>
        </p>
        <div className="flex flex-col bg-yellow-300 p-4 text-center gap-2">
          {itemArr.map((v, i) => (
            <Item key={i} text={v} />
          ))}
        </div>
        <p>
          flex-column-reverse
          <span className="text-blue-400">
            (tailwind 표현: flex-col-reverse)
          </span>
        </p>
        <div className="flex flex-col-reverse bg-yellow-300 p-4 text-center gap-2">
          {itemArr.map((v, i) => (
            <Item key={i} text={v} />
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h1 className="font-bold text-white text-xl bg-slate-400">flex 정렬</h1>
        <p>
          flex justify-center
          <span className="text-blue-400">(tailwind 표현: justify-center)</span>
        </p>
        <div className="flex justify-center bg-yellow-300 p-4 text-center gap-2">
          {itemArr.map((v, i) => (
            <Item key={i} text={v} />
          ))}
        </div>
        <p>
          flex flex-start
          <span className="text-blue-400">(tailwind 표현: justify-start)</span>
        </p>
        <div className="flex justify-start bg-yellow-300 p-4 text-center gap-2">
          {itemArr.map((v, i) => (
            <Item key={i} text={v} />
          ))}
        </div>
        <p>
          flex flex-end
          <span className="text-blue-400">(tailwind 표현: justify-end)</span>
        </p>
        <div className="flex justify-end bg-yellow-300 p-4 text-center gap-2">
          {itemArr.map((v, i) => (
            <Item key={i} text={v} />
          ))}
        </div>
        <p>
          flex space-between
          <span className="text-blue-400">(tailwind 표현: space-x-4)</span>
        </p>
        <div className="flex space-x-4 bg-yellow-300 p-4 text-center gap-2">
          {itemArr.map((v, i) => (
            <Item key={i} text={v} />
          ))}
        </div>
        <p>
          flex space-around
          <span className="text-blue-400">
            (tailwind 표현: place-content-around)
          </span>
        </p>
        <div className="flex place-content-around bg-yellow-300 p-4 text-center gap-2">
          {itemArr.map((v, i) => (
            <Item key={i} text={v} />
          ))}
        </div>
        <p>
          flex space-evenly
          <span className="text-blue-400">
            (tailwind 표현: place-content-evenly)
          </span>
        </p>
        <div className="flex place-content-evenly bg-yellow-300 p-4 text-center gap-2">
          {itemArr.map((v, i) => (
            <Item key={i} text={v} />
          ))}
        </div>
        <p>
          flex items-center
          <span className="text-blue-400">(tailwind 표현: items-center)</span>
        </p>
        <div className="flex items-center bg-yellow-300 p-4 text-center gap-2">
          <Item text="D" st="h-8" />
          <Item text="O" st="h-16" />
          <Item text="O" st="h-8" />
          <Item text="Y" st="h-12" />
        </div>
        <p>
          flex items-start
          <span className="text-blue-400">(tailwind 표현: items-start)</span>
        </p>
        <div className="flex items-start bg-yellow-300 p-4 text-center gap-2">
          <Item text="D" st="h-8" />
          <Item text="O" st="h-16" />
          <Item text="O" st="h-8" />
          <Item text="Y" st="h-12" />
        </div>
        <p>
          flex items-end
          <span className="text-blue-400">(tailwind 표현: items-end)</span>
        </p>
        <div className="flex items-end bg-yellow-300 p-4 text-center gap-2">
          <Item text="D" st="h-8" />
          <Item text="O" st="h-16" />
          <Item text="O" st="h-8" />
          <Item text="Y" st="h-12" />
        </div>
        <p>
          flex flex-wrap
          <span className="text-blue-400">(tailwind 표현: flex-wrap)</span>
        </p>
        <div className="flex flex-wrap bg-yellow-300 p-4 text-center gap-2">
          {itemArr.map((v, i) => (
            <Item key={i} text={v} st="w-[500px]" />
          ))}
        </div>
        <p>
          flex flex-nowrap(default)
          <span className="text-blue-400">(tailwind 표현: flex-nowrap)</span>
        </p>
        <div className="flex bg-yellow-300 p-4 text-center gap-2">
          {itemArr.map((v, i) => (
            <Item key={i} text={v} st="w-[500px]" />
          ))}
        </div>
        <p>
          flex flex-wrap-reverse
          <span className="text-blue-400">
            (tailwind 표현: flex-wrap-reverse)
          </span>
        </p>
        <div className="flex flex-wrap-reverse bg-yellow-300 p-4 text-center gap-2">
          {itemArr.map((v, i) => (
            <Item key={i} text={v} st="w-[500px]" />
          ))}
        </div>
      </div>
    </section>
  );
}
