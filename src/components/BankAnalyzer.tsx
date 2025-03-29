import React from "react";
import BeamsBackground from "./components/ui/beams-background";
import { motion } from "framer-motion";
import { cn } from "./lib/utils";
import {
  CheckCircleIcon,
  Clock,
  Eye,
  PiggyBankIcon,
  SettingsIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { CardComponent } from "./UI/CardComponent";

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
    Icon: () => <Eye className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "100% Offline Security",
    description: "Complete confidentiality, zero internet dependence.",
    Icon: () => <PiggyBankIcon className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Supports All Banks & Formats",
    description: "Easily manage PDF, Excel, and CSV formats.",
    Icon: () => <CheckCircleIcon className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "Unlimited Bank Statement & Tally Uploads",
    description: "Unrestricted processing po",
    Icon: () => <ShieldCheckIcon className="w-6 h-6" />,
  },
  {
    id: 6,
    title: "Complex PDF Resolution",
    description: " Precisely extract data from complicated PDFs manually.",
    Icon: () => <SettingsIcon className="w-6 h-6" />,
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
    </div>
  );
};
