import React from "react";
import Image from "../../../../node_modules/next/image";
import { Footer } from "../../../defaultpage/footer/page";
import Navbar from "../navbar/page";

export default function Industries() {
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
              <h1 className="text-xl md:text-5xl lg:text-3xl font-semibold absolute top-1/2 left-1/3 transform -translate-x-1/4">
                Driving Excellence Across <br /> Diverse Sectors
                <span className="absolute top-2/2 left-[1%] block w-20 h-1 bg-blue-600 mt-4"></span>
              </h1>
              <button className="border-2 border-blue-600 rounded-lg bg-blue-600 text-white text-xs p-2 absolute top-[64%] left-[29%]">
                Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Engage, Enhance, Thrive with <br /> Technotask
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl w-[60%]">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <div className="mb-4 mr-auto">
              <Image src="" alt="Logistics" width={50} height={50} />
            </div>
            <h2 className="text-xl font-bold mb-2 mr-auto">Logistics</h2>
            <p className="text-gray-600 mb-4 mr-auto text-justify">
              We offer robust solutions to optimize your supply chain, manage
              customer inquiries, and improve operational efficiency.
            </p>
            <ul className="text-left list-disc list-inside text-gray-700 space-y-1 mr-auto">
              <li>Supply Chain</li>
              <li>Delivery Management</li>
              <li>IT Support</li>
              <li>Real-Time Tracking</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <div className="mb-4 mr-auto">
              <Image src="" alt="Fintech" width={50} height={50} />
            </div>
            <h2 className="text-xl font-bold mb-2 mr-auto">Fintech</h2>
            <p className="text-gray-600 mb-4 mr-auto text-justify">
              Seamless financial operations, enhanced security, and outstanding
              customer service for the competitive industry.
            </p>
            <ul className="text-left list-disc list-inside text-gray-700 space-y-1 mr-auto">
              <li>KYC</li>
              <li>Customer Acquisition</li>
              <li>Premium to Premium</li>
              <li>Relationship Management</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <div className="mb-4 mr-auto">
              <Image src="" alt="SaaS" width={50} height={50} />
            </div>
            <h2 className="text-xl font-bold mb-2 mr-auto">SaaS</h2>
            <p className="text-gray-600 mb-4 mr-auto text-justify">
              Comprehensive support to enhance customer experience and drive
              growth for your SaaS offerings.
            </p>
            <ul className="text-left list-disc list-inside text-gray-700 space-y-1 mr-auto">
              <li>User Onboarding</li>
              <li>Customer Experience</li>
              <li>Subscription Management</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <div className="mb-4 mr-auto">
              <Image src="" alt="Health Care" width={50} height={50} />
            </div>
            <h2 className="text-xl font-bold mb-2 mr-auto">Health Care</h2>
            <p className="text-gray-600 mb-4 mr-auto text-justify">
              Enhance patient engagement, streamline administrative processes,
              and ensure compliance with healthcare regulations.
            </p>
            <ul className="text-left list-disc list-inside text-gray-700 space-y-1 mr-auto">
              <li>Customized system</li>
              <li>Intelligent RPA</li>
              <li>Patient Solutions</li>
            </ul>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <div className="mb-4 mr-auto">
              <Image src="" alt="Edtech" width={50} height={50} />
            </div>
            <h2 className="text-xl font-bold mb-2 mr-auto">Edtech</h2>
            <p className="text-gray-600 mb-4 mr-auto text-justify">
              Support educational institutions with technology solutions that
              enhance learning and improve student feedback.
            </p>
            <ul className="text-left list-disc list-inside text-gray-700 space-y-1 mr-auto">
              <li>Lead Generation</li>
              <li>Student Support</li>
              <li>Data Management</li>
            </ul>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <div className="mb-4 mr-auto">
              <Image src="" alt="Retail" width={50} height={50} />
            </div>
            <h2 className="text-xl font-bold mb-2 mr-auto">Retail</h2>
            <p className="text-gray-600 mb-4 mr-auto text-justify">
              Manage customer interactions, optimize inventory, and deliver a
              great shopping experience with our solutions.
            </p>
            <ul className="text-left list-disc list-inside text-gray-700 space-y-1 mr-auto">
              <li>Inventory Optimization</li>
              <li>Customer Insights</li>
              <li>Retail Solutions</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
