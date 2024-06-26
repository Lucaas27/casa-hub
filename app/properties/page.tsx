import PropertiesList from '@/components/properties/PropertiesList';
import PropertiesPageSkeleton from '@/components/skeleton/PropertiesPageSkeleton';
import { Suspense } from 'react';

const PropertiesPage = async () => {
  return (
    <Suspense fallback={<PropertiesPageSkeleton />}>
      <PropertiesList />
    </Suspense>
  );
};

export default PropertiesPage;
