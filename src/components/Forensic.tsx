"use client";
import {
  Layers,
  ScanSearch,
  Building2,
  Shield,
  BadgeAlert,
  GavelIcon,
  Search,
  NetworkIcon,
  SearchIcon,
  EyeIcon,
  DatabaseIcon,
  FilterIcon,
  WifiOffIcon,
  NetworkIcon as NetworkNodeIcon,
  FileSpreadsheetIcon,
} from "lucide-react";
import { fundTrailFaqsArray } from "./data/FAQs";
import FAQSection from "./FAQSection";
import { motion } from "framer-motion";
import { cn } from "./lib/utils";
import { FeatureBox } from "./UI/ResellerAdvantages";
import { Badge } from "./UI/Badge";
import CTABanner from "./UI/CTABanner";
import { CardComponent } from "./UI/CardComponent";

const agencies = [
  {
    icon: <Shield className="h-12 w-12" />,
    name: "CBI",
    fullName: "Central Bureau of Investigation",
  },
  {
    icon: <BadgeAlert className="h-12 w-12" />,
    name: "ATS",
    fullName: "Anti-Terrorism Squad",
  },
  {
    icon: <Building2 className="h-12 w-12" />,
    name: "EOW",
    fullName: "Economic Offences Wing",
  },
  {
    icon: <Shield className="h-12 w-12" />,
    name: "NIA",
    fullName: "National Investigation Agency",
  },
  {
    icon: <Search className="h-12 w-12" />,
    name: "Cyber Crime",
    fullName: "Cyber Crime & Financial Intelligence Units",
  },
  {
    icon: <GavelIcon className="h-12 w-12" />,
    name: "ED",
    fullName: "Enforcement Directorate",
  },
  {
    icon: <Building2 className="h-12 w-12" />,
    name: "IT & Vigilance",
    fullName: "Income Tax & Vigilance Departments",
  },
  {
    icon: <NetworkIcon className="h-12 w-12" />,
    name: "Police",
    fullName: "State & Central Police Investigation Wings",
  },
];

const capabilities = [
  {
    id: 1,
    Icon: () => <NetworkIcon className="h-6 w-6" />,
    title: "AI-Powered Fund Flow Mapping",
    description:
      "Automatically visualize complex financial relationships and transactions.",
  },
  {
    id: 2,
    Icon: () => <SearchIcon className="h-6 w-6" />,
    title: "Suspicious Transaction Pattern Recognition",
    description: "Identify anomalous behaviors and potential fraud patterns.",
  },
  {
    id: 3,
    Icon: () => <EyeIcon className="h-6 w-6" />,
    title: "Fund Flow Visualization",
    description: "Graph-based and timeline views for comprehensive analysis.",
  },
  {
    id: 4,
    Icon: () => <DatabaseIcon className="h-6 w-6" />,
    title: "Multi-Bank & Multi-Account Trail Detection",
    description:
      "Track funds across various financial institutions and accounts.",
  },
  {
    id: 5,
    Icon: () => <FilterIcon className="h-6 w-6" />,
    title: "7500+ Keyword & Behavior-Based Data Points",
    description: "Extensive pattern recognition for sophisticated detection.",
  },
  {
    id: 6,
    Icon: () => <WifiOffIcon className="h-6 w-6" />,
    title: "Offline Deployment for Data Security",
    description: "Process sensitive information without internet connectivity.",
  },
  {
    id: 7,
    Icon: () => <NetworkNodeIcon className="h-6 w-6" />,
    title: "Link Analysis Between Entities & Accounts",
    description:
      "Reveal hidden connections and relationships in complex networks.",
  },
  {
    id: 8,
    Icon: () => <FileSpreadsheetIcon className="h-6 w-6" />,
    title: "Instant Report Generation",
    description:
      "Create detailed Excel/CSV reports for investigation documentation.",
  },
];

export const Forensic = () => {
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
            className="mx-auto space-y-8"
          >
            <div className="flex items-center justify-center mb-10">
              <Badge>Overview</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400 drop-shadow-lg">
              Fund Trail Analyzer
            </h1>
            <h4 className="mt-6 sm:mt-8 max-w-5xl mx-auto text-lg md:text-xl lg:text-2xl text-gray-300 font-semibold tracking-wide leading-relaxed">
              *CypherSOL Fund Trail Analyzer is an advanced{" "}
              <span className="text-cyan-400">forensic intelligence tool</span>{" "}
              , built exclusively for government agencies to track, visualize,
              and analyze the flow of funds across bank accounts and{" "}
              <span className="text-cyan-400">uncover financial fraud</span> ,{" "}
              <span className="text-cyan-400">laundering</span>, and{" "}
              <span className="text-cyan-400">criminal funding activities</span>
              .
            </h4>
            <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-10">
              <p className="mt-4 max-w-4xl mx-auto text-justify text-sm sm:text-base lg:text-lg text-gray-400 font-medium leading-relaxed">
                Developed with national security and economic enforcement in
                mind, this tool empowers agencies like the CBI, ATS, EOW, NIA,
                and Cyber Crime Units to efficiently investigate suspicious
                transactions across multiple accounts, banks, and timeframes.
              </p>
              <p className="mt-4 max-w-4xl mx-auto text-justify text-sm sm:text-base lg:text-lg text-gray-400 font-medium leading-relaxed">
                The system is powered by{" "}
                <span className="text-cyan-400">7500+ data point</span> filters
                and works seamlessly on PDF, Excel, and CSV formats (as received
                from banks). It automates the identification of suspicious
                transaction patterns, links related accounts or beneficiaries,
                and provides actionable intelligence in real-time—all without
                needing internet during processing or analysis.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Built Exclusively For Section - Auto Scrolling */}
      <section id="agencies" className="py-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400">
                Built Exclusively For
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              CypherSOL Fund Trail Analyzer is an advanced forensic intelligence
              tool, built exclusively for government agencies to track,
              visualize, and analyze the flow of funds across bank accounts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {agencies.map((agency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center p-4 rounded-lg bg-gray-900/50 hover:bg-gray-800/30 transition-colors border border-border/30"
              >
                <div className="p-3 rounded-full bg-cyan-400/5 text-cyan-400 mb-3">
                  {agency.icon}
                </div>
                <h3 className="text-lg font-semibold mb-1">{agency.name}</h3>
                <p className="text-xs text-center text-gray-300">
                  {agency.fullName}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Core Capability */}
      <section>
        <motion.div
          className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-3 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className={cn(
                "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400"
              )}
            >
              Core Capabilities
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            The Fund Trail Analyzer is a powerful tool designed to assist
            government agencies in tracking and analyzing complex financial
            transactions.
          </motion.p>
          <motion.div
            // variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {capabilities.map((capability) => (
              <CardComponent
                key={capability.id}
                title={capability.title}
                description={capability.description}
                Icon={capability.Icon}
              />
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Key Use Cases Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
            Fund Trail Analyzer
          </span>
          <br />
          <span
            className={cn(
              "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400"
            )}
          >
            Key Use Cases
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <FeatureBox
            title="Uncovering Multi-Layered Money Laundering Operations"
            description="1) Government agencies often face challenges identifying layered transactions across accounts and banks."
            para="2) Our tool deciphers and visualizes fund trails, helping to expose circular transactions, layering strategies, and complex fund flows often used to disguise the origin and ownership of money."
            icon={<Layers className="w-14 h-14 text-cyan-400" />}
            delay={0}
          />

          <FeatureBox
            title="Tracking Financial Flows in Suspicious Investigations"
            description="1) For agencies like ATS and NIA, tracing sources of funding and distribution of suspicious transactions is crucial. "
            para="2) Fund Trail Analyzer filters transactions based on location, frequency, account types, and keywords associated with sensitive financial activities, bringing clarity to otherwise obscure trails."
            icon={<ScanSearch className="w-12 h-12 text-cyan-400" />}
            delay={0.2}
          />
        </div>
      </div>

      {/* Cta Banner */}
      <CTABanner
        title="Secure Your "
        highlightedText="Investigation Capabilities"
        subtitle="Join elite government agencies using CypherSOL Fund Trail Analyzer for critical financial investigations. Offline deployment ensures maximum data security."
        primaryButtonText="Contact Us"
        imageSrc="https://framerusercontent.com/images/MecLliNBqre50VslV9Cc8fZOqkY.png?scale-down-to=512"
        imageAlt="AI-powered financial analysis"
      />

      {/* FAQ Section */}
      <motion.div custom={12} initial="hidden" animate="visible">
        <FAQSection
          items={fundTrailFaqsArray}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about CypherSOL Bank Statement Analyzer"
          highlightedText="Asked Questions"
          regularText="Frequently "
        />
      </motion.div>
    </>
  );
};
