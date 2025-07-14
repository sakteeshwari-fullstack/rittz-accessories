"use client";

import { motion } from "framer-motion";
import { Shirt, Gem, Sparkle } from "lucide-react";

const categories = [
  {
    icon: <Shirt className="w-8 h-8 text-orange-500" />,
    title: "Denim Leaders",
    brands: "Levi’s, Wrangler, and Lee",
    desc: "Tailor-made jeans leather tags for denim, jackets, and casual wear.",
  },
  {
    icon: <Gem className="w-8 h-8 text-orange-500" />,
    title: "Luxury Fashion",
    brands: "Diesel & Calvin Klein",
    desc: "Premium custom washed leather labels for high-end apparel.",
  },
  {
    icon: <Sparkle className="w-8 h-8 text-orange-500" />,
    title: "Contemporary Brands",
    brands: "Flying Machine & Ipekyol",
    desc: "Trendy, stylish leather jean labels for modern fashion.",
  },
];

export default function LeatherLabelIndustries() {
  return (
    <section className="bg-neutral-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Perfect for Denim, Streetwear & Luxury Fashion
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="h-1 w-24 bg-orange-400 mx-auto mb-10 origin-left"
        />

        {/* Grid Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6"
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="font-bold text-lg mb-1">{item.title}</h4>
              <p className="text-sm text-gray-700 mb-1">
                <strong>{item.brands}</strong>
              </p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-gray-700 text-base max-w-3xl mx-auto"
        >
          Whether you’re an established fashion house or an upcoming designer,{" "}
          <strong className="text-black">Rittz Accessories</strong> delivers{" "}
          <strong>custom leather tags</strong> that define your brand’s excellence.
        </motion.p>
      </div>
    </section>
  );
}
