"use client";

import React from "react";

export default function NotificationButton() {
  const notify = () => {
    console.log(Notification.permission);
    if (!("Notification" in window)) {
      alert("This browser does not support system notifications");
    } else if (Notification.permission === "granted") {
      new Notification("web notification test!");
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          new Notification("web notification test!");
        }
      });
    }
  };

  return (
    <div>
      <button onClick={notify}>Notify me!</button>
    </div>
  );
}
