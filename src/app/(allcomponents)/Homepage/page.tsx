"use client";
import React, { useState } from "react";
import { Footer } from "../../../defaultpage/footer/page";
import Image from "../../../../node_modules/next/image";
import slide1 from "../../../../public/imgs/img6.png";
import slide2 from "../../../../public/imgs/img2.png";
import slide3 from "../../../../public/imgs/img3.png";
import {
  ArrowRight,
  Headphones,
  Users,
  Building2,
  CircuitBoard,
  MessageSquare,
} from "lucide-react";
import Navbar from "../navbar/page";

const images = [
  "/imgs/iso1.png",
  "/imgs/iso2.png",
  "/imgs/iso4.png",
  "/imgs/iso7.png",
  "/imgs/iso5.png",
  "/imgs/iso6.png",
  "/imgs/iso7.png",
  "/imgs/iso1.png",
];

const slides = [
  {
    image: slide2, // Replace with your image URL
    title: "Pioneering Excellence Across Every Industry",
    description:
      "Technotask offers cutting-edge solutions for more than 14 industries including E-governance, E-commerce, Fintech, and SaaS. ",
  },
  {
    image: slide1, // Replace with your image URL
    title: "Gen-AI Powered Human-Driven Customer Experience",
    description:
      "Seamless integration of human expertise with Gen-AI capabilities to boost efficiency, and productivity for enhanced customer experience. ",
  },
  {
    image: slide3, // Replace with your image URL
    title: "Carefully curated for the Digital Start-up Ecosystem ",
    description:
      "Harness a Century's worth of cumulative expertise powered-Customer Lifecycle Management Advisory.",
  },
];

export default function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY === 0) {
  //       setShowNavbar(true);
  //     } else {
  //       setShowNavbar(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <Navbar />
      <div className="relative w-full h-screen overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 relative h-screen">
              <Image
                src={slide.image}
                className="w-full h-screen object-cover"
                alt={slide.title}
              />
              <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-start p-10 text-white">
                <h1 className="text-xl md:text-5xl lg:text-xl font-bold">
                  {slide.title}
                </h1>
                <p className="text-md md:text-lg lg:text-md my-4">
                  {slide.description}
                </p>
                <a
                  href="/our-services"
                  className="bg-blue-500 px-6 py-3 rounded-full text-lg font-bold hover:bg-yellow-600"
                >
                  Explore
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full"
        onClick={nextSlide}
      >
        ❯
      </button>

      <div className="flex justify-center py-8">
        <div className="flex justify-center w-full max-w-screen-lg">
          {/* Section 1 */}
          <div className="flex flex-col items-center justify-center border-r border-gray-300 px-4 py-8 h-48 w-full sm:w-1/5">
            <div className="text-3xl font-bold">3+</div>
            <p className="text-center text-sm mt-2">
              Present in 3+ continents around the globe
            </p>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col items-center justify-center border-r border-gray-300 px-4 py-8 h-48 w-full sm:w-1/5">
            <div className="text-3xl font-bold">5,462+</div>
            <p className="text-center text-sm mt-2">Our incredible Workforce</p>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col items-center justify-center border-r border-gray-300 px-4 py-8 h-48 w-full sm:w-1/5">
            <div className="text-3xl font-bold">16+</div>
            <p className="text-center text-sm mt-2">Languages</p>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col items-center justify-center border-r border-gray-300 px-4 py-8 h-48 w-full sm:w-1/5">
            <div className="text-3xl font-bold">40+</div>
            <p className="text-center text-sm mt-2">Client Served</p>
          </div>

          {/* Section 5 */}
          <div className="flex flex-col items-center justify-center px-4 py-8 h-48 w-full sm:w-1/5">
            <div className="text-3xl font-bold">13+</div>
            <p className="text-center text-sm mt-2">Industries Served</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-8">
        {/* Main Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          {/* Left - Heading */}
          <div className="w-full sm:w-1/3 text-center sm:text-left">
            <h2 className="text-5xl font-bold">Our People Drive Success</h2>
          </div>
          <div className="w-1/4 text-center sm:text-left">
            <p className="text-sm text-gray-600 text-justify">
              At Technotask, our people-centric culture inspires continuous
              learning, growth, and authenticity. We offer exceptional growth
              opportunities, resulting in engaged teams, outstanding client
              service, and a relentless focus on innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Office Image */}
      <div className="flex justify-center py-8 px-2">
        <Image
          src="/imgs/ofc.png"
          alt="Download on App Store"
          className="hover:opacity-90 border-1 border-white-200 rounded p-1"
          width={920} // Adjust the width to your preference
          height={150} // Adjust the height to your preference
        />
      </div>

      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
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

      <div className="container mx-auto px-4 py-8">
        {/* First Row */}
        <div className="flex flex-col sm:flex-row">
          {/* First Box */}
          <div className="w-full sm:w-1/2 p-4 border-2 border-gray-100">
            <div className="w-full sm:w-1/2 p-4 rounded-lg ml-auto">
              <div className="max-w-sm mx-auto bg-white p-6">
                {/* Icon */}
                <div className="flex items-start mb-4">
                  <Headphones className="h-8 w-8 text-orange-500 mr-3" />
                </div>

                {/* Heading */}
                <h3 className="text-sm font-semibold text-gray-800 mb-4 text-left">
                  Enhanced CX for every stage of Customer Lifecycle
                </h3>

                {/* Paragraph */}
                <p className="text-xs text-gray-600 mb-4 ml-auto text-left">
                  At Technotask, our CX services and expertise leverage
                  operational insights to address the challenges of contact
                  centers and exceed customer expectations.
                </p>

                {/* Button */}
                <div className="text-left">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Explore CX Services {">"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Second Box */}
          <div className="w-full sm:w-1/2 p-4 border-2 border-gray-100">
            <div className="w-full sm:w-1/2 p-4 rounded-lg">
              <div className="max-w-sm mx-auto bg-white p-6">
                {/* Icon */}
                <div className="flex items-start mb-4">
                  <Headphones className="h-8 w-8 text-orange-500 mr-3" />
                </div>

                {/* Heading */}
                <h3 className="text-sm font-semibold text-gray-800 mb-4 text-left">
                  Revolutionising global CX through Gen- AI-powered solutions.
                </h3>

                {/* Paragraph */}
                <p className="text-xs text-gray-600 mb-4 ml-auto text-left">
                  A blend of Gen-AI with human expertise allows us to provide
                  unmatched services at a scale. We offer efficiency packed with
                  agility and commitment.
                </p>

                {/* Button */}
                <div className="text-left">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Our Gen-AI Solutions {">"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col sm:flex-row">
          {/* First Box */}
          <div className="w-full sm:w-1/2 p-4 border-2 border-gray-100">
            <div className="w-full sm:w-1/2 p-4 rounded-lg ml-auto">
              <div className="max-w-sm mx-auto bg-white p-6">
                {/* Icon */}
                <div className="flex items-start mb-4">
                  <Headphones className="h-8 w-8 text-orange-500 mr-3" />
                </div>

                {/* Heading */}
                <h3 className="text-sm font-semibold text-gray-800 mb-4 text-left">
                  People-Centric Approach
                </h3>

                {/* Paragraph */}
                <p className="text-xs text-gray-600 mb-4 ml-auto text-left">
                  We embrace a vibrant mix of cultures, backgrounds, and
                  geographies, fostering an open-door policy for direct
                  communication with upper management. Our workforce, with 50%
                  women, exemplifies our dedication towards women&apos;s
                  empowerment. This diversity enriches our culture and fuels
                  innovation.
                </p>

                {/* Button */}
                <div className="text-left">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Learn more {">"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Second Box */}
          <div className="w-full sm:w-1/2 p-4 border-2 border-gray-100">
            <div className="w-full sm:w-1/2 p-4 rounded-lg">
              <div className="max-w-sm mx-auto bg-white p-6">
                {/* Icon */}
                <div className="flex items-start mb-4">
                  <Headphones className="h-8 w-8 text-orange-500 mr-3" />
                </div>

                {/* Heading */}
                <h3 className="text-sm font-semibold text-gray-800 mb-4 text-left">
                  Transformed over 40 businesses with advanced CX strategies.
                </h3>

                {/* Paragraph */}
                <p className="text-xs text-gray-600 mb-4 ml-auto text-left">
                  Since our inception in March 2020, we have served global
                  brands in 48 Lines of business in more than 13 industries and
                  boosted their transition to becoming unicorns & soonicorns.
                </p>

                {/* Button */}
                <div className="text-left">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Our Success Stories {">"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/imgs/arrowimg.png"
          alt="Download on App Store"
          className="hover:opacity-90 border-1 border-white-200 rounded p-1 w-full"
          width={920} // Optional: remove this to make it responsive
          height={150} // Optional: Adjust the height to your preference
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        {/* Heading */}
        <div className="text-center mb-12 mt-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Tailored Solutions for your unique <br />
            Business needs
          </h2>
        </div>

        {/* Buttons Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-full">
          <button className="px-6 py-2 bg-white rounded-full border-1 border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors">
            E-commerce
          </button>
          <button className="px-6 py-2 bg-white rounded-full border-1 border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors">
            Fin-tech
          </button>
          <button className="px-6 py-2 bg-white rounded-full border-1 border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors">
            SaaS
          </button>
          <button className="px-6 py-2 bg-white rounded-full border-1 border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors">
            FMCG
          </button>
          <button className="px-6 py-2 bg-white rounded-full border-1 border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors">
            Retail
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-full my-4">
          <button className="px-6 py-2 bg-white rounded-full border-1 border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors">
            Healthcare
          </button>
          <button className="px-6 py-2 bg-white rounded-full border-1 border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors">
            Food-tech
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-full my-4">
          <button className="px-6 py-2 text-white rounded-sm border-1 border-gray-400 text-gray-700 hover:bg-gray-100 hover:text-black bg-blue-700">
            Find Out More
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            We’re committed to <br />
            Excellence
          </h2>
          <p className="text-xs md:text-xs text-gray-500 mt-2">
            With industry-leading certifications and top-tier tech partners on
            board, we are <br /> dedicated to delivering excellence to drive
            growth and enhance CX for your business.
          </p>
        </div>
      </div>

      <div className="flex justify-center pb-8 ">
        <div className="flex justify-center w-full max-w-screen-lg">
          <div className="overflow-hidden whitespace-nowrap my-10">
            <div className="inline-flex animate-scroll">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="w-50 h-50 relative mx-2 flex-shrink-0 flex flex-col items-center"
                >
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    fill
                    className="object-cover rounded-xl"
                  />
                  <p className="mt-2 text-center text-xs font-semibold">
                    Name {index + 1}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
          Testimonials
        </h2>
      </div>
      <div className="flex justify-center pb-8">
        <div className="flex justify-center w-full max-w-screen-lg">
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

      <Footer />
    </div>
  );
}
