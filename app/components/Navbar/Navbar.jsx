"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Download, ArrowRight, Menu, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import NavbarMobileMenu from "./NavMobile";
import GoogleTranslateScript from "../GoogleTranslateScript";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar({ menuData }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const logoRef = useRef(null);
  const navLinksRef = useRef(null);
  const buttonsRef = useRef(null);

  const isActive = (path) => pathname === path;

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".navbar-container",
        start: "top 90%",
        toggleActions: "play none none none",
      },
      defaults: { duration: 1.2, ease: "power4.out" },
    });

    tl.from(logoRef.current, { opacity: 0, y: -100, rotateX: 45 })
      .from(navLinksRef.current, { opacity: 0, y: -80, rotateX: 45 }, "-=0.9")
      .from(buttonsRef.current, { opacity: 0, x: 50, rotateY: 30, scale: 0.9 }, "-=1.0");
  }, []);

  return (
    <nav className="navbar-container sticky top-0 z-[9999] bg-white shadow-xl p-1 px-6">
      {/* Google Translate loader script */}
      <GoogleTranslateScript />

      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div ref={logoRef}>
          <Image
            src="/rittz-access-logo.png"
            alt="Logo"
            width={150}
            height={50}
            className="cursor-pointer"
          />
        </div>

        {/* Desktop Menu */}
        <div
          ref={navLinksRef}
          className="hidden lg:flex gap-6 text-sm font-semibold text-black relative"
        >
          {menuData.map((item) => {
            const hasSubmenu = item.submenu && item.submenu.length > 0;

            return (
              <div key={item.label} className="relative group">
                <div className="flex items-center gap-1 hover:text-orange-600 transition cursor-pointer">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`transition duration-200 ${
                        isActive(item.href)
                          ? "text-orange-600 opacity-70 pointer-events-none"
                          : "hover:text-orange-600"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
                  {hasSubmenu && <ChevronDown className="w-4 h-4" />}
                </div>

                {/* Submenu */}
                {hasSubmenu && (
                  <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-200 ease-in-out z-50">
                    <div className="bg-white shadow-xl p-4 grid grid-cols-1 md:grid-cols-2 gap-4 w-[680px]">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className={`flex items-center gap-5 px-3 py-3 rounded-lg transition-all hover:bg-orange-50 w-full ${
                            isActive(sub.href)
                              ? "text-orange-600 opacity-70 pointer-events-none"
                              : "hover:text-orange-600"
                          }`}
                        >
                          {sub.image && (
                            <div className="w-28 h-28 rounded-md overflow-hidden border border-gray-200 shrink-0">
                              <Image
                                src={sub.image}
                                alt={sub.label}
                                width={112}
                                height={112}
                                className="object-cover w-full h-full"
                              />
                            </div>
                          )}
                          <span className="text-sm font-medium">{sub.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Buttons & Google Translate (Desktop) */}
        <div ref={buttonsRef} className="hidden lg:flex items-center gap-4 text-sm font-medium">
          {/* CTA Buttons */}
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-orange-600 transition-all flex items-center gap-2">
            <Download className="w-4 h-4" /> Download Catalogue
          </button>
         

         
        </div>
 {/* Google Translate Widget */}
           {/* <div className="relative"> */}
            <div className="relative">
              <div id="google_translate_element" className="" />
              {/* Overlay to hide "powered by" */}
              <div className="absolute bottom-0 top-6 left-0 w-full h-6 bg-white z-10 pointer-events-none" />
            </div>
          {/* </div> */}
        
        
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-black cursor-pointer"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <NavbarMobileMenu
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          menuData={menuData}
        />
      )}
    </nav>
  );
}
