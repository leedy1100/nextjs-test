import classNames from "classnames";
import React from "react";

export default function Footer() {
  return (
    <footer
      className={classNames({
        "absolute bottom-0 w-full h-14 bg-white border-2 dark:bg-black": true,
      })}
    >
      Footer
    </footer>
  );
}
