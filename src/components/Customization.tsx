import React from "react";
import CTABanner from "./UI/CTABanner";
import FAQSection from "./FAQSection";
import { customizationFaqsArray } from "./data/FAQs";
import { motion } from "framer-motion";
import { Badge } from "./UI/Badge";
import { cn } from "./lib/utils";
const base = import.meta.env.BASE_URL;

export const Customization = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-12 sm:py-20 lg:py-24">
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
              <Badge>Customization Overview</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400 drop-shadow-lg">
              One Platform. Multiple Possibilities
            </h1>

            <h4 className="mt-6 sm:mt-8 max-w-4xl mx-auto text-lg sm:text-xl md:text-3xl text-gray-300 font-semibold tracking-wide">
              If your requirement involves{" "}
              <span className="text-cyan-400">bank statement data,</span> we’re
              ready to
              <span className="text-blue-400">
                {" "}
                explore, build, and customize{" "}
              </span>
              it with you.
            </h4>

            <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-gray-400 font-medium leading-relaxed">
              At CypherSOL®, we understand that no two financial workflows are
              the same. That’s why we offer customization options around our
              core platforms — the Bank Statement Analyzer and Fund Trail
              Analyzer — to adapt to your unique use case.
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-gray-400 font-medium leading-relaxed">
              Whether you’re automating ITR filing, assessing loan eligibility,
              tracking suspicious financial flows, or needing data in a specific
              structure, we help tailor the solution around how you work — not
              the other way around.
            </p>
          </motion.div>
        </div>
      </section>

      <section>
        <motion.div
          className="max-w-6xl mx-auto text-center px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-3 tracking-tight"
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
              Customization Highlights
            </span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            To adapt to your unique use case.
          </motion.p>
          <motion.img
            src={`${base}assets/images/customization.png`}
            alt="Financial automation tools"
            className="w-full md:w-3/4 lg:w-8/12 h-auto object-contain mx-auto"
          />
        </motion.div>
      </section>
      {/* Cta Banner */}
      <CTABanner
        title="Wanna"
        highlightedText="Talk To Us?"
        subtitle="Please feel free to contact us. We’re super happy to talk to you. Feel free to ask anything."
        primaryButtonText="Contact Us"
        imageSrc="https://framerusercontent.com/images/MecLliNBqre50VslV9Cc8fZOqkY.png?scale-down-to=512"
        imageAlt="Bookkeeping automation"
      />

      {/* FAQs */}
      <section>
        <FAQSection items={customizationFaqsArray} />
      </section>
    </>
  );
};
