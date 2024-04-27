// components/Contaact.js
import React from "react";

export default function Contact() {
  return (
    <div className="container mx-auto py-10 sm:py-40 px-4">
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
        {/* Col Left */}
        <div className="flex sm:justify-start justify-center ">
          <img src="/Contact_Side_Img.png" width={500}></img>
        </div>
        {/* ------ */}
        {/* Col Right */}
        <div className="flex flex-col justify-between">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            <div></div>
            <div>
              <h1 className="text-base sm:text-4xl font-semibold sm:text-right">
                We'd love to hear from you
              </h1>
            </div>
          </div>
          {/* -------------- Form ----------- */}
          <form className="mt-10 flex flex-col justify-between h-full">
            <input
              type="text"
              placeholder="Name*"
              className="w-full py-4 px-4 border-2 border-black mb-4"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full py-4 px-4 border-2 border-black mb-4"
            />
            <input
              type="url"
              placeholder="Website URL*"
              className="w-full py-4 px-4 border-2 border-black mb-4"
            />
            <textarea
              placeholder="Project Details*"
              className="w-full py-7 px-4 border-2 border-black mb-4"
            ></textarea>
            <button className="bg-black text-white text-base sm:text-2xl py-2 sm:py-6 w-full ">
              Send Proposal
            </button>
          </form>
          {/* ---------------------------- */}
        </div>
        {/* End Col Right */}
      </div>
    </div>
  );
}
