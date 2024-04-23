import PropertyCardSkeleton from '@/components/skeleton/PropertyCardSkeleton';

const PropertiesPageSkeleton = () => {
  return (
    <section>
      <div className="container px-4 py-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <PropertyCardSkeleton />
          <PropertyCardSkeleton />
          <PropertyCardSkeleton />
          <PropertyCardSkeleton />
          <PropertyCardSkeleton />
          <PropertyCardSkeleton />
        </div>
      </div>
    </section>
  );
};
export default PropertiesPageSkeleton;
