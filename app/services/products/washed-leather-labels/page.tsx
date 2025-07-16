import React from 'react'
import ProductImage from "@/app/components/Products/ProductImage";
import WashedLeatherLabelsCTA from '@/app/components/Products/WashedLeatherLabelsCTA';
import WashedLeatherLabelsFeatures from '@/app/components/Products/WashedLeatherLabelsFeatures';
import LeatherLabelIndustries from '@/app/components/Products/LeatherLabelIndustries';

const page = () => {
  return (
    <div>
       <ProductImage
              imageUrl="/productwashing-labels.jpg"
              title="Crafted by Time. Defined by Texture. Built for Legacy."
            ></ProductImage>
            <WashedLeatherLabelsFeatures></WashedLeatherLabelsFeatures>
            <WashedLeatherLabelsCTA></WashedLeatherLabelsCTA>
            <LeatherLabelIndustries></LeatherLabelIndustries>
    </div>
  )
}

export default page
