import MySubscribe from "@/components/MySubscribe";
import PageWrapper from "@/components/common/PageWrapper";
import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <PageWrapper>
      <div>
        <div className="flex justify-center items-center gap-4">
          <p className="text-center">구독이 너무 많은거 아닌겨? 이?</p>
          <Image
            src={"/assets/images/surprise_cat.gif" ?? ""}
            alt=""
            width={60}
            height={60}
          />
        </div>
        <div>
          <div className="w-full">
            <MySubscribe />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
