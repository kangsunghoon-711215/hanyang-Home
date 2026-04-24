'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoMapProps {
  lat: number;
  lng: number;
  level?: number;
  markerTitle?: string;
}

export default function KakaoMap({
  lat,
  lng,
  level = 3,
  markerTitle = '동양테크노',
}: KakaoMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const appKey = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY;

  useEffect(() => {
    if (!appKey || !containerRef.current) return;

    const scriptId = 'kakao-map-sdk';

    const initMap = () => {
      window.kakao.maps.load(() => {
        if (!containerRef.current) return;
        const coords = new window.kakao.maps.LatLng(lat, lng);
        const map = new window.kakao.maps.Map(containerRef.current, {
          center: coords,
          level,
        });
        const marker = new window.kakao.maps.Marker({ position: coords, map });
        const infowindow = new window.kakao.maps.InfoWindow({
          content: `<div style="padding:6px 10px;font-size:13px;font-weight:600;white-space:nowrap;">${markerTitle}</div>`,
        });
        infowindow.open(map, marker);
      });
    };

    if (window.kakao?.maps) {
      initMap();
      return;
    }

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false`;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      document.getElementById(scriptId)!.addEventListener('load', initMap);
    }
  }, [appKey, lat, lng, level, markerTitle]);

  if (!appKey) {
    return (
      <div
        className="w-full flex items-center justify-center bg-neutral-100 text-neutral-400 font-body text-sm"
        style={{ height: '400px' }}
      >
        NEXT_PUBLIC_KAKAO_MAP_KEY 환경변수가 설정되지 않았습니다.
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full"
      style={{ height: '400px' }}
      aria-label="위치 지도"
    />
  );
}
