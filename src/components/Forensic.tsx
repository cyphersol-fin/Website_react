"use client";
import { Layers, ScanSearch, Shield } from "lucide-react";
import { forensicFaqsArray } from "./data/FAQs";
import FAQSection from "./FAQSection";
import { motion } from "framer-motion";
import { cn } from "./lib/utils";
import { FeatureBox } from "./UI/ResellerAdvantages";
import { Badge } from "./UI/Badge";
import CTABanner from "./UI/CTABanner";
import { Marquee } from "./components/ui/marquee";

const agencies = [
  {
    name: "CBI (Central Bureau of Investigation)",
  },
  {
    name: "ATS (Anti-Terrorism Squad)",
  },
  {
    name: "EOW (Economic Offences Wing)",
  },
  {
    name: "NIA (National Investigation Agency)",
  },
  {
    name: "Cyber Crime & Financial Intelligence Units",
  },
  {
    name: "Enforcement Directorate (ED)",
  },
  {
    name: "Income Tax & Vigilance Departments",
  },
  {
    name: "State & Central Police Investigation Wings",
  },
];

const firstRow = agencies.slice(0, agencies.length / 2);
const secondRow = agencies.slice(agencies.length / 2);

const AgencyCard = ({ name }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-70 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-900 dark:hover:bg-gray-900/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Shield className="h-8 w-8 text-cyan-400" />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};
export const Forensic = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
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
            className="mx-auto max-w-3xl space-y-8"
          >
            <div className="flex items-center justify-center mb-10">
              <Badge>Government Exclusive</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400 drop-shadow-lg">
              Fund Trail Analyzer
            </h1>
            <h4 className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl md:text-3xl text-gray-300 font-semibold tracking-wide">
              *CypherSOL Fund Trail Analyzer is an advanced forensic{" "}
              <span className="text-cyan-400">
                intelligence tool, built exclusively
              </span>{" "}
              for government agencies to track, visualize, and{" "}
              <span className="text-blue-400">analyze the flow of funds</span>.
            </h4>

            <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-400 font-medium leading-relaxed">
              Advanced forensic intelligence tool for tracking, visualizing, and
              analyzing fund flows across bank accounts. Uncover financial
              fraud, laundering, and criminal funding activities with
              <span className="text-cyan-400"> 7500+ data point filters</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Built Exclusively For Section - Auto Scrolling */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white"
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
              Built Exclusively For
            </span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Government agencies to track and analyze complex financial
            transactions.
          </motion.p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <AgencyCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <AgencyCard key={review.name} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </section>

      {/* Core Capability */}
      <section>
        <motion.div
          className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
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
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            The Fund Trail Analyzer is a powerful tool designed to assist
            government agencies in tracking
            <br /> and analyzing complex financial transactions.
          </motion.p>
          <motion.img
            src="assets/images/Core-Capabilities.png"
            alt="software function"
            className="w-full h-auto object-contain"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          />
        </motion.div>
      </section>

      {/* Key Use Cases Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-20 tracking-tight text-center">
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
        </h1>

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
      <motion.div
        custom={12}
        // variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
      >
        <FAQSection
          items={forensicFaqsArray}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about CypherSOL Bank Statement Analyzer"
          highlightedText="Asked Questions"
          regularText="Frequently "
        />
      </motion.div>
    </>
  );
};
