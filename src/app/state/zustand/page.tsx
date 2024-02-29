import React from 'react';
import CtrlState from '@/components/CtrlState';
import PageWrapper from '@/components/common/PageWrapper';

export default function page() {
  return (
    <PageWrapper>
      <div>
        <h1>zustand 상태관리 라이브러리</h1>
        <CtrlState />
      </div>
    </PageWrapper>
  );
}
