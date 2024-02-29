'use client';

import DefaultLoading from '@/components/ui/DefaultLoading';

export default function loading() {
  return (
    <div className="fixed w-screen h-screen z-[100] bg-white dark:bg-black top-0 left-0 md:hidden">
      <div className="flex justify-center items-center w-full h-full">
        <DefaultLoading />
      </div>
    </div>
  );
}
