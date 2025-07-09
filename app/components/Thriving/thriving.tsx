"use client";

import { useEffect, useRef } from "react";
import { MessageSquare } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ThrivingSection() {
  const sectionRef = useRef(null);
const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const textRef = useRef(null);

  useEffect(() => {
    // Animate text block on scroll
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    // Animate each card with slight stagger
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  const cards = [
    { icon: "🙌", title: "HAPPY CLIENT" },
    { icon: "🖐️✨", title: "WORKERS HAND" },
    { icon: "👥⚙️", title: "ACTIVE EXPERTS" },
  ];

  return (
    <section
      className="bg-orange-500 text-black py-16 px-6 md:px-20"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div className="text-center md:text-left" ref={textRef}>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            We&apos;re thriving<br />and<br />building better<br />products
          </h2>
          <button className="mt-4 inline-flex cursor-pointer items-center gap-2 bg-black text-white font-semibold px-5 py-3 rounded-md hover:bg-gray-800 transition">
            <MessageSquare className="w-5 h-5" />
            Request a Custom Quote
          </button>
        </div>

        {/* Right cards */}
        <div className="flex justify-center md:justify-end gap-4 flex-wrap">
          {cards.map((item, idx) => (
            <div
              key={idx}
             ref={(el) => {
  cardRefs.current[idx] = el;
}}

              className="w-40 h-56 bg-neutral-100 text-center cursor-pointer rounded-2xl shadow-md flex flex-col justify-center items-center p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-orange-100"
            >
              <div className="text-4xl mb-2 animate-bounce-slow">{item.icon}</div>
              <hr className="w-6 border-t border-black my-2" />
              <p className="font-bold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bounce animation */}
      <style jsx>{`
        .animate-bounce-slow {
          animation: bounceSlow 2s infinite;
        }

        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </section>
  );
}
