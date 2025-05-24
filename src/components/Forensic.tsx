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
  CheckCircle,
  TrendingUp,
  BookOpen,
  ClipboardCheck,
  Star,
  Quote,
  User,
} from "lucide-react";
import { CardComponent } from "./UI/CardComponent";
import FAQSection from "./FAQSection"; // Import the FAQSection component
import { EnhancedWorkflowSection } from "./EnhancedWorkflowSection";
import { forensicFaqsArray } from "./data/FAQs";
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

// Testimonial data with realistic statements about bank statement analysis software
const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    position: "Senior CA, Delhi",
    company: "Sharma & Associates",
    rating: 5,
    text: "CypherSOL reduced our tax filing preparation time by 70%. What used to take my team days now takes just hours. The automatic categorization feature has been a game-changer for our practice during busy season.",
    avatar: "/api/placeholder/45/45",
    highlight: "70% time savings",
  },
  {
    id: 2,
    name: "Priya Patel",
    position: "Founder & CA",
    company: "TaxPro Solutions, Mumbai",
    rating: 5,
    text: "The offline security feature gives my clients complete peace of mind about their financial data. One-click Tally integration means we can prepare financial statements faster than ever before. Worth every rupee!",
    avatar: "/api/placeholder/45/45",
    highlight: "Enhanced client security",
  },
  {
    id: 3,
    name: "Avinash Reddy",
    position: "CA Partner",
    company: "Reddy & Kumar Associates, Bangalore",
    rating: 5,
    text: "Our firm handles statements from over 15 different banks. CypherSOL processes them all flawlessly. The reduction in suspense entries alone has saved countless hours of reconciliation work.",
    avatar: "/api/placeholder/45/45",
    highlight: "Multi-bank compatibility",
  },
  {
    id: 4,
    name: "Deepa Krishnan",
    position: "Independent CA",
    company: "Chennai",
    rating: 4,
    text: "As a solo practitioner, CypherSOL has allowed me to take on 40% more clients this year. The audit-ready reports make compliance work straightforward, and clients are impressed with the quick turnaround times.",
    avatar: "/api/placeholder/45/45",
    highlight: "40% client capacity increase",
  },
  {
    id: 5,
    name: "Vikram Malhotra",
    position: "Senior Manager",
    company: "SME Advisory Services, Kolkata",
    rating: 5,
    text: "Our team previously struggled with complex PDFs from regional banks. CypherSOL's precision in handling these documents has eliminated manual data entry errors completely. The ROI was evident within weeks.",
    avatar: "/api/placeholder/45/45",
    highlight: "Zero manual errors",
  },
  {
    id: 6,
    name: "Sanjana Gupta",
    position: "Tax Consultant",
    company: "CloudTax Advisors, Jaipur",
    rating: 5,
    text: "The bulk processing capability has transformed our operations. We can now handle year-end closing for multiple clients simultaneously, reducing our processing time by nearly 65%. Absolutely indispensable tool.",
    avatar: "/api/placeholder/45/45",
    highlight: "65% faster year-end closing",
  },
];

// Star rating component
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            "w-4 h-4",
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
          )}
        />
      ))}
    </div>
  );
};

// Individual testimonial card
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex flex-col h-full bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300 relative group">
      {/* Quote icon */}
      <div className="absolute -top-4 -left-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full p-2 shadow-lg shadow-blue-900/30 group-hover:scale-110 transition-transform duration-300">
        <Quote className="w-4 h-4 text-white" />
      </div>

      {/* Rating */}
      <div className="mb-4">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Testimonial text */}
      <div className="mb-6 flex-grow">
        <p className="text-gray-300 italic">{testimonial.text}</p>
      </div>

      {/* Highlight tag */}
      <div className="mb-6">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-900/50 to-cyan-900/50 text-cyan-300 text-xs font-medium">
          {testimonial.highlight}
        </span>
      </div>

      {/* User info */}
      <div className="flex items-center mt-auto">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-gray-700 to-gray-800 flex items-center justify-center">
          <User className="w-5 h-5 text-gray-400" />
        </div>
        <div className="ml-3">
          <h4 className="text-white font-medium">{testimonial.name}</h4>
          <p className="text-gray-400 text-sm">
            {testimonial.position}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.3 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <motion.div
      custom={10}
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-16"
    >
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 tracking-tight text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
          What Our Users Are Saying
        </span>
      </h2>

      <p className="text-base md:text-lg text-[#c3d0e5] text-center max-w-4xl mx-auto mb-16">
        Hear from Chartered Accountants and financial professionals who have
        transformed their workflows with CypherSOL's bank statement analyzer
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            custom={index * 0.2}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium flex items-center mx-auto hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300"
        >
          Read More Success Stories
          <ChevronRight className="w-5 h-5 ml-2" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export const Forensic = () => {
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
      <motion.div>
        <TestimonialsSection />
      </motion.div>

      {/* FAQ section */}
      <motion.div
        custom={12}
        variants={fadeUpVariants}
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
    </div>
  );
};
