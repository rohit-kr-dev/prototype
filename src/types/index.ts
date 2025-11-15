export type UserRole = 'buyer' | 'investor' | 'employee' | 'agent' | 'developer' | 'admin';

export type AgentTier = 'gold' | 'silver';

export interface AgentCommissionSlab {
  tier: AgentTier;
  name: string;
  commissionRate: number;
  minDeals: number;
  benefits: string[];
  color: string;
}

export interface FinancialMetrics {
  investmentValue: number;
  marginRevenue: number;
  agentCharges: number;
  otherExpenses: number;
  companyProfits: number;
}

export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  type: string;
  bedrooms: number;
  image: string;
  description: string;
  status: 'available' | 'sold' | 'reserved';
}

export interface InvestmentOpportunity {
  id: string;
  projectName: string;
  location: string;
  investmentAmount: number;
  expectedReturn: number;
  duration: string;
  riskLevel: 'low' | 'medium' | 'high';
  description: string;
}
