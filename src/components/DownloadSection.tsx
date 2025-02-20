// import React from "react";
// import { GlowEffect } from "./UI/GlowEffect";
// import { Badge } from "./UI/Badge";
// import { GoMoveToBottom } from "react-icons/go";
// import "./css/styles.css";

// export const DownloadSection = () => {
//   return (
//     <div className="relative bg-black overflow-hidden">
//       <GlowEffect />
//       <div className="relative">
//         <div className="container mx-auto px-4 py-8 md:py-12 text-center w-full md:w-[68%]">
//           <div className="flex items-center justify-center mb-6 md:mb-8">
//             <Badge>Download</Badge>
//           </div>
//           <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-5 text-[#c3d0e5] text-center">
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
//               Download
//             </span>{" "}
//             CypherSOL
//           </h1>
//           <p className="text-base md:text-lg text-[#c3d0e5] text-center max-w-4xl mx-auto">
//             CypherSOL is a cutting-edge Bank Statement Analyzer designed to help
//             you streamline your financial analysis. It's free and built on
//             advanced technology, offering features like intelligent
//             categorization, insightful visualizations, and seamless reporting.
//           </p>
//           <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-12 md:mt-20 mb-12 md:mb-20">
//             {/* Windows Section */}
//             <div className="flex flex-col items-center md:w-auto">
//               <img
//                 src="/assets/images/windows-logo.png"
//                 alt="windows"
//                 className="w-16 h-16 md:w-24 md:h-24 mb-4 "
//               />
//               <button className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
//                 <GoMoveToBottom className="w-5 h-5" />
//                 <span>Windows</span>
//               </button>
//             </div>

//             {/* Apple Section */}
//             <div className="flex flex-col items-center md:w-auto">
//               <img
//                 src="/assets/images/apple-logo-inverted.svg"
//                 alt="apple"
//                 className="w-16 h-16 md:w-24 md:h-24 mb-4 "
//               />
//               <button className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
//                 <GoMoveToBottom className="w-5 h-5" />
//                 <span>macOS</span>
//               </button>
//             </div>
//           </div>

//           <p className="text-sm md:text-base text-[#c3d0e5] text-center">
//             By downloading and using CypherSOL, you agree to the{" "}
//             <a
//               href="/terms"
//               className="text-cyan-400 underline"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               terms of service
//             </a>{" "}
//             and{" "}
//             <a
//               href="/privacy-policy"
//               className="text-cyan-400 underline"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               privacy statement
//             </a>
//             .
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { motion } from "framer-motion";
import { GlowEffect } from "./UI/GlowEffect";
import { Badge } from "./UI/Badge";
import { GoMoveToBottom } from "react-icons/go";
const DownloadPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="relative bg-black overflow-hidden">
      <GlowEffect />
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 py-8 md:py-12 text-center w-full md:w-[68%]">
          <motion.div
            className="flex items-center justify-center mb-6 md:mb-8"
            variants={itemVariants}
          >
            <Badge>Download</Badge>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4 md:mb-5 text-[#c3d0e5] text-center"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Download
            </span>{" "}
            CypherSOL
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-[#c3d0e5] text-center max-w-4xl mx-auto"
            variants={itemVariants}
          >
            CypherSOL is a cutting-edge Bank Statement Analyzer designed to help
            you streamline your financial analysis. It's free and built on
            advanced technology, offering features like intelligent
            categorization, insightful visualizations, and seamless reporting.
          </motion.p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-12 md:mt-20 mb-12 md:mb-20">
            <motion.div
              className="flex flex-col items-center md:w-auto"
              variants={itemVariants}
            >
              <motion.img
                src="/assets/images/windows-logo.png"
                alt="windows"
                className="w-16 h-16 md:w-24 md:h-24 mb-4"
              />
              <motion.button
                className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"
                variants={buttonVariants}
                whileHover="hover"
              >
                <GoMoveToBottom className="w-5 h-5" />
                <span>Windows</span>
              </motion.button>
            </motion.div>

            <motion.div
              className="flex flex-col items-center md:w-auto"
              variants={itemVariants}
            >
              <motion.img
                src="/assets/images/apple-logo-inverted.svg"
                alt="apple"
                className="w-16 h-16 md:w-24 md:h-24 mb-4"
              />
              <motion.button
                className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"
                variants={buttonVariants}
                whileHover="hover"
              >
                <GoMoveToBottom className="w-5 h-5" />
                <span>macOS</span>
              </motion.button>
            </motion.div>
          </div>

          <motion.p
            className="text-sm md:text-base text-[#c3d0e5] text-center"
            variants={itemVariants}
          >
            By downloading and using CypherSOL, you agree to the{" "}
            <a
              href="/terms"
              className="text-cyan-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              terms of service
            </a>{" "}
            and{" "}
            <a
              href="/privacy-policy"
              className="text-cyan-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              privacy statement
            </a>
            .
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default DownloadPage;
