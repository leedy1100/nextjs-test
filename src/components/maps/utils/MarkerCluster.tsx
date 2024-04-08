'use client';

import React, { use, useEffect, useMemo, useState } from 'react';
import { Overlay, useMap, useNavermaps } from 'react-naver-maps';
import { makeMarkerClustering } from '@/utils/marker-cluster';
import axios from 'axios';

type RandomCoordinate = {
  lat: number;
  lng: number;
}[];

export default function MarkerCluster() {
  const [data, setData] = useState<RandomCoordinate>([]);

  const navermaps = useNavermaps();
  const map = useMap();

  // https://github.com/zeakd/react-naver-maps/blob/main/website/src/samples/marker-cluster.js
  const MarkerClustering = makeMarkerClustering(window.naver);

  const htmlMarker1 = {
    content:
      '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:#82c91e;text-align:center;font-weight:bold;background:url(/assets/images/maps/marker/marker_cluster1.png);background-size:contain;"></div>',
    size: new navermaps.Size(40, 40),
    anchor: new navermaps.Point(20, 20),
  };
  const htmlMarker2 = {
    content:
      '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:#82c91e;text-align:center;font-weight:bold;background:url(/assets/images/maps/marker/marker_cluster1.png);background-size:contain;"></div>',
    size: new navermaps.Size(40, 40),
    anchor: new navermaps.Point(20, 20),
  };
  const htmlMarker3 = {
    content:
      '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:#82c91e;text-align:center;font-weight:bold;background:url(/assets/images/maps/marker/marker_cluster1.png);background-size:contain;"></div>',
    size: new navermaps.Size(40, 40),
    anchor: new navermaps.Point(20, 20),
  };
  const htmlMarker4 = {
    content:
      '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:#82c91e;text-align:center;font-weight:bold;background:url(/assets/images/maps/marker/marker_cluster1.png);background-size:contain;"></div>',
    size: new navermaps.Size(40, 40),
    anchor: new navermaps.Point(20, 20),
  };
  const htmlMarker5 = {
    content:
      '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:#343a40;text-align:center;font-weight:bold;background:url(/assets/images/maps/marker/marker_cluster2.png);background-size:contain;"></div>',
    size: new navermaps.Size(40, 40),
    anchor: new navermaps.Point(20, 20),
  };

  const fetchAccidentData = async () => {
    try {
      const response = await axios.get('/api/accident');
      if (response.status === 200) {
        setData(response.data.data);
      }
    } catch (error) {
      console.error('사고 데이터 조회 중 오류 발생: ', error);
    }
  };

  const cluster = useMemo(() => {
    const markers: naver.maps.Marker[] = [];
    data.forEach(crdnt => {
      const latlng = new navermaps.LatLng(Number(crdnt.lat), Number(crdnt.lng));
      const marker = new navermaps.Marker({
        position: latlng,
        draggable: false,
      });

      markers.push(marker);
    });

    const clustering = new MarkerClustering({
      minClusterSize: 2,
      maxZoom: 17, // 클러스터가 해제되고 개별 마커가 표시되기 시작하는 최대 줌 레벨입니다. 줌 레벨이 이 값보다 크면 마커가 개별적으로 표시됩니다.
      map,
      markers,
      disableClickZoom: false, // 클러스터를 클릭했을 때 줌인하는 기능을 비활성화할지 여부입니다.
      gridSize: 120, // 클러스터링 계산 시 사용되는 그리드의 크기(픽셀 단위)입니다. 이 값이 크면 클러스터가 더 크게 그룹화됩니다.
      icons: [htmlMarker1, htmlMarker2, htmlMarker3, htmlMarker4, htmlMarker5],
      indexGenerator: [10, 20, 50, 100, 200],
      stylingFunction(clusterMarker: any, count: number) {
        clusterMarker.getElement().querySelector('div:first-child').innerText = count;
      },
    });
    return clustering;
  }, [data]);

  useEffect(() => {
    fetchAccidentData();
  }, []);

  type MapElementType = {
    setMap: (map: any) => void;
    getMap: () => any;
  };

  return <Overlay element={cluster as unknown as MapElementType} />;
}
