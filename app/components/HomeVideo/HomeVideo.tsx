"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  videoUrl: string;
  subtitle: string;
  title: string;
  highlights: string[];
}

export default function Hero({ videoUrl, subtitle, title, highlights }: HeroProps) {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const subTextRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate background video
      gsap.fromTo(
        videoRef.current,
        {
          scale: 1.3,
          opacity: 0,
          y: 100,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate heading and subtext
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
        .fromTo(
          textRef.current,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
          }
        )
        .fromTo(
          subTextRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.8"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[100vh] overflow-hidden"
    >
      {/* Background Video with animation */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0 will-change-transform"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Foreground Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4 text-white">
        <h3
          ref={subTextRef}
          className="text-orange-400 text-lg font-semibold mb-2"
        >
          {subtitle}
        </h3>
        <h1
          ref={textRef}
          className="text-5xl md:text-7xl font-bold leading-tight tracking-wide"
        >
          {title}
        </h1>

        {/* Highlights with decorative lines */}
        <div className="mt-6 w-full flex items-center justify-center gap-4 px-4">
          <div className="hidden sm:block flex-grow max-w-[200px] h-px bg-white" />

          <div className="text-center space-y-1">
            {highlights.map((text, idx) => (
              <p
                key={idx}
                className="text-orange-400 px-6 text-lg font-semibold leading-tight"
              >
                {text}
              </p>
            ))}
          </div>

          <div className="hidden sm:block flex-grow max-w-[200px] h-px bg-white" />
        </div>
      </div>
    </section>
  );
}
