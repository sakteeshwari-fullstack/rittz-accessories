'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CertificationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <div
      className="relative text-black py-10 px-6 md:px-20 overflow-hidden"
     
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 bg-[url('/sedexbg.jpeg')] bg-cover bg-center bg-fixed z-0" />

      {/* Orange Overlay Layer */}
      <div className="absolute inset-0 bg-orange-500/50 z-10" />


      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center gap-8 py-16 px-6">
        {/* Certification Image */}
        <Image
          src="/sedex.png"
          alt="Certifications"
          width={300}
          height={100}
          className="object-contain"
        />

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white text-sm px-6 py-3 rounded-full transition transform hover:translate-y-1">
            <ArrowRight size={18} />
            More About Us
          </button>

          <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white text-sm px-6 py-3 rounded-full transition transform hover:translate-y-1">
            Request a Custom Quote
            <Calendar size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
