// components/TeamMember.js
import React from "react";

export default function TeamMember() {
  return (
    <div className="">
      <h1 className="text-base sm:text-4xl font-semibold flex justify-center">
        Meet the heroes behind the magic
      </h1>
      <section className="w-fit mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 justify-items-center justify-center gap-y-10 gap-x-14 mt-10 sm:mt-24 mb-3">
        {/* Card 1 */}
        <div className="w-41 sm:w-82 bg-white shadow-lg">
          <img
            src="/Avatar_Founder.png"
            className="sm:h-80 h-40 w-41 sm:w-82 object-cover p-4 "
          />
          <div className="px-4 py-3 w-41 sm:w-82">
            <p className="text-sm sm:text-xl font-semibold text-black ">
              Esther Howard
            </p>
            <span className="text-gray-400 mr-3 text-xs sm:text-base">
              Founder
            </span>
          </div>
        </div>
        {/* End Card 1 */}
        {/* Card 2 */}
        <div className="w-41 sm:w-82 bg-white shadow-lg ">
          <img
            src="/Avatar_Dev.png"
            className="sm:h-80 h-40 w-41 sm:w-82 object-cover p-4 "
          />
          <div className="px-4 py-3 w-41 sm:w-82">
            <p className="text-sm sm:text-xl font-semibold text-black ">
              Cody Fisher
            </p>
            <span className="text-gray-400 mr-3 text-xs sm:text-base">
              Developer
            </span>
          </div>
        </div>
        {/* End Card 2 */}
        {/* Card 3 */}
        <div className="w-41 sm:w-82 bg-white shadow-lg ">
          <img
            src="/Avatar_Designer.png"
            className="sm:h-80 h-40 w-41 sm:w-82 object-cover p-4"
          />
          <div className="px-4 py-3 w-41 sm:w-82">
            <p className="text-sm sm:text-xl font-semibold text-black ">
              Brooklyn Simmons
            </p>
            <span className="text-gray-400 mr-3 text-xs sm:text-base">
              Designer
            </span>
          </div>
        </div>
        {/* End Card 3 */}
      </section>
    </div>
  );
}
