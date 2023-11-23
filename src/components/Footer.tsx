import classNames from "classnames";
import React from "react";

export default function Footer() {
  return (
    <footer
      className={classNames({
        "relative w-full h-14 mb-[112px] bg-white dark:bg-black": true,
        "lg:absolute lg:bottom-0 lg:mb-0": true,
      })}
    >
      Footer
    </footer>
  );
}
