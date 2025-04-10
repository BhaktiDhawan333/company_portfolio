"use client";
import React from "react";
import Image from "../../../../node_modules/next/image";
import { Footer } from "../../../defaultpage/footer/page";
import Navbar from "../navbar/page";

const places = [
  { src: "/imgs/place1.png", name: "Bhopal, India" },
  { src: "/imgs/place2.png", name: "Kochi, India" },
  { src: "/imgs/place3.png", name: "Mysuru, India" },
  { src: "/imgs/place4.png", name: "Raipur, India" },
  { src: "/imgs/place5.png", name: "Rajnandgaon, India" },
  { src: "/imgs/place6.png", name: "Vijayawada, India" },
  { src: "/imgs/place7.png", name: "Elhuli, India" },
  { src: "/imgs/place8.png", name: "Thane, India" },
  { src: "/imgs/place9.png", name: "Cairo, Egypt" },
  { src: "/imgs/place10.png", name: "UAE" },
];

export default function Ourpresence() {
  return (
    <div>
      <Navbar />
      <div className="relative w-full">
        <div className="flex transition-transform duration-700 ease-in-out">
          <div className="w-full flex-shrink-0 relative">
            <Image
              src="/imgs/img66.png"
              className="w-full object-cover h-[50vh] sm:h-[40vh] md:h-[45vh] lg:h-[90vh]"
              alt=""
              width={2000}
              height={1000}
            />
            <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-start text-white ">
              <span className="text-sm text-blue-600 text-vold absolute top-[34%] left-[19%]">
                Why Us
              </span>
              <h1 className="text-xl md:text-5xl lg:text-5xl w-[25%] font-semibold absolute top-[37%] left-1/4 transform -translate-x-1/4">
                Transforming CX one interaction at a time
              </h1>
              <span className="absolute top-[51%] left-[19%] block w-20 h-1 bg-blue-600 mt-0"></span>
              <p className="text-xs md:text-xs lg:text-sm  w-[25%] absolute top-[53%] left-[25%] transform -translate-x-1/4">
                We’re a next-gen contact center committed to delivering
                personalized CX to our global clients with our diverse
                workforce, and tech innovations at scale.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-gray-100 py-12">
        <div className="text-center mb-10">
          <p className="text-blue-600 text-sm font-medium">World Map</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Seamless Solutions across <br />
            Continents
          </h2>
        </div>

        <div className="flex justify-center px-4">
          <Image
            src="/imgs/map.png"
            alt="World Map with Locations"
            width={1000}
            height={1000}
            className="max-w-full h-auto rounded-md shadow-md"
          />
        </div>
      </section>
      <main className="min-h-screen bg-gray-100 flex items-center justify-center mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {places.map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-60 w-60 mx-auto">
                <Image
                  src={place.src}
                  alt={place.name}
                  width={240} // tumhara container size ke hisab se
                  height={240} // square bana diya maine
                  className="object-cover w-full h-full" // yeh add kiya
                />
              </div>
              <div className="text-center py-2">
                <p className="text-sm font-medium flex items-center justify-center">
                  {place.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
