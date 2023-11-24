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
          "absolute w-4/5 h-full z-50 left-[20%] bg-white overflow-auto": true,
          "translate-x-[720px] duration-500": useSidebarState,
          "duration-500": !useSidebarState,
          "md:translate-x-0 md:duration-0": true,
          "md:hidden": true,
        })}
      >
        <div className="w-full h-full p-10 shadow-inner dark:bg-black">
          <ul className="text-lg text-black dark:text-slate-200 font-medium">
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
            <Link href="/etc" onClick={() => setSidebarState(!useSidebarState)}>
              <li className="mb-6 hover:text-blurple dark:hover:text-white">
                Etc
              </li>
            </Link>
          </ul>
          <hr className="border-[1.2px]"></hr>
          <div>
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
      <div
        className={`${
          useSidebarState
            ? "hidden"
            : "absolute w-screen h-screen z-40 opacity-30 bg-black left-0"
        }`}
        onClick={() => setSidebarState(!useSidebarState)}
      ></div>
    </div>
  );
}
