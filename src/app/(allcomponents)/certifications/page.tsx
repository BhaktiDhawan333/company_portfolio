import React from "react";
import Image from "../../../../node_modules/next/image";
import { Footer } from "../../../defaultpage/footer/page";
import Navbar from "../navbar/page";

const images = [
  { image: "/imgs/iso1.png", title: "Nasscom" },
  { image: "/imgs/iso2.png", title: "GeM Gocernment" },
  { image: "/imgs/iso1.png", title: "GeM Gocernment" },
  { image: "/imgs/iso2.png", title: "Nasscom" },
  { image: "/imgs/iso5.png", title: "GeM Gocernment" },
  { image: "/imgs/iso6.png", title: "12344" },
  { image: "/imgs/iso7.png", title: "Nasscom" },
  { image: "/imgs/iso1.png", title: "12344" },
];

export default function Certifications() {
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
              <h1 className="text-xl md:text-5xl lg:text-5xl font-semibold absolute top-1/3 left-[29%] transform -translate-x-1/4 pb-4">
                Certifications
              </h1>
              <span className="absolute top-[48%] left-[25%] block w-19 h-1 bg-blue-600"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-10 px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-screen-md w-full">
          {images.map((data, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full h-40">
                <Image
                  src={data.image}
                  alt={`Image ${index + 1}`}
                  fill
                  className="object-cover rounded-xl p-2"
                />
              </div>
              <p className="mt-4 text-center text-md font-medium">
                {data.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
