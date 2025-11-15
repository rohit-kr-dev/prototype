import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import { Building2, Target, Users, TrendingUp } from "lucide-react";

const Tour = () => {
  const sections = [
    {
      icon: Building2,
      title: "Who We Are",
      description: "StoneCore Capital is a leading real estate investment and development company, connecting investors, buyers, developers, and agents to create exceptional value in the property market."
    },
    {
      icon: Target,
      title: "Our Vision",
      description: "To transform the real estate landscape by providing transparent, profitable, and sustainable investment opportunities while maintaining the highest standards of integrity and excellence."
    },
    {
      icon: Users,
      title: "Our Community",
      description: "We serve a diverse community of investors seeking returns, buyers looking for dream homes, developers bringing projects to life, and agents building successful careers."
    },
    {
      icon: TrendingUp,
      title: "Our Approach",
      description: "Data-driven decisions, transparent processes, and partnership-focused relationships ensure that every stakeholder benefits from our ecosystem of real estate excellence."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      
      <div className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary to-primary/80">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to StoneCore Capital</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your Journey to Real Estate Excellence Starts Here
          </p>
        </div>
      </div>

      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Company Overview</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how StoneCore Capital is revolutionizing real estate investment and development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{section.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{section.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-12 text-center">
          <h3 className="text-3xl font-bold text-primary mb-4">Our Business Model</h3>
          <div className="max-w-3xl mx-auto space-y-4 text-left">
            <p className="text-lg text-muted-foreground">
              <strong className="text-primary">Investment Value:</strong> Powered by our network of Investors + Buyers
            </p>
            <p className="text-lg text-muted-foreground">
              <strong className="text-primary">Sales Value:</strong> Driven by our dedicated Employees + Professional Agents
            </p>
            <p className="text-lg text-muted-foreground">
              <strong className="text-primary">Market Listings:</strong> Curated opportunities from trusted Developers
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">Explore Our Portals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "For Buyers", desc: "Find your dream property", link: "/buyers" },
              { title: "For Investors", desc: "Grow your wealth", link: "/investors" },
              { title: "For Agents", desc: "Build your career", link: "/agents" },
              { title: "For Developers", desc: "List your projects", link: "/developers" }
            ].map((portal) => (
              <a
                key={portal.title}
                href={portal.link}
                className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-primary mb-2">{portal.title}</h3>
                <p className="text-muted-foreground">{portal.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tour;
