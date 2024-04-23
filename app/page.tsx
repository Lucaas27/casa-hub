import Hero from '@/components/home/Hero';
import InfoCards from '@/components/home/InfoCards';
import HomeProperties from '@/components/home/HomeProperties';
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
