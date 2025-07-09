"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Download,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import GoogleTranslateScript from "../GoogleTranslateScript";
import NavbarMobileMenu from "./NavMobile";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const logoRef = useRef(null);
  const navLinksRef = useRef(null);
  const buttonsRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".navbar-container",
        start: "top 90%",
        toggleActions: "play none none none",
      },
      defaults: { duration: 1.2, ease: "power4.out" },
    });

    tl.from(logoRef.current, {
      opacity: 0,
      y: -100,
      rotateX: 45,
    })
      .from(
        navLinksRef.current,
        {
          opacity: 0,
          y: -80,
          rotateX: 45,
        },
        "-=0.9"
      )
      .from(
        buttonsRef.current,
        {
          opacity: 0,
          x: 50,
          rotateY: 30,
          scale: 0.9,
        },
        "-=1.0"
      );
  }, []);

  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [menuOpen]);

  return (
    <nav className="navbar-container sticky top-0 z-[9999] bg-white shadow-xl p-1 px-6">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div ref={logoRef} className="flex items-center gap-2">
          <Image
            src="/rittz-access-logo.png"
            alt="Rittz Logo"
            width={150}
            height={50}
          />
        </div>

        {/* Desktop Nav */}
        <div
          ref={navLinksRef}
          className="hidden lg:flex items-center gap-6 text-sm font-semibold text-black relative"
        >
          <Link
            href="/"
            className={`transition duration-200 ${
              isActive("/") ? "text-orange-600 opacity-70 pointer-events-none" : "hover:text-orange-600"
            }`}
          >
            Home
          </Link>

          {/* About Us */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 transition duration-200 ${
                pathname.startsWith("/about") ? "text-orange-600 opacity-70 pointer-events-none" : "hover:text-orange-600"
              }`}
            >
              About Us <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute left-0 top-full pt-4 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md p-2 min-w-[180px] z-10 animate-fadeIn">
              <Link
                href="/about/certificates"
                className={`px-4 py-2 rounded transition-all ${
                  isActive("/about/certificates")
                    ? "text-orange-600 opacity-70 pointer-events-none"
                    : "hover:bg-orange-50 hover:text-orange-600"
                }`}
              >
                Certificates
              </Link>
            </div>
          </div>

          {/* Services with nested products */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 transition duration-200 ${
                pathname.startsWith("/services") || pathname.startsWith("/products")
                  ? "text-orange-600 opacity-70 pointer-events-none"
                  : "hover:text-orange-600"
              }`}
            >
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute left-0 top-full pt-4 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md p-2 min-w-[180px] z-10 animate-fadeIn">
              <div className="relative group/products">
                <div className="flex items-center justify-between px-4 py-2 rounded hover:bg-orange-50 hover:text-orange-600 cursor-pointer transition-all">
                  Products <ChevronDown className="w-4 h-4" />
                </div>
                <div className="absolute left-full top-0 pl-2 hidden group-hover/products:flex flex-col bg-white shadow-lg rounded-md p-2 w-60 animate-fadeIn z-20">
                  {[
                    { name: "Belts", path: "/products/belts" },
                    { name: "Wallets", path: "/products/wallets" },
                    { name: "Bags", path: "/products/bags" },
                    { name: "Washed Leather Labels", path: "/products/washed-leather-labels" },
                    { name: "Corporate Gifting", path: "/products/corporate-gifting" },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className={`px-4 py-2 rounded transition-all ${
                        isActive(item.path)
                          ? "text-orange-600 opacity-70 pointer-events-none"
                          : "hover:bg-orange-50 hover:text-orange-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className={`transition duration-200 ${
              isActive("/contact") ? "text-orange-600 opacity-70 pointer-events-none" : "hover:text-orange-600"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className={`transition duration-200 ${
              isActive("/blog") ? "text-orange-600 opacity-70 pointer-events-none" : "hover:text-orange-600"
            }`}
          >
            Blog
          </Link>
        </div>

        {/* Action Buttons */}
        <div
          ref={buttonsRef}
          className="hidden lg:flex items-center gap-4"
        >
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-orange-600 transition-all flex items-center gap-2">
            <Download className="w-4 h-4" /> Download Catalog
          </button>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-orange-600 transition-all flex items-center gap-2">
            Enquiry Us <ArrowRight className="w-4 h-4" />
          </button>

          <div className="relative">
            <div
              id="google_translate_element"
              className="translate-dropdown bg-white px-3 py-1 rounded text-sm"
            />
          </div>
          <GoogleTranslateScript />
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-black"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <NavbarMobileMenu
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          
        />
      )}
    </nav>
  );
}
