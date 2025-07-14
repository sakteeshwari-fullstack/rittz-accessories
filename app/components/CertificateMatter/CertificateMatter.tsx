"use client";

import { useRef, useEffect } from "react";
import { Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyCertificationsMatter() {
  const sectionRef = useRef<HTMLDivElement | null>(null); // ✅ Type-safe

  const points = [
    {
      title: "100% Genuine Leather",
      description: "No compromises, no synthetic blends.",
    },
    {
      title: "Eco-Friendly Production",
      description: "Supporting sustainable and ethical leather practices.",
    },
    {
      title: "Global Trade Compliance",
      description: "Hassle-free international export.",
    },
    {
      title: "Premium Quality Assurance",
      description: "Rigorously tested for durability and longevity.",
    },
  ];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return; // ✅ Safety check

    const heading = el.querySelector("h2");
    const paragraph = el.querySelector("p");
    const items = el.querySelectorAll("li");

    // Animate heading
    if (heading) {
      gsap.from(heading, {
        opacity: 0,
        y: 150,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Animate paragraph
    if (paragraph) {
      gsap.from(paragraph, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        delay: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: paragraph,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Animate each <li>
    items.forEach((item, i) => {
      gsap.from(item, {
        opacity: 0,
        y: 80,
        duration: 1,
        delay: i * 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-[#fdfdfd] via-[#f1f5f9] to-[#e2e8f0] py-20 px-6 md:px-12 lg:px-20 font-sans overflow-hidden"
    >
      {/* 3D glow background */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-orange-300 opacity-30 rounded-full blur-[120px] z-0"></div>
      <div className="absolute -bottom-32 -right-20 w-[400px] h-[400px] bg-emerald-400 opacity-20 rounded-full blur-[160px] z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto backdrop-blur-md bg-white/50 border border-white/30 rounded-3xl shadow-xl p-10">
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-6 text-gray-900">
          Why <span className="text-orange-600">Certifications</span> Matter in{" "}
          <span className="text-orange-600 px-2 py-1">Leather Manufacturing</span>?
        </h2>

        <p className="text-lg mb-10 text-gray-700 max-w-3xl">
          In the global leather industry, certifications are more than just a
          badge—they guarantee authenticity, sustainability, and quality
          assurance. Here’s why working with a certified leather manufacturer
          makes a difference:
        </p>

        <ul className="grid md:grid-cols-2 gap-6">
          {points.map((point, idx) => (
            <li
              key={idx}
              className="flex items-start gap-4 p-5 rounded-xl bg-white/60 shadow-md border border-white/30 hover:scale-[1.03] transition-transform duration-300 backdrop-blur-xl"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 shadow-inner">
                <Check size={22} />
              </div>
              <div className="cursor-pointer">
                <strong className="text-base md:text-lg font-medium text-gray-900">
                  {point.title}
                </strong>{" "}
                – <span className="text-gray-700">{point.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
