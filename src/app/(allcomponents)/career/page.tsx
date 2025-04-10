import React from "react";
import Image from "../../../../node_modules/next/image";
import { Footer } from "../footer/page";
import Navbar from "../navbar/page";

const cities = [
  { name: "Andhra Pradesh", contact: "+91 9303850961" },
  { name: "Chhattisgarh", contact: "+91 9329931443" },
  { name: "Karnataka", contact: "+91 9329143880" },
  { name: "Madhya Pradesh", contact: "+91 7987999465" },
  { name: "Maharashtra", contact: "+91 8655297071" },
  { name: "Dubai", contact: "+971 50 254 2260" },
  { name: "Egypt", contact: "+971 50 254 2260" },
  { name: "Others", contact: "+91 7723018482" },
];

export default function Blogs() {
  return (
    <div>
      <Navbar />
      <div className="relative w-full">
        <div className="flex transition-transform duration-700 ease-in-out">
          <div className="w-full flex-shrink-0 relative">
            <Image
              src="/imgs/ofc.png"
              className="w-full object-cover h-[50vh] sm:h-[40vh] md:h-[45vh] lg:h-[60vh]"
              alt=""
              width={2000}
              height={1000}
            />
            <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-start p-10 text-white ">
              <h1 className="text-xl md:text-5xl lg:text-5xl font-semibold absolute top-1/3 left-1/4 transform -translate-x-1/4">
                Career
              </h1>
              <p className="absolute top-1/2 left-1/3 transform -translate-x-1/4 pb-4 text-center">
                “ We are always searching for new talent, Bringing the best
                opportunities to grow in life”
                <span className="absolute top-1/2 left-1/2s block w-20 h-1 bg-blue-600 mt-4"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden">
        {/* Background circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
        <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 right-20 w-20 h-20 bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="relative bg-white rounded-3xl shadow-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-2">Get in touch.</h2>
          <p className="text-center text-gray-500 mb-6">
            Enter your detail below
          </p>

          <form className="space-y-4">
            {/* Name and Phone */}
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Your name"
                className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            {/* Upload Resume */}
            <div className="w-full">
              <label className="block text-gray-600 mb-1 text-sm">
                Upload Resume here
              </label>
              <input
                type="file"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Cover Letter */}
            <textarea
              placeholder="Cover Letter"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Send Now
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center py-15 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl w-full max-w-screen-md">
          {cities.map((city, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg max-w-screen-md"
            >
              <div className="bg-indigo-500 text-white text-center py-4 font-semibold text-md text-bold">
                {city.name}
              </div>
              <div className="bg-white text-center py-6 text-gray-800 text-base text-xs text-semibold">
                Contact : {city.contact}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
