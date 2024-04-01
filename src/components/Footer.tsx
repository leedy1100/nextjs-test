'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

export default function Footer() {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <footer className="h-[200px] border-t-2 bg-white dark:bg-black hidden md:block">
      <div className="m-4">
        <p className="my-4 text-sm">Footer contents</p>
        <hr />
        <p className="mt-4 text-xs text-slate-500 dark:text-slate-300">
          © 2023 dooy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
