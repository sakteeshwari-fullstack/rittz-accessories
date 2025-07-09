"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  Download,
  ArrowRight,
  X,
} from "lucide-react";
import gsap from "gsap";

interface NavbarMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavbarMobileMenu({ isOpen, onClose }: NavbarMobileMenuProps) {
  const [openAbout, setOpenAbout] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  // Animate open
  useEffect(() => {
    if (isOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  // Animate close
  const handleClose = () => {
    if (menuRef.current) {
      gsap.to(menuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: onClose,
      });
    } else {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm">
      <div
        ref={menuRef}
        className="absolute right-0 top-0 w-4/5 max-w-xs h-full bg-white px-5 py-6 space-y-4 shadow-xl overflow-y-auto "
      >
        {/* Close Button */}
        <div className="flex justify-end mb-2">
          <button onClick={handleClose} className="text-gray-500 hover:text-orange-600 transition">
            <X size={28} />
          </button>
        </div>

        {/* Nav Links */}
        <div className="space-y-2 text-base font-medium text-gray-900">
          <Link href="/" className="block px-4 py-2 rounded-md hover:bg-orange-100 transition">Home</Link>

          {/* About */}
          <div>
            <button
              onClick={() => setOpenAbout(!openAbout)}
              className="w-full flex justify-between items-center px-4 py-2 rounded-md hover:bg-orange-100"
            >
              About Us {openAbout ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            {openAbout && (
              <div className="pl-6 space-y-1">
                <Link href="/about/certificates" className="block px-4 py-2 rounded hover:bg-orange-50">Certificates</Link>
              </div>
            )}
          </div>

          {/* Services + Products */}
          <div>
            <button
              onClick={() => setOpenServices(!openServices)}
              className="w-full flex justify-between items-center px-4 py-2 rounded-md hover:bg-orange-100"
            >
              Services {openServices ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            {openServices && (
              <div className="pl-6 space-y-1">
                <button
                  onClick={() => setOpenProducts(!openProducts)}
                  className="w-full flex justify-between items-center px-4 py-2 rounded hover:bg-orange-50"
                >
                  Products {openProducts ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openProducts && (
                  <div className="pl-4">
                    <Link href="/products/belts" className="block px-4 py-1 hover:bg-orange-50">Belts</Link>
                    <Link href="/products/wallets" className="block px-4 py-1 hover:bg-orange-50">Wallets</Link>
                    <Link href="/products/bags" className="block px-4 py-1 hover:bg-orange-50">Bags</Link>
                    <Link href="/products/washed-leather-labels" className="block px-4 py-1 hover:bg-orange-50">Washed Leather Labels</Link>
                    <Link href="/products/corporate-gifting" className="block px-4 py-1 hover:bg-orange-50">Corporate Gifting</Link>
                  </div>
                )}
              </div>
            )}
          </div>

          <Link href="/contact" className="block px-4 py-2 rounded-md hover:bg-orange-100 transition">Contact</Link>
          <Link href="/blog" className="block px-4 py-2 rounded-md hover:bg-orange-100 transition">Blog</Link>
        </div>

        <hr className="border-gray-300 my-4" />

        {/* CTA Buttons */}
        <div className="space-y-3">
          <button className="bg-black text-white px-4 py-2 w-full rounded-md flex items-center justify-center gap-2 hover:bg-orange-600 transition">
            <Download className="w-4 h-4" /> Download Catalog
          </button>
          <button className="bg-orange-600 text-white px-4 py-2 w-full rounded-md flex items-center justify-center gap-2 hover:bg-black transition">
            Enquiry Us <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
