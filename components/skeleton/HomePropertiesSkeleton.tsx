import Skeleton from 'react-loading-skeleton';
import PropertyCardSkeleton from '@/components/skeleton/PropertyCardSkeleton';

const HomePropertiesSkeleton = () => {
  return (
    <section className="px-4 py-6">
      <div className="container">
        <h2 className="mb-6 text-center text-3xl font-bold text-secondary-foreground">
          <Skeleton width={400} count={1} />
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <PropertyCardSkeleton />
          <PropertyCardSkeleton />
          <PropertyCardSkeleton />
        </div>
        <Skeleton width={464} height={56} count={1} containerClassName="flex justify-center px-4 py-6 mt-4" />
      </div>
    </section>
  );
};
export default HomePropertiesSkeleton;
