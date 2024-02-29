'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useSWR from 'swr';
import debounce from 'debounce';
import LoadingIndicator from './ui/LoadingIndicator';
import SmLoadingIndicator from './ui/SmLoadingIndicator';
import RandomImage from './RandomImage';

export default function ProductSwiper() {
  const items = [
    {
      id: 1,
      text: '테스트 테스트 1',
      desc: '내용 입니다 ',
    },
    {
      id: 2,
      text: '테스트 테스트 2',
      desc: '내용 입니다',
    },
    {
      id: 3,
      text: '테스트 테스트 3',
      desc: '내용 입니다',
    },
    {
      id: 4,
      text: '테스트 테스트 4',
      desc: '내용 입니다',
    },
    {
      id: 5,
      text: '테스트 테스트 5',
      desc: '내용 입니다',
    },
    {
      id: 6,
      text: '테스트 테스트 6',
      desc: '내용 입니다',
    },
    {
      id: 7,
      text: '테스트 테스트 7',
      desc: '내용 입니다',
    },
    {
      id: 8,
      text: '테스트 테스트 8',
      desc: '내용 입니다',
    },
    {
      id: 9,
      text: '테스트 테스트 9',
      desc: '내용 입니다',
    },
    {
      id: 10,
      text: '테스트 테스트 10',
      desc: '내용 입니다',
    },
  ];

  const [widthState, setWidthState] = useState<number>(0);
  const handleResize = debounce(() => {
    setWidthState(window.innerWidth);
  }, 200);

  SwiperCore.use([Navigation, Scrollbar, A11y]);

  const { data, error, isLoading } = useSWR('https://picsum.photos/200', {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const errorApi = () => {
    throw new Error('API 호출 실패');
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      // cleanup
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    errorApi();
    setWidthState(window.innerWidth);
  }, []);
  return (
    <div className="">
      {isLoading ? (
        <div>
          <div className="hidden md:block">
            <LoadingIndicator />
          </div>
          <div className="block md:hidden">
            <SmLoadingIndicator />
          </div>
        </div>
      ) : (
        !error && (
          <Swiper
            rewind
            navigation
            slidesPerView={widthState > 767 ? 3 : 1}
            spaceBetween={30}
            modules={[Navigation]}
          >
            {items.map(item => (
              <SwiperSlide key={item.id}>
                <RandomImage url={data.url} />
                <p className="max-h-24 m-4 text-sm md:text-base">
                  {item.text} / {item.desc}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        )
      )}
    </div>
  );
}
