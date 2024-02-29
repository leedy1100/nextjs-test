'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { HiSun } from 'react-icons/hi';
import { HiMiniMoon } from 'react-icons/hi2';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`rounded-full duration-300 ${
        theme === 'light' && 'rotate-90'
      }`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? (
        <p className="rounded-full m-2 p-2 hover:bg-slate-100">
          <HiSun className="w-7 h-7" />
        </p>
      ) : (
        <p className="rounded-full m-2 p-2 hover:bg-darkblue">
          <HiMiniMoon className="w-6 h-6" />
        </p>
      )}
    </button>
  );
}
