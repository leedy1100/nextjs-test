import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { HiMiniMoon } from "react-icons/hi2";

export default function Header() {
  return (
    <header className="sticky top-0 h-16 border-b-2 bg-white dark:bg-black">
      <div className="flex justify-between">
        <h1>header</h1>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
