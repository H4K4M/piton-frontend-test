// pages/index.js
import React from "react";
import HeroSection from "../components/HeroSection";
import Contents from "../components/Contents.js";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Contents />
      <Footer />
    </div>
  );
}
