"use client";
import Image from "next/image";
import React from "react";

type Props = {
  url: string;
};
export default function RandomImage({ url }: Props) {
  return (
    <Image
      src={url}
      alt="Random Picture"
      width={400}
      height={400}
      className="rounded-xl w-full h-full"
    />
  );
}
