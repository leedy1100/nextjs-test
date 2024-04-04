'use client';

import { set } from 'firebase/database';
import React, { useEffect, useRef, useState } from 'react';
import { useDaumPostcodePopup, DaumPostcodeEmbed } from 'react-daum-postcode';

type Props = {
  addr: React.Dispatch<React.SetStateAction<string>>;
};
const scriptUrl =
  'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

export default function PostPopup({ addr }: Props) {
  const [open, setOpen] = useState(false);

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
    setOpen(false);
  };

  return (
    <div>
      <button
        className="relative min-w-[80px] h-12 m-2 rounded-full bg-lime-200 active:bg-lime-400 text-lime-600 shadow-xl font-bold"
        type="button"
        onClick={() => setOpen(true)}
      >
        주소 검색
      </button>
      {open && (
        <div>
          <div className="relative flex justify-end">
            <button
              className="p-1 font-bold cursor-pointer bg-black text-white"
              onClick={() => setOpen(false)}
            >
              닫기
            </button>
          </div>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </div>
      )}
    </div>
  );
}
