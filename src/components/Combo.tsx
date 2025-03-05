"use client";

import { motion } from "framer-motion";
import { GlowEffect1 } from "./UI/GlowEffect";
import { cards } from "./data/combo";
import { FeatureCard } from "./utils/feature-card";
import { TextAnimate } from "./components/ui/text-animate";
import { Badge } from "./UI/Badge";
import FAQSection from "./FAQSection";

const faqsArray = [
  {
    question: "What is the CypherSOL combo product?",
    answer:
      "Our combo product combines the powerful Bank Statement Analyzer with a free Excel to Tally utility. This package allows users to quickly analyze bank statements and efficiently import data from Excel to Tally, simplifying financial management tasks for businesses.",
  },
  {
    question: "How does the Bank Statement Analyzer benefit businesses?",
    answer:
      "CypherSOL’s Bank Statement Analyzer helps businesses categorize transactions, identify suspense entries, and determine loan eligibility based on 7,500+ data points. It saves time and minimizes manual errors, especially in ledger grouping and financial analysis.",
  },
  {
    question: "What is the Excel to Tally utility, and how does it work?",
    answer:
      "The Excel to Tally utility seamlessly transfers data from Excel into Tally, making it easier to manage payments, receipts, sales, and purchases. It eliminates manual data entry, enhancing efficiency and accuracy in accounting processes.",
  },
  {
    question: "Do I need prior experience to use the Excel to Tally utility?",
    answer:
      "Not at all. The Tally import utility is designed to be user-friendly, making it simple for both beginners and experienced users to transfer data into Tally without hassle.",
  },
  {
    question:
      "Is the Excel to Tally utility included for free with the Bank Statement Analyzer?",
    answer:
      "Yes! CypherSOL offers the Excel to Tally utility free of charge as part of the combo package with our Bank Statement Analyzer, delivering a complete solution for financial analysis and data import needs if minimum 100 statements are purchased.",
  },
  {
    question: "How many bank statements can I analyze with the combo product?",
    answer:
      "With our combo offer, you can analyze up to 100 bank statements per year or utilize the analyzer for one year, whichever comes first. After reaching this limit, you can easily recharge on our website or contact customer support.",
  },
  {
    question: "Can the Excel to Tally utility support bulk data uploads?",
    answer:
      "Absolutely! The utility allows for bulk data imports into Tally, which is ideal for businesses dealing with high transaction volumes. This feature helps speed up your accounting processes, reducing workload and improving data accuracy.",
  },
  {
    question:
      "How is the Bank Statement Analyzer different from other analyzers on the market?",
    answer:
      "CypherSOL’s Bank Statement Analyzer is tailored to optimize ledger grouping and suspense transaction identification. With over 7,500 data points for analysis, it is designed to offer insights that support loan eligibility assessments based on bank balances.",
  },
  {
    question: "Is customer support available if I encounter issues?",
    answer:
      "Yes, our support team is available from 10:00 AM to 6:30 PM to assist you. You can reach us at 8169764722 for any questions regarding the Bank Statement Analyzer or the Tally import utility.",
  },
  {
    question: "How do I get started with the CypherSOL combo product?",
    answer:
      "Visit our website at www.cyphersol.co.in to subscribe. Once you’re signed up, you’ll receive access to both the Bank Statement Analyzer and the Excel to Tally utility. Our team is here to provide a demo if needed.",
  },
  {
    question: "Are there any limitations on data uploads?",
    answer:
      "The analyzer allows for up to 100 bank statements or a one-year validity, whichever occurs first. Bulk uploads are supported in the Excel to Tally utility for a streamlined accounting experience.",
  },
  {
    question: "Can I use the Excel to Tally utility on multiple computers?",
    answer:
      "The Excel to Tally utility can be installed on one laptop or personal computer as part of the subscription. For additional devices, please contact our customer support team for guidance on multi-device usage options.",
  },
  {
    question: "Does the Bank Statement Analyzer support multiple bank formats?",
    answer:
      "Yes, our Bank Statement Analyzer is designed to support over 100 bank formats and is continually updated to include new formats as needed. This ensures compatibility with a broad range of banks.",
  },
  {
    question:
      "Can the combo package be used by chartered accountants and financial advisors?",
    answer:
      "Absolutely! The Bank Statement Analyzer and Excel to Tally utility are ideal for chartered accountants, financial advisors, and loan agencies who need fast and reliable tools to manage and analyze financial data.",
  },
  {
    question:
      "How does the Bank Statement Analyzer determine loan eligibility?",
    answer:
      "Our analyzer uses data points such as the average bank balance and transaction trends to provide insights on loan eligibility, making it easier for businesses and loan agents to evaluate candidates based on bank statement history.",
  },
  {
    question:
      "Does CypherSOL offer training on how to use the Excel to Tally utility?",
    answer:
      "Yes, we offer a demo session to help you get started. Our support team is also available to assist with any questions about using the Excel to Tally utility effectively.",
  },
  {
    question:
      "What makes CypherSOL’s combo product different from other Tally import utilities?",
    answer:
      "Our product goes beyond simple Excel to Tally data import by combining it with the Bank Statement Analyzer, which brings insights into categorization, suspense transaction detection, and ledger grouping, adding substantial value to your accounting workflows",
  },
  {
    question:
      "Is the CypherSOL combo product suitable for businesses with high transaction volumes?",
    answer:
      "Yes, our tools are optimized for high transaction volumes, allowing for efficient bulk data imports into Tally and advanced bank statement analysis that categorizes and organizes data for easy review and management.",
  },
  {
    question:
      "How do I recharge my subscription once I reach the bank statement limit?",
    answer:
      "Recharging is easy and can be done through our website or by contacting CypherSOL customer support. This flexibility ensures uninterrupted access to both the Bank Statement Analyzer and the Excel to Tally utility.",
  },
  {
    question:
      "Can I customize the format of data when importing from Excel to Tally?",
    answer:
      "The Excel to Tally utility supports standard data formats for seamless integration, but custom formatting options can be discussed based on specific business needs. Reach out to us for more details on tailored import options.",
  },
  {
    question: "Do I need Tally installed to use the Excel to Tally utility?",
    answer:
      "Yes, you need a licensed version of Tally installed to use the Excel to Tally import utility effectively. It is compatible with various Tally versions; please contact support for version-specific compatibility information.",
  },
  {
    question: "How does the Excel to Tally utility save time for businesses?",
    answer:
      "The Excel to Tally utility automates the data import process, reducing manual entry errors and saving hours that would otherwise be spent inputting data. This allows businesses to focus more on analysis and decision-making rather than on repetitive tasks.",
  },
  {
    question:
      "Are there any limits on the amount of data I can import from Excel to Tally?",
    answer:
      "There are no specific data limits for the Excel to Tally utility. However, for optimal performance, large imports should be segmented for smooth processing. Contact support if you need assistance with large datasets.",
  },
  {
    question: "Can I use the CypherSOL combo product offline?",
    answer:
      "The Bank Statement Analyzer requires an internet connection for updates and support access, but the Excel to Tally utility can function offline once installed, ensuring flexible use even without internet access.",
  },
];

export default function Combo() {
  return (
    <div className="bg-black relative overflow-hidden">
      <GlowEffect1 />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Animated Badge */}
          <motion.div
            className="mb-8"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Badge>
              Combo of Bank Statement Analyzer with Excel to Tally Data Import
              Utility
            </Badge>
          </motion.div>
          <div className="max-w-7xl mx-auto">
            {/* Animated Heading */}
            <motion.h1
              className="mb-4 text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight text-cyan-200"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <TextAnimate animation="scaleUp" by="text">
                Advantages
              </TextAnimate>
            </motion.h1>

            {/* Animated Description */}
            <motion.p
              className="text-xl md:text-1xl text-gray-300 mb-12 max-w-3xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              Combining the Bank Statement Analyzer with the Tally Upload
              Utility offers a comprehensive solution for businesses,
              accountants, and tax professionals. Here are the key benefits of
              using both tools together.
            </motion.p>
          </div>
          {/* Animated Feature Cards */}
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {cards.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div>
        <FAQSection items={faqsArray} />
      </div>
    </div>
  );
}
