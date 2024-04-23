import IProperty from '@/interfaces/Property';
import { FaCheck, FaRulerCombined } from 'react-icons/fa';
import { GiBathtub } from 'react-icons/gi';
import { IoBed, IoLocation } from 'react-icons/io5';
import PropertyAside from '@/components/property/PropertyAside';
import { FaXmark } from 'react-icons/fa6';

const PropertyInfo = ({ property }: { property: IProperty }) => {
  const {
    rates: { monthly, weekly, nightly },
  } = property;
  const displayRate = () => {
    const rates = ['Monthly', 'Weekly', 'Nightly'].map(rate => {
      return (
        <div
          key={rate}
          className="mb-4 flex items-center justify-center border-b border-border pb-4 md:border-b-0 md:pb-0"
        >
          <div className="mr-2 font-bold text-muted-foreground">{rate}</div>
          <div className="text-2xl font-bold text-primary">
            {rate === 'Monthly' && monthly ? (
              `${monthly.toLocaleString('en-GB', {
                style: 'currency',
                currency: 'GBP',
              })}`
            ) : rate === 'Weekly' && weekly ? (
              `${weekly.toLocaleString('en-GB', {
                style: 'currency',
                currency: 'GBP',
              })}`
            ) : rate === 'Nightly' && nightly ? (
              `${nightly.toLocaleString('en-GB', {
                style: 'currency',
                currency: 'GBP',
              })}`
            ) : (
              <FaXmark className="text-destructive" />
            )}
          </div>
        </div>
      );
    });

    return rates;
  };

  return (
    <section className="bg-primary-light">
      <div className="container px-6 py-10">
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-70/28">
          <main>
            <div className="rounded-lg bg-white p-6 text-center shadow-md md:text-left">
              <div className="mb-4 text-muted-foreground">{property.type}</div>
              <h1 className="mb-4 text-3xl font-bold">{property.title}</h1>
              <div className="mb-4 flex justify-center align-middle md:justify-start">
                <IoLocation className="fa-solid fa-location-dot mr-2 text-lg text-accent" />
                <p className="text-primary">
                  {property.location.city}, {property.location.county}, {property.location.postcode}
                </p>
              </div>

              <h3 className="my-6 bg-secondary p-2 text-lg font-bold text-secondary-foreground ">Rates & Options</h3>
              <div className="flex flex-col justify-around md:flex-row">{displayRate()}</div>
            </div>

            <div className="mt-6 rounded-lg bg-white p-6 text-center shadow-md md:text-left">
              <h3 className=" mb-6 bg-secondary p-2 text-lg font-bold text-secondary-foreground">
                Description & Details
              </h3>
              <div className="mb-6 flex justify-center gap-4 space-x-9 text-xl text-primary">
                <p>
                  <IoBed /> {property.beds}
                  <span className="ml-2 hidden sm:inline">Bed(s)</span>
                </p>
                <p>
                  <GiBathtub /> {property.toilets}
                  <span className="ml-2 hidden sm:inline">Bath(s)</span>
                </p>
                <p>
                  <FaRulerCombined />
                  {property.square_feet} <span className="hidden sm:inline">ft&sup2;</span>
                </p>
              </div>
              <p className="m-4 text-center text-muted-foreground">{property.description}</p>
            </div>

            <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
              <h3 className=" mb-6 bg-secondary p-2 text-center text-lg font-bold text-secondary-foreground md:text-left">
                Amenities
              </h3>
              <ul className="mx-4 grid list-none grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
                {property.amenities.map((amenity, index) => (
                  <li key={index} className="text-muted-foreground ">
                    <FaCheck className="mr-2 inline text-green-600" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
              <div id="map"></div>
            </div>
          </main>
          <PropertyAside />
        </div>
      </div>
    </section>
  );
};
export default PropertyInfo;
