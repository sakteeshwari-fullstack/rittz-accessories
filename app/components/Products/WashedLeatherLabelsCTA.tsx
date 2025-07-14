"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function WashedLeatherLabelsCTA() {
  return (
    <section className="relative w-full py-10 px-6 text-white text-center overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/product-washinglabel-cta.jpeg" // Replace with your background path
          alt="Leather Texture"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold leading-snug mb-6">
          Get Your Custom Washed Leather Labels Today!
        </h2>
        <p className="text-sm md:text-base font-light italic text-white/90 max-w-5xl mx-auto leading-relaxed">
          Elevate your branding with high-quality{" "}
          <span className="font-semibold not-italic">washed leather labels</span>!{" "}
          <span className="font-medium not-italic">Contact Rittz Accessories</span> today for a customized quote and explore our range of{" "}
          <span className="font-semibold not-italic">jeans leather labels</span>,{" "}
          <span className="font-semibold not-italic">personalised leather labels</span>, and{" "}
          <span className="font-semibold not-italic">leather tags for jeans</span>.
        </p>

        {/* CTA Button */}
        <div className="mt-10 flex justify-center">
          <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-white hover:text-black transition duration-200">
            <span className="font-semibold">Contact us now</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
