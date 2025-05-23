"use client";

import { useEffect, useState } from "react";
import { Check, Info } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { cn } from "../lib/utils";
import { TextAnimate } from "../components/ui/text-animate";
import FAQSection from "../FAQSection";
import ComparisonFeatures from "../ComparisionFeatures";
import { pricingFaqsArray } from "../data/FAQs";

export default function PricingContainer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const plans = [
    {
      duration: "1 Year",
      originalPrice: "20,000",
      price: 12000,
      freeInstallations: 0,
      discountAmount: 0,
      installationSavings: 0,
      totalSavings: 0,
      popular: false,
    },
    // {
    //   duration: "3 Years",
    //   originalPrice: 79700,
    //   price: 50000,
    //   freeInstallations: 3,
    //   discountAmount: 66200,
    //   installationSavings: 13500,
    //   totalSavings: 29700,
    //   popular: true,
    // },
    // {
    //   duration: "5 Years",
    //   originalPrice: 159600,
    //   price: 75000,
    //   freeInstallations: 5,
    //   discountAmount: 122100,
    //   installationSavings: 37500,
    //   totalSavings: 84600,
    //   popular: false,
    // },
    // {
    //   duration: "10 Years",
    //   originalPrice: 464100,
    //   price: 100000,
    //   freeInstallations: 10,
    //   discountAmount: 314100,
    //   installationSavings: 150000,
    //   totalSavings: 364100,
    //   popular: false,
    //   lifetime: true,
    // },
  ];

  return (
    <div className="py-12 px-4 min-h-screen bg-black text-white">
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
          <span
            className={cn(
              "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400"
            )}
          >
            Introductory Offer
          </span>
        </h1>
        <h3 className="text-3xl font-bold tracking-tight text-cyan-100 mb-3">
          <TextAnimate animation="scaleUp" by="text">
            No Hidden Cost!!!
          </TextAnimate>
        </h3>
        <p className="text-gray-300 text-lg">
          {/* Special pricing for Limited Time. Lock in your savings today! */}
          Special pricing for a limited time—lock in your savings today!
        </p>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full lg:w-[95%] mx-auto"> */}
      <div className="justify-center item-center max-w-sm mx-auto ">
        {plans.map((plan, index) => (
          <Card
            key={plan.duration}
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
              <CardTitle className="text-xl text-center text-gray-200 mb-4">
                {plan.duration}{" "}
                {plan.lifetime && (
                  <span className="text-sm text-gray-500">(Lifetime)</span>
                )}
              </CardTitle>
              <div className="text-center mt-4 space-y-2">
                <div className="relative inline-block">
                  <h3 className="text-sm text-gray-400">
                    Original Price: {/* {plan.originalPrice && ( */}
                    <span className="text-[#FFC107] text-2xl font-semibold relative inline-block">
                      {" "}
                      ₹{plan.originalPrice.toLocaleString()}
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
                    {/* )} */}
                  </h3>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  ₹{plan.price.toLocaleString()}
                </h2>
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
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    {plan.freeInstallations > 0
                      ? `Free Installation on ${plan.freeInstallations} PCs on LAN environment`
                      : "Free Installation on 1 PC on LAN environment"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    Free Updates for Entire Billing Period
                  </span>
                </li>
                {plan.discountAmount > 0 && (
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      Save{" "}
                      <span className="text-green-400">
                        ₹{plan.discountAmount.toLocaleString()}
                      </span>{" "}
                      on Renewal
                    </span>
                  </li>
                )}
                {plan.installationSavings > 0 && (
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      Save{" "}
                      <span className="text-green-400">
                        ₹{plan.installationSavings.toLocaleString()}
                      </span>{" "}
                      on Installations
                    </span>
                  </li>
                )}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col gap-12">
              {plan.totalSavings > 0 && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="w-full p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-300">
                            Total Savings
                          </span>
                          <Info className="h-4 w-4 text-blue-400" />
                        </div>
                        <div className="text-2xl font-bold text-green-400">
                          ₹{plan.totalSavings.toLocaleString()}
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="p-4 bg-gray-700 rounded-lg">
                      <div className="space-y-2 max-w-xs">
                        <p className="font-medium">Your Savings Breakdown:</p>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>Renewal Cost:</div>
                          <div className="text-right text-green-400 font-semibold">
                            ₹{plan.discountAmount.toLocaleString()}
                          </div>
                          <div>Installation Cost:</div>
                          <div className="text-right text-green-400 font-semibold">
                            ₹{plan.installationSavings.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}

              <button
                className={`w-full h-12 text-base font-medium transition-all duration-300 
                  ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-500 to-cyan-400 hover:opacity-90"
                      : "bg-transparent border border-blue-500/50 hover:bg-blue-500/10"
                  }`}
              >
                Get Started
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div>
        <ComparisonFeatures />
      </div>
      <div className="mt-12">
        <FAQSection items={pricingFaqsArray} />
      </div>
    </div>
  );
}
