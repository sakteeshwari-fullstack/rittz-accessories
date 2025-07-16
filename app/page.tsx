'use client';

import HomeVideo from "./components/HomeVideo/HomeVideo"
import LoadingContent from "./components/LoadingContent/LoadingContent"
import Thriving from "./components/Thriving/thriving"
import Faq from "./components/Faq/Faq"
import HappyCustomers from "./components/HappyCustomers/HappyCustomers"
import Quality from "./components/Quality/Quality"
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";
import Sedex from "./components/Sedex/Sedex"
import Leather from "./components/Leather/Leather"
import { heroData } from "./data/heroContent";

export default function HomePage() {
 

  return (
    <main className="">
      
      <HomeVideo {...heroData} ></HomeVideo>

     
  <LoadingContent></LoadingContent>

      <Sedex></Sedex>
       
      <Leather></Leather>
   
      <ProductCarousel></ProductCarousel>
     
      <Quality></Quality>
      
      <Thriving></Thriving>
      <HappyCustomers></HappyCustomers>
     
      <div className="overflow-x-hidden">
  <Faq />
</div>

    </main>
  );
}
