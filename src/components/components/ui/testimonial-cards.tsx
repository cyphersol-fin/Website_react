"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote, Star, User } from "lucide-react";
import { Badge } from "../../UI/Badge";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TestimonialCard = ({
  quote,
  author,
  role,
  note,
  rating = 5,
  delay = 0,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="bg-black/40 backdrop-blur-sm border border-gray-700 hover:border-cyan-900 rounded-lg p-6 shadow-md"
    >
      <div className="absolute -top-4 -left-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full p-2 shadow-lg  transition-transform duration-300">
        <Quote className="w-4 h-4 text-white" />
      </div>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating
                ? "text-yellow-500 fill-yellow-500"
                : "text-muted-foreground"
            }`}
          />
        ))}
      </div>

      <blockquote className="text-white mb-6 italic">"{quote}"</blockquote>

      <div className="mb-6">
        <Badge>{note}</Badge>
      </div>

      <div className="flex items-center mt-auto">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-gray-700 to-gray-800 flex items-center justify-center">
          <User className="w-5 h-5 text-gray-400" />
        </div>
        <div className="ml-3">
          <h4 className="text-gray-300 font-medium">{author}</h4>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
