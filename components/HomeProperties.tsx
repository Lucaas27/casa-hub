import PropertyCard from '@/components/PropertyCard';
import Link from 'next/link';
import IProperty from '@/interfaces/Property';
import { fetchData } from '@/utils/requests';

const HomeProperties = async () => {
  const properties = await fetchData('/properties');
  const randomProperties = properties.sort(() => Math.random() - Math.random()).slice(0, 3);
  return (
    <>
      <section className="px-4 py-6">
        <div className="container">
          <h2 className="mb-6 text-center text-3xl font-bold text-secondary-foreground">Recent Properties</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {randomProperties.length > 0 ? (
              randomProperties.map((property: IProperty) => <PropertyCard key={property._id} property={property} />)
            ) : (
              <p className="text-center">No properties found</p>
            )}
          </div>
        </div>
      </section>
      <section className="m-auto my-10 max-w-lg px-6">
        <Link
          href="/properties"
          className="block rounded-xl bg-accent px-6 py-4 text-center text-accent-foreground hover:bg-primary hover:text-primary-foreground"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
