import ProductSwiper from '@/components/ProductSwiper';
import PageWrapper from '@/components/common/PageWrapper';

export default function Home() {
  return (
    <PageWrapper>
      <section className="h-[1024px]">
        <div className="">
          <ProductSwiper />
        </div>
      </section>
    </PageWrapper>
  );
}
