import { Canvas } from "@react-three/fiber";
import { BarChart3, Shield, ArrowRight } from "lucide-react";
import { Dice as DiceComponent } from "./Dice/DiceComponent";
import { GlowEffect } from "./UI/GlowEffect";
import { Stats } from "./UI/Stats";
import { Badge } from "./UI/Badge";
import { FeatureCard } from "./UI/FeatureCard";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import "./css/styles.css";
import FAQSection from "./FAQSection";
import { HorizontalScroll } from "./HorizontalSrcoll";
import { Link } from "react-router-dom";
import { cn } from "./lib/utils";
import { Testimonials } from "./UI/Testimonials";
import { ExcelToTallyBeam } from "./UI/AnimatedBeam";
import { motion } from "framer-motion";
import {
  Briefcase,
  Building,
  Factory,
  Handshake,
  Banknote,
  ShieldCheck,
} from "lucide-react";
import ProductsSolar from "./ProductsSolar";

const features = [
  {
    icon: <Briefcase size={40} className="text-cyan-400" />,
    title: "CA (Tax Professionals)",
    description:
      "Streamline tax filing with automated transaction uploads. Focus on advisory services instead of manual data entry.",
    color: "bg-blue-500",
  },
  {
    icon: <Building size={40} className="text-cyan-400" />,
    title: "Govt. Agencies",
    description:
      "Efficiently manage financial data across multiple branches. Reduce manual entry with bulk upload features.",
    color: "bg-blue-600",
  },
  {
    icon: <Factory size={40} className="text-cyan-400" />,
    title: "MSMEs",
    description:
      "Easily handle large transaction volumes without extra staffing. Simplify financial management with accuracy.",
    color: "bg-blue-700",
  },
  {
    icon: <Handshake size={40} className="text-cyan-400" />,
    title: "DSAs",
    description:
      "Automate financial processes for smoother loan approvals. Reduce paperwork and processing time effortlessly.",
    color: "bg-blue-700",
  },
  {
    icon: <Banknote size={40} className="text-cyan-400" />,
    title: "Lenders",
    description:
      "Get accurate financial data for faster loan evaluations. Ensure seamless transaction tracking and risk assessment.",
    color: "bg-blue-700",
  },
  {
    icon: <ShieldCheck size={40} className="text-cyan-400" />,
    title: "Forensic Accounting",
    description:
      "Detect financial anomalies with automated transaction analysis. Enhance fraud detection and risk management.",
    color: "bg-blue-700",
  },
];

const faqsArray = [
  {
    question:
      "How secure is the data storage and processing of sensitive financial information?",
    answer:
      "Our data storage and processing adhere to the highest security standards, employing encryption and robust protocols to safeguard sensitive financial information. Once the data is extracted it gets deleted from our system.",
  },
  {
    question:
      "Are there any privacy concerns associated with sharing my bank statements for analysis?",
    answer:
      "We prioritize your privacy and ensure that your bank statements are securely analyzed without compromising your personal data. We adhere to strict privacy policies to protect your information.",
  },
  {
    question: "Can others see the data I am uploading?",
    answer:
      "No, your data remains confidential and is accessible only to authorized personnel involved in the analysis process. We maintain strict confidentiality protocols to ensure the privacy of your information.",
  },
];
export function Hero() {
  const FIRST_IMAGE = {
    imageUrl: "assets/images/BS.jpeg",
  };
  const SECOND_IMAGE = {
    imageUrl: "assets/images/PD.jpeg",
  };
  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      <GlowEffect />

      <div className="relative">
        <div className="container mx-auto px-4 py-12 md:py-12 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center px-6 lg:px-16">
            <div className="space-y-12">
              <div className="space-y-6">
                <Badge>AI-Powered Financial Analysis</Badge>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Transform <br />
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                    AI-Powered Insights from Bank Statements
                  </span>{" "}
                  for Smarter Decisions
                </h1>

                <p className="text-lg lg:text-xl text-gray-400 max-w-lg">
                  Leverage advanced AI to analyze bank statements and unlock
                  actionable financial intelligence in real-time.
                </p>
              </div>

              <Stats />

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/download">
                  <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 w-full">
                    Download
                  </button>
                </Link>
                <button className="group px-8 py-4 bg-gray-900/50 backdrop-blur-xl text-white font-semibold rounded-xl border border-gray-800/50 hover:border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300 flex items-center justify-center">
                  Book Demo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
              <div
                className="absolute inset-0"
                style={{ background: "transparent" }}
              >
                <Canvas
                  camera={{ position: [0, 0, 8], fov: 45 }}
                  gl={{
                    alpha: true,
                    antialias: true,
                    preserveDrawingBuffer: false,
                    clearColor: 0x000000,
                    clearAlpha: 0,
                    premultipliedAlpha: false,
                  }}
                  style={{
                    mixBlendMode: "normal",
                    background: "none",
                    position: "absolute",
                    top: "-80px", // Slightly adjusted to center dice better
                    left: 0,
                    pointerEvents: "auto",
                  }}
                >
                  <ambientLight intensity={0.5} />
                  <spotLight
                    position={[0, 10, 0]}
                    angle={0.3}
                    penumbra={1}
                    intensity={2}
                    castShadow
                  />
                  <directionalLight
                    position={[5, 5, 5]}
                    intensity={1}
                    color="#7dd3fc"
                  />
                  <directionalLight
                    position={[-5, 3, 0]}
                    intensity={0.7}
                    color="#93c5fd"
                  />
                  <pointLight
                    position={[0, -5, -5]}
                    intensity={0.5}
                    color="#ffffff"
                  />
                  <DiceComponent />
                </Canvas>
                <div className="absolute bottom-[8rem] w-full text-center">
                  <p className="text-base sm:text-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text font-medium italic px-4 py-2 mx-auto max-w-xs sm:max-w-sm">
                    A roll of Certainty-where Winning is the only Possibility
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who should use */}
      <div className=" bg-black overflow-hidden relative text-white px-4 py-8 md:py-12">
        {/* <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-8 md:mb-20 tracking-tight text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
            Who Should Use
          </span>
          <br />
          <span
            className={cn(
              "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400"
            )}
          >
            Excel to Tally Data Import Utility?
          </span>
        </h1> */}
        {/* <div className="container mx-auto px-4 py-4 ">
          <div className="grid lg:grid-cols-2 gap-4 items-center">
            <div className="space-y-6 pl-0 md:pl-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                  }}
                  className="flex items-start space-x-4"
                >
                  <div className="p-3 rounded-lg bg-gray-900/50">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-1xl font-semibold mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex justify-center"
            >
              <ExcelToTallyBeam />
            </motion.div>
          </div>
        </div> */}
        {/* 3d insert here */}
        <ProductsSolar />
      </div>

      {/* <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold mb-6 tracking-tight text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
            Effortlessly Convert Your
          </span>
          <br />
          <span
            className={cn(
              "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400"
            )}
          >
            PDFs into Excel & Summary Sheets
          </span>
        </h1>
        <p className="text-lg lg:text-xl text-gray-400 text-center mb-6">
          Easily extract and structure financial statements, invoices, and other
          documents into Excel format.
        </p>
        <div className="slider-container px-4 md:px-20 py-4 mb-4 md:mb-8">
          <ReactBeforeSliderComponent
            firstImage={FIRST_IMAGE}
            secondImage={SECOND_IMAGE}
            delimiterColor="#111827"
            className="cursor-pointer"
          />
        </div>
      </div> */}

      <div className="h-screen flex items-center justify-center bg-blue-900">
        <h1 className="text-6xl md:text-8xl font-bold text-white">
          Scroll Down
        </h1>
      </div>

      <HorizontalScroll />

      {/* Optional content after horizontal section */}
      <div className="h-screen flex items-center justify-center bg-blue-900">
        <h2 className="text-6xl md:text-8xl font-bold text-white">
          Continue Exploring
        </h2>
      </div>

      <div className="container mx-auto px-4 py-12 animate-fadeIn">
        {/* <Testimonials /> */}
      </div>

      <div className="container mx-auto px-4 py-12 animate-fadeIn">
        <FAQSection items={faqsArray} />
      </div>
    </div>
  );
}
