"use client";
import React from "react";
import { RecoilRoot } from "recoil";

type RecoilRootWrapperProps = {
  children: React.ReactNode;
};

export default function RecoilRootWrapper({
  children,
}: RecoilRootWrapperProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
