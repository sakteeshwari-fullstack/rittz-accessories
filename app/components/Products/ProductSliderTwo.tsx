"use client";
import Image from "next/image";
import Link from "next/link";
import { Eye, Link as LinkIcon } from "lucide-react";
import { moreProductsData } from "../../data/productDataTwo";
import { FaWhatsapp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProductSliderProps {
  category: "belt" | "wallet" | "bag";
}

export default function ProductSlider({ category }: ProductSliderProps) {
  const products = moreProductsData[category];

   const categoryHeadings: Record<ProductSliderProps["category"], string> = {
    belt: "Formal Dress Belts Single Side - 35mm",
    wallet: "Multi - Card Pass Case",
    bag: "Cross Body Bags",
  };

  return (
    <div className="w-full py-14 px-4 md:px-10 bg-white">
      <h2 className="text-4xl font-semibold mb-8 capitalize text-left text-gray-800 drop-shadow-lg">
          {categoryHeadings[category]}
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white/60 backdrop-blur-xl rounded-md shadow-2xl border border-orange-100 overflow-hidden text-center transition-transform hover:scale-[1.02] duration-300">
              <div className="h-[260px] flex items-center justify-center p-6 group">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={260}
                  height={200}
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex border-t border-orange-200">
                <Link
                  href={item.link}
                  className="w-1/2 bg-orange-500 hover:bg-orange-600 text-white py-3 flex justify-center items-center gap-2 text-sm font-medium transition-all duration-200"
                >
                  <Eye className="w-5 h-5" />
                  View
                </Link>
                <Link
                  href={item.link}
                  className="w-1/2 bg-orange-400 hover:bg-orange-500 text-white py-3 flex justify-center items-center gap-2 text-sm font-medium transition-all duration-200"
                >
                  <LinkIcon className="w-5 h-5" />
                  Visit
                </Link>
              </div>
              <div className="py-4 pb-10 text-lg font-semibold text-gray-800 px-2">{item.name}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
            {/* Divider with Star and Buttons */}
      <div className="flex flex-col items-center mt-10">
        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <Link
            href="/custom-quote"
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl flex items-center gap-2 text-sm shadow"
          >
            🧾 Request a Custom Quote
          </Link>
          <Link
  href="https://wa.me/9150347733"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl flex items-center gap-2 text-sm shadow"
>
  <FaWhatsapp className="w-5 h-5" />
  Message Now
</Link>
        </div>

        {/* Divider with Star */}
        <div className="flex items-center w-full max-w-4xl px-4">
          <hr className="flex-grow border-t border-gray-400" />
          <div className="mx-4 text-orange-500 text-xl">⭐</div>
          <hr className="flex-grow border-t border-gray-400" />
        </div>
      </div>

    </div>
  );
}
