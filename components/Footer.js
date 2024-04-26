// components/Footer.js
import React from "react";
import Contact from "./Contact";

export default function Footer() {
  return (
    <footer>
      <div className="bg-black text-white py-10 mt-2 sm:mt-5 px-4">
        <div className="container mx-auto grid sm:grid-cols-4 grid-cols-2 gap-4">
          {/* Column 1 */}
          <div className="py-3">
            <h1 className="text-2xl sm:text-5xl text-yellow-400 font-semibold pb-3">
              350 +
            </h1>
            <span className="text-lg sm:text-2xl ">Clients Worldwide</span>
          </div>

          {/* Column 2 */}
          <div className="py-3">
            <h1 className="text-2xl sm:text-5xl text-yellow-400 font-semibold pb-3">
              20 +
            </h1>
            <span className="text-lg sm:text-2xl ">Team Members</span>
          </div>

          {/* Column 3 */}
          <div className="py-3">
            <h1 className="text-2xl sm:text-5xl text-yellow-400 font-semibold pb-3">
              100 +
            </h1>
            <span className="text-lg sm:text-2xl ">Projects Completed</span>
          </div>

          {/* Column 4 */}
          <div className="py-3">
            <h1 className="text-2xl sm:text-5xl text-yellow-400 font-semibold pb-3">
              85M +
            </h1>
            <span className="text-lg sm:text-2xl ">Revenue Generated</span>
          </div>
        </div>
      </div>
      <Contact />
    </footer>
  );
}
