import React, { useEffect } from "react";
import { SyncLoader } from "react-spinners";

export default function DefaultLoading() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${window.scrollY}px`;
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.overflow = "unset";
    };
  }, []);
  return <SyncLoader color="#228be6" />;
}
