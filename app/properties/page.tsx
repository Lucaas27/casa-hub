import properties from '@/properties.json';
import PropertyCard from '@/components/PropertyCard';
import IProperty from '../../interfaces/Property';

const PropertiesPage = () => {
  return (
    <section>
      <div className="container px-4 py-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {(properties as unknown as IProperty[]).length > 0 ? (
            properties.map((property) => <PropertyCard key={property._id} property={property} />)
          ) : (
            <p className="text-center">No properties found</p>
          )}
        </div>
      </div>
    </section>
  );
};
export default PropertiesPage;
