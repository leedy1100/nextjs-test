"use client";
import React from "react";
import { HiOutlineViewList } from "react-icons/hi";
import classNames from "classnames";
import { useRecoilState } from "recoil";
import { sidebarState } from "@/state/state";

export default function Sidebar() {
  const [useSidebarState, setuseSidebarState] = useRecoilState(sidebarState);
  const toggleSidebar = () => {
    setuseSidebarState(!useSidebarState);
  };
  return (
    <nav className="sticky top-0 h-screen border-r-2 w-[300px]">
      <div className="">
        <button onClick={() => toggleSidebar()}>
          <HiOutlineViewList className="w-10 h-10" />
        </button>
      </div>
      <div className="">
        <ul>
          <li>메뉴 1</li>
          <li>메뉴 2</li>
          <li>메뉴 3</li>
          <li>메뉴 4</li>
          <li>메뉴 5</li>
        </ul>
      </div>
    </nav>
  );
}
