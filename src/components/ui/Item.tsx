import React from 'react';

type Props = {
  text: string;
  st?: string;
};

export default function Item({ text, st = 'h-[25px]' }: Props) {
  return (
    <div className={`table w-[25px] bg-green-500 border-2 border-black ${st}`}>
      <span className="table-cell align-middle">{text}</span>
    </div>
  );
}
