// components/HeroSection.js
import React from "react";
import css from "../styles/HeroSection.module.css";
export default function HeroSection() {
  return (
    <section className="bg-yellow-400  text-dark">
      {/* <div className={`${css.shape} `}>
        <div className={`${css.Ellipse}`}></div>
        <div className={`${css.Rectangle}`}></div>
      </div> */}
      <div className="container mx-auto sm:py-32 py-10 px-20 relative">
        <h1 className="text-4xl sm:text-8xl font-semibold mb-4 text-center">
          Let’s create something <br /> great together.
        </h1>
      </div>
      <div className="flex justify-center">
        <img
          src="/Hero Image.png"
          alt="background image"
          className="relative sm:px-32 px-10 bottom-0"
        />
      </div>
    </section>
  );
}
