import Skeleton from 'react-loading-skeleton';

const PropertyHeaderSkeleton = () => {
  return (
    <section>
      <div className="grid grid-cols-1">
        <Skeleton height={400} />
      </div>
    </section>
  );
};
export default PropertyHeaderSkeleton;
