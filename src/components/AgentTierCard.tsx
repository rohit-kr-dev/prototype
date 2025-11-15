import { AgentCommissionSlab } from "@/types";
import { Check, Award } from "lucide-react";

interface AgentTierCardProps {
  slab: AgentCommissionSlab;
  isRecommended?: boolean;
}

const AgentTierCard = ({ slab, isRecommended }: AgentTierCardProps) => {
  return (
    <div className={`bg-card rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative ${
      isRecommended ? 'border-2 border-accent scale-105' : 'border border-border'
    }`}>
      {isRecommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
          RECOMMENDED
        </div>
      )}
      
      <div className="flex items-center gap-3 mb-4">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${slab.color}20` }}
        >
          <Award size={32} style={{ color: slab.color }} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-primary">{slab.name}</h3>
          <p className="text-muted-foreground">Tier: {slab.tier.toUpperCase()}</p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-foreground">
            {slab.commissionRate}%
          </span>
          <span className="text-muted-foreground">commission</span>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Minimum {slab.minDeals} deals required
        </p>
      </div>

      <div className="space-y-3">
        <p className="font-semibold text-primary mb-3">Benefits:</p>
        {slab.benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-2">
            <Check className="text-accent mt-1 flex-shrink-0" size={18} />
            <span className="text-sm text-muted-foreground">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentTierCard;
