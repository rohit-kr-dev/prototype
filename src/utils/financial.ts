import { FinancialMetrics, AgentCommissionSlab, AgentTier } from "@/types";

// Commission slab definitions
export const AGENT_COMMISSION_SLABS: AgentCommissionSlab[] = [
  {
    tier: 'gold',
    name: 'Gold Agent',
    commissionRate: 2.5,
    minDeals: 10,
    benefits: [
      'Priority property access',
      'Dedicated support team',
      'Marketing materials provided',
      'Quarterly bonus eligibility',
      'Premium CRM access'
    ],
    color: '#FFD700'
  },
  {
    tier: 'silver',
    name: 'Silver Agent',
    commissionRate: 1.8,
    minDeals: 5,
    benefits: [
      'Standard property access',
      'Email support',
      'Basic marketing materials',
      'CRM access'
    ],
    color: '#C0C0C0'
  }
];

// Financial calculation constants
export const RATES = {
  DEVELOPER_MARGIN: 0.03,      // 3%
  AGENT_CHARGES_BASE: 0.02,    // 2%
  OTHER_EXPENSES: 0.004,       // 0.4%
  COMPANY_PROFITS: 0.006,      // 0.6%
};

/**
 * Calculate financial metrics based on investment value and custom rates
 */
export function calculateFinancialMetrics(
  investmentValue: number,
  customRates?: {
    developerMargin?: number;
    agentCharges?: number;
    otherExpenses?: number;
    companyProfits?: number;
  },
  agentTier?: AgentTier
): FinancialMetrics {
  // Get agent commission rate based on tier
  const agentSlab = agentTier 
    ? AGENT_COMMISSION_SLABS.find(s => s.tier === agentTier)
    : null;
  
  const agentRate = customRates?.agentCharges !== undefined
    ? customRates.agentCharges / 100
    : agentSlab 
    ? agentSlab.commissionRate / 100 
    : RATES.AGENT_CHARGES_BASE;

  const developerMarginRate = customRates?.developerMargin !== undefined
    ? customRates.developerMargin / 100
    : RATES.DEVELOPER_MARGIN;

  const otherExpensesRate = customRates?.otherExpenses !== undefined
    ? customRates.otherExpenses / 100
    : RATES.OTHER_EXPENSES;

  const companyProfitsRate = customRates?.companyProfits !== undefined
    ? customRates.companyProfits / 100
    : RATES.COMPANY_PROFITS;

  const marginRevenue = investmentValue * developerMarginRate;
  const agentCharges = investmentValue * agentRate;
  const otherExpenses = investmentValue * otherExpensesRate;
  const companyProfits = investmentValue * companyProfitsRate;

  return {
    investmentValue,
    marginRevenue,
    agentCharges,
    otherExpenses,
    companyProfits
  };
}

/**
 * Format currency in Indian Rupees
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

/**
 * Calculate agent commission for a specific deal
 */
export function calculateAgentCommission(
  dealValue: number,
  agentTier: AgentTier
): number {
  const slab = AGENT_COMMISSION_SLABS.find(s => s.tier === agentTier);
  if (!slab) return 0;
  
  return dealValue * (slab.commissionRate / 100);
}

/**
 * Determine agent tier based on number of deals
 */
export function determineAgentTier(numberOfDeals: number): AgentTier {
  if (numberOfDeals >= 10) return 'gold';
  if (numberOfDeals >= 5) return 'silver';
  return 'silver'; // Default to silver
}