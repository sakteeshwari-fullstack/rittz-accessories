"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FullImageBannerProps {
  imageUrl: string;
  title: string;
}

export default function FullImageBanner({ imageUrl, title }: FullImageBannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={bannerRef}
      className="relative w-full h-[300px] md:h-[80vh] lg:h-[90vh] overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={title}
        fill
        priority
        className="object-cover object-center"
      />

      {/* Centered Overlay Text */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-4">
        <h1
          ref={textRef}
          className="text-white text-3xl md:text-5xl lg:text-6xl xl:leading-20 px-4 lg:px-20 xl:px-40 font-semibold"
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
