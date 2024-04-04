'use client';

import React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';

type Props = {
  addr: React.Dispatch<React.SetStateAction<string>>;
};
const scriptUrl =
  'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

export default function PostPopup({ addr }: Props) {
  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = (data: {
    address: string;
    addressType?: string;
    bname?: string;
    buildingName?: string;
  }) => {
    console.log(data);
    const { address, addressType, bname, buildingName } = data;
    let fullAddress = address;
    if (addressType === 'R') {
      const extraAddress = [bname, buildingName]
        .filter(item => item !== '')
        .join(', ');
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    addr(fullAddress);
  };

  return (
    <button
      className="relative min-w-[80px] h-12 m-2 rounded-full bg-lime-200 active:bg-lime-400 text-lime-600 shadow-xl font-bold"
      type="button"
      onClick={() => open({ onComplete: handleComplete })}
    >
      주소 찾기
    </button>
  );
}
