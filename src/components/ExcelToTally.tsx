"use client";

import { motion } from "framer-motion";
import { cn } from "./lib/utils";
import { Badge } from "./UI/Badge";
import { ShinyButton } from "./components/ui/shiny-button";
import { CardComponent } from "./UI/CardComponent";
import {
  CheckCircleIcon,
  Clock,
  Eye,
  PiggyBankIcon,
  SettingsIcon,
  ShieldCheckIcon,
} from "lucide-react";
import CTABanner from "./UI/CTABanner";
import FAQSection from "./FAQSection";
import { ExcelToTallyBeam } from "./UI/AnimatedBeam";
import { Vouchers } from "./UI/Vouchers";

const advData = [
  {
    id: 1,
    title: "Time Savings",
    description:
      "Automating the upload process saves significant time, allowing businesses to focus on core tasks.",
    Icon: () => <Clock className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Visual Feedback",
    description:
      "Transactions are color-coded for immediate status recognition—successful uploads are highlighted in green, while errors are marked in red, allowing users to easily identify and address any issues among hundreds of transactions.",
    Icon: () => <Eye className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Cost-Effective",
    description:
      "At ₹2,999 annually, it is more affordable than most alternatives on the market, which can range between ₹5,000 and ₹10,000.",
    Icon: () => <PiggyBankIcon className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "No Manual Errors",
    description:
      "The automation eliminates common manual entry errors, ensuring accurate financial records.",
    Icon: () => <CheckCircleIcon className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "Data Security",
    description:
      "The tool adheres to high-security standards, ensuring that your sensitive financial data remains secure.",
    Icon: () => <ShieldCheckIcon className="w-6 h-6" />,
  },
  {
    id: 6,
    title: "Customizable for Client Needs",
    description:
      "Businesses can customize the solution to fit their unique requirements, ensuring optimal performance and satisfaction.",
    Icon: () => <SettingsIcon className="w-6 h-6" />,
  },
];

const features = [
  {
    icon: (
      <img
        src="assets/images/CA.webp"
        alt="Chartered Accountant"
        className="w-20"
      />
    ),
    title: "Chartered Accountants (CAs)",
    description: `
    Reduce time on data entry.
     Focus more on high-value services like tax advisory and financial planning.
     Handle multiple clients' transactions quickly and accurately.
    `,
    color: "bg-blue-500",
  },
  {
    icon: (
      <img
        src="assets/images/large-enterprise.webp"
        alt="Large Enterprises"
        className="w-20"
      />
    ),
    title: "Large Enterprises",
    description:
      "Ideal for enterprises managing multiple branches or bank accounts. Bulk upload feature saves time and reduces manual entry. Efficiently consolidate financial data from all branches.",
    color: "bg-blue-600",
  },
  {
    icon: <img src="/assets/images/SMEs.webp" alt="SMEs" className="w-20" />,
    title: "Small and Medium Businesses (SMEs)",
    description:
      "Manage large transaction volumes effortlessly. No need for dedicated accounting teams. Ensure accurate uploads without extra staffing.",
    color: "bg-blue-700",
  },
  {
    icon: (
      <img
        src="/assets/images/tax-consultants.webp"
        alt="Tax Consultants"
        className="w-20"
      />
    ),
    title: "Tax Consultants",
    description:
      "Automates transaction uploads for quicker tax preparation. Reduces errors and saves time during tax filing.",
    color: "bg-blue-700",
  },
];

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export default function ExcelToTally() {
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
    <>
      {/* hero section */}
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.05] via-transparent to-blue-500/[0.05] blur-3xl" />

        <div className="absolute inset-0 overflow-hidden">
          <ElegantShape
            delay={0.3}
            width={600}
            height={140}
            rotate={12}
            gradient="from-cyan-500/[0.15]"
            className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
          />

          <ElegantShape
            delay={0.5}
            width={500}
            height={120}
            rotate={-15}
            gradient="from-blue-500/[0.15]"
            className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
          />

          <ElegantShape
            delay={0.4}
            width={300}
            height={80}
            rotate={-8}
            gradient="from-blue-500/[0.15]"
            className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
          />

          <ElegantShape
            delay={0.6}
            width={200}
            height={60}
            rotate={20}
            gradient="from-cyan-500/[0.15]"
            className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
          />

          <ElegantShape
            delay={0.7}
            width={150}
            height={40}
            rotate={-25}
            gradient="from-cyan-500/[0.15]"
            className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1 mb-8 md:mb-12"
            >
              <Badge>Excel to Tally Data Import Utility</Badge>
            </motion.div>

            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                  The Ultimate Solution for
                </span>
                <br />
                <span
                  className={cn(
                    "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400"
                  )}
                >
                  Fast and Accurate Accounting
                </span>
              </h1>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
                Automate the process of uploading bank transactions, Ledgers,
                Sales, Purchases, Receipts, and Payments into Tally.
              </p>

              <ShinyButton>Book a Demo</ShinyButton>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
      </div>

      {/* Tally Vouchers */}
      <Vouchers />

      {/* Who should use */}
      <div className=" bg-black overflow-hidden relative text-white px-4 py-8 md:py-12">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-8 md:mb-20 tracking-tight text-center">
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
        </h1>
        <div className="container mx-auto px-4 py-4 ">
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
                    <h3 className="text-xl md:text-2xl font-semibold mb-3">
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
        </div>
      </div>

      {/* Cta Banner */}
      <motion.div
        custom={6}
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
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
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Advantages of
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400"
                )}
              >
                Excel to Tally Data Import Utility
              </span>
            </h1>

            <p className="text-base md:text-lg text-[#c3d0e5] text-center max-w-4xl mx-auto animate-fade-in opacity-0 [animation-delay:400ms]">
              Save time, reduce errors, ensure data security, and customize your
              workflow—all with the Excel to Tally Import Utility.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto px-4  justify-center mb-8 mt-12 items-stretch">
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

      {/* FAQ section */}
      <motion.div
        custom={12}
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
      >
        <FAQSection />
      </motion.div>
    </>
  );
}
