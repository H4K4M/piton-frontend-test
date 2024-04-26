//// components/Contents.js
import React from "react";
import TeamMember from "./TeamMember";

export default function Contents() {
  return (
    <div className="container mx-auto py-10 sm:py-32 px-4">
      <h1 className="text-base sm:text-4xl font-semibold">Who we are</h1>
      <p className="text-xs sm:text-lg mt-4">
        We love what we do and create partnerships with our clients to ensure
        their digital transformation is positioned for long-term success.We
        believe that the human dimensions essential to start any successful
        project and that this is where splendid emotional relationships between
        the company and people are born.
      </p>
      <img src="/Image_1.png" className="w-full py-10 sm:py-20"></img>
      <TeamMember />
    </div>
  );
}
