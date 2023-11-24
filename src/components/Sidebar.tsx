"use client";
import { sidebarState } from "@/state/state";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { useRecoilValue } from "recoil";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Sidebar() {
  const useSidebarState = useRecoilValue(sidebarState);
  return (
    <div>
      <nav
        className={classNames({
          "absolute w-3/4 h-full z-50 left-1/4 opacity-100": true,
          "border-l-2 bg-white ": true,
          "translate-x-[720px] duration-500": useSidebarState,
          "duration-500": !useSidebarState,
          "md:translate-x-0 md:duration-0": true,
          "md:hidden": true,
        })}
      >
        <div className="w-full h-full p-10 dark:bg-black">
          <ul className="text-xl text-black dark:text-slate-200 font-medium">
            <li className="mb-6 hover:text-blurple dark:hover:text-white">
              <Link href="/flex">Flex</Link>
            </li>
            <li className="mb-6 hover:text-blurple dark:hover:text-white">
              <Link href="/grid">Grid</Link>
            </li>
            <li className="mb-6 hover:text-blurple dark:hover:text-white">
              <Link href="/">Etc</Link>
            </li>
          </ul>
          <hr></hr>
          <div>
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
      <div
        className={`${
          useSidebarState
            ? "hidden"
            : "absolute w-screen h-[calc(100vh-56px)] z-40 opacity-30 bg-black left-0 bottom-0"
        }`}
      ></div>
    </div>
  );
}
