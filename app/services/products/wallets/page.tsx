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
        imageUrl="/productwallets.jpg"
        title="More than a wallet — it’s a legacy in your pocket."
      ></ProductImage>
      <ProductSliderOne category="wallet" />
      <ProductSliderTwo category="wallet"></ProductSliderTwo>
      <ProductSliderThree category="wallet"></ProductSliderThree>
      <ProductInfo category="wallet" />
      <FAQSection category="wallet" />
    </div>
  );
};

export default page;
