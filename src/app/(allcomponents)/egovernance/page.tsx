import React from "react";
import Image from "../../../../node_modules/next/image";
import { Footer } from "../../../defaultpage/footer/page";
import Navbar from "../navbar/page";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Egovernance() {
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
              <h1 className="text-xl md:text-5xl lg:text-3xl font-semibold absolute top-[30%] left-1/3 transform -translate-x-1/4">
                Transform E- <br /> Governance with <br /> Technotask
                <span className="absolute top-2/2 left-[1%] block w-20 h-1 bg-blue-600 mt-4"></span>
              </h1>
              <p className="text-sm md:text-sm lg:text-xs absolute top-[48%] left-[35%] transform -translate-x-1/4">
                Assisting Goverment to establish a better citizen satisfaction
                ratio by <br /> bridging the gap of communication.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-15 px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10 max-w-screen-lg">
          {/* Left Side Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-semibold mb-4">
              Discover efficiency, <br />
              transparency, and <br />
              citizen-centricity.
            </h1>
            <p className="text-base md:text-xs text-gray-400">
              We ensure a 360° Customer Experience with our omni-channel
              solutions. We leverage Business Intelligence for strategic
              decisions and offer tailored Inbound, Outbound, Staff
              augmentation, and Backend Solutions to meet diverse business needs
              efficiently.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="flex-1">
            <Image
              src="/imgs/img5.png" // public folder me image place karna
              alt="Sample Image"
              width={240}
              height={240}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="min-h- flex flex-col items-center px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-4">
          Our Flagship E-Governance Projects
        </h1>
        <p className="text-xs md:text-xs text-center mb-12 text-gray-400">
          Discover how Technotask is reshaping public administration with our
          impactful projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-[60%]">
          {/* Card 1 */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <div className="mb-4 mr-auto">
              <Image src="" alt="Logistics" width={50} height={50} />
            </div>
            <h2 className="text-xl font-semibold mb-2 mr-auto">
              State Electricity Board
            </h2>
            <p className="text-gray-400 mb-4 mr-auto text-justify text-sm">
              Modernizing power distribution management systems to ensure
              reliable and efficient electricity services for all.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <div className="mb-4 mr-auto">
              <Image src="" alt="Fintech" width={50} height={50} />
            </div>
            <h2 className="text-xl font-semibold mb-2 mr-auto flex text-left">
              Ministry of Urban Development
            </h2>
            <p className="text-gray-400 mb-4 mr-auto text-justify text-sm">
              Facilitating smart city initiatives by integrating digital
              technologies for better urban planning and management.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <div className="mb-4 mr-auto">
              <Image src="" alt="SaaS" width={50} height={50} />
            </div>
            <h2 className="text-xl font-semibold mb-2 mr-auto">
              District Helplines
            </h2>
            <p className="text-gray-400 mb-4 mr-auto text-justify text-sm">
              Providing accessible and responsive helpline services for
              immediate assistance to local residents.
            </p>
          </div>

          {/* Card 1 */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <div className="mb-4 mr-auto">
              <Image src="" alt="Logistics" width={50} height={50} />
            </div>
            <h2 className="text-xl font-semibold mb-2 mr-auto text-left">
              Citizen Grievance Redressal
            </h2>
            <p className="text-gray-400 mb-4 mr-auto text-justify text-sm">
              Streamlining grievance handling processes through digital
              platforms, ensuring timely resolution and citizen satisfaction.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <div className="mb-4 mr-auto">
              <Image src="" alt="Fintech" width={50} height={50} />
            </div>
            <h2 className="text-xl font-semibold mb-2 mr-auto flex text-left">
              COVID Helpline
            </h2>
            <p className="text-gray-400 mb-4 mr-auto text-justify text-sm">
              Supporting public health efforts during the pandemic with
              dedicated helplines for information dissemination and emergency
              response.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-20 px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-stretch max-w-6xl w-full gap-10 max-w-screen-lg">
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

      <div className="flex items-center justify-center my-15 px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10 max-w-screen-lg">
          {/* Left Side Content */}
          <div className="flex-1">
            <Image
              src="/imgs/img5.png" // public folder me image place karna
              alt="Sample Image"
              width={240}
              height={240}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side Image */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-semibold mb-4">
              Partner with Technotask for Your Next E-Governance Project
            </h1>
            <p className="text-base md:text-xs text-gray-400">
              Join hands with Technotask to embark on a transformative journey
              in E-Governance. Whether you&apos;re looking to enhance service
              delivery, streamline operations, or improve citizen engagement, we
              have the expertise and dedication to make it happen.
            </p>
            <p className="text-base md:text-xs text-gray-400 mt-3">
              Contact us today to explore how our tailored E-Governance
              solutions can empower your administration and benefit your
              community.
            </p>
            <button className="bg-blue-500 rounded-lg p-2 mt-2">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
