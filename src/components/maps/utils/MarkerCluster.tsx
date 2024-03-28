'use client';

import React, { use, useEffect, useMemo, useState } from 'react';
import { Overlay, useMap, useNavermaps } from 'react-naver-maps';
import { makeMarkerClustering } from '@/utils/marker-cluster';
import axios from 'axios';

type Accident = {
  year: string;
  dt_006: string;
  dt_006_lv8: string;
  cd_008: string;
  cd_007: string;
  no_010: number;
  injpsn_co: number;
  no_011: number;
  no_012: number;
  no_013: number;
  cd_003: string;
  cd_014_lv1: string;
  cd_014_lv2: string;
  cd_014: string;
  cd_027_1_lv1: string;
  cd_027_1_lv2: string;
  cd_043_lv1: string;
  cd_043: string;
  cd_036_1_lv1: string;
  cd_036_1: string;
  cd_036_1_lv2: string;
  cd_036_2: string;
  x_coord: string;
  y_coord: string;
  grd_lo: string;
  grd_la: string;
}[];

type RandomCoordinate = {
  lat: number;
  lng: number;
}[];

export default function MarkerCluster() {
  const [data, setData] = useState<RandomCoordinate>([]);
  // https://github.com/navermaps/marker-tools.js/blob/master/marker-clustering/src/MarkerClustering.js
  // 예제에서 제공된 코드를 그대로 사용하되 naver 객체를 주입 받도록 간단히 makeMarkerClustering로 Wrapping 합니다.

  const navermaps = useNavermaps();
  const map = useMap();

  // https://github.com/zeakd/react-naver-maps/blob/main/website/src/samples/marker-cluster.js
  const MarkerClustering = makeMarkerClustering(window.naver);

  const htmlMarker1 = {
    content:
      '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-1.png);background-size:contain;"></div>',
    size: new navermaps.Size(40, 40),
    anchor: new navermaps.Point(20, 20),
  };
  const htmlMarker2 = {
    content:
      '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-2.png);background-size:contain;"></div>',
    size: new navermaps.Size(40, 40),
    anchor: new navermaps.Point(20, 20),
  };
  const htmlMarker3 = {
    content:
      '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-3.png);background-size:contain;"></div>',
    size: new navermaps.Size(40, 40),
    anchor: new navermaps.Point(20, 20),
  };
  const htmlMarker4 = {
    content:
      '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-4.png);background-size:contain;"></div>',
    size: new navermaps.Size(40, 40),
    anchor: new navermaps.Point(20, 20),
  };
  const htmlMarker5 = {
    content:
      '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-5.png);background-size:contain;"></div>',
    size: new navermaps.Size(40, 40),
    anchor: new navermaps.Point(20, 20),
  };

  const accident = async () => {
    const response = await axios.get('/api/accident');
    if (response.status === 200) {
      setData(response.data.data);
    }
  };

  const cluster = useMemo(() => {
    const markers: naver.maps.Marker[] = [];
    data.forEach(crdnt => {
      const latlng = new naver.maps.LatLng(
        Number(crdnt.lat),
        Number(crdnt.lng),
      );
      const marker = new naver.maps.Marker({
        position: latlng,
        draggable: true,
      });

      markers.push(marker);
    });

    const clustering = new MarkerClustering({
      minClusterSize: 2,
      maxZoom: 17, // 클러스터가 해제되고 개별 마커가 표시되기 시작하는 최대 줌 레벨입니다. 줌 레벨이 이 값보다 크면 마커가 개별적으로 표시됩니다.
      map,
      markers,
      disableClickZoom: false, // 클러스터를 클릭했을 때 줌인하는 기능을 비활성화할지 여부입니다.
      gridSize: 80, // 클러스터링 계산 시 사용되는 그리드의 크기(픽셀 단위)입니다. 이 값이 크면 클러스터가 더 크게 그룹화됩니다.
      icons: [htmlMarker1, htmlMarker2, htmlMarker3, htmlMarker4, htmlMarker5],
      indexGenerator: [10, 20, 50, 100, 200],
      stylingFunction(clusterMarker: any, count: number) {
        // without jquery $(clusterMarker.getElement()).find('div:first-child').text(count)
        clusterMarker.getElement().querySelector('div:first-child').innerText =
          count;
      },
    });
    return clustering;
  }, [data]);

  useEffect(() => {
    accident();
  }, []);

  type MapElementType = {
    setMap: (map: any) => void;
    getMap: () => any;
  };

  return <Overlay element={cluster as unknown as MapElementType} />;
}
