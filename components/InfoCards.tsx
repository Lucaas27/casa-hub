import InfoCard from './InfoCard';

const InfoCards = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 md:grid-cols-2">
        <InfoCard
          heading={'For Renters'}
          buttonInfo={{
            link: '/properties',
            text: 'Browse Properties',
          }}
        >
          Find your dream rental property. Bookmark properties and contact owners.
        </InfoCard>
        <InfoCard
          heading={'For Property Owners'}
          backgroundColor={'bg-primary-light'}
          textColor={'text-primary-light-foreground'}
          buttonInfo={{
            link: '/properties/add',
            text: 'Add Property',
            bgColor: 'bg-accent hover:bg-primary',
            txtColor: 'text-accent-foreground hover:text-primary-foreground',
          }}
        >
          List your properties and reach potential tenants. Rent as an airbnb or long term.
        </InfoCard>
      </div>
    </section>
  );
};
export default InfoCards;
