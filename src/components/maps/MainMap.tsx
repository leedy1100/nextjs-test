'use client';

import React, { useCallback, useRef, useState } from 'react';
import { Container as MapDiv, NaverMap, Marker } from 'react-naver-maps';
import axios from 'axios';

export default function MainMap() {
  const [coordinate, setCoordinate] = useState<{ lat: number; lng: number }>({
    lat: 37.5666103,
    lng: 126.9783882,
  });
  const [zoom, setZoom] = useState<number>(17);
  const addrNm = useRef<HTMLInputElement>(null);

  const getGeoCode = useCallback(async (address: string) => {
    const response = await axios.get('/api/maps/geocode', {
      params: {
        query: address,
      },
    });
    if (response.status === 200) {
      if (response.data.addresses.length === 0) {
        alert('검색 결과가 없습니다.');
        return;
      }

      const { x, y } = response.data.addresses[0];

      setCoordinate({ lat: y, lng: x });
      setZoom(18);
    } else {
      console.error('지오코딩 오류:', response.data.message);
    }
  }, []);

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && addrNm.current) {
      getGeoCode(addrNm.current.value);
    }
  };

  return (
    <MapDiv
      style={{
        height: 400,
      }}
    >
      <button
        className="relative w-20 h-12 rounded-full bg-lime-200 active:bg-lime-400 text-lime-600 m-2 shadow-xl font-bold"
        onClick={() => getGeoCode(addrNm.current?.value || '')}
      >
        이동
      </button>
      <input
        className="relative ml-2 p-2 rounded focus:outline outline-lime-200 outline-4"
        onKeyDown={e => handleInput(e)}
        ref={addrNm}
        placeholder="주소를 입력하세요"
      />
      <NaverMap center={coordinate} zoom={zoom}>
        <Marker position={coordinate} />
      </NaverMap>
    </MapDiv>
  );
}
