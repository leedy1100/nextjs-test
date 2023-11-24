import React from "react";

type Props = {
  text: string;
  st?: string;
};

export default function Item({ text, st = "h-[50px]" }: Props) {
  return (
    <div className={`table w-1/2 bg-green-500 border-2 border-black ${st}`}>
      <span className="table-cell align-middle">{text}</span>
    </div>
  );
}
