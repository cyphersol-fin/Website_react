import React from "react";
import { motion } from "framer-motion";
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
  CheckCircle,
  TrendingUp,
  BookOpen,
  ClipboardCheck,
} from "lucide-react";
import { bankAnalyzerFaqsArray } from "./data/FAQs";
import { EnhancedWorkflowSection } from "./EnhancedWorkflowSection";
import { Helmet } from "react-helmet-async";
import CaseStudySection from "./components/ui/case-study";

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
const caseStudiesData = [
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

export const fadeUpVariants = {
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

export const BankAnalyzer = () => {
  return (
    <>
      <Helmet>
        <title>
          Be Intelligently Lazy with Accounting & ITR Automation from ₹45*
        </title>
        <meta
          name="description"
          content="Cyphersol helps you 'Be Intelligently Lazy' by offering automation for accounting, bank statement analyzers, and IT solutions for chartered accountants and MSMEs in India. Accelerate your business growth with our innovative digital services."
        />
        <meta
          name="keywords"
          content="Cyphersol, be intelligently lazy, automation for accounting, bank statement analyser, automation for chartered accountants, MSME solutions, IT solutions India, software development, digital services"
        />
      </Helmet>
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
              Bank Statement <br /> Analyzer
            </h1>
            <h4 className="mt-6 sm:mt-8 max-w-5xl mx-auto text-lg sm:text-xl md:text-3xl text-gray-300 font-semibold tracking-wide">
              *Powering Automation for Chartered Accountants and Tax
              Consultant's. Revolutionize Accounting, Tally Integration & ITR
              Filing with{" "}
              <span className="text-cyan-400">AI-Powered Automation</span>.
            </h4>
            <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-10">
              <p className="mt-4 max-w-4xl mx-auto text-justify text-sm sm:text-base lg:text-lg text-gray-400 font-medium leading-relaxed">
                Managing complex bank statements and manual data entry can be a
                daunting task, particularly during busy tax seasons. CypherSOL's
                Bank Statement Analyzer leverages cutting-edge AI technology to
                streamline transaction categorization and data management,
                providing Chartered Accountants, financial advisors, precise,
                and effortless accounting solutions.
              </p>
              <p className="mt-4 max-w-4xl mx-auto text-justify text-sm sm:text-base lg:text-lg text-gray-400 font-medium leading-relaxed">
                With CypherSOL, tedious manual processes become automated,
                reducing errors and significantly boosting productivity. Its
                secure, offline functionality ensures complete data
                confidentiality, empowering professionals to dedicate more time
                to strategic client engagement and less on administrative tasks.
              </p>
            </div>
          </motion.div>
        </div>{" "}
      </section>

      {/* 
      Bank statment Features & Benefits */}
      <section className="relative bg-black overflow-hidden">
        {/* <GlowEffect />{" "} */}
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 space-y-4">
            <Badge>Features & Benefits</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-5 text-[#c3d0e5] text-center animate-slide-down">
            <span className="bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400 text-transparent bg-clip-text">
              Key Features and Benefits for <br /> Chartered Accountants
            </span>{" "}
          </h1>

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

      <CaseStudySection
        title="Real-Life Case Studies"
        subtitle="See how Chartered Accountants across India are transforming their practices with CypherSOL."
        data={caseStudiesData}
        fadeUpVariants={fadeUpVariants}
      />

      {/* Testimonials Section */}
      <section>
        <div className="container px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge>Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
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
