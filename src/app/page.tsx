import LogoutTimer from '@/components/common/LogoutTimer';
import PageWrapper from '@/components/common/PageWrapper';
import MainMap from '@/components/maps/MainMap';

export default function Home() {
  return (
    <PageWrapper>
      <section className="">
        <MainMap />
      </section>
      <LogoutTimer />
    </PageWrapper>
  );
}
