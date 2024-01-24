"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { allowScroll, preventScroll } from "@/utils/modal";
import Image from "next/image";
import debounce from "debounce";
import { menu } from "@/constants/menu";
import useSideBarStore from "@/store/sideBarStore";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  const sidebarState = useSideBarStore.use.sidebar();
  const { resetSidebar } = useSideBarStore.use.actions();
  const pathname = usePathname();

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
  }, [handleResize]);

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
            {menu.map(
              (v) =>
                v.visible && (
                  <Link
                    key={v.url}
                    href={v.url}
                    className={`hover:underline underline-offset-4 decoration-2 ${
                      pathname === v.url && "font-black"
                    }`}
                  >
                    {v.name}
                  </Link>
                ),
            )}
          </div>
        </div>
        <div className="hidden md:block ">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
