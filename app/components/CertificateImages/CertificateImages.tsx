"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CertificationDisplay() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const cards = el.querySelectorAll(".cert-card");

    cards.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 120,
        duration: 1.2,
        delay: i * 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none reverse", // plays every time on scroll
        },
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl px-6 lg:px-20 mx-auto py-16 font-sans"
    >
      <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-12 text-center md:text-left">
        Our <span className="text-orange-600">Industry-Leading</span>{" "}
        Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="cert-card bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200">
          <Image
            src="/certificateImage1.jpg"
            alt="SMETA Audit Certificate"
            width={800}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="cert-card bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200">
          <Image
            src="/certificateImage2.jpeg"
            alt="CLE Registration Certificate"
            width={800}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
