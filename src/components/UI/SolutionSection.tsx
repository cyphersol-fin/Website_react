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
    image: "assets/images/data-security.jpeg",
  },
  {
    title: "Automated Data Extraction",
    description:
      "CypherSOL’s Bank Statement Analyzer will be able to automatically extract relevant data from bank statements. This includes transaction details, expenses, probable expenses (categorized under different headings), income (categorized under different headings), investments, investment income, end-of-day (EOD) balances, EMI payments, EMI bounces, cheque bounces, other financial information, and suspense accounts.",
    image: "assets/images/automated-data-extraction.jpeg",
  },
  {
    title: "Standardized and Structured Reports",
    description:
      "CypherSOL provides key financial metrics and information in a clear, standardized, structured, and usable Excel format. This makes it easier for the tax consultant to file income tax returns and DSAs to ascertain their clients’ financial needs and, further, which financiers are more likely to provide these services/products.CypherSOL also enables downloading, merging, and analyzing two bank statements and removing any overlap in dates/transactions.",
    image: "assets/images/structured-reports.jpeg",
  },
  {
    title: "Ease to Use",
    description:
      "CypherSOL’s Bank Statement Analyzer is user-friendly, requiring minimal effort from our client to input data or generate reports. This ensures that it becomes an integral part of their workflow.",
    image: "assets/images/ease-to-use.webp",
  },
  {
    title:
      "Enhanced Turnaround Time (TAT) and Reduced Manpower and Infrastructure Requirements",
    description:
      "Our software takes only a few seconds to analyze a statement, vs hours or days required under a manual process. Using our software will not only improve clients’ TAT but also reduce manpower and infrastructure costs. Embracing automation and efficient workflows leads to quicker task completion and overall operational efficiency.",
    image: "assets/images/reduced-manpower.webp",
  },
  {
    title: "Reduce risk",
    description:
      "CypherSOL can help you reduce the risk of manual error, get consistent output, and enhance the overall accuracy of financial reports.",
    image: "assets/images/reduce-risk.jpeg",
  },
  {
    title: "Checking Eligibility and Choosing the Right Bank",
    description:
      "For a DSA, it is essential to assess the eligibility criteria of clients for different banks. Ensuring alignment between their client’s financial eligibility and the bank's requirements increases the likelihood of securing the right financial services. In our experience, in most cases, eligibility is dependent on bank statements, which play a vital role in choosing the right bank for the customer.",
    image: "assets/images/checking-eligibility.jpg",
  },
  {
    title: "Competitive Edge",
    description:
      "With the help of the Bank Statement Analyzer, our clients can have a competitive edge over their competitors by providing more efficient and faster services to their customers.",
    image: "assets/images/competetive-edge.webp",
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
    triggerOnce: true,
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
              className="w-full h-full object-cover object-center"
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
