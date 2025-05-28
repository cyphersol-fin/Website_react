import React from "react";
import { motion } from "framer-motion";
import { cn } from "./lib/utils";
import CaseStudyCard from "./components/ui/case-study";
import { Badge } from "./UI/Badge";
import TestimonialCard from "./components/ui/testimonial-cards";
import FAQSection from "./FAQSection";
import { CardComponent } from "./UI/CardComponent";
import {
  CheckCircle,
  Building,
  BarChart3,
  Users,
  ArrowDownUp,
  ClipboardList,
  Calendar,
  FileSpreadsheet,
  Shield,
} from "lucide-react";
import { dsaFaqsArray } from "./data/FAQs";

const cardData = [
  {
    id: 1,
    title: "Instant Bank & Product Eligibility",
    description:
      "Quickly determine loan eligibility for multiple banks and specific loan products.",
    Icon: () => <CheckCircle size={24} />,
  },
  {
    id: 2,
    title: "Identify the Right Lender Immediately",
    description: "Ensure accuracy from day one, optimizing loan approvals.",
    Icon: () => <Building size={24} />,
  },
  {
    id: 3,
    title: "Average Bank Balance Analysis",
    description: "Calculate eligibility based on monthly average balance.",
    Icon: () => <BarChart3 size={24} />,
  },
  {
    id: 4,
    title: "Debtors & Creditors Visibility",
    description: "Easily identify and summarize debtors and creditors.",
    Icon: () => <Users size={24} />,
  },
  {
    id: 5,
    title: "Transaction Bounce Insights",
    description: "Instantly track and summarize bounced transactions.",
    Icon: () => <ArrowDownUp size={24} />,
  },
  {
    id: 6,
    title: "Existing Obligations Analysis",
    description:
      "Clearly identify and summarize current financial obligations.",
    Icon: () => <ClipboardList size={24} />,
  },
  {
    id: 7,
    title: "Date-wise & Daily EOD Summaries",
    description: "Daily transaction summaries for precise end-of-day insights.",
    Icon: () => <Calendar size={24} />,
  },
  {
    id: 8,
    title: "Automated Ledger Classification",
    description: "Auto-extraction and accurate transaction classification.",
    Icon: () => <FileSpreadsheet size={24} />,
  },
  {
    id: 9,
    title: "SaaS-based, Secure, Online Platform",
    description: "Accessible anytime, anywhere, ensuring data security.",
    Icon: () => <Shield size={24} />,
  },
];

export const DsaComponent = () => {
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
              Smart Loan Eligibility Automation for DSAs
            </h1>

            <h4 className="mt-6 sm:mt-8 max-w-2xl mx-auto text-lg sm:text-xl md:text-3xl text-gray-300 font-semibold tracking-wide">
              *Instantly Identify{" "}
              <span className="text-cyan-400">Loan Eligibility</span> and Match
              Clients to the{" "}
              <span className="text-blue-400">Right Lenders</span>
            </h4>

            <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-gray-400 font-medium leading-relaxed">
              For Direct Selling Agents (DSAs), identifying the right lender
              accurately and quickly is crucial. CypherSOL’s SaaS-based Bank
              Statement Analyzer streamlines the loan eligibility assessment
              process, providing instant, precise insights based on monthly
              average bank balance, debtors and creditors, existing obligations,
              and transaction history, ensuring you match your clients to the
              ideal lenders immediately.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DSAs Features & Benefits */}
      <section>
        {" "}
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 space-y-4">
            <Badge>Features & Benefits</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-5 text-[#c3d0e5] text-center animate-slide-down">
            <span className="bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400 text-transparent bg-clip-text">
              Key Features and Benefits for DSAs
            </span>{" "}
          </h1>

          <p className="text-base md:text-lg text-[#c3d0e5] text-center max-w-4xl mx-auto">
            Designed to streamline your workflow, our platform helps DSAs
            quickly assess loan eligibility, match clients to the right lenders,
            and reduce manual effort — all with speed and accuracy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto px-4 items-center justify-center mb-8 mt-12">
            {cardData.map((card) => (
              <CardComponent
                key={card.id}
                title={card.title}
                description={card.description}
                Icon={card.Icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How our software works */}
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
              How CypherSOL's Software Functions
            </span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            A fully remote team on a mission to build <br /> the best
            communication platform for developers.
          </motion.p>
          <motion.img
            src="assets/images/dsa1.png"
            alt="Financial automation tools"
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

      {/* Case Studies */}
      <section>
        <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400">
            Real-Life Case Studies
          </span>
        </h1>
        <p className="text-base md:text-lg text-[#c3d0e5] text-center max-w-4xl mx-auto mb-12">
          See how Direct Selling Agents(DSAs) across India are transforming
          their practices with CypherSOL.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-12 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <CaseStudyCard
            location={"Mumbai"}
            title="Quick Client-Lender Matching"
            description="A Mumbai DSA efficiently matched clients to suitable lenders from day one using CypherSOL, significantly increasing approvals and satisfaction."
          />
          <CaseStudyCard
            location={"Delhi"}
            title="Enhanced Eligibility Accuracy"
            description="A Delhi-based DSA accurately determined clients' loan eligibility based on monthly average balance and reduced rejection rates dramatically."
          />
          <CaseStudyCard
            location={"Pune"}
            title="Efficient Daily EOD Management"
            description="Daily date-wise EOD summaries significantly simplified operations, improved overall productivity, and ensured accuracy in client documentation."
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <div className="container px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge>Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              What Our Users Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Hear from DSAs who have transformed their loan processing workflow
              with CypherSOL
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              quote="CypherSOL’s Bank Statement Analyzer has been an invaluable tool for my work as a Corporate Loan Advisor (DSA). It streamlines the process of analyzing bank statements, categorizing transactions, and extracting critical insights in seconds, significantly enhancing efficiency.
              The advanced features such as trend analysis, date-wise average bank balance computation, and detailed loan eligibility assessment—both bank-wise and product-wise—have been instrumental in presenting precise and actionable data to lenders. This not only saves time but also improves the accuracy and quality of my client submissions.
              I highly recommend CypherSOL to DSAs looking to elevate their operations and deliver exceptional results"
              note="Time-Saving, Accurate Insights"
              author="Neeraj Nigudker"
              role="Senior DSA, Mumbai"
              rating={5}
              delay={0}
            />
            <TestimonialCard
              quote="The lender matching feature alone has increased my conversion rate by 35%. I'm now able to place clients with the right lenders on the first attempt."
              note="Increased Conversion Rate"
              author="Priya Sharma"
              role="Independent DSA, Delhi"
              rating={5}
              delay={0.1}
            />
            <TestimonialCard
              quote="As a new DSA, CypherSOL gave me the confidence to handle complex loan applications. The automated analysis makes me look like a seasoned professional to my clients."
              note="Automated Analysis"
              author="Vikram Singh"
              role="DSA, Bangalore"
              rating={4}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section>
        <FAQSection items={dsaFaqsArray} />
      </section>
    </>
  );
};
