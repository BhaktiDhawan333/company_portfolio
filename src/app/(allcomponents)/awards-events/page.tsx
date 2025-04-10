import React from "react";
import Image from "../../../../node_modules/next/image";
import { Footer } from "../../../defaultpage/footer/page";
import Navbar from "../navbar/page";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/imgs/place1.png",
  "/imgs/place2.png",
  "/imgs/place3.png",
  "/imgs/place4.png",
];

export default function Aiproducts() {
  return (
    <div>
      <Navbar />
      {/* ....first div */}
      <div className="relative w-full">
        <div className="flex transition-transform duration-700 ease-in-out">
          <div className="w-full flex-shrink-0 relative">
            <Image
              src="/imgs/img11.png"
              className="w-full h-[50vh] sm:h-[40vh] md:h-[45vh] lg:h-[80vh]"
              alt=""
              width={2000}
              height={1000}
            />
            <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-start p-10 text-white ">
              <h1 className="text-xl md:text-5xl lg:text-4xl w-[20%] font-semibold absolute top-[38%] left-[40%] transform -translate-x-1/4">
                Explore our recent events
              </h1>
              <span className="absolute top-[53%] left-[35%] block w-20 h-1 bg-blue-600"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative left-[30%] mt-5 w-full max-w-screen-md">
        <h2 className="text-2xl md:text-3xl text-left flex items-center justify-center font-semibold text-gray-800 mb-5">
          Testimonial
        </h2>
      </div>
      <div className="flex justify-center pb-8">
        <div className="flex justify-center w-full max-w-screen-md">
          {/* Heading */}

          {/* Cards Container */}
          <div className="flex gap-2">
            {/* First Card */}
            <div className="w-full sm:w-1/3 p-3">
              <p className="text-sm text-gray-600 mb-4">
                “First of all, congratulations and thanks to you for all your
                hard work. You are turning the team 360 now. Keep it, this is
                the beginning only. Onwards and Upwards. I would like to meet
                the team on MS teams Dear Adil and Rajib, Let us continue to
                focus on deepening the relationship. Your support to Neha and
                the team is really appreciated.”
              </p>
              <div className="text-green-600 font-semibold">
                Subsidiary of a Global MNC bank, UAE (Fintech)
              </div>
              <div className="text-xs text-gray-500">Co-Founder & CEO</div>
            </div>

            {/* Second Card */}
            <div className="w-full sm:w-1/3 p-3">
              <p className="text-sm text-gray-600 mb-4">
                “Your support and efforts have certainly contributed to our
                success so far. We still have a long way to go but with your
                constant endeavors 85% of TNPS & BPO scores do not look like a
                distant dream”
              </p>
              <div className="text-green-600 font-semibold">JOE</div>
              <div className="text-xs text-gray-500">E-Commerce Giant</div>
            </div>

            {/* Third Card */}
            <div className="w-full sm:w-1/3 p-3">
              <p className="text-sm text-gray-600 mb-4">
                “The significant rise in productivity from the operations team
                has been massive which has helped us achieve our targeted
                answering numbers during the BIG BOLD sale period and ensure the
                quality of calls are not compromised, we have been able to move
                from 30% to 78% now and marching towards 85%”
              </p>
              <div className="text-green-600 font-semibold">Varsha</div>
              <div className="text-xs text-gray-500">E-commerce Giant</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-10">
        <Carousel className="w-full max-w-screen-sm">
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  {/* <Card> */}
                  <CardContent className="flex aspect-square items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={src}
                        alt={`Image ${index + 1}`}
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                  </CardContent>
                  {/* </Card> */}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="flex justify-center my-10 px-8">
        <div className="grid grid-cols-4 gap-4 max-w-screen-xl w-full">
          {images.map((src, index) => (
            <div key={index} className="relative w-full h-48">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
