"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-b from-orange-600 to-black/80 text-white py-12 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <Image
            src="/rittz-access-logo.png"
            alt="Rittz Logo"
            width={200}
            height={60}
            className="mb-4"
          />
          <p className="text-sm text-white/90 leading-relaxed">
            Rittz Accessories is your trusted partner for premium leather belts,
            wallets, and bags, crafted with unmatched quality and style.
            <br />
            <span className="text-orange-500 font-semibold cursor-pointer hover:underline">
              Read More...
            </span>
          </p>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Our Products</h3>
          <ul className="space-y-2 text-white/90">
            <li>Belts</li>
            <li>Wallets</li>
            <li>Bags</li>
            <li>Corporate Gifting</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <div className="space-y-2 text-white/90 text-sm">
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-orange-500" />
              +91-442247 1672 | +91-98410 49993
            </p>
            <p className="ml-6">+91-98410 97997</p>
            <p className="flex items-center gap-2 mt-2">
              <Mail className="w-4 h-4 text-orange-500" />
              <a href="mailto:sales@rittzaccessories.com">
                sales@rittzaccessories.com
              </a>
            </p>
          </div>
          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <a href="#" className="bg-[#3b5998] p-2 rounded hover:scale-105 transition">
              <Facebook className="text-white w-5 h-5" />
            </a>
            <a href="#" className="bg-[#E1306C] p-2 rounded hover:scale-105 transition">
              <Instagram className="text-white w-5 h-5" />
            </a>
            <a href="#" className="bg-[#0A66C2] p-2 rounded hover:scale-105 transition">
              <Linkedin className="text-white w-5 h-5" />
            </a>
            <a href="#" className="bg-[#FF0000] p-2 rounded hover:scale-105 transition">
              <Youtube className="text-white w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Locations */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Our Locations</h3>
          <div className="space-y-3 text-white/90 text-sm">
            <p className="flex gap-2">
              <MapPin className="w-4 h-4 text-orange-500" />
              Chromepet, Chennai, Tamil Nadu, India
            </p>
            <p className="flex gap-2">
              <MapPin className="w-4 h-4 text-orange-500" />
              7653, 116th Ave SE, Newcastle 98056, United States
            </p>
            <p className="flex gap-2">
              <MapPin className="w-4 h-4 text-orange-500" />
              Unit 615-51, Lower Simcoe Street, Toronto ON M5J 3A2, Canada
            </p>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-white/20 mt-10 pt-6 text-sm text-center text-white/70">
        Copyright © 2025 Rittz Accessories | Powered by{" "}
        <span className="text-orange-500 font-medium cursor-pointer hover:underline">
          Rittz Digital
        </span>
      </div>
    </footer>
  );
}
