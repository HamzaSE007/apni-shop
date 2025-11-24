import React, { useRef } from "react";
import Services from "./Services";
import TrendingProduct from "./TrendingProduct";
import Partners from "./Partners";
import HeroSection from "./HeroSection";
import ScrollToTop from "../ScrollToTop";

export default function Home() {
  const productsRef = useRef();
  return (
    <main className="relative">
      
      <HeroSection productsRef={productsRef} />
      <Services />
      <TrendingProduct productsRef={productsRef} />
      <Partners />
      <ScrollToTop />
      
      
    </main>
  );
}
