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
        imageUrl="/productbags.jpg"
        title="Designed to carry more than essentials — carry style."
      ></ProductImage>
      <ProductSliderOne category="bag" />
      <ProductSliderTwo category="bag"></ProductSliderTwo>
      <ProductSliderThree category="bag"></ProductSliderThree>
      <ProductInfo category="bag" />
      <FAQSection category="bag" />
    </div>
  );
};

export default page;
