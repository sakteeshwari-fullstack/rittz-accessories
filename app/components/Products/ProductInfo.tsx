"use client";

import Image from "next/image";
import { productInfoData } from "../../data/productInfoData"; // Adjust path based on your project
import { FaWhatsapp } from "react-icons/fa";

interface ProductInfoProps {
  category: "wallet" | "bag" | "belt";
}

export default function ProductInfo({ category }: ProductInfoProps) {
  const product = productInfoData[category];

  if (!product)
    return <div className="text-center py-10">Product not found.</div>;

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
      <h2 className="text-4xl lg:text-5xl lg:font-normal font-semibold mb-8">{product.title}</h2>
 
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-5 text-justify text-sm leading-relaxed">
          {product.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <div className="flex flex-col gap-10">
          {product.images.map((src, i) => (
            <div
              key={i}
              className="relative w-full h-80 rounded-lg overflow-hidden"
            >
              <Image
                src={src}
                alt={`product-image-${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

     <div className="flex flex-wrap gap-4 mt-10">
  <button className="bg-gray-200 cursor-pointer text-sm px-6 py-2 rounded-full hover:bg-gray-300 transform transition-transform hover:translate-y-1">
    📩 Request a Custom Quote
  </button>
  <button className="bg-green-500 cursor-pointer text-white text-sm px-6 py-2 rounded-full hover:bg-green-600 flex items-center gap-2 transform transition-transform hover:translate-y-1">
    <FaWhatsapp size={18} />
    Message Now
  </button>
</div>
    </section>
  );
}
