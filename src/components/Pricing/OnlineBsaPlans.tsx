import React from "react";
import { PricingCard, EnterpriseFeature } from "./PricingCard";
import {
  PayAsYouGoPricingTable,
  MonthlySubscriptionPricingTable,
} from "./PricingTable";
import { motion } from "framer-motion";

const payAsYouGoItems = [
  { statements: "Upto 25", costPerStatement: 70 },
  { statements: "Upto 50", costPerStatement: 65 },
  { statements: "Upto 100", costPerStatement: 60 },
  { statements: "Upto 250", costPerStatement: 55 },
  { statements: "Upto 500", costPerStatement: 50 },
  { statements: "Above 500", costPerStatement: 45 },
];

const monthlySubscriptionItems = [
  { statements: 25, pricing: 60, total: 1500 },
  { statements: 50, pricing: 55, total: 2750 },
  { statements: 100, pricing: 50, total: 5000 },
  { statements: 250, pricing: 45, total: 11250 },
  { statements: 500, pricing: 40, total: 20000 },
];

const OnlineBsaPlans: React.FC = () => {
  return (
    <motion.div
      className="container mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mx-auto">
        {/* Pay As You Go */}
        <PricingCard
          title="Pay As You Go"
          validity="Validity - 12months"
          buttonText="Pay Now"
          onButtonClick={() => console.log("Pay As You Go clicked")}
        >
          <PayAsYouGoPricingTable items={payAsYouGoItems} />
        </PricingCard>

        {/* Monthly Subscription */}
        <PricingCard
          title="Monthly Subscription"
          validity="Validity - 1month"
          buttonText="Pay Now"
          onButtonClick={() => console.log("Monthly Subscription clicked")}
        >
          <MonthlySubscriptionPricingTable items={monthlySubscriptionItems} />
        </PricingCard>

        {/* Enterprise Solutions */}
        <PricingCard
          title="Enterprise Solutions"
          validity=""
          buttonText="Contact Now"
          onButtonClick={() => console.log("Enterprise Solutions clicked")}
        >
          <div className="space-y-2">
            <EnterpriseFeature text="For Personalized Solutions" />
            <EnterpriseFeature text="Contact Us" />
          </div>
        </PricingCard>
      </div>
    </motion.div>
  );
};

export default OnlineBsaPlans;
