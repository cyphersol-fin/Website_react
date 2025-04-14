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
  ChevronRight,
  MapPin,
  Users,
  CheckCircle,
  TrendingUp,
  BookOpen,
  ClipboardCheck
} from "lucide-react";
import { CardComponent } from "./UI/CardComponent";
import FAQSection from "./FAQSection"; // Import the FAQSection component
import { EnhancedWorkflowSection } from "./EnhancedWorkflowSection";
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
    description: "Intelligent categorization instantly eliminates suspense entries.",
    Icon: () => <Layers className="w-6 h-6" />,
  },
  {
    id: 8,
    title: "Smart Suspense Handling",
    description: "Effortlessly send, update, and auto-refresh suspense entries, instantly streamlining your data.",
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
    description: "Seamlessly handle Sales, Purchase, Ledger, and Inventory entries.",
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
    challenge: "A Chartered Accountant struggled each tax season due to manually categorizing client transactions from bank statements.",
    solution: "CypherSOL automated this entire process, allowing them to quickly prepare ITR summaries.",
    result: "This realistically reduced the workload, enabling the accountant to focus more on advising clients rather than data entry.",
    icon: Clock,
    color: "from-blue-500 to-blue-600",
    benefit: "Time Savings",
  },
  {
    id: 2,
    location: "Hyderabad",
    title: "Simple Integration for Practice",
    challenge: "A Hyderabad-based CA frequently faced frustrating errors during data uploads into Tally from Excel sheets, causing delays and rework.",
    solution: "After adopting CypherSOL's simple, one-click integration, the firm noticed fewer mistakes and smoother workflows.",
    result: "The accountants appreciated how intuitive the tool was, making their daily tasks easier.",
    icon: CheckCircle,
    color: "from-green-500 to-green-600",
    benefit: "Error Reduction",
  },
  {
    id: 3,
    location: "Pune",
    title: "Solving Reconciliation Headaches",
    challenge: "A Pune Chartered Accountant often encountered confusing suspense entries during bank reconciliations, wasting valuable hours trying to resolve them.",
    solution: "CypherSOL's smart suspense handling provided clarity by automatically identifying and suggesting accurate categories.",
    result: "This made reconciliations faster and significantly less stressful for their team.",
    icon: TrendingUp,
    color: "from-purple-500 to-purple-600",
    benefit: "Process Improvement",
  },
  {
    id: 4,
    location: "Ahmedabad",
    title: "Clearer Voucher Management",
    challenge: "An Ahmedabad-based Chartered Accountant had difficulty keeping consistent records of various vouchers, creating compliance concerns.",
    solution: "Implementing CypherSOL's automated voucher management ensured that sales, purchases, and ledger entries were consistently accurate.",
    result: "This significantly reduced manual checking and improved their reporting accuracy.",
    icon: ClipboardCheck,
    color: "from-yellow-500 to-yellow-600",
    benefit: "Compliance Enhancement",
  },
  {
    id: 5,
    location: "Bangalore",
    title: "Consistent Categorization",
    challenge: "A CA firm in Bangalore dealt with inconsistent transaction categorization that complicated their accounting and reporting processes.",
    solution: "With CypherSOL, they automated the categorization of financial transactions.",
    result: "The firm immediately noticed clearer records, less confusion during audits, and more confidence in their financial reporting.",
    icon: BookOpen,
    color: "from-red-500 to-red-600",
    benefit: "Audit Readiness",
  },
];



// FAQ data from the provided document
const faqsArray = [
  {
    question: "What is a bank statement analyzer?",
    answer: "A software tool that automatically categorizes and analyzes bank transactions, providing clear, summarized financial insights.",
  },
  {
    question: "How does CypherSOL enhance ITR filing processes?",
    answer: "CypherSOL generates instant, audit-ready summaries for seamless and accurate tax filing.",
  },
  {
    question: "What formats does CypherSOL support?",
    answer: "It supports all major formats including PDF, Excel, and CSV.",
  },
  {
    question: "Can CypherSOL integrate with Tally directly?",
    answer: "Yes, CypherSOL provides one-click integration to instantly transfer organized data into Tally.",
  },
  {
    question: "Does CypherSOL work offline?",
    answer: "Yes, it ensures 100% offline security for complete data confidentiality.",
  },
  {
    question: "Is there a limit to bank statement uploads?",
    answer: "No, CypherSOL supports unlimited bank statement and Tally uploads.",
  },
  {
    question: "How does CypherSOL manage complex PDFs?",
    answer: "It manually extracts precise data from complex PDF statements efficiently.",
  },
  {
    question: "What is meant by \"7500+ smart data points\"?",
    answer: "CypherSOL uses advanced AI categorization based on 7500+ predefined financial data points to eliminate suspense entries.",
  },
  {
    question: "How does CypherSOL handle suspense transactions?",
    answer: "It intelligently updates, sends, and auto-refreshes suspense entries to streamline the data management process.",
  },
  {
    question: "Can CypherSOL process bulk transactions?",
    answer: "Yes, CypherSOL excels at processing bulk transactions from multiple accounts simultaneously.",
  },
  {
    question: "What types of reports can CypherSOL generate?",
    answer: "Detailed reports can be instantly exported in Excel, CSV, or PDF formats.",
  },
  {
    question: "What is CypherSOL's Tally upload feature?",
    answer: "It provides ready-to-use uploads of payments, receipts, and contra-data directly into Tally.",
  },
  {
    question: "How is visual feedback provided in CypherSOL?",
    answer: "Transactions are color-coded—green for success and red for errors—for easy status recognition.",
  },
  {
    question: "How accurate is CypherSOL's data handling?",
    answer: "It meticulously identifies and resolves discrepancies, significantly reducing errors in Tally uploads.",
  },
  {
    question: "Can CypherSOL speed up reconciliation?",
    answer: "Yes, by quickly identifying missing transactions and streamlining uploads, reconciliation time is dramatically reduced.",
  },
  {
    question: "Is CypherSOL suitable for SMEs?",
    answer: "Absolutely, its scalable features are ideal for SMEs handling large transaction volumes.",
  },
  {
    question: "How cost-effective is CypherSOL?",
    answer: "It combines powerful analysis and Tally integration into a single, affordable solution.",
  },
  {
    question: "Does CypherSOL offer simplified ledger grouping?",
    answer: "Yes, it automatically groups transactions accurately, simplifying account management.",
  },
  {
    question: "Is CypherSOL easy to use?",
    answer: "Yes, designed for ease of use without requiring specialized training.",
  },
  {
    question: "Can CypherSOL help reduce manual errors?",
    answer: "Yes, automation significantly cuts down manual data entry errors.",
  },
  {
    question: "Does CypherSOL support compliance and audit readiness?",
    answer: "Yes, accurate data handling ensures complete compliance and reduces audit time.",
  },
  {
    question: "How frequently is CypherSOL updated?",
    answer: "Regular updates ensure compatibility with new bank formats and regulatory requirements.",
  },
  {
    question: "Is CypherSOL secure?",
    answer: "Completely secure with offline functionality and robust data privacy.",
  },
  {
    question: "How can CypherSOL benefit accounting firms?",
    answer: "It reduces manual workload, enhances accuracy, and improves client service.",
  },
  {
    question: "Does CypherSOL handle multiple bank accounts simultaneously?",
    answer: "Yes, it easily processes and consolidates multiple bank accounts.",
  },
  {
    question: "Can freelancers benefit from CypherSOL?",
    answer: "Yes, its simplicity and affordability make it perfect for freelancers.",
  },
  {
    question: "Does CypherSOL require additional software?",
    answer: "No, it runs independently without additional software.",
  },
  {
    question: "Can I get a demo of CypherSOL?",
    answer: "Yes, demos are available upon request.",
  },
  {
    question: "Does CypherSOL categorize sales and purchase vouchers?",
    answer: "Yes, transactions like sales, purchases, payments, and receipts are categorized automatically.",
  },
  {
    question: "How does CypherSOL reduce suspense entries?",
    answer: "By intelligently categorizing and merging data, minimizing manual interventions.",
  },
  {
    question: "Does CypherSOL provide detailed transaction reports?",
    answer: "Yes, comprehensive reports are instantly generated for analysis.",
  },
  {
    question: "Is there a user limit per license?",
    answer: "Licenses are system-based; additional licenses can be easily acquired.",
  },
  {
    question: "Does CypherSOL improve financial reporting accuracy?",
    answer: "Yes, by maintaining consistent and precise categorization.",
  },
  {
    question: "Can CypherSOL identify discrepancies automatically?",
    answer: "Yes, it automatically highlights and categorizes discrepancies.",
  },
  {
    question: "Does CypherSOL speed up audit preparations?",
    answer: "Yes, detailed automated reports significantly shorten audit preparation time.",
  },
  {
    question: "Is CypherSOL compatible with Tally Prime and ERP 9?",
    answer: "Yes, fully compatible with both versions.",
  },
  {
    question: "Can transactions be customized before Tally upload?",
    answer: "Yes, users can easily customize mappings and formats prior to upload.",
  },
  {
    question: "Is bulk uploading to Tally supported?",
    answer: "Yes, bulk data uploads into Tally are fully supported for efficiency.",
  },
  {
    question: "Does CypherSOL ensure faster financial reconciliation?",
    answer: "Yes, automated reconciliation significantly speeds up financial closures.",
  },
  {
    question: "Can CypherSOL handle CSV imports to Tally?",
    answer: "Yes, it easily manages CSV data imports directly into Tally.",
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
              Revolutionize Accounting, Tally Integration & ITR Filing with AI-Powered Automation.
              Managing complex bank statements and manual data entry is now effortless with CypherSOL.
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
          See how Chartered Accountants across India are transforming their practices with CypherSOL
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
                    <span className="text-cyan-300 font-medium">{study.location}</span>
                  </div>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${study.color} group-hover:scale-110 transition-transform duration-300`}>
                    <study.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-4">{study.title}</h3>
                
                {/* Challenge */}
                <div className="mb-4">
                  <h4 className="text-gray-400 font-medium mb-1 text-sm">Challenge:</h4>
                  <p className="text-gray-300">{study.challenge}</p>
                </div>
                
                {/* Solution */}
                <div className="mb-4">
                  <h4 className="text-gray-400 font-medium mb-1 text-sm">Solution:</h4>
                  <p className="text-gray-300">{study.solution}</p>
                </div>
                
                {/* Result */}
                <div className="mb-6">
                  <h4 className="text-gray-400 font-medium mb-1 text-sm">Result:</h4>
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

      {/* FAQ section */}
      <motion.div
        custom={12}
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
      >
        <FAQSection 
          items={faqsArray} 
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about CypherSOL Bank Statement Analyzer"
          highlightedText="Asked Questions"
          regularText="Frequently "
        />
     
      </motion.div>
    </div>
  );
};