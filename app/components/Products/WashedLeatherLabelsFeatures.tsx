"use client";

import {
  Brush,
  BadgePercent,
  PackageCheck,
  Sparkles,
  Leaf,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Brush className="w-6 h-6 text-orange-500" />,
    title: "Authentic Craftsmanship",
    description:
      "Crafted with premium genuine and faux leather to ensure long-lasting durability and an elegant finish.",
  },
  {
    icon: <BadgePercent className="w-6 h-6 text-orange-500" />,
    title: "Customization & Branding",
    description:
      "Personalize your labels with designs, logos, finishes, and embossing to reflect your brand identity.",
  },
  {
    icon: <PackageCheck className="w-6 h-6 text-orange-500" />,
    title: "Versatile Applications",
    description:
      "Ideal for jeans, jackets, bags, and other fashion pieces — suitable for all branding needs.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-orange-500" />,
    title: "High-Quality Printing & Embossing",
    description:
      "Precision embossing and high-resolution printing techniques deliver clarity and durability.",
  },
  {
    icon: <Leaf className="w-6 h-6 text-orange-500" />,
    title: "Eco-Friendly & Sustainable Options",
    description:
      "Biodegradable and ethically sourced labels tailored for sustainable fashion brands.",
  },
];

export default function WashedLeatherLabelsFeatures() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto text-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-5 text-orange-400 uppercase tracking-widest text-xs font-semibold"
        >
          <Sparkles className="w-4 h-4" />
          New Collection
        </motion.span>

        {/* Gradient headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold leading-tight
                     bg-gradient-to-r from-orange-600 via-yellow-400 to-orange-600
                     bg-clip-text text-transparent max-w-3xl"
        >
          Premium Washed Leather Labels
        </motion.h1>

        {/* Sliding divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="origin-left h-1 w-40 bg-gradient-to-r from-transparent via-orange-400 to-transparent mt-4"
        />

        {/* Sub‑headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-8 text-lg md:text-xl text-gray-800 max-w-2xl leading-relaxed"
        >
          Custom washed leather labels that give your brand a distinctive edge.
          At <strong>Rittz Accessories</strong>, we handcraft{' '}
          <span className="text-orange-500 font-semibold">
            high‑quality leather tags
          </span>{' '}
          for denim, apparel, and fashion accessories — from{' '}
          <strong>Levi’s‑style jeans labels</strong> to fully{' '}
          <strong>personalised embossing</strong>.
        </motion.p>
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl lg:text-5xl font-semibold my-12 mt-20 text-center"
      >
        Why Choose Rittz Accessories?
      </motion.h3>

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((item, idx) => {
          const isLast = idx === features.length - 1;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex items-start gap-4 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl border border-gray-100 transition-all ${
                isLast ? "md:col-span-2 md:mx-auto max-w-xl" : ""
              }`}
            >
              <div>{item.icon}</div>
              <div>
                <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
