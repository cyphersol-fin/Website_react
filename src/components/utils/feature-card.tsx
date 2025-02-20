"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  links?: Array<{
    text: string;
    href: string;
  }>;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      className="p-6 rounded-xl bg-black/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-4 text-white/90">{icon}</div>
      <h3 className="mb-3 text-xl font-semibold text-[#e6e7e9] md:text-2xl">
        {title}
      </h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}

interface AnimatedIconProps {
  icon: React.ReactNode;
}
export function AnimatedIcon({ icon }: AnimatedIconProps) {
  return (
    <motion.div
      className="flex items-center justify-center w-12 h-12 text-cyan-400 bg-cyan-400/10 rounded-xl"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{
        scale: 1.1,
        rotate: [0, -10, 10, -10, 0],
        transition: { duration: 0.5 },
      }}
    >
      {icon}
    </motion.div>
  );
}
