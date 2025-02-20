import React from "react";
import { GlowEffect } from "./UI/GlowEffect";
import { Badge } from "./UI/Badge";
import { TextAnimate } from "./components/ui/text-animate";
import { motion } from "framer-motion";
import { SolutionSection } from "./UI/SolutionSection";
import FAQSection from "./FAQSection";

const challenges = [
  {
    number: "1",
    title: "Time consuming and prone to error",
    description:
      "Our clients often have to manually enter data from their bank statements (PDF files or printed sheets) into spreadsheets or systems to analyze the information. Even if they have access to bank statements in an Excel file, the information has to be categorized and sorted under different headings for analysis. This is time consuming and prone to errors, potentially leading to inaccuracies in financial records.",
    color: "bg-[#346778]",
    borderColor: "border-[#346778]",
  },
  {
    number: "2",
    title: "Manual process, hence labor intensive and inefficient",
    description:
      "The manual process also leads to exorbitant employee and infrastructure costs and poor resource allocation.",
    color: "bg-[#914673]",
    borderColor: "border-[#914673]",
  },
  {
    number: "3",
    title: "Limited scalability, missed opportunities",
    description:
      "Given the time consuming nature of this manual process, our clients often struggle to effectively manage increased transaction volumes and diverse financial obligations as their business scales.",
    color: "bg-[#41735b]",
    borderColor: "border-[#41735b]",
  },
];

export const Product = () => {
  return (
    <div className="relative bg-black overflow-hidden">
      <GlowEffect />
      <div className="relative">
        <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-center justify-center mb-8 md:mb-16 animate-fade-in text-center">
              <Badge>Product</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 text-cyan-400">
                <TextAnimate animation="blurInUp" by="character">
                  Problem faced by our Business Partners
                </TextAnimate>
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mt-4">
                  Analyzing a bank statement for filing income tax returns is
                  still a manual process in India. Chartered accountants and tax
                  consultants normally take hours or days to analyze a single
                  bank statement. Similarly, DSAs and financiers need to assess
                  their clients' eligibility for loans based on their bank
                  statements, which can be time consuming. Our clients face the
                  following challenges:
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-28">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex justify-center"
              >
                <img
                  src="/assets/images/infographic-1.png"
                  alt="infographic"
                  className="w-full max-w-xl md:max-w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="space-y-8"
              >
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div
                      className={`w-10 h-10 ${challenge.color} rounded flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-white font-bold text-lg">
                        {challenge.number}
                      </span>
                    </div>
                    <div
                      className={`border-l-4 ${challenge.borderColor} pl-5 pb-4`}
                    >
                      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">
                        {challenge.title}
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base">
                        {challenge.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SolutionSection />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FAQSection />
        </motion.div>
      </div>
    </div>
  );
};
