"use client";
import { sidebarState } from "@/state/state";
import classNames from "classnames";
import React from "react";
import { useRecoilValue } from "recoil";

export default function Sidebar() {
  const useSidebarState = useRecoilValue(sidebarState);
  return (
    <nav
      className={classNames({
        "absolute w-full h-full z-20": true,
        "border-r-2 bg-white dark:bg-black": true,
        "-translate-x-[1024px]": useSidebarState,
        "duration-300": !useSidebarState,
        "lg:translate-x-0 lg:duration-0": true,
        "lg:relative": true,
      })}
    >
      <div className="">
        <ul>
          <li>메뉴 1</li>
          <li>메뉴 2</li>
          <li>메뉴 3</li>
          <li>메뉴 4</li>
          <li>메뉴 5</li>
        </ul>
      </div>
    </nav>
  );
}
