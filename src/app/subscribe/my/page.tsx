import MySubscribe from '@/components/MySubscribe';
import PageWrapper from '@/components/common/PageWrapper';
import React from 'react';
import Image from 'next/image';

export default function page() {
  return (
    <PageWrapper>
      <div>
        <div className="flex justify-center items-center gap-4">
          <p className="text-center text-neutral-400">내 지갑 루팡 목록</p>
          <Image
            src={'/assets/images/surprise_cat.gif' ?? ''}
            alt=""
            width={60}
            height={60}
          />
        </div>
        <div>
          <div className="w-full">
            <MySubscribe />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
