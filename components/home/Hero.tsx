const Hero = () => {
  return (
    <section className=" mb-4 bg-card py-20 text-card-foreground">
      <div className="container flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">Find The Perfect Rental</h1>
          <p className="my-4 text-xl text-muted">Discover the perfect property that suits your needs.</p>
        </div>
        <form className="mx-auto mt-3 flex w-full max-w-2xl flex-col items-center md:flex-row">
          <div className="mb-4 w-full md:mb-0 md:w-3/5 md:pr-2">
            <label htmlFor="location" className="sr-only">
              Location
            </label>
            <input
              type="text"
              id="location"
              placeholder="Enter Location (City, County, PostCode, etc)"
              className="w-full rounded-lg bg-secondary px-4 py-3 text-secondary-foreground focus:outline-none focus:ring focus:ring-ring"
            />
          </div>
          <div className="w-full md:w-2/5 md:pl-2">
            <label htmlFor="property-type" className="sr-only">
              Property Type
            </label>
            <select
              id="property-type"
              className="w-full rounded-lg bg-secondary px-4 py-3 text-secondary-foreground focus:outline-none focus:ring focus:ring-ring"
            >
              <option value="All">All</option>
              <option value="Flat or Apartment">Flat / Apartment</option>
              <option value="Studio">Studio</option>
              <option value="House">House</option>
              <option value="Bungalow">Bungalow</option>
              <option value="Commercial Property">Commercial Property</option>
              <option value="Room">Room</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-accent px-6 py-3 text-accent-foreground hover:bg-secondary hover:text-secondary-foreground focus:outline-none focus:ring focus:ring-ring md:ml-4 md:mt-0 md:w-auto"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};
export default Hero;
