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

export default function Advisoryservices() {
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
            <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-start p-10 text-white ">
              <h1 className="text-xl md:text-5xl lg:text-4xl font-semibold absolute top-[37%] left-1/4 transform -translate-x-1/4">
                Harnessing decades of <br />
                expertise to elevate <br />
                your Customer <br />
                Experience.
              </h1>
              <span className="absolute top-[65%] left-[19%] block w-20 h-1 bg-blue-600 mt-0"></span>
              <p className="text-xs md:text-xs lg:text-sm absolute top-[68%] left-[25%] transform -translate-x-1/4">
                Transform your contact center with our integrated Customer{" "}
                <br />
                Lifecycle Management Advisory.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-20 px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10 max-w-screen-md">
          {/* Left Side Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Streamline, Empower, Excel
            </h1>
            <p className="text-base md:text-xs text-gray-600">
              Transform your customer interactions into enduring relationships
              with Technotask's comprehensive Customer Lifecycle Management
              services.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="flex-1">
            <img
              src="/imgs/img6.png" // public folder me image place karna
              alt="Sample Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-20 px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10 max-w-screen-md">
          {/* Left Side Content */}
          <div className="flex-1">
            <img
              src="/imgs/img2.png" // public folder me image place karna
              alt="Sample Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side Image */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Integrated Administrative Solutions
            </h1>
            <p className="text-base md:text-xs text-gray-600">
              At Technotask, we seamlessly integrate administrative solutions
              into your contact center operations. Our approach streamlines
              tasks such as IT system administration and partner management,
              ensuring smooth operations and enhanced data security. Focus on
              delivering exceptional customer support while we handle the
              details.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-20 px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10 max-w-screen-md">
          {/* Left Side Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Human Capital Development Suite
            </h1>
            <p className="text-base md:text-xs text-gray-600">
              Empower your contact center teams with our comprehensive Human
              Capital Development Suite. We provide tailored human resources
              management and robust learning and development programs. Elevate
              your workforce capabilities to exceed customer service
              expectations and drive business growth.
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
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10 max-w-screen-md">
          {/* Left Side Content */}
          <div className="flex-1">
            <img
              src="/imgs/img2.png" // public folder me image place karna
              alt="Sample Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side Image */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Quality Assurance & Compliance Mastery
            </h1>
            <p className="text-base md:text-xs text-gray-600">
              Quality assurance and compliance are paramount in our advisory
              services. We implement meticulous quality control measures and
              comprehensive compliance frameworks to ensure your operations meet
              industry standards and legal requirements. Build customer trust
              with our rigorous monitoring and assurance protocols.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-20 px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10 max-w-screen-md">
          {/* Left Side Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Operational Excellence Hub
            </h1>
            <p className="text-base md:text-xs text-gray-600">
              Optimize your contact center operations with our Operational
              Excellence Hub. We offer data-driven insights, process
              improvements, and continuous performance monitoring. Achieve
              operational efficiency and enhance customer satisfaction with our
              strategic operational support.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="flex-1">
            <img
              src="/imgs/img6.png" // public folder me image place karna
              alt="Sample Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-20 px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10 max-w-screen-md">
          {/* Left Side Content */}
          <div className="flex-1">
            <img
              src="/imgs/img2.png" // public folder me image place karna
              alt="Sample Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side Image */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Optimized Workforce Management
            </h1>
            <p className="text-base md:text-xs text-gray-600">
              Maximize the efficiency of your workforce with our Workforce
              Management as a Service (WaaS). From optimal scheduling and
              resource allocation to cost management and performance tracking,
              we ensure your contact center operates at peak performance. Drive
              productivity and minimize costs with our tailored workforce
              solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-20 px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10 max-w-screen-md">
          {/* Left Side Content */}
          <div className="relative left-[1%]">
            <div className="max-w-md w-full text-center space-y-8">
              {/* Heading */}
              <h1 className="text-4xl font-semibold text-left">
                Why Choose Us?
              </h1>
              <ul className="space-y-3">
                {[
                  "Employee Engagement: Initiatives to boost morale and productivity.",
                  "Performance Management: Structured feedback and evaluation systems.",
                  "Payroll Services: Accurate and timely employee compensation handling.",
                  "Compliance Assurance: Ensuring adherence to legal and regulatory standards.",
                  "Strategic Planning: Helping businesses define and achieve long-term goals.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    {/* Small Pink Circle with Check Icon */}
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-pink-400 flex-shrink-0 mt-0.5">
                      <Check className="text-white w-3 h-3" />
                    </div>

                    {/* Small Text */}
                    <p className="text-xs text-gray-700 leading-snug">{item}</p>
                  </li>
                ))}
              </ul>
              <div className="flex items-left">
                <button className="bg-blue-500 p-3 rounded-lg">
                  Meet Our Core Team {"->"}
                </button>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex-1">
            <img
              src="/imgs/img66.png" // public folder me image place karna
              alt="Sample Image"
              className="w-full h-[300px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="relative left-[25%] mt-5 w-full max-w-screen-md">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
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
      <Footer />
    </div>
  );
}
