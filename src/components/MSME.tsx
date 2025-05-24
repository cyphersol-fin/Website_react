import React from "react";

import BeamsBackground from "./components/ui/beams-background";
import { motion } from "framer-motion";
import { cn } from "./lib/utils";
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
  AlertTriangle,
  BarChart3,
  Download,
  MapPin,
  Users,
  ShoppingBag,
  ClipboardCheck,
  CreditCard,
  Briefcase,
  Building,
} from "lucide-react";

import { CardComponent } from "./UI/CardComponent";
import FAQSection from "./FAQSection";
import { EnhancedWorkflowSection } from "./EnhancedWorkflowSection";
import { TestimonialsSection } from "./TestimonialSection";
import { msmeFaqsArray } from "./data/FAQs";

const advData = [
  {
    id: 1,
    title: "Instant Financial Summaries",
    description:
      "Organized data ready immediately for efficient business decision-making.",
    Icon: () => <Clock className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "One-click Tally Integration",
    description:
      "Instantly migrate organized transactions into Tally, simplifying your accounting workflows.",
    Icon: () => <Upload className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "100% Offline Security",
    description:
      "Complete confidentiality, zero internet dependence for your sensitive financial data.",
    Icon: () => <ShieldCheckIcon className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Supports All Banks & Formats",
    description:
      "Easily manage PDF, Excel, and CSV formats from any banking institution.",
    Icon: () => <FileText className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "Unlimited Transaction Processing",
    description:
      "Handle any volume of financial data without additional costs.",
    Icon: () => <Database className="w-6 h-6" />,
  },
  {
    id: 6,
    title: "Complex PDF Resolution",
    description:
      "Precisely extract data from complicated bank statements automatically.",
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
      "Effortlessly update and auto-refresh suspense entries, streamlining your financial data.",
    Icon: () => <CheckCircleIcon className="w-6 h-6" />,
  },
  {
    id: 9,
    title: "Loan Eligibility Insights",
    description:
      "Instantly determine eligibility for business loans based on average bank balance.",
    Icon: () => <CreditCard className="w-6 h-6" />,
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
    description:
      "Efficiently manage multiple accounts simultaneously for streamlined operations.",
    Icon: () => <Database className="w-6 h-6" />,
  },
  {
    id: 12,
    title: "Instant, Detailed Reports",
    description:
      "Quickly export business reports in Excel, CSV, or PDF formats.",
    Icon: () => <FileOutput className="w-6 h-6" />,
  },
];

// Workflow steps data
const workflowSteps = [
  {
    id: 1,
    title: "Upload PDF/Excel/CSV",
    Icon: FileText,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "Automatic anomaly detection",
    Icon: AlertTriangle,
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 3,
    title: "AI-powered categorization",
    Icon: BarChart3,
    color: "from-green-500 to-green-600",
  },
  {
    id: 4,
    title: "Suspense reduction",
    Icon: Repeat,
    color: "from-yellow-500 to-yellow-600",
  },
  {
    id: 5,
    title: "One-click Tally export",
    Icon: Upload,
    color: "from-red-500 to-red-600",
  },
  {
    id: 6,
    title: "Download financial reports",
    Icon: Download,
    color: "from-cyan-500 to-cyan-600",
  },
];

// Case Studies data (updated for businesses)
const caseStudies = [
  {
    id: 1,
    location: "Mumbai",
    title: "Accelerated Loan Approval for Trading Firm",
    challenge:
      "A trading business struggled with delays in loan approvals due to cumbersome manual analysis of financial statements.",
    solution:
      "Using CypherSOL's instant loan eligibility insights based on average bank balances, the firm significantly reduced documentation time.",
    result:
      "This led to quicker approvals and enhanced cash flow management for sustained business growth.",
    icon: Briefcase,
    color: "from-blue-500 to-blue-600",
    benefit: "Faster Loan Processing",
  },
  {
    id: 2,
    location: "Pune",
    title: "Improved Financial Clarity for Manufacturer",
    challenge:
      "A manufacturing company found monthly financial reporting challenging and time-consuming, often resulting in inaccuracies and compliance risks.",
    solution:
      "With CypherSOL's automated monthly financial summaries, they streamlined internal reporting processes.",
    result:
      "The company achieved better financial clarity, enhancing decision-making and compliance across operations.",
    icon: Building,
    color: "from-green-500 to-green-600",
    benefit: "Enhanced Reporting",
  },
  {
    id: 3,
    location: "Bangalore",
    title: "Streamlined Accounting for Retail Chain",
    challenge:
      "A retail chain faced constant errors and inefficiencies in manually uploading transactions to Tally.",
    solution:
      "CypherSOL's one-click integration automated this process, significantly reducing errors and saving countless work hours.",
    result:
      "The accounting team could focus on strategic financial tasks, improving overall operational efficiency.",
    icon: ShoppingBag,
    color: "from-purple-500 to-purple-600",
    benefit: "Error Reduction",
  },
  {
    id: 4,
    location: "Delhi",
    title: "Effective Management of Multiple Accounts",
    challenge:
      "A consulting firm managing numerous client accounts faced challenges with scattered financial data.",
    solution:
      "CypherSOL allowed them to efficiently consolidate and categorize financial information from multiple accounts simultaneously.",
    result:
      "This significantly improved financial oversight, reduced errors, and enhanced client satisfaction.",
    icon: Users,
    color: "from-yellow-500 to-yellow-600",
    benefit: "Simplified Management",
  },
  {
    id: 5,
    location: "Hyderabad",
    title: "Enhanced Compliance for Healthcare Provider",
    challenge:
      "A healthcare provider struggled with frequent discrepancies during audits due to inaccurate financial reporting.",
    solution:
      "Using CypherSOL's meticulous categorization and automated transaction processing, they achieved consistent compliance.",
    result:
      "The business drastically reduced audit-related complications and costs while improving regulatory adherence.",
    icon: ClipboardCheck,
    color: "from-red-500 to-red-600",
    benefit: "Audit Readiness",
  },
];

// Testimonial data with business-focused statements
const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "CFO",
    company: "Global Trade Solutions, Mumbai",
    rating: 5,
    text: "CypherSOL reduced our financial processing time by 70%. What used to take our team days now takes just hours. The automatic categorization feature has been a game-changer for our business operations.",
    avatar: "/api/placeholder/45/45",
    highlight: "70% time savings",
  },
  {
    id: 2,
    name: "Priya Desai",
    position: "Finance Director",
    company: "TechSolutions Ltd, Delhi",
    rating: 5,
    text: "The offline security feature gives our company complete peace of mind about sensitive financial data. One-click Tally integration means we can prepare financial statements faster than ever before. Worth every rupee!",
    avatar: "/api/placeholder/45/45",
    highlight: "Enhanced data security",
  },
  {
    id: 3,
    name: "Avinash Mehta",
    position: "Business Owner",
    company: "Mehta Manufacturing, Pune",
    rating: 5,
    text: "Our company handles statements from over 15 different banks. CypherSOL processes them all flawlessly. The loan eligibility insights have helped us secure financing faster, improving our cash flow management.",
    avatar: "/api/placeholder/45/45",
    highlight: "Better financing decisions",
  },
  {
    id: 4,
    name: "Deepa Krishnan",
    position: "Accounting Manager",
    company: "Retail Solutions Inc, Chennai",
    rating: 4,
    text: "CypherSOL has allowed our team to process 40% more transactions this year. The audit-ready reports make compliance work straightforward, and our management is impressed with the quick financial insights.",
    avatar: "/api/placeholder/45/45",
    highlight: "40% productivity increase",
  },
  {
    id: 5,
    name: "Vikram Malhotra",
    position: "Finance Manager",
    company: "Healthcare Innovations, Bangalore",
    rating: 5,
    text: "Our team previously struggled with complex PDFs from regional banks. CypherSOL's precision in handling these documents has eliminated manual data entry errors completely. The ROI was evident within weeks.",
    avatar: "/api/placeholder/45/45",
    highlight: "Zero manual errors",
  },
  {
    id: 6,
    name: "Sanjana Gupta",
    position: "Business Analyst",
    company: "Digital Solutions Ltd, Hyderabad",
    rating: 5,
    text: "The bulk processing capability has transformed our operations. We can now handle month-end closing processes across multiple departments simultaneously, reducing our processing time by nearly 65%.",
    avatar: "/api/placeholder/45/45",
    highlight: "65% faster reporting",
  },
];

// Star rating component

// Individual testimonial card

// Add missing Lucide icon components
// const ShoppingBag = (props) => {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
//       <line x1="3" y1="6" x2="21" y2="6"></line>
//       <path d="M16 10a4 4 0 0 1-8 0"></path>
//     </svg>
//   );
// };

export const MSME = () => {
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
    <div className="">
      <BeamsBackground />

      {/* Advantages section */}
      <div>
        <motion.div
          custom={9}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tight text-center">
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400"
                )}
              >
                Key Features & Benefits
              </span>
            </h1>

            <p className="text-base md:text-lg text-[#c3d0e5] text-center max-w-4xl mx-auto animate-fade-in opacity-0 [animation-delay:400ms]">
              Automate Accounting, Simplify Tally Integration & Instantly
              Determine Loan Eligibility. Managing complex bank statements and
              manual data entry is now effortless with CypherSOL.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto px-4 justify-center mb-8 mt-12 items-stretch">
              {advData.map((card) => (
                <CardComponent
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  Icon={card.Icon}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Visual Graphic Analysis Section */}
      <EnhancedWorkflowSection />

      {/* Case Studies Section */}
      <motion.div
        custom={11}
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-12 tracking-tight text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-pink-400">
            Real-Life Business Case Studies
          </span>
        </h2>

        <p className="text-base md:text-lg text-[#c3d0e5] text-center max-w-4xl mx-auto mb-12">
          See how businesses across India are transforming their financial
          operations with CypherSOL
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
      <motion.div>
        <TestimonialsSection testimonials={testimonials} />
      </motion.div>

      {/* FAQ section */}
      <motion.div
        custom={12}
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
      >
        <FAQSection
          items={msmeFaqsArray}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about CypherSOL Bank Statement Analyzer"
          highlightedText="Asked Questions"
          regularText="Frequently "
        />
      </motion.div>
    </div>
  );
};
