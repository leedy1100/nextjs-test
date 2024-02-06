"use client";

import React, { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getMessaging, onMessage, getToken } from "firebase/messaging";

export default function FirebaseMessage() {
  const onMessageFCM = async () => {
    // 브라우저에 알림 권한을 요청합니다.
    const permission = await Notification.requestPermission();
    if (permission !== "granted") return;

    // 이곳에도 아까 위에서 앱 등록할때 받은 'firebaseConfig' 값을 넣어주세요.
    const firebaseApp = initializeApp({
      apiKey: "AIzaSyCbNX-g614Z5_KdiQ0kSp5dRFoMUCSY_d8",
      authDomain: "dooy-d4c6b.firebaseapp.com",
      projectId: "dooy-d4c6b",
      storageBucket: "dooy-d4c6b.appspot.com",
      messagingSenderId: "996170370754",
      appId: "1:996170370754:web:7faba6b00f91c8eec5f55b",
      measurementId: "G-VT4CK7T74Q",
    });

    const messaging = getMessaging(firebaseApp);

    // 이곳 vapidKey 값으로 아까 토큰에서 사용한다고 했던 인증서 키 값을 넣어주세요.
    getToken(messaging, {
      vapidKey:
        "BK20ACwjFfMuPeXxPcW7125RHKvHcfl5PBdpMYkwXkYvWMhWbyjE7t59aMUXfJue6Mmq58XxdLbNF5ZGyygwpiE",
    })
      .then((currentToken) => {
        if (currentToken) {
          // 정상적으로 토큰이 발급되면 콘솔에 출력합니다.
          console.log(currentToken);
        } else {
          console.log(
            "No registration token available. Request permission to generate one.",
          );
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
      });

    // 메세지가 수신되면 역시 콘솔에 출력합니다.
    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
    });
  };

  useEffect(() => {
    onMessageFCM();
  }, []);

  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}
