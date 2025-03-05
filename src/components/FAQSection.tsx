import React, { useState } from "react";
import { Plus, X } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQItemProps extends FAQItem {
  isOpen: boolean;
  toggleOpen: () => void;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  highlightedText?: string;
  regularText?: string;
  className?: string;
}

const FAQItemComponent: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  toggleOpen,
}) => {
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
        onClick={toggleOpen}
        className="relative z-10 w-full p-6 flex items-center justify-between text-left"
      >
        <span className="text-lg text-white font-medium w-[80%] max-w-auto">
          {question}
        </span>
        <div className="group relative flex items-center justify-center w-10 h-10 rounded-md bg-[#161616] shadow-[0_0_2px_1px_rgb(34,209,238)]">
          {isOpen ? (
            <X className="w-6 h-6 text-white transition-transform duration-300" />
          ) : (
            <Plus className="w-6 h-6 text-white transition-transform duration-300" />
          )}
        </div>
      </button>
      <div
        className={`relative z-10 grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="p-6 pt-0 text-[#888] text-md leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "We've gone ahead and answered some of the questions you might have.",
  items = [],
  highlightedText = "Asked Questions",
  regularText = "Frequently ",
  className = "",
}) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(index)
        ? prevOpenItems.filter((item) => item !== index)
        : [...prevOpenItems, index]
    );
  };

  return (
    <div className={`bg-black py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-3xl mx-auto">
        {title && (
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            {regularText}{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              {highlightedText}
            </span>
          </h1>
        )}
        {subtitle && (
          <p className="text-[#888] text-lg mb-12 text-center">{subtitle}</p>
        )}
        <div className="space-y-4">
          {items.map((faq, index) => (
            <FAQItemComponent
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItems.includes(index)}
              toggleOpen={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
