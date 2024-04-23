import Skeleton from 'react-loading-skeleton';

const PropertyCardSkeleton = () => {
  return (
    <article className="relative rounded-xl bg-secondary text-secondary-foreground shadow-md">
      <Skeleton height={210} />
      <div className="p-4">
        <div className="mb-6 ">
          <div className="text-start">
            <Skeleton width={80} />
          </div>
          <h3 className="text-start">
            <Skeleton width={150} />
          </h3>
        </div>
        <h3 className="absolute right-[10px] top-[10px] rounded-lg px-4 py-2 text-right font-bold text-primary md:text-center lg:text-right">
          <Skeleton width={100} height={20} />
        </h3>

        <div className="mb-4 flex items-end justify-center gap-4 text-muted-foreground">
          <p>
            <Skeleton width={50} />
          </p>
          <p>
            <Skeleton width={50} />
          </p>
          <p>
            <Skeleton width={50} />
          </p>
        </div>

        <div className="mb-4 flex justify-center gap-4 text-sm text-secondary-foreground">
          <Skeleton width={150} />
        </div>

        <div className="border-border-foreground mb-5 border"></div>

        <div className="mb-4 flex flex-col items-center justify-between text-secondary-foreground lg:flex-row">
          <div className="mb-4 flex gap-2 align-middle lg:mb-0">
            <Skeleton width={50} />
          </div>
          <Skeleton width={100} />
        </div>
      </div>
    </article>
  );
};
export default PropertyCardSkeleton;
