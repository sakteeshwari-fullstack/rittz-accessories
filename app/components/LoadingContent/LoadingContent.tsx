"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null); // whole section ref
  const textRef = useRef(null);
  const headingRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/gallery1.png",
    "/gallery2.png",
    "/gallery3.png",
  ];

  useEffect(() => {
    // Animate entire section from far below
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    // Inner elements animation (optional fine tuning)
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
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

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      imageWrapperRef.current,
      { opacity: 0, y: 50 },
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
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-6 py-16 md:px-20 bg-white"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT TEXT */}
        <div ref={textRef}>
          <h2
            ref={headingRef}
            className="text-3xl md:text-4xl font-bold text-black mb-4"
          >
            Rittz Accessories
          </h2>
          <h3 className="text-orange-500 text-xl font-semibold mb-6 leading-snug">
            Crafting Timeless Leather Accessories with Over 30 Years of Experience – ISO 9001:2015 Certified
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            At our core, we believe true elegance lies in the details. As one of the best premium leather manufacturers in India, we have over three decades of expertise in the leather accessories industry.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our craftsmanship and dedication to quality shine through in every piece we create. From handcrafted wallets and bags to exquisite belts and accessories, our collection epitomises sophistication and superior artistry.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We specialise in producing genuine leather products, making us a preferred choice among genuine leather product manufacturers in India.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With our rich legacy, we stand out as one of the best leather product manufacturing companies in India. Explore our range and experience the unparalleled quality that defines us.
          </p>
        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div
          ref={imageWrapperRef}
          className="relative overflow-hidden rounded shadow-lg aspect-video"
        >
          <div
            className="flex transition-transform duration-1000 ease-in-out h-full w-full"
            style={{
              width: `${images.length * 100}%`,
              transform: `translateX(-${currentImage * (100 / images.length)}%)`,
            }}
          >
            {images.map((src, idx) => (
              <div
                key={idx}
                className="relative w-full h-full flex-shrink-0"
                style={{ width: `${100 / images.length}%` }}
              >
                <Image
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-10">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentImage ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
