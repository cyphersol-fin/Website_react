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
  CheckCircle,
  TrendingUp,
  BookOpen,
  ClipboardCheck,
} from "lucide-react";
import { CardComponent } from "./UI/CardComponent";
import FAQSection from "./FAQSection"; // Import the FAQSection component
import { EnhancedWorkflowSection } from "./EnhancedWorkflowSection";
import { bankAnalyzerFaqsArray } from "./data/FAQs";
import TestimonialCard from "./components/ui/testimonial-cards";
import { Badge } from "./UI/Badge";

const advData = [
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
    title: "Download instant ITR-ready report",
    Icon: Download,
    color: "from-cyan-500 to-cyan-600",
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
              Revolutionize Accounting, Tally Integration & ITR Filing with
              AI-Powered Automation. Managing complex bank statements and manual
              data entry is now effortless with CypherSOL.
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

      {/* FAQ section */}
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
    </div>
  );
};
