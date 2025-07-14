"use client"
import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Blur and Animation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/about-us.jpeg")' }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      ></motion.div>

      {/* Overlay with Text and Animation */}
      <motion.div
        className="absolute inset-0 bg-black/30 flex justify-center items-center"
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        <h1 className="text-white leading-12 lg:leading-16 text-3xl md:text-4xl lg:text-5xl font-semibold text-center px-6 py-4 max-w-3xl">
          Crafting timeless leather pieces with passion, precision, and a legacy of quality.
        </h1>
      </motion.div>
    </div>
  );
};

export default AboutUs;
