import React from "react";
import {
  User,
  Mail,
  Phone,
  MessageSquareText,
  SendHorizonal,
} from "lucide-react";

const CertificateContactForm = () => {
  return (
    <div className="bg-white text-gray-800 max-w-3xl mx-10  p-8 rounded-3xl shadow-xl border border-orange-100">
      <h3 className="text-3xl font-semibold text-center mb-8 text-orange-600">
        Contact Us
      </h3>

      <form className="space-y-6">
        {/* Name Field */}
        <div className="relative">
          <User className="absolute left-4 top-4 text-orange-600" size={20} />
          <input
            type="text"
            placeholder="Your Name"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <Mail className="absolute left-4 top-4 text-orange-600" size={20} />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
          />
        </div>

        {/* Phone Field */}
        <div className="relative">
          <Phone className="absolute left-4 top-4 text-orange-600" size={20} />
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
          />
        </div>

        {/* Message Field */}
        <div className="relative">
          <MessageSquareText
            className="absolute left-4 top-4 text-orange-600"
            size={20}
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none transition resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full cursor-pointer flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-full shadow-lg transition-all duration-300"
        >
          <SendHorizonal size={18} />
          Send Enquiries
        </button>
      </form>
    </div>
  );
};

export default CertificateContactForm;
