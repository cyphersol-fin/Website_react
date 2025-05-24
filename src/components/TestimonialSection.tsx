import { motion } from "framer-motion";
import { cn } from "./lib/utils";
import { Quote, User, ChevronRight, Star } from "lucide-react";

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            "w-4 h-4",
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
          )}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex flex-col h-full bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300 relative group">
      {/* Quote icon */}
      <div className="absolute -top-4 -left-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full p-2 shadow-lg shadow-blue-900/30 group-hover:scale-110 transition-transform duration-300">
        <Quote className="w-4 h-4 text-white" />
      </div>

      {/* Rating */}
      <div className="mb-4">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Testimonial text */}
      <div className="mb-6 flex-grow">
        <p className="text-gray-300 italic">{testimonial.text}</p>
      </div>

      {/* Highlight tag */}
      <div className="mb-6">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-900/50 to-cyan-900/50 text-cyan-300 text-xs font-medium">
          {testimonial.highlight}
        </span>
      </div>

      {/* User info */}
      <div className="flex items-center mt-auto">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-gray-700 to-gray-800 flex items-center justify-center">
          <User className="w-5 h-5 text-gray-400" />
        </div>
        <div className="ml-3">
          <h4 className="text-white font-medium">{testimonial.name}</h4>
          <p className="text-gray-400 text-sm">
            {testimonial.position}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
};

export const TestimonialsSection = ({ testimonials }) => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.3 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <motion.div
      custom={10}
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-16"
    >
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 tracking-tight text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
          What Our Business Users Are Saying
        </span>
      </h2>

      <p className="text-base md:text-lg text-[#c3d0e5] text-center max-w-4xl mx-auto mb-16">
        Hear from businesses across industries who have transformed their
        financial workflows with CypherSOL's bank statement analyzer
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            custom={index * 0.2}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium flex items-center mx-auto hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300"
        >
          Read More Success Stories
          <ChevronRight className="w-5 h-5 ml-2" />
        </motion.button>
      </div>
    </motion.div>
  );
};
