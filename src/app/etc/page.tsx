import OptimizationTable from '@/components/OptimizationTable';
import PresenceComponent from '@/components/PresenceComponent';
import PageWrapper from '@/components/common/PageWrapper';
import AnimatedButton from '@/components/ui/AnimatedButton';
import LanguageButton from '@/components/ui/LanguageButton';
import React from 'react';

export default function page() {
  return (
    <PageWrapper>
      <div>
        <h1>Etc!</h1>
        <div className="flex flex-wrap justify-start items-center gap-4 m-4">
          <AnimatedButton animationType="bounce" text="bounce" />
          <AnimatedButton animationType="float" text="float" />
          <AnimatedButton animationType="spring" text="spring" />
          <AnimatedButton animationType="pulse" text="pulse" />
          <AnimatedButton animationType="wiggle" text="wiggle" />
          <AnimatedButton animationType="shiver" text="shiver" />
          <LanguageButton />
          <PresenceComponent />
          <div>
            <h1 className="mb-2">Pretendard Font Weight!</h1>
            <p className="font-thin">
              Pretendard font-thin 안녕하세요. 프리텐다드 무료 폰트입니다.
            </p>
            <p className="font-extralight">
              Pretendard font-extralight 안녕하세요. 프리텐다드 무료 폰트입니다.
            </p>
            <p className="font-light">
              Pretendard font-light 안녕하세요. 프리텐다드 무료 폰트입니다.
            </p>
            <p className="font-normal">
              Pretendard font-normal 안녕하세요. 프리텐다드 무료 폰트입니다.
            </p>
            <p className="font-medium">
              Pretendard font-medium 안녕하세요. 프리텐다드 무료 폰트입니다.
            </p>
            <p className="font-semibold">
              Pretendard font-semibold 안녕하세요. 프리텐다드 무료 폰트입니다.
            </p>
            <p className="font-bold">
              Pretendard font-bold 안녕하세요. 프리텐다드 무료 폰트입니다.
            </p>
            <p className="font-extrabold">
              Pretendard font-extrabold 안녕하세요. 프리텐다드 무료 폰트입니다.
            </p>
            <p className="font-black">
              Pretendard font-black 안녕하세요. 프리텐다드 무료 폰트입니다.
            </p>
          </div>
        </div>
        <OptimizationTable />
      </div>
    </PageWrapper>
  );
}
