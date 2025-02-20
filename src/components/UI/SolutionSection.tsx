// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "@studio-freight/lenis";
// import { TextAnimate } from "../components/ui/text-animate";
// import { GlowEffect } from "./GlowEffect";
// import { cn } from "../lib/utils";

// const solutionData = [
//   {
//     title: "Safety and data security",
//     description:
//       "Bank statements are the private property of our clients, and the safety of client information is of utmost importance to us. Therefore, we ensure robust data security measures to protect sensitive financial information. Importantly, we do not save any personal information, account information, pdfs, or Excel files in our system. Our clients can just use this software to download the statement and save it on their system.",
//     img: "https://images.unsplash.com/photo-1738070593139-83b9cf3c09b9?q=80&w=870&auto=format&fit=crop",
//   },
//   {
//     title: "Automated Data Extraction",
//     description:
//       "CypherSOL’s Bank Statement Analyzer will be able to automatically extract relevant data from bank statements. This includes transaction details, expenses, probable expenses (categorized under different headings), income (categorized under different headings), investments, investment income, end-of-day (EOD) balances, EMI payments, EMI bounces, cheque bounces, other financial information, and suspense accounts.",
//     img: "https://images.unsplash.com/photo-1738070593139-83b9cf3c09b9?q=80&w=870&auto=format&fit=crop",
//   },
//   {
//     title: "Standardized and Structured Reports",
//     description:
//       "CypherSOL provides key financial metrics and information in a clear, standardized, structured, and usable Excel format. This makes it easier for the tax consultant to file income tax returns and DSAs to ascertain their clients’ financial needs and, further, which financiers are more likely to provide these services/products.CypherSOL also enables downloading, merging, and analyzing two bank statements and removing any overlap in dates/transactions.",
//     img: "https://images.unsplash.com/photo-1738070593139-83b9cf3c09b9?q=80&w=870&auto=format&fit=crop",
//   },
//   {
//     title: "Ease to Use",
//     description:
//       "CypherSOL’s Bank Statement Analyzer is user-friendly, requiring minimal effort from our client to input data or generate reports. This ensures that it becomes an integral part of their workflow.",
//     img: "https://images.unsplash.com/photo-1738070593139-83b9cf3c09b9?q=80&w=870&auto=format&fit=crop",
//   },
//   {
//     title:
//       "Enhanced Turnaround Time (TAT) and Reduced Manpower and Infrastructure Requirements",
//     description:
//       "Our software takes only a few seconds to analyze a statement, vs hours or days required under a manual process. Using our software will not only improve clients’ TAT but also reduce manpower and infrastructure costs. Embracing automation and efficient workflows leads to quicker task completion and overall operational efficiency.",
//     img: "https://images.unsplash.com/photo-1738070593139-83b9cf3c09b9?q=80&w=870&auto=format&fit=crop",
//   },
//   {
//     title: "Reduce risk",
//     description:
//       "CypherSOL can help you reduce the risk of manual error, get consistent output, and enhance the overall accuracy of financial reports.",
//     img: "https://images.unsplash.com/photo-1738070593139-83b9cf3c09b9?q=80&w=870&auto=format&fit=crop",
//   },
//   {
//     title: "Checking Eligibility and Choosing the Right Bank",
//     description:
//       "For a DSA, it is essential to assess the eligibility criteria of clients for different banks. Ensuring alignment between their client’s financial eligibility and the bank's requirements increases the likelihood of securing the right financial services. In our experience, in most cases, eligibility is dependent on bank statements, which play a vital role in choosing the right bank for the customer.",
//     img: "https://images.unsplash.com/photo-1738070593139-83b9cf3c09b9?q=80&w=870&auto=format&fit=crop",
//   },
//   {
//     title: "Competitive Edge",
//     description:
//       "With the help of the Bank Statement Analyzer, our clients can have a competitive edge over their competitors by providing more efficient and faster services to their customers.",
//     img: "https://images.unsplash.com/photo-1738070593139-83b9cf3c09b9?q=80&w=870&auto=format&fit=crop",
//   },
// ];

// export const SolutionSection = () => {
//   const servicesRef = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Initialize Lenis for smooth scrolling
//     const lenis = new Lenis();
//     lenis.on("scroll", ScrollTrigger.update);
//     gsap.ticker.add((time) => {
//       lenis.raf(time * 1000);
//     });
//     gsap.ticker.lagSmoothing(0);

//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.1,
//     };

//     const observerCallback = (
//       entries: IntersectionObserverEntry[],
//       observer: IntersectionObserver
//     ) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const service = entry.target as HTMLDivElement;
//           const imgContainer = service.querySelector(".img") as HTMLDivElement;

//           // Image width animation
//           ScrollTrigger.create({
//             trigger: service,
//             start: "bottom bottom",
//             end: "top top",
//             scrub: true,
//             onUpdate: (self) => {
//               let progress = self.progress;
//               let newWidth = 30 + 70 * progress;
//               gsap.to(imgContainer, {
//                 width: `${newWidth}%`,
//                 duration: 0.1,
//                 ease: "none",
//               });
//             },
//           });

//           // Section height animation
//           ScrollTrigger.create({
//             trigger: service,
//             start: "top bottom",
//             end: "top top",
//             scrub: true,
//             onUpdate: (self) => {
//               let progress = self.progress;
//               let newHeight = 150 + 300 * progress;
//               gsap.to(service, {
//                 height: `${newHeight}px`,
//                 duration: 0.1,
//                 ease: "none",
//               });
//             },
//           });

//           observer.unobserve(service);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(
//       observerCallback,
//       observerOptions
//     );
//     servicesRef.current.forEach((service) => {
//       if (service) observer.observe(service);
//     });

//     return () => {
//       observer.disconnect();
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, []);

//   return (
//     <div className="relative px-4 py-12 overflow-hidden md:px-6 lg:px-8">
//       <GlowEffect />
//       <div className="solution">
//         <div className="solution-header">
//           {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6  bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text text-center">
//             Solution - Save Time, Save Money
//           </h1> */}
//           <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-10 tracking-tight">
//             <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
//               Solution
//             </span>
//             <br />
//             <span
//               className={cn(
//                 "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400"
//               )}
//             >
//               Save Time, Save Money
//             </span>
//           </h1>
//           {solutionData.map((service, index) => (
//             <div
//               key={index}
//               ref={(el) => (servicesRef.current[index] = el)}
//               className="service grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16"
//             >
//               <div className="service-info">
//                 <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-300 via-white/90 to-blue-300 bg-clip-text text-transparent animate-slide-up">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-400 mx-auto">{service.description}</p>
//               </div>
//               <div className="service-img">
//                 <div className="img">
//                   <img
//                     src={service.img}
//                     alt={service.title}
//                     className="w-full h-auto rounded-lg"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { TextAnimate } from "../components/ui/text-animate";
import { useInView } from "react-intersection-observer";
import { cn } from "../lib/utils";
import { Badge } from "./Badge";
import { motion } from "framer-motion";

const content = [
  {
    title: "Safety and data security",
    description:
      "Bank statements are the private property of our clients, and the safety of client information is of utmost importance to us. Therefore, we ensure robust data security measures to protect sensitive financial information. Importantly, we do not save any personal information, account information, pdfs, or Excel files in our system. Our clients can just use this software to download the statement and save it on their system.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Automated Data Extraction",
    description:
      "CypherSOL’s Bank Statement Analyzer will be able to automatically extract relevant data from bank statements. This includes transaction details, expenses, probable expenses (categorized under different headings), income (categorized under different headings), investments, investment income, end-of-day (EOD) balances, EMI payments, EMI bounces, cheque bounces, other financial information, and suspense accounts.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Standardized and Structured Reports",
    description:
      "CypherSOL provides key financial metrics and information in a clear, standardized, structured, and usable Excel format. This makes it easier for the tax consultant to file income tax returns and DSAs to ascertain their clients’ financial needs and, further, which financiers are more likely to provide these services/products.CypherSOL also enables downloading, merging, and analyzing two bank statements and removing any overlap in dates/transactions.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Ease to Use",
    description:
      "CypherSOL’s Bank Statement Analyzer is user-friendly, requiring minimal effort from our client to input data or generate reports. This ensures that it becomes an integral part of their workflow.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title:
      "Enhanced Turnaround Time (TAT) and Reduced Manpower and Infrastructure Requirements",
    description:
      "Our software takes only a few seconds to analyze a statement, vs hours or days required under a manual process. Using our software will not only improve clients’ TAT but also reduce manpower and infrastructure costs. Embracing automation and efficient workflows leads to quicker task completion and overall operational efficiency.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Reduce risk",
    description:
      "CypherSOL can help you reduce the risk of manual error, get consistent output, and enhance the overall accuracy of financial reports.",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Checking Eligibility and Choosing the Right Bank",
    description:
      "For a DSA, it is essential to assess the eligibility criteria of clients for different banks. Ensuring alignment between their client’s financial eligibility and the bank's requirements increases the likelihood of securing the right financial services. In our experience, in most cases, eligibility is dependent on bank statements, which play a vital role in choosing the right bank for the customer.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Competitive Edge",
    description:
      "With the help of the Bank Statement Analyzer, our clients can have a competitive edge over their competitors by providing more efficient and faster services to their customers.",
    image:
      "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80&w=1000",
  },
];

const Section = ({
  title,
  description,
  image,
  index,
}: {
  title: string;
  description: string;
  image: string;
  index: number;
}) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className="flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="text-cyan-400 font-semibold">
            Solution {index + 1}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-gray-900 ">
            <span
              className={cn(
                "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400"
              )}
            >
              {title}
            </span>
          </h2>
          <p className="text-lg text-gray-300">{description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const SolutionSection = () => {
  return (
    <section className="relative py-24 bg-black">
      {/* Header */}
      <div className="text-center">
        <Badge>Solution</Badge>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 text-cyan-400">
          <TextAnimate animation="blurInUp" by="character">
            Our Innovative Solution
          </TextAnimate>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mt-4">
          We've developed a cutting-edge solution that transforms how businesses
          process and analyze bank statements.
        </p>
      </div>
      {content.map((item, index) => (
        <Section key={index} {...item} index={index} />
      ))}
    </section>
  );
};
