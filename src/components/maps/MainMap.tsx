'use client';

import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Container as MapDiv, NaverMap, Marker } from 'react-naver-maps';
import axios from 'axios';
import MarkerCluster from './utils/MarkerCluster';

const DEFAULT_MAP_HEIGHT = 800;
const MIN_WIDTH = 768;
const TOP_AND_BOTTOM_HEIGHT = 136;

export default function MainMap() {
  const [coordinate, setCoordinate] = useState<{ lat: number; lng: number }>({
    lat: 37.5666103,
    lng: 126.9783882,
  });
  const addrNm = useRef<HTMLInputElement>(null);

  const getGeoCode = useCallback(
    async (address: string) => {
      if (!address) {
        alert('주소를 입력하세요.');
        return;
      }
      try {
        const response = await axios.get('/api/maps/geocode', {
          params: {
            query: address,
          },
        });
        if (response.status === 200 && response.data.addresses.length > 0) {
          const { x, y } = response.data.addresses[0];
          setCoordinate({ lat: y, lng: x });
        } else {
          alert('검색 결과가 없습니다.');
        }
      } catch (error) {
        console.error('지오코딩 오류: ', error);
        alert('지오코딩 과정에서 오류가 발생했습니다. 다시 시도해주세요.');
      }
    },
    [setCoordinate],
  );

  const mapHeight = useMemo(() => {
    let height = DEFAULT_MAP_HEIGHT;
    if (typeof window !== 'undefined' && window.innerWidth < MIN_WIDTH)
      height = window.innerHeight - TOP_AND_BOTTOM_HEIGHT;

    return height;
  }, []);

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && addrNm.current) {
      getGeoCode(addrNm.current.value);
    }
  };

  return (
    <MapDiv
      style={{
        height: mapHeight,
      }}
      className="h-[calc(100vh-136px)]"
    >
      <div className="relative flex">
        <button
          className="min-w-[80px] h-12 m-2 rounded-full bg-lime-200 active:bg-lime-400 text-lime-600 shadow-xl font-bold"
          onClick={() => getGeoCode(addrNm.current?.value || '')}
        >
          이동
        </button>
        <input
          className="w-[200px] m-2 p-2 rounded focus:outline outline-lime-200 outline-4"
          onKeyDown={e => handleInput(e)}
          ref={addrNm}
          placeholder="주소를 입력하세요"
        />
      </div>
      <NaverMap center={coordinate} zoom={16}>
        <Marker
          position={coordinate}
          onClick={() => {
            alert(`위도: ${coordinate.lat}, 경도: ${coordinate.lng}`);
          }}
        />
        {/* <Marker position={{ lat: 37.5666103, lng: 126.9783882 }} />
        <Marker position={{ lat: 37.483569, lng: 127.032598 }} />
        <Marker position={{ lat: 37.532527, lng: 126.99049 }} /> */}
        {/* <CtrlZoom /> */}
        <MarkerCluster />
      </NaverMap>
    </MapDiv>
  );
}
