import React from "react";
import Image from "../../../../node_modules/next/image";
import { Footer } from "../footer/page";
import Navbar from "../navbar/page";

const blogs = [
  {
    img: "/imgs/iso1.png",
    title: "Empowering Growth: The Inspiring Journey of mPokket and Technotask",
  },
  {
    img: "/imgs/iso2.png",
    title: "Why Outsource Your Customer Experience?",
  },
  {
    img: "/imgs/iso5.png",
    title:
      "Why E-Commerce Players Should Outsource Customer Acquisition and Customer Experience Support to an Omni-Channel BPO",
  },
  {
    img: "/imgs/iso6.png",
    title:
      "How AI/ML powered Automation Tools Elevate the Omni-Channel Experience",
  },
  {
    img: "/imgs/iso5.png",
    title:
      "Enhancing Customer Experience in the Digital Era: Key Strategies for Seamless Interactions",
  },
];

export default function Blogs() {
  return (
    <div>
      <Navbar />
      {/* ....first div */}
      <div className="relative w-full">
        <div className="flex transition-transform duration-700 ease-in-out">
          <div className="w-full flex-shrink-0 relative">
            <Image
              src="/imgs/ofc.png"
              className="w-full object-cover h-[50vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh]"
              alt=""
              width={2000}
              height={1000}
            />
            <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-start p-10 text-white">
              <h1 className="text-xl md:text-5xl lg:text-5xl font-semibold absolute top-1/3 left-1/4 transform -translate-x-1/4 border-b-6 border-blue-600 pb-4">
                Blogs
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* ...second div */}
      <div className="min-h-screen flex flex-col items-center px-8 sm:px-12 lg:px-20 pt-10 mt-0">
        <div className="text-center mb-12">
          <p className="text-sm text-purple-600 font-semibold">
            Read what’s New
          </p>
          <h1 className="text-4xl font-bold mt-2">Our Blogs</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-1/2 max-w-screen-xl">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white overflow-hidden">
              <div className="w-full h-30 relative">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-white bg-purple-600 inline-block px-3 py-2 rounded-md">
                  {blog.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
