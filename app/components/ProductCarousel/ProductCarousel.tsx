'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const products = [
  '/access1.png',
  '/access2.png',
  '/access4.png',
  '/access5.png',
  '/access6.png',
  '/access7.png',
  '/access8.png',
];

const clients = [
  '/Roots.webp',
  '/Calvin.webp',
  '/Duchinni.webp',
  '/London-fog-logo.webp',
  '/Lee.webp',
  '/calimod.webp',
];

export default function AutoScrollShowcase() {
  const productRef = useRef<HTMLDivElement>(null);
  const clientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
   const animateLoop = (
  ref: HTMLDivElement | null,
  duration = 20,
  direction: 'left' | 'right' = 'left'
) => {
  if (!ref) return;

  if (direction === 'left') {
    gsap.to(ref, {
      xPercent: -50,
      duration,
      ease: 'linear',
      repeat: -1,
    });
  } else {
    // Shift back first, then scroll forward
    gsap.fromTo(
      ref,
      { xPercent: -50 },
      {
        xPercent: 0,
        duration,
        ease: 'linear',
        repeat: -1,
      }
    );
  }
};


    animateLoop(productRef.current, 25, 'left');  // Products: right to left
    animateLoop(clientRef.current, 20, 'right');  // Clients: left to right

    return () => {
      gsap.killTweensOf(productRef.current);
      gsap.killTweensOf(clientRef.current);
    };
  }, []);

  return (
    <div className="bg-white px-6 lg:px-20 py-12">
      {/* Product Images Loop */}
      <div className="overflow-hidden relative">
        <div
          ref={productRef}
          className="flex w-max gap-8 will-change-transform"
        >
          {[...products, ...products].map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`product-${i}`}
              width={200}
              height={200}
              className="object-contain h-52 w-[200px]"
            />
          ))}
        </div>
      </div>

      {/* Title */}
      <h2 className="text-center text-3xl mt-16 font-semibold my-6">Our Clients</h2>

      {/* Client Logos Loop */}
      <div className="overflow-hidden relative">
        <div
          ref={clientRef}
          className="flex w-max gap-16 items-center will-change-transform"
        >
          {[...clients, ...clients].map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`client-${i}`}
              width={160}
              height={160}
              className="object-contain h-52 w-[160px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
