// components/Contaact.js
import React from "react";

export default function Contact() {
  return (
    <div className="container mx-auto py-10 sm:py-40 px-4">
      <div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
        <div class="flex flex-col justify-center sm:justify-start">
          <img
            src="/Contact_Side_Img.png"
            class="h-auto sm:h-full w-full sm:w-auto"
          ></img>
        </div>
        <div class="flex flex-col justify-between">
          <div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
            <div></div>
            <div>
              <h1 class="text-base sm:text-4xl font-semibold text-right">
                We'd love to hear from you
              </h1>
            </div>
          </div>

          <form class="mt-10 flex flex-col justify-between h-full">
            <input
              type="text"
              placeholder="Name*"
              class="w-full py-4 px-4 border-2 border-black mb-4"
            />
            <input
              type="email"
              placeholder="Email*"
              class="w-full py-4 px-4 border-2 border-black mb-4"
            />
            <input
              type="url"
              placeholder="Website URL*"
              class="w-full py-4 px-4 border-2 border-black mb-4"
            />
            <textarea
              placeholder="Project Details*"
              class="w-full py-4 px-4 border-2 border-black mb-4"
            ></textarea>
            <button class="bg-black text-white text-lg sm:text-2xl py-6 w-full ">
              Send Proposal
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
