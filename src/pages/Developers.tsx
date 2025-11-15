import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import { Briefcase, Upload, TrendingUp, FileText } from "lucide-react";
import { useState } from "react";
import { formatCurrency } from "@/utils/financial";

const Developers = () => {
  const [projectValue, setProjectValue] = useState(100000000); // 10 Cr default
  const marginOffered = projectValue * 0.03; // 3%

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      
      <div className="relative h-[40vh] flex items-center justify-center bg-gradient-to-br from-accent via-primary to-accent">
        <div className="text-center text-white px-4">
          <Briefcase size={64} className="mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">Developer Portal</h1>
          <p className="text-xl max-w-2xl mx-auto">
            List your projects and connect with qualified buyers and investors
          </p>
        </div>
      </div>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-6">Margin Calculator</h2>
            <p className="text-muted-foreground mb-6">
              Calculate your revenue from our platform based on project value
            </p>

            <label className="block text-lg font-semibold text-primary mb-4">
              Project Value: {formatCurrency(projectValue)}
            </label>
            <input
              type="range"
              min="10000000"
              max="1000000000"
              step="10000000"
              value={projectValue}
              onChange={(e) => setProjectValue(Number(e.target.value))}
              className="w-full h-3 bg-muted rounded-lg appearance-none cursor-pointer accent-accent mb-2"
            />
            <div className="flex justify-between text-sm text-muted-foreground mb-8">
              <span>₹1 Cr</span>
              <span>₹100 Cr</span>
            </div>

            <div className="bg-accent/10 rounded-lg p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Project Value:</span>
                <span className="text-xl font-semibold">{formatCurrency(projectValue)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Platform Margin (3%):</span>
                <span className="text-xl font-semibold">{formatCurrency(marginOffered)}</span>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary">Your Revenue:</span>
                  <span className="text-3xl font-bold text-accent">
                    {formatCurrency(projectValue - marginOffered)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-6">Why List With Us?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-accent/10 p-3 rounded-lg h-fit">
                  <TrendingUp className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Qualified Leads</h3>
                  <p className="text-muted-foreground">
                    Access to pre-verified investors and buyers ready to invest
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-accent/10 p-3 rounded-lg h-fit">
                  <FileText className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Transparent Process</h3>
                  <p className="text-muted-foreground">
                    Clear documentation and streamlined approval process
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-accent/10 p-3 rounded-lg h-fit">
                  <Upload className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Easy Submission</h3>
                  <p className="text-muted-foreground">
                    Simple project submission with dedicated support team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Project Submission</h2>
          <p className="text-muted-foreground mb-8">
            Submit your project details for listing on our platform
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Project Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter project name"
                  className="w-full px-4 py-3 border-2 border-input rounded-lg focus:border-accent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  placeholder="City, Area"
                  className="w-full px-4 py-3 border-2 border-input rounded-lg focus:border-accent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Project Type *
                </label>
                <select className="w-full px-4 py-3 border-2 border-input rounded-lg focus:border-accent outline-none bg-card">
                  <option>Select type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Mixed Use</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Total Project Value *
                </label>
                <input
                  type="text"
                  placeholder="₹ in Crores"
                  className="w-full px-4 py-3 border-2 border-input rounded-lg focus:border-accent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Total Units
                </label>
                <input
                  type="number"
                  placeholder="Number of units"
                  className="w-full px-4 py-3 border-2 border-input rounded-lg focus:border-accent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  RERA Number *
                </label>
                <input
                  type="text"
                  placeholder="RERA registration number"
                  className="w-full px-4 py-3 border-2 border-input rounded-lg focus:border-accent outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary mb-2">
                Project Description *
              </label>
              <textarea
                rows={5}
                placeholder="Provide detailed description of your project"
                className="w-full px-4 py-3 border-2 border-input rounded-lg focus:border-accent outline-none resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary mb-2">
                Upload Project Documents
              </label>
              <div className="border-2 border-dashed border-input rounded-lg p-8 text-center hover:border-accent transition-colors cursor-pointer">
                <Upload className="mx-auto text-muted-foreground mb-2" size={48} />
                <p className="text-muted-foreground">
                  Click to upload or drag and drop
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  PDF, Images (Max 10MB)
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-accent text-accent-foreground py-4 rounded-lg font-bold hover:shadow-lg transition-all"
              >
                Submit Project
              </button>
              <button
                type="button"
                className="px-8 py-4 border-2 border-border rounded-lg font-semibold hover:border-accent transition-colors"
              >
                Save Draft
              </button>
            </div>
          </form>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-4">Revenue Breakdown</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">Platform Fee</p>
              <p className="text-2xl font-bold text-accent">3%</p>
            </div>
            <div className="bg-card rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">Agent Commissions</p>
              <p className="text-2xl font-bold text-purple-600">1.8-2.5%</p>
            </div>
            <div className="bg-card rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">Operational Costs</p>
              <p className="text-2xl font-bold text-blue-600">0.4%</p>
            </div>
            <div className="bg-card rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">Platform Margin</p>
              <p className="text-2xl font-bold text-green-600">0.6%</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Developers;
