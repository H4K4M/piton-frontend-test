// components/HeroSection.js
import React from "react";
import css from "../styles/HeroSection.module.css";
export default function HeroSection() {
  return (
    <section className="bg-yellow-400 text-dark">
      <div className="container mx-auto relative">
        {/* Shape on Background */}
        <div className={`${css.Ellipse} opacity-70`}></div>
        <div className={`${css.Rectangle} right-0 opacity-70`}></div>
        {/* ------------------- */}

        <div className="sm:py-32 py-10 px-20 relative z-10">
          <h1 className="text-4xl sm:text-8xl font-semibold mb-4 text-center">
            Let’s create something <br /> great together.
          </h1>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center z-10">
          <img
            src="/Hero Image.png"
            className="relative sm:px-32 px-10 bottom-0"
            alt="Hero Image"
          />
        </div>
        {/* -------- */}
      </div>
    </section>
  );
}
