import FirebaseMessage from '@/components/FirebaseMessage';
import NotificationButton from '@/components/NotificationButton';
import React from 'react';

export default function page() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="font-bold">Notification</h1>
        <div>branch: ldy-2 test1</div>
        <div>branch: ldy-2 test2</div>
        <div>branch: ldy-2 test3</div>
        <div>branch: ldy-2 test4</div>
        <div>branch: ldy-2 test5</div>
        <NotificationButton />
      </div>
      <div>
        <h1 className="font-bold">FCM Notification</h1>
        <FirebaseMessage />
      </div>
    </div>
  );
}
