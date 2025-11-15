import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import { Users, Calendar, FileText, Award, Bell, MessageSquare } from "lucide-react";

const Employees = () => {
  const resources = [
    {
      icon: FileText,
      title: "HR Policies",
      description: "Access company policies, leave management, and benefits information",
      link: "#"
    },
    {
      icon: Calendar,
      title: "Event Calendar",
      description: "Company events, meetings, and important dates",
      link: "#"
    },
    {
      icon: Award,
      title: "Training Portal",
      description: "Professional development courses and certifications",
      link: "#"
    },
    {
      icon: MessageSquare,
      title: "Internal Communication",
      description: "Team announcements and company updates",
      link: "#"
    }
  ];

  const announcements = [
    {
      date: "Dec 15, 2025",
      title: "Q4 Performance Review",
      content: "Annual performance reviews will begin next week. Please schedule time with your manager."
    },
    {
      date: "Dec 10, 2025",
      title: "Year-End Celebration",
      content: "Join us for our annual celebration on Dec 20th at the corporate office."
    },
    {
      date: "Dec 5, 2025",
      title: "New Benefits Package",
      content: "Enhanced health insurance and wellness benefits now available. Check HR portal for details."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      
      <div className="relative h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary to-accent">
        <div className="text-center text-white px-4">
          <Users size={64} className="mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">Employee Portal</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your gateway to company resources and updates
          </p>
        </div>
      </div>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <a
                  key={index}
                  href={resource.link}
                  className="bg-card rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </a>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-card rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="text-accent" size={32} />
              <h2 className="text-3xl font-bold text-primary">Announcements</h2>
            </div>
            <div className="space-y-6">
              {announcements.map((announcement, index) => (
                <div
                  key={index}
                  className="border-l-4 border-accent pl-6 py-4 hover:bg-muted/30 transition-colors"
                >
                  <div className="text-sm text-muted-foreground mb-2">{announcement.date}</div>
                  <h3 className="text-xl font-bold text-primary mb-2">{announcement.title}</h3>
                  <p className="text-muted-foreground">{announcement.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Leave Balance</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Casual Leave:</span>
                  <span className="font-bold text-foreground">8 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Sick Leave:</span>
                  <span className="font-bold text-foreground">6 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Paid Leave:</span>
                  <span className="font-bold text-foreground">12 days</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-accent text-accent-foreground py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                Apply for Leave
              </button>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="#" className="block text-accent hover:underline">Attendance Portal</a>
                <a href="#" className="block text-accent hover:underline">Payroll Information</a>
                <a href="#" className="block text-accent hover:underline">IT Support</a>
                <a href="#" className="block text-accent hover:underline">Employee Directory</a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-4 text-center">Company Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">Integrity</div>
              <p className="text-muted-foreground">We conduct business with honesty and transparency</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">Excellence</div>
              <p className="text-muted-foreground">We strive for the highest quality in everything we do</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">Innovation</div>
              <p className="text-muted-foreground">We embrace change and continuously improve</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Employees;
