import { Canvas } from "@react-three/fiber";
import { ArrowRight } from "lucide-react";
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
const base = import.meta.env.BASE_URL; // Will be '/static/' in production (as per Vite config)

export function Hero() {
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

      {/* 3d insert here */}
      <div className="w-full overflow-hidden">{/* <ProductsSection /> */}</div>

      <section className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center justify-center mb-8 md:mb-16 animate-fade-in text-center">
            {/* <Badge>Product</Badge> */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 text-cyan-400">
              Problem faced by our Business Partners
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mt-4">
                Analyzing a bank statement for filing income tax returns is
                still a manual process in India. Chartered accountants and tax
                consultants normally take hours or days to analyze a single bank
                statement. Similarly, DSAs and financiers need to assess their
                clients' eligibility for loans based on their bank statements,
                which can be time consuming. Our clients face the following
                challenges:
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-28">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex justify-center"
            >
              <img
                src={`${base}assets/images/infographic-1.png`}
                alt="infographic"
                className="w-full max-w-xl md:max-w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="space-y-8"
            >
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div
                    className={`w-10 h-10 ${challenge.color} rounded flex items-start justify-center flex-shrink-0`}
                  >
                    <span className="text-white font-bold text-lg text-justify">
                      {challenge.number}
                    </span>
                  </div>
                  <div
                    className={`border-l-4 ${challenge.borderColor} pl-5 pb-4`}
                  >
                    <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                      {challenge.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 py-12 animate-fadeIn">
        <FAQSection items={homeFaqsArray} />
      </div>
    </div>
  );
}
