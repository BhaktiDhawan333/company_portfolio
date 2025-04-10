import React from "react";
import Image from "../../../../node_modules/next/image";
import { Footer } from "../footer/page";
import Navbar from "../navbar/page";

export default function Ourclients() {
  return (
    <div>
      <Navbar />
      {/* ....first div */}
      <div className="relative w-full">
        <div className="flex transition-transform duration-700 ease-in-out">
          <div className="w-full flex-shrink-0 relative">
            <Image
              src="/imgs/img66.png"
              className="w-full object-cover h-[50vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh]"
              alt=""
              width={2000}
              height={1000}
            />
            <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-start p-10 text-white">
              <h1 className="text-xl md:text-5xl lg:text-5xl font-semibold absolute top-1/3 left-[29%] transform -translate-x-1/4 pb-4">
                Our Clients
              </h1>
              <span className="absolute top-[48%] left-[26%] block w-19 h-1 bg-blue-600"></span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
