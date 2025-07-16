"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, Download, ArrowRight, X } from "lucide-react";
import gsap from "gsap";

export default function NavbarMobileMenu({ isOpen, onClose, menuData }) {
  const [openStates, setOpenStates] = useState({});
  const menuRef = useRef(null);

  const toggle = (key) => {
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
          <button
            onClick={handleClose}
            className="text-gray-500 cursor-pointer hover:text-orange-600"
          >
            <X size={28} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="space-y-2 text-base font-medium text-gray-900">
          {menuData.map((item) => {
            const hasSubmenu = item.submenu && item.submenu.length > 0;

            return (
              <div key={item.label}>
                {hasSubmenu ? (
                  <button
                    onClick={() => toggle(item.label)}
                    className="w-full flex justify-between items-center px-4 py-2 rounded-md hover:bg-orange-100"
                  >
                    <span>{item.label}</span>
                    {openStates[item.label] ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="block w-full px-4 py-2 rounded-md hover:bg-orange-100 transition"
                  >
                    {item.label}
                  </Link>
                )}

                {hasSubmenu && openStates[item.label] && (
                  <div className="ml-2 space-y-1">
                    {item.submenu.map((sub) => {
                      const hasSubsubmenu = sub.subsubmenu && sub.subsubmenu.length > 0;

                      return (
                        <div key={sub.label}>
                          <div className="flex items-center gap-3 pl-6 px-2 py-3 rounded hover:bg-orange-50">
                            {sub.image && (
                              <img
                                src={sub.image}
                                alt={sub.label}
                                className="w-20 h-20 object-cover rounded-md "
                              />
                            )}
                            {sub.href ? (
                              <Link href={sub.href} className="block">
                                {sub.label}
                              </Link>
                            ) : (
                              <button
                                onClick={() => toggle(sub.label)}
                                className="w-full flex justify-between items-center"
                              >
                                {sub.label}
                                {openStates[sub.label] ? (
                                  <ChevronUp size={16} />
                                ) : (
                                  <ChevronDown size={16} />
                                )}
                              </button>
                            )}
                          </div>

                          {/* Subsubmenu */}
                          {hasSubsubmenu && openStates[sub.label] && (
                            <div className="pl-10 space-y-1">
                              {sub.subsubmenu.map((prod) => (
                                <Link
                                  key={prod.label}
                                  href={prod.href}
                                  className="block px-2 py-1 hover:bg-orange-50 rounded"
                                >
                                  {prod.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
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
