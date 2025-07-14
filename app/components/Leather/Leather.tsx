"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LeatherGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".leather-section") as HTMLElement[];
      elements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#fffaf5] py-10 px-4 lg:px-32">
      {/* Your grid content stays unchanged */}
      {/* Top Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-stretch">
        {/* Left Images */}
        <div className="flex flex-col h-full leather-section">
          <div className="flex-1 flex items-center justify-center bg-white p-4 shadow-md">
            <Image
              src="/leathers1.png"
              alt="Wallet 1"
              width={200}
              height={200}
              className="object-contain h-full w-auto"
            />
          </div>
          <div className="flex-1 flex items-center justify-center bg-white p-4 shadow-md">
            <Image
              src="/leathers2.png"
              alt="Wallet 2"
              width={200}
              height={200}
              className="object-contain h-full w-auto"
            />
          </div>
        </div>

        {/* Center Text */}
        <div className="bg-orange-500 text-gray-800 p-6 text-justify shadow-md flex flex-col justify-between h-full min-h-[600px] leather-section">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Style And Quality Unleashed
            </h2>
            <p className="mb-3">
              Expressed the balance sheet of each personal device in the domain...
            </p>
            {/* Additional paragraphs truncated for brevity */}
          </div>
          <div className="mt-6 flex justify-center">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:scale-105 transition-transform">
              Belt
            </button>
          </div>
        </div>

        {/* Right Images */}
        <div className="flex flex-col h-full leather-section">
          <div className="flex-1 flex items-center justify-center bg-white p-4 shadow-md">
            <Image
              src="/leathers3.png"
              alt="Bag 1"
              width={200}
              height={200}
              className="object-contain h-full w-auto"
            />
          </div>
          <div className="flex-1 flex items-center justify-center bg-white p-4 shadow-md">
            <Image
              src="/leathers4.png"
              alt="Bag 2"
              width={200}
              height={200}
              className="object-contain h-full w-auto"
            />
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-stretch">
        {/* Left Text */}
        <div className="bg-orange-500 text-gray-800 p-6 text-justify shadow-md flex flex-col justify-between h-full min-h-[600px] leather-section">
          <div>
            <h1 className="text-2xl font-bold mb-6 text-center">
              Stitched Toward Luxury
            </h1>
            <p className="mb-4">
              Despite the progress of upgrading the new luxury...
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:scale-105 transition-transform">
              Wallet
            </button>
          </div>
        </div>

        {/* Center Images */}
        <div className="flex flex-col h-full leather-section">
          <div className="flex-1 flex items-center justify-center bg-white p-4 shadow-md">
            <Image
              src="/leathers5.png"
              alt="Belt 1"
              width={200}
              height={200}
              className="object-contain h-full w-auto"
            />
          </div>
          <div className="flex-1 flex items-center justify-center bg-white p-4 shadow-md">
            <Image
              src="/leathers6.png"
              alt="Belt 2"
              width={200}
              height={200}
              className="object-contain h-full w-auto"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="bg-orange-500 text-gray-800 p-6 text-justify shadow-md flex flex-col justify-between h-full min-h-[600px] leather-section">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Exclusive & Handcrafted
            </h2>
            <p className="mb-3">
              Despite a stunning collection of windows throughout twelve long centuries...
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:scale-105 transition-transform">
              Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeatherGrid;
