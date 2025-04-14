"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TestimonialCard = ({ quote, author, role, rating = 5, delay = 0 }) => {
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
      className="bg-card border border-border/50 rounded-lg p-6 shadow-md"
    >
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

      <blockquote className="text-muted-foreground mb-6">"{quote}"</blockquote>

      <div className="flex items-center gap-3">
        <div>
          <div className="font-medium">{author}</div>
          <div className="text-xs text-muted-foreground">{role}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
