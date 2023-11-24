"use client";
import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { HiBars4 } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import { useRecoilState } from "recoil";
import { sidebarState } from "@/state/state";
import Link from "next/link";

export default function Header() {
  const [useSidebarState, setSidebarState] = useRecoilState(sidebarState);
  const toggleSidebar = () => {
    setSidebarState(!useSidebarState);
  };
  return (
    <header className="sticky top-0 border-b-2 bg-white dark:bg-black">
      <div className="flex justify-between items-center mx-4 h-full">
        <div className="hidden md:flex gap-4 font-bold tracking-widest">
          <Link className="" href="/flex">
            Flex
          </Link>
          <Link className="" href="grid">
            Grid
          </Link>
          <Link className="" href="/">
            Etc
          </Link>
        </div>
        <div className="hidden md:block">
          <ThemeSwitcher />
        </div>
        <div className="block md:hidden"></div>
        <div className="md:hidden">
          <button
            className="p-2 hover:bg-slate-100 hover:dark:bg-darkblue rounded-full"
            onClick={() => toggleSidebar()}
          >
            {useSidebarState ? (
              <HiBars4 className="w-7 h-7" />
            ) : (
              <HiOutlineXMark className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
