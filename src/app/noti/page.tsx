import FirebaseMessage from '@/components/FirebaseMessage';
import NotificationButton from '@/components/NotificationButton';
import React from 'react';

export default function page() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="font-bold">Notification</h1>
        <NotificationButton />
      </div>
      <div>
        <h1 className="font-bold">FCM Notification</h1>
        <FirebaseMessage />
      </div>
    </div>
  );
}
