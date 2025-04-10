import React from "react";
import Image from "../../../../node_modules/next/image";
import { Footer } from "../footer/page";
import Navbar from "../navbar/page";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";

export default function Justtawk() {
  return (
    <div>
      <Navbar />
      <div className="relative w-full">
        <div className="flex transition-transform duration-700 ease-in-out">
          <div className="w-full flex-shrink-0 relative">
            <Image
              src="/imgs/img66.png"
              className="w-full object-cover h-[80vh] sm:h-[40vh] md:h-[45vh] lg:h-[90vh]"
              alt=""
              width={2000}
              height={1000}
            />
            <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-start p-10 text-white ">
              <h1 className="text-xl md:text-5xl lg:text-4xl font-semibold absolute top-[30%] left-1/3 transform -translate-x-1/4">
                Your 24/7 Call Center Solutions
                <span className="absolute top-2/2 left-[1%] block w-20 h-1 bg-blue-600 mt-4"></span>
              </h1>
              <p className="text-sm md:text-md lg:text-sm absolute top-[42%] left-[35%] transform -translate-x-1/4">
                Empowering Micro and Small-Scale Industries with
                Subscription-Based Contact Center Solutions.
              </p>
              <button className="bg-blue-500 p-2 rounded-xl absolute top-[48%] left-[25%]">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-20 px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10 max-w-screen-md">
          {/* Left Side Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Set up in 5 min - Never Miss a call again!
            </h1>
            <p className="text-base md:text-xs text-gray-600">
              Empower your business with seamless customer communication through
              Justtawk's comprehensive contact center solutions. Whether you're
              a small startup or a thriving enterprise, Justtawk ensures your
              customers are always heard, offering cost-effective plans starting
              at just ₹8999 per month.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="flex-1">
            <img
              src="/imgs/img3.png" // public folder me image place karna
              alt="Sample Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-20 px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full max-w-screen-md">
          {/* Left Side Content */}
          <div className="flex-1">
            <img
              src="/imgs/img66.png" // public folder me image place karna
              alt="Sample Image"
              className="w-full h-[300px] rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side Image */}

          <div className="relative left-[6%]">
            <div className="max-w-md w-full text-center space-y-8">
              {/* Heading */}
              <h1 className="text-4xl font-semibold text-left">
                Services Overview
              </h1>
              <ul className="space-y-3">
                {[
                  "Portable Contact Center: Set up in 5 minutes, recharge monthly.",
                  "Free Dialer: No connectivity charges, includes free CRM and report generation",
                  "Call Monitoring: Supervised calls ensuring quality service.",
                  "24*7 Real Agent: Personalized customer support round the clock.",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    {/* Colored Circle with Check Icon */}
                    <div
                      className={`flex items-center justify-center w-3 h-3 rounded-full 
                  ${index % 2 === 0 ? "bg-blue-500" : "bg-pink-400"}`}
                    >
                      <Check className="text-white w-2 h-2" />
                    </div>

                    {/* Text */}
                    <span className="text-xs">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-20 px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-stretch max-w-6xl w-full gap-10 max-w-screen-md">
          {/* Left Side Content */}
          <div className="flex-1 h-full flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">
              Why Choose Technotask for E-Governance?
            </h1>
            <Accordion type="single" collapsible>
              {/* Accordion Items */}
              <AccordionItem value="item-1">
                <AccordionTrigger className="bg-blue-50 px-2">
                  Elevated Customer Satisfaction
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 px-2">
                  Enhance customer satisfaction with our superior service.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="bg-blue-50 px-2">
                  Exceptional Customer Experience
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 px-2">
                  Deliver outstanding experiences at every touchpoint.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="bg-blue-50 px-2">
                  Smooth and Timely Ramp-up
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 px-2">
                  Scale operations seamlessly and efficiently.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="bg-blue-50 px-2">
                  Cost Efficiency
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 px-2">
                  Optimise your budget with our cost-effective solutions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Right Side Image */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-[400px]">
              <Image
                src="/imgs/img6.png"
                alt="Sample Image"
                layout="responsive"
                width={400}
                height={900}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-20 px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-2 max-w-screen-md">
          {/* Left Side Content */}
          <div className="flex-1">
            <img
              src="/imgs/img55.png" // public folder me image place karna
              alt="Sample Image"
              className="w-full h-[300px] rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side Image */}

          <div className="relative left-[6%]">
            <div className="max-w-md w-full text-center space-y-8">
              {/* Heading */}
              <h1 className="text-4xl font-semibold text-left">
                Why Choose Justtawk?
              </h1>
              <ul className="space-y-3">
                {[
                  "Seamless communication channels.",
                  "Premium subscription plans for personalized service.",
                  "Global connectivity options for expanded reach.",
                  "Empowering your business with reliable 24/7 support.",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    {/* Colored Circle with Check Icon */}
                    <div
                      className={`flex items-center justify-center w-3 h-3 rounded-full 
                  ${index % 2 === 0 ? "bg-blue-500" : "bg-pink-400"}`}
                    >
                      <Check className="text-white w-2 h-2" />
                    </div>

                    {/* Text */}
                    <span className="text-xs">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-10 px-6">
        <div
          className="w-full max-w-6xl rounded-3xl bg-cover bg-center p-10 flex flex-col justify-center max-w-screen-md"
          style={{
            backgroundImage: "url('/imgs/img66.png')",
            minHeight: "300px",
          }}
        >
          <h2 className="text-4xl md:text-3xl font-bold text-white mb-4">
            Get Started Today
          </h2>
          <p className="text-white text-base md:text-xs mb-6 max-w-lg">
            Transform your customer interactions with Justtawk's agile contact
            center solutions. Enhance customer satisfaction and streamline
            operations effortlessly.
          </p>
          <button className="bg-white text-indigo-600 text-xs py-3 px-6 rounded-xl w-fit hover:bg-gray-100 transition">
            Set Up Your Contact Center
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
