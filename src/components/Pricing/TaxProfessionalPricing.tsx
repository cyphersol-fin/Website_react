"use client";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import OnlineBsaPlans from "./OnlineBsaPlans";
import { ComboPlan } from "./ComboPlan";
import { TooltipProvider } from "../components/ui/tooltip";
import { OfflineBsaPlan } from "./OfflineBsaPlan";

export const TaxProfessionalPricing = () => {
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
      <div className="bg-black text-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
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
            {/* <motion.h3
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold tracking-tight text-cyan-100 mb-3"
            >
              <TextAnimate animation="scaleUp" by="text">
                No Hidden Cost!!!
              </TextAnimate>
            </motion.h3> */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-300 text-lg max-w-2xl mx-auto mb-10"
            >
              Special pricing for a limited time—lock in your savings today!
            </motion.p>
          </div>

          <Tabs defaultValue="offline" className="w-full">
            {/* Tab Triggers */}
            <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center gap-2">
              <TabsList className="flex flex-col md:flex-col lg:flex-row items-center gap-2 p-2 h-auto bg-background border border-gray-800 rounded-md">
                <TabsTrigger
                  value="offline"
                  className="data-[state=active]:bg-gray-900/50 data-[state=active]:text-cyan-400 w-full lg:w-auto"
                >
                  Offline Versions
                </TabsTrigger>
                <TabsTrigger
                  value="online-bsa"
                  className="data-[state=active]:bg-gray-900/50 data-[state=active]:text-cyan-400 w-full lg:w-auto"
                >
                  Online - Bank Statement Analyzer
                </TabsTrigger>
                <TabsTrigger
                  value="online-combo"
                  className="data-[state=active]:bg-gray-900/50 data-[state=active]:text-cyan-400 w-full lg:w-auto"
                >
                  Online - Excel to Tally Import Utility
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Tab Contents */}
            <TabsContent
              value="offline"
              className="mt-10 space-y-12 w-full max-w-6xl mx-auto"
            >
              <OfflineBsaPlan />
            </TabsContent>

            <TabsContent
              value="online-bsa"
              className="mt-10 space-y-12 w-full max-w-6xl mx-auto"
            >
              <OnlineBsaPlans />
            </TabsContent>

            <TabsContent
              value="online-combo"
              className="mt-10 space-y-12 w-full max-w-6xl mx-auto"
            >
              <TooltipProvider>
                <ComboPlan />
              </TooltipProvider>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};
