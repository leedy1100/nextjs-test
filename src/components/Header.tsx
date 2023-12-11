"use client";
import React, { useEffect } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import Link from "next/link";
import { allowScroll, preventScroll } from "@/utils/modal";
import Image from "next/image";
import debounce from "debounce";
import { menu } from "@/constants/menu";
import { useSideBarStore } from "@/store/store";

export default function Header() {
  const sidebarState = useSideBarStore.use.sidebar();
  const { toggleSidebar, resetSidebar } = useSideBarStore.use.actions();

  const handleResize = debounce(() => {
    if (window.innerWidth > 767) {
      resetSidebar();
    }
  }, 200);

  useEffect(() => {
    if (!sidebarState) preventScroll();
    if (sidebarState) allowScroll();
  }, [sidebarState]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sticky h-[72px] md:h-[96px] z-40 md:shadow top-0 bg-white dark:bg-black">
      <div className="flex justify-between items-center px-6 h-full">
        <div className="flex justify-between md:justify-start items-center w-full gap-6">
          <div
            className="rounded-full bg-slate-50 dark:bg-slate-200"
            onClick={() => resetSidebar()}
          >
            <Link href="/">
              <Image
                src="/assets/images/logo.png"
                width={50}
                height={50}
                alt="dooy"
              />
            </Link>
          </div>
          <div className="hidden md:flex gap-4 font-bold tracking-widest">
            {menu.map((v) => (
              <Link key={v.url} href={v.url}>
                {v.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button
              className="p-2 hover:bg-slate-100 hover:dark:bg-darkblue rounded-full"
              onClick={() => toggleSidebar()}
            >
              {sidebarState ? (
                <HiBars3 className="w-6 h-6" />
              ) : (
                <HiOutlineXMark className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        <div className="hidden md:block ">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
