import Image from 'next/image';
import Link from 'next/link';
import pic from '@/public/images/properties/a1.jpg';
import IProperty from '../interfaces/Property';
import { IoBed, IoLocation } from 'react-icons/io5';
import { GiBathtub } from 'react-icons/gi';
import { FaRulerCombined } from 'react-icons/fa';
import { BsCurrencyDollar } from 'react-icons/bs';

interface PropertyCardProps {
  property: IProperty;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const displayRate = () => {
    const {
      rates: { monthly, weekly, nightly },
    } = property;

    if (monthly) {
      return `${monthly.toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP',
      })}/month`;
    } else if (weekly) {
      return `${weekly.toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP',
      })}/week`;
    } else if (nightly) {
      return `${nightly.toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP',
      })}/night`;
    } else {
      return `No rate set`;
    }
  };

  return (
    <article className="relative rounded-xl bg-secondary text-secondary-foreground shadow-md">
      <Image
        src={`/images/properties/${property.images[0] || pic}`}
        alt="property"
        height={0}
        width={0}
        sizes="100vw"
        className="h-auto w-full rounded-t-xl"
      />
      <div className="p-4">
        <div className="mb-6 text-left md:text-center lg:text-left">
          <div className="text-muted-foreground">{property.type}</div>
          <h3 className="text-xl font-bold">{property.name}</h3>
        </div>
        <h3 className="absolute right-[10px] top-[10px] rounded-lg bg-white px-4 py-2 text-right font-bold text-primary md:text-center lg:text-right">
          {displayRate()}
        </h3>

        <div className="mb-4 flex items-end justify-center gap-4 text-muted-foreground">
          <p>
            <IoBed />
            {property.beds}
            <span className="md:hidden lg:inline"> Bed(s)</span>
          </p>
          <p>
            <GiBathtub /> {property.baths}
            <span className="md:hidden lg:inline"> Bath(s)</span>
          </p>
          <p>
            <FaRulerCombined />
            {property.square_feet} <span className="inline">ft&sup2;</span>
          </p>
        </div>

        <div className="mb-4 flex justify-center gap-4 text-sm text-secondary-foreground">
          {property.rates.monthly && (
            <p>
              <BsCurrencyDollar className="mr-1 inline align-middle" />
              Monthly
            </p>
          )}
          {property.rates.weekly && (
            <p>
              <BsCurrencyDollar className="mr-1 inline align-middle" />
              Weekly
            </p>
          )}
          {property.rates.nightly && (
            <p>
              <BsCurrencyDollar className="mr-1 inline align-middle" />
              Nightly
            </p>
          )}
        </div>

        <div className="border-border-foreground mb-5 border"></div>

        <div className="mb-4 flex flex-col items-center justify-between text-secondary-foreground lg:flex-row">
          <div className="mb-4 flex gap-2 align-middle lg:mb-0">
            <IoLocation className="text-lg text-destructive" />
            <span>
              {property.location.city} - {property.location.state}
            </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className="h-[36px] rounded-lg bg-primary px-4 py-2 text-center text-sm text-primary-foreground hover:bg-primary-light hover:text-primary-light-foreground"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
};
export default PropertyCard;
