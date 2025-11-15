import { Link, useLocation } from "react-router-dom";
import { Home, Building2, TrendingUp, Users, Award, Briefcase } from "lucide-react";

const MainNavigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/tour", label: "Company Tour", icon: Building2 },
    { path: "/buyers", label: "For Buyers", icon: Users },
    { path: "/investors", label: "For Investors", icon: TrendingUp },
    { path: "/agents", label: "For Agents", icon: Award },
    { path: "/developers", label: "For Developers", icon: Briefcase },
  ];

  return (
    <nav className="bg-primary shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-primary-foreground font-bold text-xl">
            STONECORE CAPITAL
          </Link>
          
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ${
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-primary-foreground hover:bg-white/10 hover:text-accent"
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile menu button */}
          <button className="md:hidden text-primary-foreground">
            <Users size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
