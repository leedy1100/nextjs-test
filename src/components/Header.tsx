"use client";
import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { HiBars4 } from "react-icons/hi2";
import { useRecoilState } from "recoil";
import { sidebarState } from "@/state/state";

export default function Header() {
  const [useSidebarState, setSidebarState] = useRecoilState(sidebarState);
  const toggleSidebar = () => {
    setSidebarState(!useSidebarState);
  };
  return (
    <header className="sticky top-0 border-b-2 bg-white dark:bg-black">
      <div className="flex justify-between items-center mx-4 h-full">
        <div className="">
          <button onClick={() => toggleSidebar()}>
            <HiBars4 className="w-7 h-7" />
          </button>
        </div>
        <p>header</p>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
