import { motion } from "framer-motion";

export const CardComponent = ({ title, description, Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative flex flex-col items-center text-center"
    >
      {/* Hover glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-500 blur-xl group-hover:duration-200 hover:animate-pulse" />

      <div className="relative bg-gray-900/50 backdrop-blur-xl p-6 rounded-2xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 h-full">
        <div className="flex flex-col items-center">
          {/* Icon Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-500 to-blue-500 p-4 rounded-full mb-4"
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>

          {/* Title Animation */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-white font-semibold mb-2"
          >
            {title}
          </motion.h3>

          {/* Description Animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-gray-400"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};
