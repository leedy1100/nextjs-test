"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HiSun } from "react-icons/hi";
import { HiOutlineMoon } from "react-icons/hi";
import classNames from "classnames";

export const ThemeSwitcher = () => {
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
      className={`w-fit absolute right-5 top-2 p-2 rounded-md bg-slate-200 dark:bg-[#212933]`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <HiSun className="w-8 h-8" />
      ) : (
        <HiOutlineMoon className="w-8 h-8" />
      )}
    </button>
  );
};
