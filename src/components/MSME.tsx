import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./UI/Badge";
import FAQSection from "./FAQSection";
import { msmeFaqsArray } from "./data/FAQs";
import CTABanner from "./UI/CTABanner";
import CaseStudySection from "./components/ui/case-study";
import { fadeUpVariants } from "./BankAnalyzer";
import {
  BarChart2,
  FolderKanban,
  ShieldAlert,
  TimerReset,
  UploadCloud,
} from "lucide-react";

const caseStudiesData = [
  {
    id: 1,
    title: "Accelerated Loan Approval for Mumbai Trading Firm",
    location: "Mumbai",
    challenge:
      "Delays in loan approvals due to cumbersome manual analysis of financial statements.",
    solution:
      "Used CypherSOL’s instant loan eligibility insights based on average bank balances.",
    result:
      "Significantly reduced documentation time, resulting in quicker approvals and enhanced cash flow management.",
    benefit: "Faster Loan Approvals",
    icon: TimerReset,
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: 2,
    title: "Improved Financial Clarity for Pune-based Manufacturer",
    location: "Pune",
    challenge:
      "Monthly financial reporting was challenging and time-consuming, often resulting in inaccuracies and compliance risks.",
    solution:
      "Used CypherSOL’s automated monthly financial summaries to streamline internal reporting.",
    result:
      "Improved accuracy and achieved better financial clarity, enhancing decision-making and compliance.",
    benefit: "Accurate Monthly Reports",
    icon: BarChart2,
    color: "from-pink-500 to-red-500",
  },
  {
    id: 3,
    title: "Streamlined Accounting for Bangalore Retail Chain",
    location: "Bangalore",
    challenge:
      "Frequent errors and inefficiencies from manually uploading transactions to Tally.",
    solution:
      "Used CypherSOL’s one-click integration to automate the transaction upload process.",
    result:
      "Significantly reduced errors, saved countless work hours, and allowed the accounting team to focus on strategic financial tasks.",
    benefit: "Efficient Accounting Integration",
    icon: UploadCloud,
    color: "from-teal-500 to-cyan-500",
  },
  {
    id: 4,
    title:
      "Effective Management of Multiple Accounts for Delhi Consulting Firm",
    location: "Delhi",
    challenge:
      "Challenges with scattered financial data while managing numerous client accounts.",
    solution:
      "Used CypherSOL to efficiently consolidate and categorize financial information from multiple accounts.",
    result:
      "Improved financial oversight, reduced errors, and enhanced client satisfaction.",
    benefit: "Smarter Account Management",
    icon: FolderKanban,
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: 5,
    title: "Enhanced Compliance for Hyderabad Healthcare Provider",
    location: "Hyderabad",
    challenge:
      "Frequent discrepancies during audits due to inaccurate financial reporting.",
    solution:
      "Used CypherSOL’s automated transaction processing and meticulous categorization.",
    result:
      "Achieved consistent compliance and drastically reduced audit-related complications and costs.",
    benefit: "Audit-Ready Reporting",
    icon: ShieldAlert,
    color: "from-rose-500 to-fuchsia-500",
  },
];
export const MSME = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden px-4 py-12 sm:py-20 lg:py-24">
        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Curved Lines */}
          <svg
            className="absolute h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="grad1" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
                <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Top Curves */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                repeatDelay: 1,
              }}
              d="M 100 100 Q 300 0 500 100 T 900 100"
              fill="none"
              stroke="url(#grad1)"
              strokeWidth="1"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                repeatDelay: 1,
                delay: 0.5,
              }}
              d="M 0 200 Q 200 100 400 200 T 800 200"
              fill="none"
              stroke="url(#grad2)"
              strokeWidth="1"
            />
            {/* Bottom Curves */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                repeatDelay: 1,
                delay: 1,
              }}
              d="M 100 600 Q 300 500 500 600 T 900 600"
              fill="none"
              stroke="url(#grad1)"
              strokeWidth="1"
            />
          </svg>

          {/* Straight Lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: "100%", opacity: 0 }}
                animate={{
                  x: "-100%",
                  opacity: [0, 0.7, 0.7, 0],
                }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "linear",
                }}
                className="absolute right-0"
                style={{
                  top: `${15 + i * 10}%`,
                  height: "1px",
                  width: "100%",
                  background: `linear-gradient(90deg, transparent, ${
                    i % 2 === 0 ? "#22d3ee" : "#8b5cf6"
                  }60, transparent)`,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0 z-[1]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-cyan-500/30 blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute -right-1/4 top-1/2 h-96 w-96 rounded-full bg-violet-500/30 blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="container relative z-[3] px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mx-auto max-w-8xl space-y-8"
          >
            <div className="flex items-center justify-center mb-10">
              <Badge>Overview</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400 drop-shadow-lg">
              Powering Smart Automation <br />
              for Businesses
            </h1>

            <h4 className="mt-6 sm:mt-8 max-w-4xl mx-auto text-xl md:text-2xl lg:text-3xl text-gray-300 font-semibold tracking-wide">
              *Automate Accounting,{" "}
              <span className="text-cyan-400">Simplify Tally Integration</span>{" "}
              &{" "}
              <span className="text-blue-400">
                Instantly Determine Loan Eligibility
              </span>
            </h4>

            <p className="mt-4 mx-auto max-w-4xl text-justify text-sm sm:text-base lg:text-lg text-gray-400 font-medium leading-relaxed">
              Managing financial transactions, accounting entries, and loan
              documentation manually can be tedious, error-prone, and costly for
              businesses. CypherSOL’s AI-powered Bank Statement Analyzer
              automates these tasks, providing accurate transaction
              categorization, instant financial summaries, seamless Tally
              integration, and immediate insights into loan eligibility for home
              loans, loans against property, and unsecured business loans based
              on average bank balance.
            </p>
            <p className="mt-4 mx-auto max-w-4xl text-justify text-sm sm:text-base lg:text-lg text-gray-400 font-medium leading-relaxed">
              CypherSOL reduces manual processes, boosts productivity, and
              ensures secure, offline data confidentiality, empowering
              businesses to focus more on growth and less on administrative
              tasks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section>
        <CaseStudySection
          title="Real-Life Case Studies"
          subtitle="See how Businesses across India are transforming their practices with
          CypherSOL."
          data={caseStudiesData}
          fadeUpVariants={fadeUpVariants}
        />
      </section>

      {/* Cta Banner */}
      <CTABanner
        title="Wanna"
        highlightedText="Talk To Us?"
        subtitle="Please feel free to contact us. We’re super happy to talk to you. Feel free to ask anything."
        primaryButtonText="Contact Us"
        imageSrc="https://framerusercontent.com/images/MecLliNBqre50VslV9Cc8fZOqkY.png?scale-down-to=512"
        imageAlt="Bookkeeping automation"
      />

      {/* FAQs */}
      <section>
        <FAQSection items={msmeFaqsArray} />
      </section>
    </>
  );
};
