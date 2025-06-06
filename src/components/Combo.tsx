"use client";

import { motion } from "framer-motion";
import { GlowEffect1 } from "./UI/GlowEffect";
import { cards } from "./data/combo";
import { FeatureCard } from "./utils/feature-card";
import { TextAnimate } from "./components/ui/text-animate";
import { Badge } from "./UI/Badge";
import FAQSection from "./FAQSection";
import { comboFaqsArray } from "./data/FAQs";
import { Helmet } from "react-helmet-async";

export default function Combo() {
  return (
    <>
      <Helmet>
        <title>
          Automate Accounting with Bank Statement Analyzer & Excel to Tally Data
          Import Utility Combo | Cyphersol
        </title>
        <meta
          name="description"
          content="Cyphersol offers a powerful combo of Bank Statement Analyzer and Excel to Tally Data Import Utility to automate your accounting processes. Ideal solutions for chartered accountants and MSMEs in India to streamline workflow and boost efficiency."
        />
        <meta
          name="keywords"
          content="Cyphersol, Bank Statement Analyzer, Excel to Tally Data Import Utility, accounting automation, combo offer, chartered accountants, MSME solutions, accounting software, data automation"
        />
      </Helmet>
      <div className="bg-black relative overflow-hidden">
        <GlowEffect1 />

        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Animated Badge */}
            <div className="mb-8">
              <Badge>
                Combo of Bank Statement Analyzer with Excel to Tally Data Import
                Utility
              </Badge>
            </div>
            <div className="max-w-7xl mx-auto">
              {/* Animated Heading */}
              <motion.h1
                className="mb-4 text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight text-cyan-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <TextAnimate animation="scaleUp" by="text">
                  Advantages
                </TextAnimate>
              </motion.h1>

              {/* Animated Description */}
              <motion.p
                className="text-xl md:text-1xl text-gray-300 mb-12 max-w-3xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              >
                Combining the Bank Statement Analyzer with the Tally Upload
                Utility offers a comprehensive solution for businesses,
                accountants, and tax professionals. Here are the key benefits of
                using both tools together.
              </motion.p>
            </div>
            {/* Animated Feature Cards */}
            <motion.div
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {cards.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div>
          <FAQSection items={comboFaqsArray} />
        </div>
      </div>
    </>
  );
}
