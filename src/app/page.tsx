import CtrlState from "@/components/CtrlState";
import ProductSwiper from "@/components/ProductSwiper";
import { CountStore } from "@/store/store";

export default function Home() {
  return (
    <section className="h-[1024px]">
      <div className="">
        <ProductSwiper />
      </div>
      <CtrlState />
    </section>
  );
}
