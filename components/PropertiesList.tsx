import IProperty from '@/interfaces/Property';
import { fetchData } from '@/utils/requests';
import PropertyCard from '@/components/PropertyCard';

const PropertiesList = async () => {
  const properties = await fetchData('/properties');

  return (
    <section>
      <div className="container px-4 py-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {(properties as unknown as IProperty[]).length > 0 ? (
            properties.map((property: IProperty) => <PropertyCard key={property._id} property={property} />)
          ) : (
            <p className="text-center">No properties found</p>
          )}
        </div>
      </div>
    </section>
  );
};
export default PropertiesList;
