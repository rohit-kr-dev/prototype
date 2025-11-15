import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import AgentTierCard from "@/components/AgentTierCard";
import { AGENT_COMMISSION_SLABS, calculateAgentCommission, formatCurrency } from "@/utils/financial";
import { Award, Calculator, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { AgentTier } from "@/types";

const Agents = () => {
  const [dealValue, setDealValue] = useState(5000000); // 50 Lakhs default
  const [selectedTier, setSelectedTier] = useState<AgentTier>('gold');
  
  const commission = calculateAgentCommission(dealValue, selectedTier);

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      
      <div className="relative h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary via-accent to-primary">
        <div className="text-center text-white px-4">
          <Award size={64} className="mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">Agent Portal</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Build your real estate career with competitive commissions and support
          </p>
        </div>
      </div>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Commission Tiers</h2>
          <p className="text-xl text-muted-foreground">Choose your path to success</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {AGENT_COMMISSION_SLABS.map((slab, index) => (
            <AgentTierCard 
              key={slab.tier} 
              slab={slab} 
              isRecommended={index === 0}
            />
          ))}
        </div>

        <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="text-accent" size={32} />
            <h2 className="text-3xl font-bold text-primary">Commission Calculator</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <label className="block text-lg font-semibold text-primary mb-4">
                Deal Value: {formatCurrency(dealValue)}
              </label>
              <input
                type="range"
                min="1000000"
                max="50000000"
                step="500000"
                value={dealValue}
                onChange={(e) => setDealValue(Number(e.target.value))}
                className="w-full h-3 bg-muted rounded-lg appearance-none cursor-pointer accent-accent mb-2"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>₹10 Lakhs</span>
                <span>₹5 Crores</span>
              </div>

              <label className="block text-lg font-semibold text-primary mt-6 mb-4">
                Select Your Tier:
              </label>
              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedTier('silver')}
                  className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedTier === 'silver'
                      ? 'bg-accent text-accent-foreground shadow-lg'
                      : 'bg-card border-2 border-border hover:border-accent'
                  }`}
                >
                  Silver (1.8%)
                </button>
                <button
                  onClick={() => setSelectedTier('gold')}
                  className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedTier === 'gold'
                      ? 'bg-accent text-accent-foreground shadow-lg'
                      : 'bg-card border-2 border-border hover:border-accent'
                  }`}
                >
                  Gold (2.5%)
                </button>
              </div>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">Your Commission</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Deal Value:</span>
                  <span className="text-xl font-semibold">{formatCurrency(dealValue)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Commission Rate:</span>
                  <span className="text-xl font-semibold">
                    {AGENT_COMMISSION_SLABS.find(s => s.tier === selectedTier)?.commissionRate}%
                  </span>
                </div>
                <div className="flex justify-between items-center py-4 bg-accent/10 rounded-lg px-4">
                  <span className="text-lg font-bold text-primary">Your Earning:</span>
                  <span className="text-3xl font-bold text-accent">{formatCurrency(commission)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">Why Join StoneCore?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 text-center shadow-md">
              <TrendingUp className="mx-auto text-accent mb-4" size={48} />
              <h3 className="text-xl font-bold text-primary mb-3">High Commissions</h3>
              <p className="text-muted-foreground">Industry-leading commission rates up to 2.5%</p>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-md">
              <Users className="mx-auto text-accent mb-4" size={48} />
              <h3 className="text-xl font-bold text-primary mb-3">Dedicated Support</h3>
              <p className="text-muted-foreground">Training, marketing materials, and CRM access</p>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-md">
              <Award className="mx-auto text-accent mb-4" size={48} />
              <h3 className="text-xl font-bold text-primary mb-3">Premium Properties</h3>
              <p className="text-muted-foreground">Access to exclusive listings and projects</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-primary mb-4">Agent Registration</h3>
          <p className="text-muted-foreground mb-6">
            Join our network of successful real estate agents today
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
            <input
              type="text"
              placeholder="RERA Registration Number"
              className="px-4 py-3 border-2 border-input rounded-lg focus:border-accent outline-none"
            />
            <input
              type="text"
              placeholder="Years of Experience"
              className="px-4 py-3 border-2 border-input rounded-lg focus:border-accent outline-none"
            />
            <select className="px-4 py-3 border-2 border-input rounded-lg focus:border-accent outline-none bg-card">
              <option>Preferred Tier</option>
              <option>Silver Agent</option>
              <option>Gold Agent</option>
            </select>
            <button
              type="submit"
              className="md:col-span-2 bg-accent text-accent-foreground py-3 rounded-lg font-bold hover:shadow-lg transition-all"
            >
              Register as Agent
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Agents;
