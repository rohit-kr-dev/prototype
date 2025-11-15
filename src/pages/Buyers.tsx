import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { Search, Filter, Home } from "lucide-react";
import { useState } from "react";

const Buyers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const properties = [
    {
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
      tag: "New Listing",
      title: "Luxury 4BHK Villa, Whitefield",
      description: "Premium villa with landscaped gardens, private pool, modern amenities. Gated community with 24/7 security. ₹2.5 Cr"
    },
    {
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
      tag: "Best Value",
      title: "Modern 3BHK Apartment, Indiranagar",
      description: "Spacious apartment with modular kitchen, club access, city views. Prime location near IT parks. ₹1.2 Cr"
    },
    {
      image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
      title: "Elegant 2BHK, Koramangala",
      description: "Perfect for young families, close to schools, offices, shopping. Ready to move in. ₹85 Lakhs"
    },
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      tag: "Premium",
      title: "Penthouse, MG Road",
      description: "Ultra-luxury penthouse with panoramic views, private terrace, smart home features. ₹4.5 Cr"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      title: "3BHK Row House, Sarjapur",
      description: "Independent row house with garden, parking. Peaceful neighborhood, great connectivity. ₹1.8 Cr"
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      tag: "Hot Deal",
      title: "2BHK Apartment, Electronic City",
      description: "Affordable housing near IT corridor. Modern amenities, excellent ROI potential. ₹65 Lakhs"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      
      <div className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-primary to-accent">
        <div className="text-center text-white px-4">
          <Home size={64} className="mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">Find Your Dream Home</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore premium properties curated just for you
          </p>
        </div>
      </div>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-card rounded-lg shadow-md p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search by location, property type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-input rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-all">
              <Filter size={20} />
              Filters
            </button>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Available Properties</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {properties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-4">Buyer Registration</h3>
          <p className="text-muted-foreground mb-6">
            Register with us to receive personalized property recommendations and exclusive deals
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-3 border-2 border-input rounded-lg focus:border-accent outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-3 border-2 border-input rounded-lg focus:border-accent outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="px-4 py-3 border-2 border-input rounded-lg focus:border-accent outline-none"
            />
            <select className="px-4 py-3 border-2 border-input rounded-lg focus:border-accent outline-none bg-card">
              <option>Budget Range</option>
              <option>Under ₹50 Lakhs</option>
              <option>₹50L - ₹1 Cr</option>
              <option>₹1 Cr - ₹2 Cr</option>
              <option>Above ₹2 Cr</option>
            </select>
            <button
              type="submit"
              className="md:col-span-2 bg-accent text-accent-foreground py-3 rounded-lg font-bold hover:shadow-lg transition-all"
            >
              Register Now
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Buyers;
