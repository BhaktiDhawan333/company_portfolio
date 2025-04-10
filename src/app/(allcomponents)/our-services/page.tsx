import React from "react";
import Image from "../../../../node_modules/next/image";
import { Footer } from "../../../defaultpage/footer/page";
import Navbar from "../navbar/page";
import {
  ArrowRight,
  Headphones,
  Users,
  Building2,
  CircuitBoard,
  MessageSquare,
} from "lucide-react";

export default function Ourservices() {
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
            <div className="flex flex-col justify-center items-center p-10 text-white ">
              <h1 className="text-xl md:text-5xl lg:text-5xl font-semibold absolute top-[30%] left-1/3 w-[30%] transform -translate-x-1/4">
                Shaping CX through AI and Human Synergy
                <span className="absolute top-[83%] left-[1%] block w-20 h-1 bg-blue-600 my-8"></span>
              </h1>
              <p className="text-sm md:text-md lg:text-sm absolute top-[45%] left-[32%] w-[24%] transform -translate-x-1/4">
                Let us take your business to the next level with more than 100
                years of cumulative industry experience, cutting-edge tech, and
                personalized CX.
              </p>
              <button className="bg-blue-500 p-2 rounded-xl absolute top-[52%] left-[26%]">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-2 px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10 max-w-screen-md">
          {/* Left Side Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Elevating Customer Connections
            </h1>
            <p className="text-base md:text-xs text-gray-400">
              At Technotask, we design agile, innovation-focused solutions
              customized to your requirements. Our skilled, technology-enhanced
              team members seamlessly integrate as authentic extensions of your
              in-house teams.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="flex-1">
            <Image
              src="/imgs/img3.png" // public folder me image place karna
              alt="Sample Image"
              width={240}
              height={240}
              className="w-full h-auto md:h-96 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-md text-blue-600 font-medium flex items-center justify-center">
            Delivering excellence with
          </span>
          <h1 className="text-5xl font-semibold text-center text-gray-900 mb-12">
            Our Services
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Headphones className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Contact Center Services
                </h3>
                <p className="text-gray-600 mb-6">
                  Enhance your customer satisfaction and streamline operations
                  with Technotask&apos;s expert contact center services.
                </p>
                <button className="flex items-center text-orange-500 hover:text-orange-600 font-medium">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Customer Lifecycle Management Advisory
                </h3>
                <p className="text-gray-600 mb-6">
                  Incorporate more than a century&apos;s worth of experience in
                  your business with our CLM Advisory.
                </p>
                <button className="flex items-center text-blue-500 hover:text-blue-600 font-medium">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Building2 className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  E-Governance
                </h3>
                <p className="text-gray-600 mb-6">
                  At Technotask, we proudly manage e-governance for multiple
                  states in India, streamlining administrative processes.
                </p>
                <button className="flex items-center text-green-500 hover:text-green-600 font-medium">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <CircuitBoard className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Gen AI-Products
                </h3>
                <p className="text-gray-600 mb-6">
                  Reduce your Cost-to-serve by up to 25% by deploying
                  Technotask&apos;s Gen-AI-powered solutions.
                </p>
                <button className="flex items-center text-purple-500 hover:text-purple-600 font-medium">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <MessageSquare className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Justtawk
                </h3>
                <p className="text-gray-600 mb-6">
                  To empower micro and small businesses we created a
                  subscription-based customized and affordable 24/7 multilingual
                  contact center support.
                </p>
                <button className="flex items-center text-red-500 hover:text-red-600 font-medium">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
