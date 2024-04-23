import Hero from '@/components/Hero';
import InfoCards from '@/components/InfoCards';
import HomeProperties from '@/components/HomeProperties';
import { Suspense } from 'react';
import HomePropertiesSkeleton from '@/components/skeleton/HomePropertiesSkeleton';

const Home = () => {
  return (
    <>
      <Hero />
      <InfoCards />
      <Suspense fallback={<HomePropertiesSkeleton />}>
        <HomeProperties />
      </Suspense>
    </>
  );
};

export default Home;
