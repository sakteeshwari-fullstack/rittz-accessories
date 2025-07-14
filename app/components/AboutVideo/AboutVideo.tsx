"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TopicVideo() {
  const headingRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Animate Heading from far below
    gsap.from(headingRef.current, {
      opacity: 0,
      y: 150, // longer distance
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate Video from far below
    gsap.from(videoRef.current, {
      opacity: 0,
      y: 150, // longer distance
      duration: 1.4,
      ease: "power4.out",
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="bg-white pt-20 mx-auto p-4">
      {/* Topic Title */}
      <h2
        ref={headingRef}
        className="text-3xl text-black/80 font-bold text-center mb-6"
      >
        Learn How Our Product Works
      </h2>

      {/* Video Section with limited width */}
      <div
        ref={videoRef}
        className="max-w-3xl mx-auto w-full aspect-video rounded-xl overflow-hidden shadow-lg"
      >
        <video
          className="w-full h-full object-cover"
          src="/discover-utube.mp4"
          controls
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
}
