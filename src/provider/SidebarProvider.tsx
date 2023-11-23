"use client";
import { sidebarState } from "@/state/state";
import classNames from "classnames";
import React from "react";
import { useRecoilValue } from "recoil";

type SidebarProps = {
  children: React.ReactNode;
};

export default function SidebarProvider({ children }: SidebarProps) {
  const useSidebarState = useRecoilValue(sidebarState);
  return (
    <div
      className={classNames({
        grid: true,
        "grid-cols-sidebar": true,
        "grid-cols-sidebar-collapsed": !true,
      })}
    >
      {children}
    </div>
  );
}
