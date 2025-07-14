"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CertificateContactForm from "../CertificateContactForm/CertificateContactForm";

gsap.registerPlugin(ScrollTrigger);

export default function CertificationContactSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 250, // far from bottom
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%", // adjust for earlier/later trigger
          toggleActions: "play none none reverse", // plays every time viewed
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl lg:px-20 bg-white mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
    >
      {/* Left Content */}
      <div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-wider text-black font-semibold mb-6">
          Certified Leather Manufacturer & Exporter –{" "}
          <span className="text-orange-600">Quality You Can Trust</span>
        </h2>
        <p className="mb-4 tracking-wider text-gray-700 leading-relaxed">
          When it comes to premium leather manufacturing and export, choosing a
          certified supplier is crucial. At Rittz Accessories, we take pride in
          being a globally recognized leather manufacturer and exporter,
          ensuring that every product we create meets the highest international
          standards for quality, sustainability, and ethical sourcing.
        </p>
        <p className="text-gray-700 tracking-wider leading-relaxed">
          Our certifications are a testament to our commitment to excellence,
          environmental responsibility, and customer satisfaction. When you
          partner with us, you get more than just leather—you get trust,
          reliability, and world-class craftsmanship.
        </p>
      </div>

      <CertificateContactForm />
    </section>
  );
}
