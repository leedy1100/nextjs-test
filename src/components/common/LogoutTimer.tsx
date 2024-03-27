'use client';

import React, { useEffect } from 'react';
import { signOut } from 'next-auth/react';

export default function LogoutTimer() {
  useEffect(() => {
    const events = ['mousemove', 'keydown', 'scroll'];

    let timer = setTimeout(() => signOut(), 10 * 60 * 1000);

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => signOut(), 10 * 60 * 1000); // 사용자 활동 감지 시 타이머 초기화
    };

    events.forEach(event => {
      window.addEventListener(event, resetTimer);
    });

    return () => {
      clearTimeout(timer);
      events.forEach(event => window.removeEventListener(event, resetTimer));
    };
  }, []);

  return null;
}
