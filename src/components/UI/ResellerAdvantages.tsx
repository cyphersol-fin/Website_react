"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Network, RefreshCw, TrendingUp } from "lucide-react";
import { cn } from "../lib/utils";

const FeatureBox = ({ title, description, para, icon, delay = 0 }) => (
  <motion.div
    className="backdrop-blur-[50px] bg-gray-900/50 rounded-[32px] px-10 py-12 h-full"
    style={{
      boxShadow: "inset 2px 4px 16px #f8f8f80f",
    }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
  >
    <div className="flex flex-col h-full">
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-gray-300 flex-grow mb-2">{description}</p>
      <p className="text-gray-300 flex-grow">{para}</p>
    </div>
  </motion.div>
);

export default function ResellerAdvantages() {
  return (
    <div className=" bg-black text-white ">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-20 tracking-tight text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
            Why Choose
          </span>
          <br />
          <span
            className={cn(
              "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400"
            )}
          >
            CypherSOL for Reselling?
          </span>
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* <div className="lg:col-span-2"> */}
          <FeatureBox
            title="High Demand for Fintech Solutions"
            description="1.) With over 7.5 crore ITRs filed annually, there’s a massive, underserved market for our automation tools."
            para="2.) CypherSOL products, including the Bank Statement Analyzer, meet real-world needs by analyzing up to 7,500 data points, reducing suspense transactions, and integrating with Tally – a service highly sought after in the industry."
            icon={<TrendingUp className="w-14 h-14 text-cyan-400" />}
            delay={0}
          />
          {/* </div> */}
          <FeatureBox
            title="Competitive Edge with Tally Integration"
            description="1.) The Excel to Tally Data Import Utility, offered as part of the CypherSOL suite, allows clients to upload entire payment, receipt, sales, and purchase data onto Tally seamlessly."
            para="2.)It's priced competitively at INR 2,999, compared to similar products costing INR 5,000 to INR 10,000. This cost-effective solution is a key selling point that can help you attract and retain clients."
            icon={<Layers className="w-12 h-12 text-cyan-400" />}
            delay={0.2}
          />
          <FeatureBox
            title="Ongoing Product Development and Support"
            description="1.) Our dedicated team continually optimizes CypherSOL products to cover more banks (105 formats and counting) and improve system speed."
            para="2.) As a reseller, you can trust that you’re offering a constantly evolving product backed by top-notch maintenance and support."
            icon={<RefreshCw className="w-12 h-12 text-cyan-400" />}
            delay={0.4}
          />
          <FeatureBox
            title="Exceptional Earning Potential"
            description="1.) CypherSOL’s reseller model offers attractive margins and a scalable revenue stream."
            para="2.) By partnering with us, you’ll benefit from our robust customer base and the opportunity to increase your profit through ongoing client renewals and product upgrades."
            icon={<Network className="w-12 h-12 text-cyan-400" />}
            delay={0.4}
          />
        </div>
      </div>
    </div>
  );
}
