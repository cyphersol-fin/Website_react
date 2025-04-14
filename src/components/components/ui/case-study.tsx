"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight, MapPin } from "lucide-react";

const CaseStudyCard = ({ title, description, location }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="group bg-gray-900/50 backdrop-blur-xl hover:border-gray-700/50 border border-border/50 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
    >
      <div className="p-6 space-y-4">
        {/* Header with location and icon */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-300 font-medium">{location}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="border-t border-border/50 p-4 flex justify-end">
        <div className="gap-1 text-xs flex items-center text-muted-foreground group-hover:text-cyan-400 transition-all duration-300">
          Read Full Case Study <ArrowUpRight className="h-3 w-3" />
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;
