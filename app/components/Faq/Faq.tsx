"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What sets premium leather accessories apart from regular ones?",
    answer:
      "Premium leather accessories are made from higher quality hides and superior craftsmanship, resulting in better durability, appearance, and feel.",
  },
  {
    question: "How can I ensure the authenticity and quality of premium leather accessories?",
    answer:
      "Check for certifications, inspect stitching and texture, and buy from reputed manufacturers or brands.",
  },
  {
    question: "Are premium leather accessories sustainable and eco-friendly?",
    answer:
      "Many premium brands now use ethically sourced leather and eco-friendly tanning processes.",
  },
  {
    question: "How do I care for premium leather accessories to maintain their quality?",
    answer:
      "Keep them dry, clean with leather conditioner, and store in a cool, dust-free place.",
  },
  {
    question: "Can premium leather accessories be customized or personalized?",
    answer:
      "Yes! Many manufacturers offer customizations like engraving, color selection, and custom dimensions.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqRef = useRef(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (!faqRef.current) return;

    gsap.fromTo(
      faqRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      className="bg-white px-6 md:px-20 py-16"
      ref={faqRef}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        FAQ’s
      </h2>

      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-orange-50 px-6 py-4 border border-orange-100 transition-all duration-300 hover:bg-orange-100"
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full text-left font-semibold text-black group"
            >
              <span className="group-hover:text-orange-600 transition-colors duration-200">
                {faq.question}
              </span>
              <ChevronRight
                className={`w-5 h-5 text-orange-500 transition-transform duration-300 group-hover:text-orange-600 ${
                  openIndex === index ? "rotate-90" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-[500px] mt-3 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-700 text-sm">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
