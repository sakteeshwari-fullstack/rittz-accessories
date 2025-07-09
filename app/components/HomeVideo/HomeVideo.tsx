"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const textRef = useRef(null);
  const subTextRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      textRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: "power4.out" }
    )
    .fromTo(
      subTextRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.8"
    );
  }, []);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/rittz-access.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4 text-white">
        <h3 className="text-orange-400 text-lg font-semibold mb-2" ref={subTextRef}>
          India based
        </h3>
        <h1
          ref={textRef}
          className="text-5xl md:text-7xl font-bold leading-tight tracking-wide"
        >
          Leather Goods
        </h1>
      <div className="mt-6 w-full flex items-center justify-center gap-4 px-4">
  <div className="hidden sm:block flex-grow max-w-[200px] h-px bg-white " />
  
  <div className="text-center space-y-1">
    <p className="text-orange-400 px-6 text-lg font-semibold leading-tight">
      Leading Leather
    </p>
    <p className="text-orange-400 px-6 text-lg font-semibold leading-tight">
      Manufacturer/Exporter
    </p>
  </div>

  <div className="hidden sm:block flex-grow max-w-[200px] h-px bg-white" />
</div>


      </div>
    </section>
  );
}
