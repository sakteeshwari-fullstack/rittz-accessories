"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, FileText } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Animate the entire section in
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate each paragraph individually
    const paragraphs = el.querySelectorAll("p") as NodeListOf<HTMLElement>;
    paragraphs.forEach((p, i) => {
      gsap.from(p, {
        y: 30,
        autoAlpha: 0,
        duration: 1,
        ease: "power2.out",
        delay: i * 0.1,
        scrollTrigger: {
          trigger: p,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Animate buttons
    const buttons = el.querySelectorAll("button") as NodeListOf<HTMLElement>;
    buttons.forEach((btn, i) => {
      gsap.from(btn, {
        y: 40,
        autoAlpha: 0,
        duration: 1,
        ease: "power2.out",
        delay: i * 0.2,
        scrollTrigger: {
          trigger: btn,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#fff9f1] text-[#2c2c2c] px-6 py-16 lg:px-20 max-w-7xl mx-auto font-sans leading-relaxed"
    >
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">
        <span className="text-5xl text-orange-600 font-bold">W</span>
        e believe that true elegance lies in the details...
      </h2>

      <div className="space-y-6 text-sm">
        <p>
          With decades of experience in the manufacturing of the Leather Accessories, we have perfected the art of creating timeless pieces that exceed craftsmanship and sophistication. From handcrafted Wallets and Bags to exquisite Belts and accessories, each item in our collection is a testament to our commitment to quality and style.
        </p>
        <p>
          Rittz Accessories has established itself as a renowned name in the world of Leather Accessories. Our commitment to producing outstanding things that last is what sets us apart. Every item we produce is a work of art that is painstakingly made by skilled artisans who have polished their trade over many years.
        </p>
        <p>
          We are ISO 9001:2015 certified Leather accessory Manufacturers with a legacy spanning 30 years.
        </p>
        <p>
          London Fog, Pierre Cardin, Lee Cooper, Roots, Duchini, and Calimod – are the BRANDS we have catered to over the years.
        </p>
        <p>
          You can tell the difference the instant you hold one of our items in your hands. Every component represents our dedication to excellence, from the suppleness of the leather to the meticulous stitching to the depth of the colors. Our accessories are made to elevate your style and leave a lasting impact, whether it’s a Statement Bag that draws attention everywhere you go or a Sleek Wallet that fits perfectly in your pocket.
        </p>
        <p>
          At Rittz Accessories, we strive to offer our customers exceptional value without compromising on quality. We can maintain tight quality control and provide Premium Accessories at low costs because we personally manage every stage of the production process, from sourcing materials to creating the finished product. One thing never changes, even as we develop and adjust to emerging trends: our unshakable commitment to quality workmanship and client pleasure. We take pleasure in our long-lasting connections with our customers and eagerly await the addition of new members to the Rittz family.
        </p>
        <p>
          Browse our collection and experience the artistry of finely crafted Leather Accessories. Join us on this journey, where tradition meets innovation, and where every accessory tells a story of quality, style, and timeless elegance.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <button className="flex cursor-pointer items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-all transform hover:translate-y-2">
          <FileText size={20} />
          Request a Custom Quote
        </button>
        <button className="flex cursor-pointer items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-all transform hover:translate-y-2">
          <MessageCircle size={20} />
          Message Now
        </button>
      </div>
    </section>
  );
}
