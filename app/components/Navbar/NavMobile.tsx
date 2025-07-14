"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, Download, ArrowRight, X } from "lucide-react";
import gsap from "gsap";
import type { MenuItem } from "@/app/types/menuTypes";

interface NavbarMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuData: MenuItem[];
}

export default function NavbarMobileMenu({
  isOpen,
  onClose,
  menuData,
}: NavbarMobileMenuProps) {
  const [openStates, setOpenStates] = useState<Record<string, boolean>>({});
  const menuRef = useRef<HTMLDivElement>(null);

  const toggle = (key: string) => {
    setOpenStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    if (isOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [isOpen]);

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
        className="absolute right-0 top-0 w-4/5 max-w-xs h-full bg-white px-5 py-6 space-y-4 shadow-xl overflow-y-auto"
      >
        {/* Close Button */}
        <div className="flex justify-end mb-2">
          <button onClick={handleClose} className="text-gray-500 cursor-pointer hover:text-orange-600">
            <X size={28} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="space-y-2 text-base font-medium text-gray-900">
          {menuData.map((item) => {
            if (item.href) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 rounded-md hover:bg-orange-100 transition"
                >
                  {item.label}
                </Link>
              );
            }

            if (item.submenu) {
              return (
                <div key={item.label}>
                  <button
                    onClick={() => toggle(item.label)}
                    className="w-full flex justify-between items-center px-4 py-2 rounded-md hover:bg-orange-100"
                  >
                    {item.label}{" "}
                    {openStates[item.label] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>

                  {openStates[item.label] &&
                    item.submenu.map((sub) => {
                      if (sub.href) {
                        return (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="block pl-6 px-4 py-2 rounded hover:bg-orange-50"
                          >
                            {sub.label}
                          </Link>
                        );
                      }

                      if (sub.subsubmenu) {
                        return (
                          <div key={sub.label}>
                            <button
                              onClick={() => toggle(sub.label)}
                              className="w-full flex justify-between items-center pl-6 px-4 py-2 rounded hover:bg-orange-50"
                            >
                              {sub.label}{" "}
                              {openStates[sub.label] ? (
                                <ChevronUp size={16} />
                              ) : (
                                <ChevronDown size={16} />
                              )}
                            </button>

                            {openStates[sub.label] &&
                              sub.subsubmenu.map((prod) => (
                                <Link
                                  key={prod.label}
                                  href={prod.href}
                                  className="block pl-10 px-4 py-1 hover:bg-orange-50"
                                >
                                  {prod.label}
                                </Link>
                              ))}
                          </div>
                        );
                      }

                      return null;
                    })}
                </div>
              );
            }

            return null;
          })}
        </div>

        <hr className="border-gray-300 my-4" />

        {/* Action Buttons */}
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
