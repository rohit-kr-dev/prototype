import { FinancialMetrics } from "@/types";
import { formatCurrency } from "@/utils/financial";
import { TrendingUp, TrendingDown, DollarSign, Users } from "lucide-react";

interface FinancialMetricsCardProps {
  metrics: FinancialMetrics;
}

const FinancialMetricsCard = ({ metrics }: FinancialMetricsCardProps) => {
  const metricItems = [
    {
      label: "Investment Value",
      value: metrics.investmentValue,
      icon: DollarSign,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      label: "Margin Revenue (3%)",
      value: metrics.marginRevenue,
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      label: "Agent Charges",
      value: metrics.agentCharges,
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      label: "Other Expenses (0.4%)",
      value: metrics.otherExpenses,
      icon: TrendingDown,
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      label: "Company Profits (0.6%)",
      value: metrics.companyProfits,
      icon: TrendingUp,
      color: "text-accent",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {metricItems.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className={`${item.bgColor} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
              <Icon className={item.color} size={24} />
            </div>
            <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
            <p className="text-2xl font-bold text-foreground">
              {formatCurrency(item.value)}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FinancialMetricsCard;
