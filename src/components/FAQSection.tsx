import React, { useState } from "react";
import { Plus, X } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`
        relative border border-[#2a2a2a] rounded-2xl overflow-hidden transition-all duration-300
        ${isOpen ? "bg-[#1a1a1a]" : "bg-transparent hover:bg-[#1a1a1a]/50"}
        before:absolute before:inset-0 before:rounded-2xl before:p-[1px]
        before:bg-gradient-to-r before:from-transparent before:via-[#22d1ee] before:to-transparent
        before:opacity-0 before:transition-opacity before:duration-300
        ${isOpen ? "before:opacity-100" : "hover:before:opacity-50"}
        after:absolute after:inset-[1px] after:rounded-2xl after:bg-[#0a0a0a]
        after:z-[0]
      `}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 w-full p-6 flex items-center justify-between text-left"
      >
        <span className="text-xl text-white font-medium">{question}</span>
        <div className="group relative flex items-center justify-center w-10 h-10 rounded-md bg-[#161616] shadow-[0_0_2px_1px_rgb(34,209,238)]">
          {isOpen ? (
            <X className="w-6 h-6 text-white transition-transform duration-300 " />
          ) : (
            <Plus className="w-6 h-6 text-white transition-transform duration-300 " />
          )}
        </div>
      </button>
      <div
        className={`relative z-10 grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="p-6 pt-0 text-[#888] text-lg leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Is my company a good fit for CypherSOL?",
      answer:
        "CypherSOL serves a diverse range of industries and company sizes, making it your ideal partner whether you're a startup or a large enterprise looking to harness the power of AI.",
    },
    {
      question: "Are your solutions secure?",
      answer:
        "We implement industry-leading security measures and comply with all major security standards to ensure your data and operations remain protected at all times.",
    },
    {
      question: "How quickly can we get started?",
      answer:
        "Our streamlined onboarding process allows most companies to get up and running within days, not weeks. Our team will guide you through every step of the implementation.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We provide 24/7 dedicated support through multiple channels including phone, email, and live chat. Our expert team is always ready to assist you with any questions or concerns.",
    },
  ];
  // max-w-3xl
  return (
    <div className=" bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          Frequently{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Asked Questions
          </span>
        </h1>
        <p className="text-[#888] text-lg mb-12 text-center">
          We've gone ahead and answered some of the questions you might have.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
