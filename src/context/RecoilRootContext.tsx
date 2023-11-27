"use client";
import React from "react";
import { RecoilRoot } from "recoil";

type RecoilRootWrapperProps = {
  children: React.ReactNode;
};

export default function RecoilRootContext({
  children,
}: RecoilRootWrapperProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
