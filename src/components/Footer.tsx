import classNames from "classnames";
import React from "react";

export default function Footer() {
  return (
    <footer
      className={classNames({
        "h-14 bg-white border-2 dark:bg-black": true,
      })}
    >
      Footer
      <hr></hr>
      Footer!!
    </footer>
  );
}
