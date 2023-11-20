import React from "react";

type Props = {
  text: string;
  st?: string;
};

export default function Item({ text, st = "h-[50px]" }: Props) {
  return (
    <div className={`w-[100px] bg-green-500 border-2 border-black ${st}`}>
      {text}
    </div>
  );
}
