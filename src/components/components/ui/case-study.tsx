import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Badge } from "../../UI/Badge";

type CaseStudySectionProps = {
  title?: string;
  subtitle?: string;
  data: Array<{
    id: string | number;
    location: string;
    color: string;
    icon: React.ElementType;
    title: string;
    challenge: string;
    solution: string;
    result: string;
    benefit: string;
  }>;
  fadeUpVariants: Record<string, any>;
};

const CaseStudySection: React.FC<CaseStudySectionProps> = ({
  title = "",
  subtitle = "",
  data,
  fadeUpVariants,
}) => {
  return (
    <motion.div
      custom={11}
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-5 text-[#c3d0e5] text-center animate-slide-down">
        <span className="bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400 text-transparent bg-clip-text">
          {title}
        </span>
      </h1>

      <p className="text-base md:text-lg text-[#c3d0e5] text-center max-w-2xl mx-auto mb-10">
        {subtitle}
      </p>

      <div className="relative w-full max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((study) => (
            <div
              key={study.id}
              className="border border-gray-800 bg-black/40 backdrop-blur-sm rounded-xl p-6 hover:border-gray-700 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-900/20"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-cyan-400 mr-2" />
                  <span className="text-cyan-300 font-medium">
                    {study.location}
                  </span>
                </div>
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${study.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <study.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">
                {study.title}
              </h3>

              <div className="mb-4">
                <h4 className="text-gray-400 font-medium mb-1 text-sm">
                  Challenge:
                </h4>
                <p className="text-gray-300">{study.challenge}</p>
              </div>

              <div className="mb-4">
                <h4 className="text-gray-400 font-medium mb-1 text-sm">
                  Solution:
                </h4>
                <p className="text-gray-300">{study.solution}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-gray-400 font-medium mb-1 text-sm">
                  Result:
                </h4>
                <p className="text-gray-300">{study.result}</p>
              </div>

              <Badge> {study.benefit}</Badge>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudySection;
