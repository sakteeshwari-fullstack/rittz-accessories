"use client";

import { Phone, Mail } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-orange-600 text-white text-sm py-2">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 py-2">
        {/* Left side: Phone numbers */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+91-442247 1672</span>
          </div>

          <div className="hidden sm:block h-4 border-l border-white"></div>

          <div className="flex items-center gap-2">
            <span>+91-98410 49993</span>
          </div>

          <div className="hidden sm:block h-4 border-l border-white"></div>

          <div className="flex items-center gap-2">
            <span>+91-98410 97997</span>
          </div>
        </div>

        {/* Right side: Email */}
        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          <Mail className="w-4 h-4" />
          <span>sales@rittzaccessories.com</span>
        </div>
      </div>
    </div>
  );
}
