import { NextPageProps } from '@/interfaces/NextPageProps';
import { fetchData } from '@/utils/requests';
import IProperty from '@/interfaces/Property';
import NotFoundPage from '@/app/not-found';
import { Suspense } from 'react';
import PropertyHeaderImageSkeleton from '@/components/skeleton/PropertyHeaderImageSkeleton';
import PropertyHeaderImage from '@/components/property/PropertyHeaderImage';
import { FaArrowLeftLong } from 'react-icons/fa6';
import PropertyInfo from '@/components/property/PropertyInfo';
import Link from 'next/link';

const PropertyPage = async ({ params }: NextPageProps) => {
  const { id } = params;

  if (!id) return;

  // new Promise(resolve => setTimeout(resolve, 10000));
  const property: IProperty = await fetchData(`/properties/${id}`);

  if (!property || Array.isArray(property)) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Suspense fallback={<PropertyHeaderImageSkeleton />}>
        <PropertyHeaderImage img={property.images[0]} />
      </Suspense>
      <section>
        <div className="container m-auto px-6 py-6">
          <Link href="/properties" className="flex items-center text-secondary-foreground hover:text-primary">
            <FaArrowLeftLong className="mr-2" /> Back to Properties
          </Link>
        </div>
      </section>
      <PropertyInfo property={property} />
    </>
  );
};
export default PropertyPage;
