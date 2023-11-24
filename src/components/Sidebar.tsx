"use client";
import { sidebarState } from "@/state/state";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Sidebar() {
  const [useSidebarState, setSidebarState] = useRecoilState(sidebarState);
  return (
    <div>
      <nav
        className={classNames({
          "absolute w-3/4 h-full z-50 left-1/4": true,
          "border-l-2 bg-white ": true,
          "translate-x-[720px] duration-500": useSidebarState,
          "duration-500": !useSidebarState,
          "md:translate-x-0 md:duration-0": true,
          "md:hidden": true,
        })}
      >
        <div className="w-full h-full p-10 dark:bg-black">
          <ul className="text-xl text-black dark:text-slate-200 font-medium">
            <Link
              href="/flex"
              onClick={() => setSidebarState(!useSidebarState)}
            >
              <li className="mb-6 hover:text-blurple dark:hover:text-white">
                Flex
              </li>
            </Link>
            <Link
              href="/grid"
              onClick={() => setSidebarState(!useSidebarState)}
            >
              <li className="mb-6 hover:text-blurple dark:hover:text-white">
                Grid
              </li>
            </Link>
            <Link href="/" onClick={() => setSidebarState(!useSidebarState)}>
              <li className="mb-6 hover:text-blurple dark:hover:text-white">
                Etc
              </li>
            </Link>
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
            : "absolute w-screen h-[calc(100vh-45px)] z-40 opacity-30 bg-black left-0 bottom-0"
        }`}
        onClick={() => setSidebarState(!useSidebarState)}
      ></div>
    </div>
  );
}
