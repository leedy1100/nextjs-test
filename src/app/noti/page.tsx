import FirebaseMessage from "@/components/FirebaseMessage";
import NotificationButton from "@/components/NotificationButton";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col">
      <div>
        <h1>Notification</h1>
        <NotificationButton />
      </div>
      <div>
        <h1>FCM Notification</h1>
        <FirebaseMessage />
      </div>
    </div>
  );
}
