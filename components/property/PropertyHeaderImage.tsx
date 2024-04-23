import Image from 'next/image';

const PropertyHeaderImage = ({ img }: { img: string }) => {
  return (
    <section>
      <div className="grid grid-cols-1">
        <Image
          src={`/images/properties/${img}`}
          alt="property image"
          className="h-[400px] w-full object-cover"
          width={0}
          height={0}
          sizes="100vw"
          priority={true}
        />
      </div>
    </section>
  );
};
export default PropertyHeaderImage;
