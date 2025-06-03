import React from "react";
import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../components/ui/tooltip";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const combo = [
  {
    type: "Server",
    price: "6000",
    features: [
      "100 statements for 1 year",
      "All 5 types of main voucher for 1 year",
      "Easy Installation",
      "Single user + ₹500 Per Additional user",
    ],
  },
  {
    type: "Server",
    price: "12550",
    features: [
      "251 statements for 1 year",
      "All 5 types of main voucher for 2 years",
      "Easy Installation",
      "Single user + ₹500 Per Additional user",
    ],
  },
  {
    type: "Server",
    price: "22545",
    features: [
      "501 statements for 1 year",
      "All 5 types of main voucher for 3 years",
      "Easy Installation",
      "Single user + ₹500 Per Additional user",
    ],
  },
];

export const ComboPlan = () => {
  const [selectedBadges, setSelectedBadges] = React.useState(
    combo.map(() => "Prime")
  );

  const handleBadgeChange = (cardIdx: number, badge: "Prime" | "ERP") => {
    setSelectedBadges((prev) => {
      const updated = [...prev];
      updated[cardIdx] = badge;
      return updated;
    });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {combo.map((plan, index) => (
        <Card
          key={index}
          className="relative flex flex-col bg-gray-900/40 border-gray-800 hover:border-blue-500/50 transform transition-all duration-500"
          style={{
            transitionDelay: `${index * 150}ms`,
          }}
        >
          <CardHeader>
            <CardTitle className="text-xl text-center mb-4">
              {plan.type}
            </CardTitle>
            {/* Toggle Button */}
            <div className="flex justify-center">
              <div className="flex bg-gray-900/50 rounded-full w-44 h-12 p-1 mb-4">
                <button
                  className={`flex-1 rounded-full font-semibold transition-all duration-200 ${
                    selectedBadges[index] === "Prime"
                      ? "bg-cyan-200 text-black shadow"
                      : "bg-transparent text-gray-400"
                  }`}
                  onClick={() => handleBadgeChange(index, "Prime")}
                >
                  Prime
                </button>
                <button
                  className={`flex-1 rounded-full font-semibold transition-all duration-200 ${
                    selectedBadges[index] === "ERP"
                      ? "bg-cyan-200 text-black shadow"
                      : "bg-transparent text-gray-400"
                  }`}
                  onClick={() => handleBadgeChange(index, "ERP")}
                >
                  ERP
                </button>
              </div>
            </div>
            <div className="text-center mt-4 space-y-2">
              <motion.h2
                whileHover={{ scale: 1.05 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              >
                ₹{plan.price.toLocaleString()}
              </motion.h2>
              <h3 className="text-sm text-blue-100">
                {" "}
                +18% GST ({" "}
                <span>₹{(plan.price * 0.18).toFixed(0).toLocaleString()}</span>)
              </h3>
            </div>
            <hr className="border-gray-800" />
          </CardHeader>

          <CardContent className="flex-1">
            <ul className="space-y-4">
              {plan.features.map((feature, featureIndex) => {
                let displayFeature = feature;

                if (featureIndex === 1) {
                  const year =
                    index === 0
                      ? "1 year"
                      : index === 1
                      ? "2 years"
                      : "3 years";
                  displayFeature =
                    selectedBadges[index] === "Prime"
                      ? `Tally Import Utility with 5 vouchers for ${year}`
                      : `Tally Import Utility with 5 vouchers for ${year}`;
                }
                return (
                  <motion.li
                    key={featureIndex}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: featureIndex * 0.1 + 0.2 }}
                  >
                    <Check className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">
                      {displayFeature}
                      {featureIndex === 1 && (
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 inline ml-1 text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>
                              List of Vouchers: Ledger, Payment, <br /> Receipt,
                              Purchase, Sale
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full h-12 text-base font-medium transition-all duration-300 rounded-md  bg-gradient-to-r from-blue-500 to-cyan-400 hover:shadow-lg hover:shadow-blue-500/20"
            >
              {selectedBadges[index] === "Prime"
                ? "Pay Now for Prime"
                : "Pay Now for ERP"}
            </motion.button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
