import PropertyCard from "./PropertyCard";

const PropertyGrid = () => {
  const properties = [
    {
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
      tag: "New",
      title: "Luxury 3BHK, Whitefield",
      description: "Premium 4BHK villa with landscaped gardens and private pool. Gated community, world-class amenities."
    },
    {
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
      tag: "Hot Deal",
      title: "Modern 3BHK Apartment, Indiranagar",
      description: "Spacious and sunlit, this apartment comes with modular kitchen, clubhouse access, and great city views."
    },
    {
      image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
      title: "Elegant 2BHK, Koramangala",
      description: "Ideal for young families or professionals. Proximity to offices, schools, and shopping districts."
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary inline-block relative pb-4">
            Featured Properties
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-accent rounded-full"></span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;
