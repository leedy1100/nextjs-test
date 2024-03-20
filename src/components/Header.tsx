'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { allowScroll, preventScroll } from '@/utils/modal';
import Image from 'next/image';
import debounce from 'debounce';
import { menu } from '@/constants/menu';
import useSideBarStore from '@/store/sideBarStore';
import { usePathname } from 'next/navigation';
import { HiBell } from 'react-icons/hi2';
import { signIn, signOut, useSession } from 'next-auth/react';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  const { data: session } = useSession();
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
    window.addEventListener('resize', handleResize);
    return () => {
      // cleanup
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <header className="fixed w-full h-[72px] md:h-[96px] z-50 md:shadow top-0 bg-white dark:bg-black">
      <div className="flex justify-between items-center px-6 h-full gap-4">
        <div className="flex justify-between md:justify-start items-center w-full">
          <div
            className="rounded-full bg-slate-50 dark:bg-slate-200 mr-4"
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
              v =>
                v.visible && (
                  <Link
                    key={v.url}
                    href={v.url}
                    className={`hover:underline underline-offset-4 decoration-2 ${
                      pathname === v.url && 'font-black'
                    }`}
                  >
                    {v.name}
                  </Link>
                ),
            )}
          </div>
        </div>
        <div className="flex justify-end items-center w-full gap-2">
          <div className="text-sm">
            {session && `${session?.user?.email?.split('@')[0]}님`}
          </div>
          {session ? (
            <button
              className="w-24 h-10 bg-red-500 text-white rounded-md"
              onClick={() => {
                signOut();
              }}
            >
              Sign out
            </button>
          ) : (
            <button
              className="w-24 h-10 bg-red-500 text-white rounded-md"
              onClick={() => signIn()}
            >
              Sign in
            </button>
          )}
        </div>
        <div className="hidden md:block ">
          <ThemeSwitcher />
        </div>
        <div>
          <span className="relative flex h-2 w-2 left-[18px] top-[6px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
          <HiBell className="w-7 h-7 mb-3 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
