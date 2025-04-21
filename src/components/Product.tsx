import React from "react";
import { GlowEffect } from "./UI/GlowEffect";
import { Badge } from "./UI/Badge";
import { TextAnimate } from "./components/ui/text-animate";
import { motion } from "framer-motion";
import { SolutionSection } from "./UI/SolutionSection";
import FAQSection from "./FAQSection";
import { challenges } from "./data/challenges";
const base = import.meta.env.BASE_URL; // Will be '/static/' in production (as per Vite config)
const faqsArray = [
  {
    question: "What is a bank statement analyzer?",
    answer:
      "A bank statement analyzer is a software tool that automates the process of reading, categorizing, and analyzing bank transactions. It helps accountants and chartered accountants (CAs) extract key financial insights from bank statements efficiently, allowing for faster decision-making and reducing manual work.",
  },
  {
    question: "How does automation for accounting improve efficiency?",
    answer:
      "Automation for accounting, like CypherSOL’s Bank Statement Analyzer, simplifies data entry, categorizes transactions, and reduces errors, significantly improving efficiency. By automating repetitive tasks, accountants can focus on more complex financial analysis and advisory services for clients.",
  },
  {
    question: "Why is automation important for chartered accountants?",
    answer:
      "Automation is crucial for chartered accountants as it minimizes manual data entry, reduces errors, and accelerates processes. CypherSOL’s Bank Statement Analyzer, designed for CAs, enhances productivity by automating bank statement analysis and providing organized, insightful data quickly.",
  },
  {
    question:
      "Can the bank statement analyzer help with loan eligibility checks?",
    answer:
      "Yes, CypherSOL’s Bank Statement Analyzer can assist in evaluating loan eligibility by analyzing key financial indicators like average balance and cash flow. This helps in making accurate assessments for loan applications based on bank statement data.",
  },
  {
    question:
      "What features does CypherSOL’s Bank Statement Analyzer offer for automation in accounting?",
    answer:
      "CypherSOL’s Bank Statement Analyzer offers automation features like transaction categorization, expense tracking, suspense transaction identification, and ledger grouping. It processes high volumes of data accurately, supporting accounting professionals in meeting client requirements more efficiently.",
  },
  {
    question:
      "How many formats and banks does CypherSOL’s Bank Statement Analyzer support?",
    answer:
      "CypherSOL’s Bank Statement Analyzer supports over 105 formats and data from 50 banks, ensuring wide compatibility with various banking institutions. This adaptability allows accountants to work with clients from diverse backgrounds.",
  },
  {
    question:
      "How does the Bank Statement Analyzer reduce suspense transactions?",
    answer:
      "The analyzer filters data through 7,500 data points, accurately categorizing and identifying transaction types to reduce the number of suspense entries. With powerful automation, it organizes data, categorizes expenses, and minimizes ambiguities, helping decrease suspense transactions.",
  },
  {
    question:
      "Is CypherSOL’s Bank Statement Analyzer suitable for small and medium-sized businesses?",
    answer:
      "Yes, CypherSOL’s Bank Statement Analyzer is ideal for small and medium-sized businesses, as well as for chartered accountants and accounting firms. It provides scalable solutions to manage large volumes of bank data and streamline accounting tasks efficiently.",
  },
  {
    question:
      "Can the Bank Statement Analyzer integrate with Tally or other accounting software?",
    answer:
      "CypherSOL's Bank Statement Analyzer offers seamless integration with Tally through its Excel to Tally Data Import Utility. This feature enables smooth data migration, allowing transactions and ledger details to be uploaded directly to Tally, saving time and reducing errors.",
  },
  {
    question:
      "What are the pricing options for CypherSOL’s Bank Statement Analyzer?",
    answer:
      "CypherSOL offers flexible pricing for its Bank Statement Analyzer based on usage and business needs. For specific pricing information, please contact CypherSOL customer support or visit our website at www.cyphersol.co.in.",
  },
  {
    question:
      "How does automation in bank statement analysis reduce manual work for accountants?",
    answer:
      "Automation in bank statement analysis removes the need for manual data entry and categorization, making the process faster and more accurate. CypherSOL’s solution quickly scans, categorizes, and summarizes transaction data, saving accountants time and effort.",
  },
  {
    question:
      "What benefits does the Bank Statement Analyzer offer to chartered accountants?",
    answer:
      "CypherSOL’s Bank Statement Analyzer is tailored for chartered accountants, offering benefits like reduced data entry, enhanced transaction categorization, suspense transaction identification, and easy integration with accounting software. This tool simplifies their workload and increases productivity.",
  },
  {
    question:
      "How does the Bank Statement Analyzer categorize transactions automatically?",
    answer:
      "The analyzer uses advanced algorithms to automatically categorize transactions based on descriptions, transaction types, and other indicators within the data. This categorization helps accountants maintain organized records and reduces manual sorting.",
  },
  {
    question: "Is training provided for CypherSOL’s Bank Statement Analyzer?",
    answer:
      "Yes, CypherSOL provides comprehensive training and support to ensure clients get the most out of the Bank Statement Analyzer. Our support team can guide you through setup, usage, and best practices to maximize efficiency.",
  },
  {
    question:
      "How does CypherSOL’s Bank Statement Analyzer benefit accounting firms?",
    answer:
      "For accounting firms, the Bank Statement Analyzer automates time-consuming tasks like transaction categorization, expense tracking, and ledger grouping. This helps firms improve turnaround times, manage large volumes of data, and deliver faster insights to clients.",
  },
  {
    question:
      "Does CypherSOL’s Bank Statement Analyzer work for clients with multiple bank accounts?",
    answer:
      "Yes, CypherSOL’s Bank Statement Analyzer can handle data from multiple bank statement, making it ideal for clients with diverse banking needs. The software supports a wide range of formats and banks, allowing accountants to work with clients’ complete financial profiles.",
  },
  {
    question:
      "What makes CypherSOL’s Bank Statement Analyzer different from other bank statement tools?",
    answer:
      "CypherSOL’s Bank Statement Analyzer offers unique features, including 7,500 data point filtering, Tally integration, suspense transaction reduction, and detailed categorization. It is designed with chartered accountants and accounting firms in mind, focusing on improving productivity and accuracy.",
  },
  {
    question:
      "How long does it take to analyze a bank statement with CypherSOL’s software?",
    answer:
      "CypherSOL’s Bank Statement Analyzer is designed for speed, analyzing and categorizing transactions within minutes. This allows accounting professionals to work efficiently, even with high volumes of bank statements.",
  },
  {
    question:
      "Does CypherSOL’s Bank Statement Analyzer require special software to run?",
    answer:
      "No special software is required to run CypherSOL’s Bank Statement Analyzer. It’s a web-based solution, making it accessible from any device with internet access, allowing for convenient usage across different locations.",
  },
  {
    question:
      "Is CypherSOL’s Bank Statement Analyzer suitable for freelancers or independent accountants?",
    answer:
      "Absolutely. CypherSOL’s Bank Statement Analyzer is an excellent choice for freelancers and independent accountants, as it saves time on manual entry, provides fast analysis, and supports them in delivering prompt services to clients.",
  },
  {
    question:
      "How can the Bank Statement Analyzer help reduce workload during audit season?",
    answer:
      "CypherSOL’s Bank Statement Analyzer significantly reduces the workload during audit season by automating transaction categorization and identification of unusual entries, enabling accountants to focus on complex auditing tasks.",
  },
  {
    question: "Can I get a demo of CypherSOL’s Bank Statement Analyzer?",
    answer:
      "Yes, CypherSOL offers a demo to help prospective users understand how the Bank Statement Analyzer works. Contact our support team to schedule a demo online and learn how the tool can benefit your accounting needs.",
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
                  src={`${base}assets/images/infographic-1.png`}
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
          <FAQSection items={faqsArray} />
        </motion.div>
      </div>
    </div>
  );
};
