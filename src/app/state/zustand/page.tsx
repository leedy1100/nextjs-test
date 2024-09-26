import React from 'react';
import CtrlState from '@/components/CtrlState';
import PageWrapper from '@/components/common/PageWrapper';

export default function page() {
  return (
    <PageWrapper>
      <div>
        <h1>zustand 상태관리 라이브러리</h1>
        <div>branch: ldy-3 test1</div>
        <div>branch: ldy-3 test2</div>
        <div>branch: ldy-3 test3</div>
        <CtrlState />
      </div>
    </PageWrapper>
  );
}
