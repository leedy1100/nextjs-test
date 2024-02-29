'use client';

import React from 'react';

type ErrorUIProps = {
  error: unknown;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorUIProps) {
  return (
    <div className="fixed flex w-screen h-screen z-10 bg-white dark:bg-black items-center justify-center top-0 left-0">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">에러가 발생했습니다.😥</h1>
        <p className="text-gray-600 text-lg mb-8">
          죄송합니다. 잠시 후 다시 시도해주세요.
        </p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={reset}
        >
          Retry
        </button>
      </div>
    </div>
  );
}
