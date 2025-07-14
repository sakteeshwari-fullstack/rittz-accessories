"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Download, ArrowRight, Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import NavbarMobileMenu from "./NavMobile";
import type { MenuItem } from "../../types/menuTypes";

gsap.registerPlugin(ScrollTrigger);

interface NavbarProps {
  menuData: MenuItem[];
}

export default function Navbar({ menuData }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const logoRef = useRef(null);
  const navLinksRef = useRef(null);
  const buttonsRef = useRef(null);

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

    tl.from(logoRef.current, { opacity: 0, y: -100, rotateX: 45 })
      .from(navLinksRef.current, { opacity: 0, y: -80, rotateX: 45 }, "-=0.9")
      .from(buttonsRef.current, { opacity: 0, x: 50, rotateY: 30, scale: 0.9 }, "-=1.0");
  }, []);

  return (
    <nav className="navbar-container sticky top-0 z-[9999] bg-white shadow-xl p-1 px-6">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div ref={logoRef}>
          <Image src="/rittz-access-logo.png" alt="Logo" width={150} height={50} className="cursor-pointer" />
        </div>

        {/* Desktop Menu */}
        <div ref={navLinksRef} className="hidden lg:flex gap-6 text-sm font-semibold text-black relative">
          {menuData.map((item) => {
            if (item.submenu) {
              return (
                <div key={item.label} className="relative group">
                  <div className="flex items-center gap-1 hover:text-orange-600 transition cursor-pointer">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className={`transition duration-200 ${
                          isActive(item.href) ? "text-orange-600 opacity-70 pointer-events-none" : "hover:text-orange-600"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                    <ChevronDown className="w-4 h-4" />
                  </div>

                  {/* Submenu */}
                  <div className="absolute left-0 top-full pt-4 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md p-2 min-w-[180px] z-10">
                    {item.submenu.map((sub) => {
                      if (sub.href) {
                        return (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className={`px-4 py-2 rounded transition-all ${
                              isActive(sub.href)
                                ? "text-orange-600 opacity-70 pointer-events-none"
                                : "hover:bg-orange-50 hover:text-orange-600"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        );
                      }

                      if (sub.subsubmenu) {
                        return (
                          <div key={sub.label} className="relative group/products">
                            <div className="flex items-center justify-between px-4 py-2 hover:bg-orange-50 hover:text-orange-600 cursor-pointer">
                              {sub.label} <ChevronDown className="w-4 h-4" />
                            </div>
                            <div className="absolute left-full top-0 pl-2 hidden group-hover/products:flex flex-col bg-white shadow-lg rounded-md p-2 w-60 z-20">
                              {sub.subsubmenu.map((prod) => (
                                <Link
                                  key={prod.label}
                                  href={prod.href}
                                  className={`px-4 py-2 rounded transition-all ${
                                    isActive(prod.href)
                                      ? "text-orange-600 opacity-70 pointer-events-none"
                                      : "hover:bg-orange-50 hover:text-orange-600"
                                  }`}
                                >
                                  {prod.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      }

                      return null;
                    })}
                  </div>
                </div>
              );
            }

            // Regular link without submenu
            if (item.href) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`transition duration-200 ${
                    isActive(item.href) ? "text-orange-600 opacity-70 pointer-events-none" : "hover:text-orange-600"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            return null;
          })}
        </div>

        {/* Action Buttons */}
        <div ref={buttonsRef} className="hidden lg:flex items-center gap-4">
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-orange-600 transition-all flex items-center gap-2">
            <Download className="w-4 h-4" /> Download Catalogue
          </button>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-orange-600 transition-all flex items-center gap-2">
            Enquiry Us <ArrowRight className="w-4 h-4" />
          </button>
          <div className="relative">
            <div id="google_translate_element" className="translate-dropdown bg-white px-3 py-1 rounded text-sm" />
          </div>
        
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-black cursor-pointer">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <NavbarMobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} menuData={menuData} />
      )}
    </nav>
  );
}
