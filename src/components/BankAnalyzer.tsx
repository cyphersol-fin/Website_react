import React from "react";
import { motion } from "framer-motion";
import { cn } from "./lib/utils";
import { Badge } from "./UI/Badge";
import TestimonialCard from "./components/ui/testimonial-cards";
import FAQSection from "./FAQSection";
import { CardComponent } from "./UI/CardComponent";
import {
  CheckCircleIcon,
  Clock,
  FileText,
  PiggyBankIcon,
  ShieldCheckIcon,
  Upload,
  Database,
  Filter,
  Layers,
  Repeat,
  FileOutput,
  MapPin,
  CheckCircle,
  TrendingUp,
  BookOpen,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";
import { bankAnalyzerFaqsArray } from "./data/FAQs";
import { Link } from "react-router-dom";
import { EnhancedWorkflowSection } from "./EnhancedWorkflowSection";
import { GlowEffect } from "./UI/GlowEffect";

const cardData = [
  {
    id: 1,
    title: "Instant ITR Filing Summaries",
    description: "Organized data ready immediately for stress-free tax filing.",
    Icon: () => <Clock className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "One-click Tally Integration",
    description:
      "Instantly migrate organized transactions into Tally, simplifying your daily accounting workflows.",
    Icon: () => <Upload className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "100% Offline Security",
    description: "Complete confidentiality, zero internet dependence.",
    Icon: () => <ShieldCheckIcon className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Supports All Banks & Formats",
    description: "Easily manage PDF, Excel, and CSV formats.",
    Icon: () => <FileText className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "Unlimited Bank Statement & Tally Uploads",
    description: "Unrestricted processing power.",
    Icon: () => <Database className="w-6 h-6" />,
  },
  {
    id: 6,
    title: "Complex PDF Resolution",
    description: "Precisely extract data from complicated PDFs manually.",
    Icon: () => <Filter className="w-6 h-6" />,
  },
  {
    id: 7,
    title: "7500+ Smart Data Points",
    description:
      "Intelligent categorization instantly eliminates suspense entries.",
    Icon: () => <Layers className="w-6 h-6" />,
  },
  {
    id: 8,
    title: "Smart Suspense Handling",
    description:
      "Effortlessly send, update, and auto-refresh suspense entries, instantly streamlining your data.",
    Icon: () => <CheckCircleIcon className="w-6 h-6" />,
  },
  {
    id: 9,
    title: "Merge Names & Reduce Suspense",
    description: "Streamline your data clarity instantly.",
    Icon: () => <Repeat className="w-6 h-6" />,
  },
  {
    id: 10,
    title: "Advanced Voucher Management",
    description:
      "Seamlessly handle Sales, Purchase, Ledger, and Inventory entries.",
    Icon: () => <PiggyBankIcon className="w-6 h-6" />,
  },
  {
    id: 11,
    title: "Bulk Processing Excellence",
    description: "Quickly handle multiple accounts simultaneously.",
    Icon: () => <Database className="w-6 h-6" />,
  },
  {
    id: 12,
    title: "Instant, Detailed Reports",
    description: "Quickly export reports in Excel, CSV, or PDF formats.",
    Icon: () => <FileOutput className="w-6 h-6" />,
  },
];

// Case Studies data
const caseStudies = [
  {
    id: 1,
    location: "Delhi",
    title: "Easing Tax Season Stress",
    challenge:
      "A Chartered Accountant struggled each tax season due to manually categorizing client transactions from bank statements.",
    solution:
      "CypherSOL automated this entire process, allowing them to quickly prepare ITR summaries.",
    result:
      "This realistically reduced the workload, enabling the accountant to focus more on advising clients rather than data entry.",
    icon: Clock,
    color: "from-blue-500 to-blue-600",
    benefit: "Time Savings",
  },
  {
    id: 2,
    location: "Hyderabad",
    title: "Simple Integration for Practice",
    challenge:
      "A Hyderabad-based CA frequently faced frustrating errors during data uploads into Tally from Excel sheets, causing delays and rework.",
    solution:
      "After adopting CypherSOL's simple, one-click integration, the firm noticed fewer mistakes and smoother workflows.",
    result:
      "The accountants appreciated how intuitive the tool was, making their daily tasks easier.",
    icon: CheckCircle,
    color: "from-green-500 to-green-600",
    benefit: "Error Reduction",
  },
  {
    id: 3,
    location: "Pune",
    title: "Solving Reconciliation Headaches",
    challenge:
      "A Pune Chartered Accountant often encountered confusing suspense entries during bank reconciliations, wasting valuable hours trying to resolve them.",
    solution:
      "CypherSOL's smart suspense handling provided clarity by automatically identifying and suggesting accurate categories.",
    result:
      "This made reconciliations faster and significantly less stressful for their team.",
    icon: TrendingUp,
    color: "from-purple-500 to-purple-600",
    benefit: "Process Improvement",
  },
  {
    id: 4,
    location: "Ahmedabad",
    title: "Clearer Voucher Management",
    challenge:
      "An Ahmedabad-based Chartered Accountant had difficulty keeping consistent records of various vouchers, creating compliance concerns.",
    solution:
      "Implementing CypherSOL's automated voucher management ensured that sales, purchases, and ledger entries were consistently accurate.",
    result:
      "This significantly reduced manual checking and improved their reporting accuracy.",
    icon: ClipboardCheck,
    color: "from-yellow-500 to-yellow-600",
    benefit: "Compliance Enhancement",
  },
  {
    id: 5,
    location: "Bangalore",
    title: "Consistent Categorization",
    challenge:
      "A CA firm in Bangalore dealt with inconsistent transaction categorization that complicated their accounting and reporting processes.",
    solution:
      "With CypherSOL, they automated the categorization of financial transactions.",
    result:
      "The firm immediately noticed clearer records, less confusion during audits, and more confidence in their financial reporting.",
    icon: BookOpen,
    color: "from-red-500 to-red-600",
    benefit: "Audit Readiness",
  },
];

export const BankAnalyzer = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };
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
        <motion.div
          className="container relative z-[3] px-4 text-center max-w-7xl mx-auto py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
        >
          <motion.div
            className="mb-8 flex items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Badge>Chartered Accountants & Tax Consultant's</Badge>
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className={cn(
                "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400"
              )}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Revolutionize Accounting <br /> with AI-Powered Automation
            </motion.span>
          </motion.h1>
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center text-center md:text-left px-4 sm:px-6 lg:px-8">
              <div className="space-y-6">
                <motion.h4
                  className="text-3xl md:text-5xl font-sans leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Bank Statement Analyzer for{" "}
                  <span className="text-cyan-400 font-sans">
                    Chartered Accountants
                  </span>
                </motion.h4>

                <motion.div
                  className="h-px w-1/2 bg-gradient-to-r from-cyan-500/50 to-transparent my-6"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  style={{ transformOrigin: "left" }}
                />

                <motion.p
                  className="text-gray-400 text-lg md:text-xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  CypherSOL's Bank Statement Analyzer simplifies bank statement
                  processing using advanced AI. It automates transaction
                  categorization and data entry, reducing errors, saving time,
                  and boosting productivity—especially during tax season.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <Link to="/download">
                    <motion.button
                      className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl w-full"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 30px rgba(6, 182, 212, 0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Download
                    </motion.button>
                  </Link>

                  <motion.button
                    className="group px-8 py-4 bg-gray-900/50 backdrop-blur-xl text-white font-semibold rounded-xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Demo
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.div>
                  </motion.button>
                </motion.div>
              </div>

              {/* Image */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.div
                  // className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl"
                  animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.img
                  src="assets/images/Bank-Statement-Analyzer.png"
                  alt="AI visualization showing neural network connections"
                  className="w-full h-auto object-contain rounded-xl relative z-10 shadow-xl"
                  whileHover={{ scale: 1.02 }}
                />
              </motion.div>
            </div>
          </motion.section>
        </motion.div>
      </section>

      {/* 
      Bank statment Features & Benefits */}
      <section className="relative bg-black overflow-hidden">
        <GlowEffect />{" "}
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 space-y-4">
            <Badge>Features & Benefits</Badge>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-5 text-[#c3d0e5] text-center animate-slide-down">
            <span className="bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400 text-transparent bg-clip-text">
              Key Features and Benefits for <br /> Chartered Accountants
            </span>{" "}
          </h1>

          <p className="text-base md:text-lg text-[#c3d0e5] text-center max-w-4xl mx-auto">
            Revolutionize Accounting, Tally Integration & ITR Filing with
            AI-Powered Automation. Managing complex bank statements and manual
            data entry is now effortless with CypherSOL.
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

      {/* Visual Graphic Analysis Section */}
      <EnhancedWorkflowSection />

      {/* How our software works */}
      {/* <section>
        <motion.div
          className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-3 tracking-tight"
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
            src="assets/images/CypherSOL’s-Workflow.png"
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
      </section> */}

      <motion.div
        custom={11}
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-12 tracking-tight text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-pink-400">
            Real-Life Case Studies
          </span>
        </h2>

        <p className="text-base md:text-lg text-[#c3d0e5] text-center max-w-4xl mx-auto mb-12">
          See how Chartered Accountants across India are transforming their
          practices with CypherSOL
        </p>

        {/* Map of India graphic representation with case study locations */}
        <div className="relative w-full max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="border border-gray-800 bg-black/40 backdrop-blur-sm rounded-xl p-6 hover:border-gray-700 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-900/20"
              >
                {/* Header with location and icon */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-cyan-400 mr-2" />
                    <span className="text-cyan-300 font-medium">
                      {study.location}
                    </span>
                  </div>
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${study.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <study.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-4">
                  {study.title}
                </h3>

                {/* Challenge */}
                <div className="mb-4">
                  <h4 className="text-gray-400 font-medium mb-1 text-sm">
                    Challenge:
                  </h4>
                  <p className="text-gray-300">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <h4 className="text-gray-400 font-medium mb-1 text-sm">
                    Solution:
                  </h4>
                  <p className="text-gray-300">{study.solution}</p>
                </div>

                {/* Result */}
                <div className="mb-6">
                  <h4 className="text-gray-400 font-medium mb-1 text-sm">
                    Result:
                  </h4>
                  <p className="text-gray-300">{study.result}</p>
                </div>

                {/* Key benefit tag */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 text-white text-sm">
                  <span className="mr-2">•</span>
                  {study.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <section>
        <div className="container px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge>Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              What Our Users Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Hear from Chartered Accountants and financial professionals who
              have transformed their workflows with CypherSOL's bank statement
              analyzer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              quote="CypherSOL reduced our tax filing preparation time by 70%. What used to take my team days now takes just hours. The automatic categorization feature has been a game-changer for our practice during busy season."
              note="70% time savings"
              author="Rajesh Sharma"
              role="Senior CA, Delhi, Sharma & Associates"
              rating={5}
              delay={0}
            />
            <TestimonialCard
              quote="The offline security feature gives my clients complete peace of mind about their financial data. One-click Tally integration means we can prepare financial statements faster than ever before. Worth every rupee!"
              note="Enhanced client security"
              author="Priya Patel"
              role="Founder & CA, TaxPro Solutions, Mumbai"
              rating={5}
              delay={0.1}
            />
            <TestimonialCard
              quote="Our firm handles statements from over 15 different banks. CypherSOL processes them all flawlessly. The reduction in suspense entries alone has saved countless hours of reconciliation work."
              note="Multi-bank compatibility"
              author="Avinash Reddy"
              role="CA Partner, Reddy & Kumar Associates, Bangalore"
              rating={5}
              delay={0.2}
            />
            <TestimonialCard
              quote="As a solo practitioner, CypherSOL has allowed me to take on 40% more clients this year. The audit-ready reports make compliance work straightforward, and clients are impressed with the quick turnaround times."
              note="40% client capacity increase"
              author="Deepa Krishnan"
              role="Independent CA, Chennai"
              rating={4}
              delay={0.3}
            />
            <TestimonialCard
              quote="Our team previously struggled with complex PDFs from regional banks. CypherSOL's precision in handling these documents has eliminated manual data entry errors completely. The ROI was evident within weeks."
              note="Zero manual errors"
              author="Vikram Malhotra"
              role="Senior Manager, SME Advisory Services, Kolkata"
              rating={5}
              delay={0.4}
            />
            <TestimonialCard
              quote="The bulk processing capability has transformed our operations. We can now handle year-end closing for multiple clients simultaneously, reducing our processing time by nearly 65%. Absolutely indispensable tool."
              note="65% faster year-end closing"
              author="Sanjana Gupta"
              role="Tax Consultant, CloudTax Advisors, Jaipur"
              rating={4}
              delay={0.5}
            />
          </div>
        </div>
      </section>

      <motion.div
        custom={12}
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
      >
        <FAQSection
          items={bankAnalyzerFaqsArray}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about CypherSOL Bank Statement Analyzer"
          highlightedText="Asked Questions"
          regularText="Frequently "
        />
      </motion.div>
    </>
  );
};
