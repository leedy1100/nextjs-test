'use client';

import useSideBarStore from '@/store/sideBarStore';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import {
  HiMiniHome,
  HiMiniMagnifyingGlass,
  HiMiniBars3,
  HiMiniPlusCircle,
  HiMiniUserCircle,
} from 'react-icons/hi2';

export default function BottomNav() {
  const { data: session } = useSession();
  const { toggleSidebar, resetSidebar } = useSideBarStore.use.actions();
  const pathname = usePathname();

  if (!session) return null;

  return (
    <div className="fixed bottom-0 w-full h-16 z-10 pt-2 bg-white dark:bg-black flex justify-around items-start shadow-inner md:hidden dark:border-t-2 dark:border-darkblue">
      <div className="flex flex-col justify-center items-center">
        <button onClick={() => toggleSidebar()}>
          <HiMiniBars3 className="w-8 h-8" />
        </button>
        <p className="text-xs">목록</p>
      </div>
      <div
        className={`flex flex-col justify-center items-center ${
          pathname === '/subscribe' && 'text-blue-600'
        }`}
      >
        <Link href="/subscribe">
          <HiMiniMagnifyingGlass className="w-8 h-8" />
        </Link>
        <p className="text-xs">검색</p>
      </div>
      <div
        className={`flex flex-col justify-center items-center ${
          pathname === '/' && 'text-blue-600'
        }`}
      >
        <Link href="/">
          <HiMiniHome className="w-8 h-8" />
        </Link>
        <p className="text-xs">홈</p>
      </div>
      <div
        className={`flex flex-col justify-center items-center ${
          pathname === '/etc' && 'text-blue-600'
        }`}
      >
        <Link href="/etc">
          <HiMiniPlusCircle className="w-8 h-8" />
        </Link>
        <p className="text-xs">등록</p>
      </div>
      <div
        className={`flex flex-col justify-center items-center ${
          pathname === '/subscribe/my' && 'text-blue-600'
        }`}
      >
        <Link href="/subscribe/my">
          <HiMiniUserCircle className="w-8 h-8" />
        </Link>
        <p className="text-xs">내정보</p>
      </div>
    </div>
  );
}
