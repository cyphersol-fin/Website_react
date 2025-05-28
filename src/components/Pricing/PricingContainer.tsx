"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { cn } from "../lib/utils";
import { TextAnimate } from "../components/ui/text-animate";
import FAQSection from "../FAQSection";
import ComparisonFeatures from "../ComparisionFeatures";
import { motion, AnimatePresence } from "framer-motion";
import { pricingFaqsArray } from "../data/FAQs";
import { Helmet } from "react-helmet-async";

export default function PricingContainer() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("CA"); // Default active tab
  const [pricingMode, setPricingMode] = useState("Online"); // Default pricing mode

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // CA Plans
  const caPlans = [
    {
      name: "Basic",
      originalPrice: "7,000",
      price: 4000,
      features: [
        "Unlimited",
        "Payment, Receipt, Contra, Purchase, Sales (5 Vouchers)",
        "Easy installation & setup",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Standard",
      originalPrice: "12,000",
      price: 6000,
      features: [
        "Unlimited",
        "Payment, Receipt, Contra, Purchase, Sales (5 Vouchers)",
        "Easy installation & setup",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Premium",
      originalPrice: "20,000",
      price: 12000,
      features: [
        "Unlimited",
        "Payment, Receipt, Contra, Purchase, Sales (5 Vouchers)",
        "Easy installation & setup",
        "Email support",
      ],
      popular: true,
    },
  ];

  // DSA Plans
  const dsaPlans = [
    {
      name: "Starter",
      originalPrice: "15,000",
      price: 9999,
      features: [
        "Process up to 50 loan applications",
        "Basic eligibility assessment",
        "Email support",
        "Single user license",
      ],
      popular: false,
    },
    {
      name: "Growth",
      originalPrice: "30,000",
      price: 19999,
      features: [
        "Process up to 150 loan applications",
        "Advanced eligibility assessment",
        "Priority support",
        "Up to 5 user licenses",
        "Bank statement analysis",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      originalPrice: "45,000",
      price: 29999,
      features: [
        "Unlimited loan applications",
        "Comprehensive financial analysis",
        "24/7 dedicated support",
        "Unlimited user licenses",
        "Advanced reporting dashboard",
        "Custom integration options",
      ],
      popular: false,
    },
  ];

  // Accounting Plans
  const accountingPlans = [
    {
      name: "Essential",
      originalPrice: "18,000",
      price: 10999,
      features: [
        "Basic bookkeeping tools",
        "Up to 500 transactions/month",
        "Email support",
        "Single user license",
      ],
      popular: false,
    },
    {
      name: "Business",
      originalPrice: "32,000",
      price: 21999,
      features: [
        "Advanced bookkeeping tools",
        "Up to 2,000 transactions/month",
        "Priority support",
        "Up to 5 user licenses",
        "Excel to Tally integration",
        "Tax preparation assistance",
      ],
      popular: true,
    },
    {
      name: "Professional",
      originalPrice: "48,000",
      price: 32999,
      features: [
        "Comprehensive accounting suite",
        "Unlimited transactions",
        "24/7 priority support",
        "Unlimited user licenses",
        "Advanced reporting & analytics",
        "Custom API access",
        "Dedicated account manager",
      ],
      popular: false,
    },
  ];

  // Get active plans based on selected tab
  const getActivePlans = () => {
    switch (activeTab) {
      case "CA":
        return caPlans;
      case "DSA":
        return dsaPlans;
      case "Accounting":
        return accountingPlans;
      default:
        return caPlans;
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Be Intelligently Lazy with Affordable Automation Starting @ ₹45*
        </title>
        <meta
          name="description"
          content="Explore Cyphersol's pricing for the Excel to Tally Data Import Utility and Bank Statement Analyzer. Be Intelligently Lazy by automating your accounting processes affordably. Tailored solutions for chartered accountants and MSMEs in India."
        />
        <meta
          name="keywords"
          content="Cyphersol pricing, be intelligently lazy, Excel to Tally Data Import Utility price, Bank Statement Analyzer cost, automation for accounting, affordable automation solutions, chartered accountants, MSME solutions, accounting software pricing"
        />
      </Helmet>
      <div className="py-12 px-4 min-h-screen bg-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,200,255,0.1),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(0,100,255,0.1),transparent_40%)]" />
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-center"
            >
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400"
                )}
              >
                Pricing Plans
              </span>
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold tracking-tight text-cyan-100 mb-3"
            >
              <TextAnimate animation="scaleUp" by="text">
                No Hidden Cost!!!
              </TextAnimate>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-300 text-lg max-w-2xl mx-auto"
            >
              Special pricing for a limited time—lock in your savings today!
            </motion.p>
          </div>

          {/* Online/Offline Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-900/80 p-1.5 rounded-xl flex relative overflow-hidden shadow-lg shadow-blue-900/20">
              <div
                className="absolute h-full transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 z-0"
                style={{
                  width: "50%",
                  left: pricingMode === "Online" ? "0%" : "50%",
                  transition: "left 0.3s ease",
                }}
              />
              {["Online", "Offline"].map((mode) => (
                <motion.button
                  key={mode}
                  onClick={() => setPricingMode(mode)}
                  className={`px-8 py-3 rounded-lg text-base font-medium transition-all duration-300 z-10 relative
                ${
                  pricingMode === mode
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {mode}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Service Type Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-900/60 p-1 rounded-lg flex shadow-md">
              {["CA", "DSA", "Accounting"].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-md text-base font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${pricingMode}-${activeTab}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:w-[95%] mx-auto"
            >
              {getActivePlans().map((plan, index) => (
                <Card
                  key={`${activeTab}-${plan.name}`}
                  className={`relative flex flex-col bg-gray-900/40 border-gray-800 transform transition-all duration-500 
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }
                ${
                  plan.popular
                    ? "ring-2 ring-blue-500/50 shadow-lg shadow-blue-500/20"
                    : "hover:border-blue-500/50"
                }
              `}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <CardHeader>
                    {plan.popular && (
                      <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg shadow-lg transform translate-x-0 -translate-y-0">
                        POPULAR
                      </div>
                    )}
                    <CardTitle className="text-xl text-center text-gray-200 mb-4">
                      {plan.name}
                    </CardTitle>
                    <div className="text-center mt-4 space-y-2">
                      <div className="relative inline-block">
                        <h3 className="text-sm text-gray-400">
                          Original Price:
                          <span className="text-[#FFC107] text-2xl font-semibold relative inline-block">
                            {" "}
                            ₹{plan.originalPrice}
                            <div
                              className="absolute w-full h-0.5 bg-white"
                              style={{
                                top: "70%",
                                left: "0",
                                transform: "rotate(-12deg)",
                                transformOrigin: "left center",
                              }}
                            ></div>
                          </span>
                        </h3>
                      </div>
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
                        <span>
                          ₹{(plan.price * 0.18).toFixed(0).toLocaleString()}
                        </span>
                        )
                      </h3>
                    </div>
                    <hr className="border-gray-800" />
                  </CardHeader>

                  <CardContent className="flex-1">
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 + 0.2 }}
                        >
                          <Check className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="flex flex-col gap-4">
                    <motion.button
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className={`w-full h-12 text-base font-medium transition-all duration-300 rounded-md
                    ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-500 to-cyan-400 hover:shadow-lg hover:shadow-blue-500/20"
                        : "bg-transparent border border-blue-500/50 hover:bg-blue-500/10 hover:border-blue-400"
                    }`}
                    >
                      Buy Now
                    </motion.button>
                  </CardFooter>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>
          <div className="mt-16">
            <ComparisonFeatures />
          </div>
          <div className="mt-16">
            <FAQSection items={pricingFaqsArray} />
          </div>
        </div>
      </div>
    </>
  );
}
