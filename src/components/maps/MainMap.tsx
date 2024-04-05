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
      alert('지오코딩 과정에서 오류가 발생했습니다. 다시 시도해주세요.');
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
        console.log(response.data);
        const regionInfo = response.data.results[0].region;
        const landInfo = response.data.results[2].land;
        console.log({ regionInfo, landInfo });
        let fullAddress = `${regionInfo.area1.alias} ${regionInfo.area2.name} ${landInfo.name} ${landInfo.number1} ${landInfo.number2}`;
        if (regionInfo.area3.name) fullAddress += `(${regionInfo.area3.name}`;
        if (regionInfo.area4.name) fullAddress += ` ${regionInfo.area4.name}`;
        if (landInfo.addition0.value)
          fullAddress += `, ${landInfo.addition0.value}`;
        fullAddress += ')';
        //  ${landInfo.number2} (${regionInfo.area3.name} ${regionInfo.area4.name}, ${landInfo.addition0.value})
        console.log(fullAddress);
        setSearchAddr(fullAddress);
        setCoordinate({ lat, lng });
      } else {
        alert('검색 결과가 없습니다.');
      }
    } catch (error) {
      console.error('지오코딩 오류: ', error);
      alert('지오코딩 과정에서 오류가 발생했습니다. 다시 시도해주세요.');
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
            getReverseGeoCode(e.coord.y, e.coord.x);
          }}
        />
        <MoveCenter lat={coordinate.lat} lng={coordinate.lng} />
        <MarkerCluster />
      </NaverMap>
    </MapDiv>
  );
}
