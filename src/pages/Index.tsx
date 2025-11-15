import Hero from "@/components/Hero";
import MainNavigation from "@/components/MainNavigation";
import PropertyGrid from "@/components/PropertyGrid";
import Footer from "@/components/Footer";
import PopupForm from "@/components/PopupForm";
import { Link } from "react-router-dom";
import { Building2, TrendingUp, Award, Users, Briefcase } from "lucide-react";

const Index = () => {
  const portals = [
    { 
      icon: Building2, 
      title: "Company Tour", 
      desc: "Discover our vision and values",
      link: "/tour",
      color: "from-blue-500 to-blue-600"
    },
    { 
      icon: Users, 
      title: "For Buyers", 
      desc: "Find your dream property",
      link: "/buyers",
      color: "from-green-500 to-green-600"
    },
    { 
      icon: TrendingUp, 
      title: "For Investors", 
      desc: "Grow your wealth with us",
      link: "/investors",
      color: "from-purple-500 to-purple-600"
    },
    { 
      icon: Award, 
      title: "For Agents", 
      desc: "Build your real estate career",
      link: "/agents",
      color: "from-orange-500 to-orange-600"
    },
    { 
      icon: Briefcase, 
      title: "For Developers", 
      desc: "List your projects",
      link: "/developers",
      color: "from-red-500 to-red-600"
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      <MainNavigation />
      
      <section className="py-16 px-4 md:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Your Gateway to Real Estate Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your portal to access tailored services and opportunities
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portals.map((portal) => {
            const Icon = portal.icon;
            return (
              <Link
                key={portal.title}
                to={portal.link}
                className="group bg-card rounded-xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${portal.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {portal.title}
                </h3>
                <p className="text-muted-foreground">
                  {portal.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <PropertyGrid />
      <Footer />
      <PopupForm />
    </div>
  );
};

export default Index;
