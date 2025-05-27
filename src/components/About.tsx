import React from "react";
import { cn } from "./lib/utils";
import { motion } from "framer-motion";
import { Badge } from "./UI/Badge";
import CTABanner from "./UI/CTABanner";
import CarouselSection from "./UI/Carousel";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1, delayChildren: 0.3 },
};

const listItem = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const textReveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

// Hover animation for list items
const hoverScale = {
  whileHover: { scale: 1.02, x: 5 },
  transition: { type: "spring", stiffness: 400, damping: 10 },
};

interface StatProps {
  value: string;
  label: string;
}
function Stat({ value, label }: StatProps) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {value}
      </motion.div>
      <motion.div
        className="text-sm text-gray-400 mt-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}

export const About = () => {
  return (
    <>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden ">
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 py-12 max-auto max-w-6xl">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge>About Us</Badge>
          </motion.div>
          <div className="">
            <motion.div
              className="max-auto max-w-6xl text-center mb-12"
              {...fadeIn}
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <br />
                <motion.span
                  className={cn(
                    "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400"
                  )}
                  initial={{ backgroundPosition: "0%" }}
                  animate={{ backgroundPosition: "100%" }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  About CypherSOL
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-gray-300 leading-relaxed text-xl text-left"
                {...textReveal}
              >
                CypherSOL Fintech India Private Ltd. has developed a
                state-of-the-art Bank Statement Analyzer, that can extract
                structured insights and valuable information from financial
                statements. Instead of spending hours analyzing a large number
                of data transactions from multiple banks or statements, you can
                use CypherSOL to do so efficiently and in minimal time.
              </motion.p>
            </motion.div>

            <motion.div
              className="mb-8 text-left text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.h1
                className="text-xl mb-4 md:mb-6 tracking-tight text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <motion.span
                  className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80"
                  initial={{ opacity: 0.5 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  CypherSOL Solutions can be used to filter data-driven insights
                  by:
                </motion.span>
              </motion.h1>
              <motion.ol
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                <motion.li className="mb-2" variants={listItem} {...hoverScale}>
                  <span className="font-semibold text-cyan-300">
                    {" "}
                    Tax Professionals (chartered accountants, tax consultants){" "}
                  </span>
                  : For accounting, filing tax returns, reconciling bank
                  transactions, identifying unexplained entries.
                </motion.li>
                <motion.li className="mb-2" variants={listItem} {...hoverScale}>
                  <span className="font-semibold text-cyan-300">MSMEs</span> :
                  To enhance financial management, automate bookkeeping, and
                  gain real-time insights into cash flow and expenses.
                </motion.li>
                <motion.li className="mb-2" variants={listItem} {...hoverScale}>
                  <span className="font-semibold text-cyan-300">
                    Govt Agencies
                  </span>{" "}
                  : For financial compliance monitoring, fraud detection,
                  taxation audits, Fund trial by analyzing banking transactions
                  and identifying discrepancies in financial records.
                </motion.li>
                <motion.li className="mb-2" variants={listItem} {...hoverScale}>
                  <span className="font-semibold text-cyan-300">
                    Direct Selling Agents (DSAs)
                  </span>{" "}
                  : To evaluate clients' financial needs, analyze banking
                  patterns, and identify the most suitable financiers based on
                  income flow and repayment capacity.
                </motion.li>
                <motion.li className="mb-2" variants={listItem} {...hoverScale}>
                  <span className="font-semibold text-cyan-300">
                    Banks & NBFC's
                  </span>
                  : To automate loan eligibility assessments, detect credit
                  risks, assess cash flow patterns, and streamline underwriting
                  processes for faster and more accurate lending decisions.
                </motion.li>
                <motion.li className="mb-2" variants={listItem} {...hoverScale}>
                  <span className="font-semibold text-cyan-300 text-lg">
                    Forensic Accounting
                  </span>{" "}
                  : For fraud investigation, financial crime detection, and
                  regulatory compliance checks by analyzing inconsistencies in
                  financial transactions and identifying suspicious activities.
                </motion.li>
              </motion.ol>
            </motion.div>

            <motion.div
              className="mx-auto mt-12 text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                className="text-gray-300 mb-6 text-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                CypherSOL can be used by a wide set of market players, unlike
                others that are designed primarily for banks and NBFCs. It
                offers business partners Safe, Analytical, Fast, and Efficient
                analysis so they may better serve their clients and their
                requirements.
              </motion.p>
              <motion.p
                className="text-gray-300 text-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                CypherSOL is a startup that was conceived by a team experts in
                technology, banking risk management and a Chartered Accountant.
                The board is being advised by a reputed BFSI analyst who spent
                30 years covering the financial sector. The team has used its
                practical experience to develop a sophisticated tool that can
                simplify and save time for tax professionals, financiers, DSAs,
                and businesses to filter information on transactions.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span
            className={cn(
              "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400"
            )}
          >
            Highlights of Achievements
          </span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover the power of AI-driven solutions for smarter, faster, and
          more secure smart decision-making.
        </motion.p>

        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-0">
            <Stat value="98%" label="Accuracy" />
            <motion.div
              className="h-8 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent mx-14"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <Stat value="2M+" label="Statements" />
            <motion.div
              className="h-8 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent mx-14"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
            <Stat value="24/7" label="Analysis" />
          </div>
        </motion.div>
      </motion.div>

      {/* Carousel Vision/Mission*/}
      <motion.div
        className="w-full mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <CarouselSection />
      </motion.div>

      <motion.div
        className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-semibold mb-3 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          The team behind it
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          A fully remote team on a mission to build <br /> the best
          communication platform for developers.
        </motion.p>

        <motion.img
          src="assets/images/teammm.jpeg"
          alt="testimonial"
          className="w-full h-auto -rotate-1 rounded-lg"
          initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{
            scale: 1.02,
            rotate: 0,
            transition: { duration: 0.3 },
          }}
        />
      </motion.div>

      {/* How our software works */}
      <motion.div
        className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-12"
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
            How CypherSOL's Software Functions
          </span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          A fully remote team on a mission to build <br /> the best
          communication platform for developers.
        </motion.p>
        <motion.img
          src="assets/images/software-function-1.png"
          alt="software function"
          className="w-full h-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{
            scale: 1.02,
            // boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
            transition: { duration: 0.3 },
          }}
        />
      </motion.div>

      <motion.div
        custom={6}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
          },
        }}
      >
        <CTABanner
          title="Why Choose"
          highlightedText="Excel to Tally Data Import Utility?"
          subtitle="Please feel free to contact us. We're super happy to talk to you. Feel free to ask anything."
          primaryButtonText="Book a Demo"
          imageSrc="https://framerusercontent.com/images/MecLliNBqre50VslV9Cc8fZOqkY.png?scale-down-to=512"
          imageAlt="AI-powered financial analysis"
        />
      </motion.div>
    </>
  );
};
