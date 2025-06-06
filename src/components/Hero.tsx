import { Canvas } from "@react-three/fiber";
import { ArrowRight, Clock, Database, TrendingUp, Users } from "lucide-react";
import { Dice as DiceComponent } from "./Dice/DiceComponent";
import { GlowEffect } from "./UI/GlowEffect";
import { Stats } from "./UI/Stats";
import { Badge } from "./UI/Badge";
import "react-before-after-slider-component/dist/build.css";
import "./css/styles.css";
import FAQSection from "./FAQSection";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { challenges } from "./data/challenges";
import { homeFaqsArray } from "./data/FAQs";
import CTABanner from "./UI/CTABanner";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
const base = import.meta.env.BASE_URL; // Will be '/static/' in production (as per Vite config)
const icons = [Clock, Users, TrendingUp, Database];
export function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };
  return (
    <>
      <Helmet>
        <title>
          Contact Cyphersol | Get in Touch for IT Solutions & Accounting
          Automation
        </title>
        <meta
          name="description"
          content="Contact Cyphersol to learn more about our IT solutions and accounting automation services. We assist chartered accountants and MSMEs in India to streamline workflows and enhance efficiency. Reach out to us today!"
        />
        <meta
          name="keywords"
          content="Cyphersol contact, IT solutions, accounting automation, chartered accountants, MSME solutions, accounting software, customer support, get in touch"
        />
      </Helmet>
      <div className="relative bg-black overflow-hidden">
        <GlowEffect />

        <div className="relative">
          <div className="container mx-auto px-4 py-4">
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
                  <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 flex items-center justify-center">
                    Book Demo
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <Link to="/pricing/?plan=bsa">
                    <button className="group px-8 py-4 bg-gray-900/50 backdrop-blur-xl text-white font-semibold rounded-xl border border-gray-800/50 hover:border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300 w-full">
                      Download
                    </button>
                  </Link>
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
                      top: "-100px", // Slightly adjusted to center dice better
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
                  <div className="absolute bottom-[6rem] md:bottom-[8rem] lg:bottom-[13.5rem] w-full text-center">
                    <p className="text-base md:text-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text font-semibold italic px-4 py-2 mx-auto max-w-xs sm:max-w-sm">
                      A roll of Certainty-where Winning is the only Possibility
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-cyan-400">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400">
                  Problems Faced by Our Business Partners
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-400 mx-auto">
              Across industries—from tax professionals and loan DSAs to
              businesses, government agencies, and forensic accounting
              experts—analyzing bank statements remains a largely manual,
              time-consuming, and error-prone process in India. With over 8.18
              crore ITRs filed annually, and 6.58 crore+ individuals showing nil
              or low tax liabilities, professionals must often process vast
              volumes of financial data manually—slowing down decisions and
              increasing the risk of human error.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {challenges.map((challenge, index) => {
              const Icon = icons[index];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={challenge.number}
                  variants={itemVariants}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className={`relative group cursor-pointer ${
                    isEven ? "lg:translate-y-8" : "lg:-translate-y-8"
                  }`}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      rotateY: 5,
                      rotateX: 5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="relative overflow-hidden rounded-3xl bg-gray-900/10 shadow-xl border border-gray-600/50 backdrop-blur-sm"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className={`absolute inset-0 opacity-5 ${challenge.color}`}
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                        opacity: hoveredIndex === index ? 0.1 : 0.05,
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="relative p-8">
                      {/* Number and Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <motion.div
                          className={`w-16 h-16 rounded-2xl ${challenge.color} flex items-center justify-center text-white font-bold text-2xl shadow-lg`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-6 h-6" />
                        </motion.div>
                      </div>

                      {/* Title */}
                      <motion.h3
                        className="text-2xl font-bold text-gray-200 mb-4 leading-tight"
                        animate={{
                          x: hoveredIndex === index ? 5 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {challenge.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        className="text-gray-300 leading-relaxed text-sm"
                        animate={{
                          x: hoveredIndex === index ? 5 : 0,
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {challenge.description}
                      </motion.p>
                    </div>

                    {/* Hover border effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-3xl ${challenge.borderColor} border-2 opacity-0`}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Floating shadow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl bg-black/5 -z-10"
                    animate={{
                      y: hoveredIndex === index ? 8 : 4,
                      scale: hoveredIndex === index ? 1.02 : 1,
                      opacity: hoveredIndex === index ? 0.15 : 0.1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
          {/* Content */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative overflow-hidden rounded-3xl bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 p-8 mt-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#22d3ee] animate-pulse" />
              <div className="w-3 h-3 rounded-full bg-white animate-pulse delay-300" />
              <div className="w-3 h-3 rounded-full bg-[#1187E9] animate-pulse delay-600" />
              <h3 className="text-3xl md:text-5xl font-bold ml-2">
                Our Solution
              </h3>
            </div>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-gray-300 leading-relaxed text-lg"
              >
                CypherSOL solves these problems with an AI-powered,
                offline-first automation platform that supports over 50 banks
                and 105 formats, provides real-time categorization, and ensures
                faster, more accurate financial analysis—whether you're filing
                taxes, offering loans, managing accounts, or tracing suspicious
                transactions.
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="relative flex justify-center"
              >
                <img
                  src={`${base}assets/images/solution.png`}
                  alt="Bank Statement Analyzer"
                  className="w-72"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Cta Banner */}
        <CTABanner
          title="Wanna"
          highlightedText="Talk To Us?"
          subtitle="Please feel free to contact us. We’re super happy to talk to you. Feel free to ask anything."
          primaryButtonText="Contact Us"
          imageSrc="https://framerusercontent.com/images/MecLliNBqre50VslV9Cc8fZOqkY.png?scale-down-to=512"
          imageAlt="Bookkeeping automation"
        />

        <div className="container mx-auto px-4 py-12 animate-fadeIn">
          <FAQSection items={homeFaqsArray} />
        </div>
      </div>
    </>
  );
}
