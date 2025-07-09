"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Monica Tata",
    text: `Grateful for their role in meeting consumer demand, Rittz Accessories stands out as one of Chennai’s top leather manufacturers. Choosing them was a wise decision amidst our search for quality leather products. Their unmatched craftsmanship and premium materials make them worth every penny.`,
    image: "/customer1.png",
    background: "/happycustomersbg.png",
  },
  {
    name: "John Doe, Procurement Manager Roots - Canada",
    text: `Rittz Accessories amazed us with their efficiency, delivering 5,000 custom leather wallets in just 4 weeks. Their quality and service are unparalleled, making them our trusted supplier. Highly recommended! Their attention to detail and unwavering commitment to excellence truly set them apart.`,
    image: "/customer2.png",
    background: "/happycustomersbg.png",
  },
  {
    name: "Shamika Smith",
    text: `Known as the foremost leather exporters in Chennai, Rittz Accessories' dedicated team consistently surpasses expectations. They pride themselves on crafting top-tier products from superior cowhides and Nappa leather, ensuring each item showcases peak quality and unmatched craftsmanship. Discover excellence with them today.`,
    image: "/customer3.png",
    background: "/happycustomersbg.png",
  },
];

export default function TestimonialSection() {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((el, index) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 100, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-12">Happy Customers!</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardRefs.current[index] = el;
            }}
            className="relative group bg-white p-6 rounded-lg shadow-md overflow-hidden transition-transform duration-500 hover:shadow-xl"
          >
            {/* Background image with zoom effect on hover */}
            <div className="absolute inset-0 z-0 opacity-50 pointer-events-none overflow-hidden">
              <Image
                src={testimonial.background}
                alt="Quote Background"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              <p className="text-gray-800 mb-6">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <span className="font-bold text-black">- {testimonial.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
