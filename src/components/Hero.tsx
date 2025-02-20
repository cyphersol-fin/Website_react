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
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center px-6 lg:px-16">
            <div className="space-y-12">
              <div className="space-y-6">
                <Badge>AI-Powered Financial Analysis</Badge>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Transform Your
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                    Financial Data
                  </span>
                  <br />
                  Into Insights
                </h1>

                <p className="text-lg lg:text-xl text-gray-400 max-w-lg">
                  Leverage advanced AI to analyze bank statements, predict
                  trends, and unlock actionable financial intelligence in
                  real-time.
                </p>
              </div>

              <Stats />

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/download">
                  <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300">
                    Download
                  </button>
                </Link>
                <button className="group px-8 py-4 bg-gray-900/50 backdrop-blur-xl text-white font-semibold rounded-xl border border-gray-800/50 hover:border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300 flex items-center justify-center">
                  Watch Demo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <FeatureCard
                  icon={BarChart3}
                  title="Predictive Analytics"
                  description="AI-driven insights to forecast financial trends and patterns"
                />
                <FeatureCard
                  icon={Shield}
                  title="Bank-Grade Security"
                  description="Enterprise-level encryption and compliance standards"
                />
              </div>
            </div>

            <div className="relative h-[700px] lg:h-[800px]">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
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
      </div>

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
        <Testimonials />
      </div>

      <div className="container mx-auto px-4 py-12 animate-fadeIn">
        <FAQSection />
      </div>
    </div>
  );
}
