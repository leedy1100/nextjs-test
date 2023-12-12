"use client";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { menu } from "@/constants/menu";
import { useSideBarStore } from "@/store/store";

export default function Sidebar() {
  const sidebarState = useSideBarStore.use.sidebar();
  const { resetSidebar } = useSideBarStore.use.actions();

  return (
    <div>
      <nav
        className={classNames({
          "absolute w-4/5 h-full z-50 left-[20%] bg-white overflow-auto": true,
          "translate-x-[720px] duration-300": sidebarState,
          "duration-300": !sidebarState,
          "md:translate-x-0 md:duration-0": true,
          "md:hidden": true,
        })}
      >
        <div className="w-full h-full p-10 shadow-inner dark:bg-black">
          <ul className="text-lg text-black dark:text-slate-200 font-medium">
            {menu.map((v) => (
              <Link key={v.url} href={v.url} onClick={() => resetSidebar()}>
                <li className="mb-6 hover:text-blurple dark:hover:text-white">
                  {v.name}
                </li>
              </Link>
            ))}
          </ul>
          <hr className="border-[1.2px]"></hr>
          <div>
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
      <div
        className={`${
          sidebarState
            ? "hidden"
            : "absolute w-screen h-screen z-40 opacity-30 bg-black left-0"
        }`}
        onClick={() => resetSidebar()}
      ></div>
    </div>
  );
}
