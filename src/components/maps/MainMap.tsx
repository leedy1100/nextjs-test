'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Container as MapDiv, NaverMap, Marker } from 'react-naver-maps';
import axios from 'axios';
import MarkerCluster from './utils/MarkerCluster';
import MoveCenter from './utils/MoveCenter';
import PostPopup from '../PostPopup';

const DEFAULT_MAP_HEIGHT = 800;
const MIN_WIDTH = 768;
const TOP_AND_BOTTOM_HEIGHT = 136;

export default function MainMap() {
  const [coordinate, setCoordinate] = useState<{ lat: number; lng: number }>({
    lat: 37.5666103,
    lng: 126.9783882,
  });
  const [searchAddr, setSearchAddr] = useState('');

  const getGeoCode = useCallback(async (address: string) => {
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
      alert('불러오는 과정에서 오류가 발생했습니다. 다시 시도해주세요.');
    }
  }, []);

  const getReverseGeoCode = useCallback(async (lat: number, lng: number) => {
    if (!lat || !lng) {
      alert('좌표를 불러오는데 실패했어요.');
      return;
    }
    try {
      const response = await axios.get('/api/maps/geocode/reverse', {
        params: {
          coords: `${lng},${lat}`,
        },
      });
      if (response.status === 200) {
        if (response.data.status.code === 0) {
          const address = response.data.results[0];
          const { land, region } = address;
          let fullAddress = `${region.area1.alias} ${region.area2.name} ${land.name} ${land.number1} ${land.number2}`;
          const extraAddress = [region.area3.name, land.addition0.value]
            .filter(item => item !== '')
            .join(', ');

          fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
          setSearchAddr(fullAddress);
          setCoordinate({ lat, lng });
        }
        if (response.data.status.code === 3) {
          alert('해당 위치의 정확한 주소를 모르겠어요. 😥');
        }
        if (response.data.status.code === 100) {
          alert('요청 정보를 다시 확인해주세요. ☹️');
        }
        if (response.data.status.code === 900) {
          alert('알 수 없는 오류가 발생했어요.😳');
        }
      }
    } catch (error) {
      console.error('지오코딩 오류: ', error);
      alert('주소 정보를 불러오는데 실패했어요. 😳');
    }
  }, []);

  const mapHeight = useMemo(() => {
    let height = DEFAULT_MAP_HEIGHT;
    if (typeof window !== 'undefined' && window.innerWidth < MIN_WIDTH)
      height = window.innerHeight - TOP_AND_BOTTOM_HEIGHT;

    return height;
  }, []);

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchAddr) {
      getGeoCode(searchAddr);
    }
  };

  const confirmReverseGeoCode = (lat: number, lng: number) => {
    if (window.confirm('선택한 위치의 주소를 불러올까요?')) {
      getReverseGeoCode(lat, lng);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setCoordinate({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      error => {
        console.error('위치 정보를 가져오는데 실패했습니다: ', error);
        alert('위치 정보를 가져오는데 실패했습니다.');
      },
    );
  }, []);

  return (
    <MapDiv
      style={{
        width: '100%',
        height: mapHeight,
      }}
      className="h-[calc(100vh-136px)]"
    >
      <div className="relative flex">
        <button
          className="min-w-[80px] h-12 m-2 rounded-full bg-lime-200 active:bg-lime-400 text-lime-600 shadow-xl font-bold"
          onClick={() => getGeoCode(searchAddr)}
        >
          이동
        </button>
        <input
          className="w-[200px] m-2 p-2 rounded focus:outline outline-lime-200 outline-4"
          onKeyDown={e => handleInput(e)}
          placeholder="주소를 입력하세요"
          value={searchAddr}
          onChange={e => setSearchAddr(e.target.value)}
        />
      </div>
      <PostPopup addr={setSearchAddr} />
      <NaverMap defaultCenter={coordinate} zoom={16}>
        <Marker
          position={coordinate}
          draggable
          onClick={() => {
            alert(`위도: ${coordinate.lat}, 경도: ${coordinate.lng}`);
          }}
          icon={{
            url: '/assets/images/maps/marker/red_marker3.png',
            size: { width: 40, height: 40 },
            scaledSize: { width: 40, height: 40 },
            anchor: { x: 25, y: 25 },
          }}
          onDragend={e => {
            confirmReverseGeoCode(e.coord.y, e.coord.x);
          }}
        />
        <MoveCenter lat={coordinate.lat} lng={coordinate.lng} />
        <MarkerCluster />
      </NaverMap>
    </MapDiv>
  );
}
