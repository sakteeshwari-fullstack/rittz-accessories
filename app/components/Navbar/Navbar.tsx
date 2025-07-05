"use client";

import { useState } from "react";
import { ChevronDown, Download, ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GoogleTranslateScript from "../GoogleTranslateScript"; // adjust path if needed


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/rittz-access-logo.png" alt="Rittz Logo" width={150} height={50} />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-black">
          <Link href="/" className="text-orange-600">Home</Link>

          <div className="relative group">
            <button className="flex items-center gap-1">About Us <ChevronDown className="w-4 h-4" /></button>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white border shadow p-2">
              <Link href="/about/company" className="block px-4 py-2 hover:bg-gray-100">Company</Link>
              <Link href="/about/team" className="block px-4 py-2 hover:bg-gray-100">Team</Link>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-1">Services <ChevronDown className="w-4 h-4" /></button>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white border shadow p-2">
              <Link href="/services/design" className="block px-4 py-2 hover:bg-gray-100">Design</Link>
              <Link href="/services/manufacturing" className="block px-4 py-2 hover:bg-gray-100">Manufacturing</Link>
            </div>
          </div>

          <Link href="/contact">Contact</Link>
          <Link href="/blog">Blog</Link>
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="bg-black text-white px-4 py-2 flex items-center gap-2">
            <Download className="w-4 h-4" /> Download Catalog
          </button>
          <button className="bg-black text-white px-4 py-2 flex items-center gap-2">
            Enquiry Us <ArrowRight className="w-4 h-4" />
          </button>
        {/* Language dropdown styled wrapper */}
<div className="relative">
  <div
    id="google_translate_element"
    className="translate-dropdown bg-white  px-3 py-1 rounded text-sm"
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

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-3 space-y-2 text-sm font-semibold">
          <Link href="/" className="block">Home</Link>
          <details>
            <summary className="cursor-pointer">About Us</summary>
            <div className="pl-4 space-y-1">
              <Link href="/about/company" className="block">Company</Link>
              <Link href="/about/team" className="block">Team</Link>
            </div>
          </details>
          <details>
            <summary className="cursor-pointer">Services</summary>
            <div className="pl-4 space-y-1">
              <Link href="/services/design" className="block">Design</Link>
              <Link href="/services/manufacturing" className="block">Manufacturing</Link>
            </div>
          </details>
          <Link href="/contact" className="block">Contact</Link>
          <Link href="/blog" className="block">Blog</Link>
          <hr />
          <button className="bg-black text-white px-4 py-2 w-full flex items-center justify-center gap-2">
            <Download className="w-4 h-4" /> Download Catalog
          </button>
          <button className="bg-black text-white px-4 py-2 w-full flex items-center justify-center gap-2">
            Enquiry Us <ArrowRight className="w-4 h-4" />
          </button>
        {/* Language dropdown styled wrapper */}
<div className="relative">
  <div
    id="google_translate_element"
    className="translate-dropdown bg-white border px-3 py-1 rounded text-sm"
  />
</div>
<GoogleTranslateScript />

        </div>
      )}
    </nav>
  );
}
