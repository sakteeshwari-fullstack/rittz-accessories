"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-white via-gray-50 to-white p-8 rounded-xl shadow-lg space-y-8 transition duration-500 hover:shadow-2xl hover:scale-[1.02] group">
        <h1 className="text-4xl md:text-3xl font-extrabold text-center text-orange-700 leading-tight group-hover:text-orange-800 transition duration-300">
          Quality Production, Luxury Accessories
        </h1>

        <div className="space-y-6 text-sm text-gray-700 leading-relaxed border-l-4 border-orange-400 pl-6 transition-all duration-500 group-hover:border-orange-600">
          <p>
            <span className="font-semibold text-black">Rittz Accessories</span> is a leading name among premium leather
            manufacturers in India, renowned for crafting genuine leather products of
            unparalleled quality. With a dedication to excellence and precision, we offer
            custom-made luxury accessories that epitomise sophistication and durability.
          </p>

          <p>
            Our process is built on using only the{" "}
            <span className="font-semibold text-black">finest materials</span> and expert craftsmanship at every step. As
            one of the top premium leather manufacturers, we uphold the highest standards of
            quality in every creation.
          </p>

          <p>
            From bespoke leather bags to elegant wallets and accessories, Rittz Accessories
            delivers products that{" "}
            <span className="italic text-black">exude luxury and timeless style</span>. Our meticulous attention to
            detail sets us apart in the world of premium leather.
          </p>

          <p>
            Experience the epitome of luxury with Rittz Accessories — your trusted partner for
            handcrafted leather excellence in India.
          </p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {["quality1.png", "quality2.png", "quality3.png"].map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
          >
            <Image
              src={`/${src}`}
              alt={`Gallery image ${index + 1}`}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Floating Contact Button */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 bg-white border border-gray-300 shadow-lg text-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
      >
        Contact us
      </a>
    </section>
  );
}
