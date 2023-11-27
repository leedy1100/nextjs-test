"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import RandomImage from "./RandomImage";
import useSWR from "swr";
import LoadingIndicator from "./ui/LoadingIndicator";

export default function ProductSwiper() {
  const items = [
    {
      id: 1,
      text: "테스트 테스트 1",
      desc: "내용 입니다 내용 입니다 내용 입니다 내용 입니다 내용 입니다 내용 입니다 내용 입니다 내용 입니다 내용 입니다 내용 입니다",
    },
    {
      id: 2,
      text: "테스트 테스트 2",
      desc: "내용 입니다",
    },
    {
      id: 3,
      text: "테스트 테스트 3",
      desc: "내용 입니다",
    },
    {
      id: 4,
      text: "테스트 테스트 4",
      desc: "내용 입니다",
    },
    {
      id: 5,
      text: "테스트 테스트 5",
      desc: "내용 입니다",
    },
    {
      id: 6,
      text: "테스트 테스트 6",
      desc: "내용 입니다",
    },
    {
      id: 7,
      text: "테스트 테스트 7",
      desc: "내용 입니다",
    },
    {
      id: 8,
      text: "테스트 테스트 8",
      desc: "내용 입니다",
    },
    {
      id: 9,
      text: "테스트 테스트 9",
      desc: "내용 입니다",
    },
    {
      id: 10,
      text: "테스트 테스트 10",
      desc: "내용 입니다",
    },
  ];

  SwiperCore.use([Navigation, Scrollbar, A11y]);

  const { data, error, isLoading } = useSWR("https://picsum.photos/200", {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return (
    <div className=" w-full h-full ">
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        !error && (
          <Swiper
            rewind={true}
            navigation={true}
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false, // 사용자 상호작용시 슬라이더 일시 정지 비활성
            // }}
            modules={[Pagination]}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <RandomImage url={data.url} />
                <p className="h-24 md:h-[150px] m-4 text-sm md:text-base">
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
