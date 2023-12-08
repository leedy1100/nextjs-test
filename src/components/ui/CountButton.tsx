import React from "react";

type Props = {
  onClick: () => void;
  text: string;
};

export default function CountButton({ onClick, text }: Props) {
  return (
    <button
      className="min-w-24 h-12 p-2 bg-slate-100 rounded-md active:bg-slate-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
