"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqData } from "../../data/productFaq";
import { AnimatePresence, motion } from "framer-motion";

interface FAQSectionProps {
  category: "belt" | "wallet" | "bag";
}

export default function FAQSection({ category }: FAQSectionProps) {
  const faqs = faqData[category];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-10 text-black">FAQ’s</h2>
      <div className="divide-y divide-gray-200 border border-gray-300 overflow-hidden">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`transition-all duration-300 ${
                isOpen ? "bg-gray-800 text-white" : "bg-white hover:bg-gray-100"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className={`w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none transition-colors duration-300`}
              >
                <div className="flex items-center gap-4">
                  {isOpen ? (
                    <Minus className="text-orange-500 w-5 h-5" />
                  ) : (
                    <Plus className="text-orange-500 w-5 h-5" />
                  )}
                  <span className="text-sm font-medium">
                    {faq.question}
                  </span>
                </div>
                <div className="text-orange-500 text-xl">{">"}</div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-14 pb-5 text-sm leading-relaxed text-white"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
