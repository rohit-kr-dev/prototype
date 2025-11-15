import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import FinancialMetricsCard from "@/components/FinancialMetricsCard";
import { calculateFinancialMetrics, formatCurrency } from "@/utils/financial";
import { TrendingUp, Shield, Award, BarChart3 } from "lucide-react";
import { useState } from "react";

const Investors = () => {
  const [investmentAmount, setInvestmentAmount] = useState(10000000); // 1 Cr default
  const [developerMargin, setDeveloperMargin] = useState(3); // 3% default
  const [agentCharges, setAgentCharges] = useState(2); // 2% default
  const [otherExpenses, setOtherExpenses] = useState(0.4); // 0.4% default
  const [companyProfits, setCompanyProfits] = useState(0.6); // 0.6% default
  
  const metrics = calculateFinancialMetrics(investmentAmount, {
    developerMargin,
    agentCharges,
    otherExpenses,
    companyProfits
  });

  // Handle direct input change for investment amount
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      // Ensure value is within bounds
      if (value >= 1000000 && value <= 100000000) {
        setInvestmentAmount(value);
      } else if (value < 1000000) {
        setInvestmentAmount(1000000);
      } else if (value > 100000000) {
        setInvestmentAmount(100000000);
      }
    }
  };

  // Handle slider change for investment amount
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvestmentAmount(Number(e.target.value));
  };

  // Handle percentage input changes
  const handleDeveloperMarginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setDeveloperMargin(value);
    }
  };

  const handleAgentChargesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setAgentCharges(value);
    }
  };

  const handleOtherExpensesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setOtherExpenses(value);
    }
  };

  const handleCompanyProfitsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setCompanyProfits(value);
    }
  };

  const opportunities = [
    {
      title: "Whitefield Luxury Residences",
      location: "Whitefield, Bangalore",
      minInvestment: "₹50 Lakhs",
      expectedReturn: "18-22% p.a.",
      duration: "24 months",
      riskLevel: "Low",
      description: "Premium residential project with guaranteed returns and exit options"
    },
    {
      title: "Commercial Hub - Electronic City",
      location: "Electronic City, Bangalore",
      minInvestment: "₹1 Crore",
      expectedReturn: "22-28% p.a.",
      duration: "36 months",
      riskLevel: "Medium",
      description: "High-growth commercial development in IT corridor"
    },
    {
      title: "Smart City Township",
      location: "Sarjapur, Bangalore",
      minInvestment: "₹25 Lakhs",
      expectedReturn: "15-20% p.a.",
      duration: "18 months",
      riskLevel: "Low",
      description: "Integrated township with residential and commercial spaces"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      
      <div className="relative h-[40vh] flex items-center justify-center bg-gradient-to-br from-accent to-primary">
        <div className="text-center text-white px-4">
          <TrendingUp size={64} className="mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">Investor Portal</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Smart investments, transparent returns, sustainable growth
          </p>
        </div>
      </div>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">Investment Calculator</h2>
          <div className="bg-card rounded-xl shadow-lg p-8 mb-8">
            <label className="block text-lg font-semibold text-primary mb-4">
              Investment Amount: {formatCurrency(investmentAmount)}
            </label>
            
            {/* Direct Input Field for Investment Amount */}
            <div className="mb-4">
              <label htmlFor="investmentInput" className="block text-sm font-medium text-muted-foreground mb-2">
                Enter Investment Amount (₹)
              </label>
              <input
                type="number"
                id="investmentInput"
                value={investmentAmount}
                onChange={handleInputChange}
                min="1000000"
                max="100000000"
                step="1000000"
                className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                placeholder="Enter amount between ₹10 Lakhs and ₹10 Crores"
              />
            </div>
            
            {/* Slider for Investment Amount */}
            <input
              type="range"
              min="1000000"
              max="100000000"
              step="1000000"
              value={investmentAmount}
              onChange={handleSliderChange}
              className="w-full h-3 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>₹10 Lakhs</span>
              <span>₹10 Crores</span>
            </div>
            
            {/* Percentage Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div>
                <label htmlFor="developerMargin" className="block text-sm font-medium text-muted-foreground mb-2">
                  Developer Margin (%)
                </label>
                <input
                  type="number"
                  id="developerMargin"
                  value={developerMargin}
                  onChange={handleDeveloperMarginChange}
                  min="0"
                  step="0.1"
                  className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                />
              </div>
              
              <div>
                <label htmlFor="agentCharges" className="block text-sm font-medium text-muted-foreground mb-2">
                  Agent Charges (%)
                </label>
                <input
                  type="number"
                  id="agentCharges"
                  value={agentCharges}
                  onChange={handleAgentChargesChange}
                  min="0"
                  step="0.1"
                  className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                />
              </div>
              
              <div>
                <label htmlFor="otherExpenses" className="block text-sm font-medium text-muted-foreground mb-2">
                  Other Expenses (%)
                </label>
                <input
                  type="number"
                  id="otherExpenses"
                  value={otherExpenses}
                  onChange={handleOtherExpensesChange}
                  min="0"
                  step="0.1"
                  className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                />
              </div>
              
              <div>
                <label htmlFor="companyProfits" className="block text-sm font-medium text-muted-foreground mb-2">
                  Company Profits (%)
                </label>
                <input
                  type="number"
                  id="companyProfits"
                  value={companyProfits}
                  onChange={handleCompanyProfitsChange}
                  min="0"
                  step="0.1"
                  className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                />
              </div>
            </div>
          </div>

          <FinancialMetricsCard metrics={metrics} />
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Investment Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opp, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    opp.riskLevel === 'Low' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {opp.riskLevel} Risk
                  </span>
                  <BarChart3 className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{opp.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{opp.location}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Min. Investment:</span>
                    <span className="font-semibold">{opp.minInvestment}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Expected Return:</span>
                    <span className="font-semibold text-green-600">{opp.expectedReturn}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-semibold">{opp.duration}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{opp.description}</p>
                <button className="w-full bg-accent text-accent-foreground py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                  Invest Now
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card rounded-xl p-6 text-center shadow-md">
            <Shield className="mx-auto text-accent mb-3" size={48} />
            <h3 className="text-xl font-bold text-primary mb-2">Secure Investments</h3>
            <p className="text-muted-foreground">RERA registered projects with legal compliance</p>
          </div>
          <div className="bg-card rounded-xl p-6 text-center shadow-md">
            <Award className="mx-auto text-accent mb-3" size={48} />
            <h3 className="text-xl font-bold text-primary mb-2">Proven Track Record</h3>
            <p className="text-muted-foreground">15+ years of successful project deliveries</p>
          </div>
          <div className="bg-card rounded-xl p-6 text-center shadow-md">
            <TrendingUp className="mx-auto text-accent mb-3" size={48} />
            <h3 className="text-xl font-bold text-primary mb-2">Transparent Returns</h3>
            <p className="text-muted-foreground">Regular updates and clear exit strategies</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investors;