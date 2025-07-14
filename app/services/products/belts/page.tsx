import React from "react";
import ProductImage from "@/app/components/Products/ProductImage";
import ProductSliderOne from "@/app/components/Products/ProductSliderOne";
import ProductSliderTwo from "@/app/components/Products/ProductSliderTwo";
import ProductSliderThree from "@/app/components/Products/ProductSliderThree";
import FAQSection from "@/app/components/Products/ProductFaq";
import ProductInfo from "../../../components/Products/ProductInfo";

const page = () => {
  return (
    <div>
      <ProductImage
        imageUrl="/productbelts.jpg"
        title="Crafted for confidence.Worn with pride."
      ></ProductImage>
      <ProductSliderOne category="belt" />
      <ProductSliderTwo category="belt"></ProductSliderTwo>
      <ProductSliderThree category="belt"></ProductSliderThree>

      <ProductInfo category="belt" />

      <FAQSection category="belt" />
    </div>
  );
};

export default page;
