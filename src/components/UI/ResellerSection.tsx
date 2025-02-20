"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
import { useParallax, useWindowSize } from "../utils/useParallax";

const Section = ({ reversed = false }) => {
  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, 300);
  const { width } = useWindowSize();

  const isSmallScreen = width < 768;

  return (
    <div
      className={`flex flex-col ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between p-8 md:p-16 bg-black text-white gap-4 md:gap-8`}
    >
      <motion.div
        className="w-full md:w-1/2 mb-8 md:mb-0"
        style={{ y: isSmallScreen ? 0 : y }}
      >
        <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gray-900/50 border border-gray-800/50 ">
          <div className="absolute inset-0 backdrop-blur-xl"></div>
          <div className="absolute inset-0 p-6">
            <img
              src={
                reversed
                  ? "assets/images/Reseller-ideal.webp"
                  : "assets/images/profitable-business.webp"
              }
              alt="Section Image"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2 md:pl-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          {reversed
            ? "Who Should Join the CypherSOL Reseller Program?"
            : "Partner with CypherSOL to Transform Fintech Solutions"}
        </h2>
        <p className="sm:text-sm md:text-lg mb-8 text-gray-300">
          {reversed
            ? "The CypherSOL Reseller Program is ideal for:"
            : "Are you looking to expand your business and tap into the rapidly growing fintech market? CypherSOL is inviting partners and entrepreneurs to join our Reseller Program – an exciting opportunity to represent cutting-edge financial technology products designed specifically for chartered accountants, MSME’s, DSAs, and financial advisors."}
        </p>
        <p className="sm:text-sm md:text-lg mb-8 text-gray-300">
          {reversed
            ? "If you have a network of clients in finance, accounting, or loan processing, or MSME’s CypherSOL’s products can complement your offerings, enabling you to deliver real value while generating revenue."
            : "With CypherSOL, you gain access to innovative solutions like the Bank Statement Analyzer and Tally Upload Utility that simplify financial reporting, streamline workflows, and enhance loan eligibility analysis for clients. As a reseller, you can bring these powerful tools to your network, offering unique value while building a profitable business."}
        </p>
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-full transition duration-300">
          Learn More
        </button>
      </motion.div>
    </div>
  );
};

export default Section;
