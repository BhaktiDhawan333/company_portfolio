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
import { Check } from "lucide-react";

export default function Centerservices() {
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
              <h1 className="text-xl md:text-5xl lg:text-5xl font-semibold absolute top-[37%] left-1/4 transform -translate-x-1/4">
                Contact Center Services
              </h1>
              <span className="absolute top-1/2 left-[19%] block w-20 h-1 bg-blue-600 mt-0"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-20 px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10 max-w-screen-md">
          {/* Left Side Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Tailored Solutions, Global Reach
            </h1>
            <p className="text-base md:text-xs text-gray-600">
              At Technotask, our custom CX solutions are founded on extensive
              team expertise, agility, and cutting-edge tech. This combination
              enables us to anticipate customer needs and consistently exceed
              their expectations.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="flex-1">
            <Image
              src="/imgs/img6.png" // public folder me image place karna
              alt="Sample Image"
              width={240}
              height={240}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-20 px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10 max-w-screen-md">
          {/* Left Side Content */}
          <div className="flex-1">
            <Image
              src="/imgs/img2.png" // public folder me image place karna
              alt="Sample Image"
              width={240}
              height={240}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side Image */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Global Support
            </h1>
            <p className="text-base md:text-xs text-gray-600">
              With strategically positioned offices across the globe, Technotask
              offers round-the-clock support, multilingual services, and an
              in-depth understanding of diverse cultural nuances, all aimed at
              boosting customer satisfaction.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-20 px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10 max-w-screen-md">
          {/* Left Side Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              360° Customer Experience
            </h1>
            <p className="text-base md:text-xs text-gray-600">
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
              src="/imgs/img3.png" // public folder me image place karna
              alt="Sample Image"
              width={240}
              height={240}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        {/* Heading */}
        <div className="text-center mb-12 mt-4">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">
            Our Key Offerings
          </h2>
        </div>

        {/* Buttons Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-full">
          <button className="px-4 py-2 bg-white text-sm rounded-full border-1 border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors">
            Voice Support
          </button>
          <button className="px-4 py-2 bg-white text-sm rounded-full border-1 border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors">
            Email Support
          </button>
          <button className="px-4 py-2 bg-white text-sm rounded-full border-1 border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors">
            Chat Support
          </button>
          <button className="px-4 py-2 bg-white text-sm rounded-full border-1 border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors">
            Robotic Process Automation
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-full my-4">
          <button className="px-4 py-2 bg-white text-sm rounded-full border-1 border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors">
            Quality Audits
          </button>
          <button className="px-4 py-2 bg-white text-sm rounded-full border-1 border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors">
            Catalog Management
          </button>
          <button className="px-4 py-2 bg-white text-sm rounded-full border-1 border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors">
            Logistic Support
          </button>
          <button className="px-4 py-2 bg-white text-sm rounded-full border-1 border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors">
            L2 Support
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-full">
          <button className="px-4 py-2 bg-white text-sm rounded-full border-1 border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors">
            Outbound Sales
          </button>
          <button className="px-4 py-2 bg-white text-sm rounded-full border-1 border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors">
            Backend support
          </button>
          <button className="px-4 py-2 bg-white text-sm rounded-full border-1 border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors">
            Lead Generation
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center my-20 px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10 max-w-screen-md">
          {/* Left Side Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-semibold mb-4">
              Benefits of <br /> Partnering with Us
            </h1>
          </div>

          {/* Right Side Image */}
          <div className="flex-1">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="bg-blue-100 px-2">
                  Elevated Customer Satisfaction
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 px-2">
                  Enhance customer satisfaction with our superior service.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="bg-blue-100  px-2">
                  Exceptional Customer Experience
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 px-2">
                  Deliver outstanding experiences at every touchpoint.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="bg-blue-100  px-2">
                  Smooth and Timely Ramp-up
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 px-2">
                  Scale operations seamlessly and efficiently.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="bg-blue-100  px-2">
                  Cost Efficiency
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 px-2">
                  Optimise your budget with our cost-effective solutions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-20 px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10 max-w-screen-md">
          {/* Left Side Content */}
          <div className="flex-1">
            <Image
              src="/imgs/img66.png" // public folder me image place karna
              alt="Sample Image"
              width={240}
              height={240}
              className="w-full h-[300px] rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side Image */}
          <div className="relative left-[7%]">
            <div className="max-w-md w-full text-center space-y-8">
              {/* Heading */}
              <h1 className="text-4xl font-semibold text-left">
                What Sets Us Apart?
              </h1>

              {/* List */}
              <ul className="space-y-4 text-left">
                {[
                  "Successfully delivered 40+ international projects",
                  "Proficient in all Indian regional languages and 16 international languages",
                  "Strategically located in tier-2 and tier-3 towns for optimal cost efficiency",
                  "Access to a global talent pool from rural to urban areas",
                  "24/7 multilingual support tailored to diverse cultural contexts",
                  "Advanced AI and analytics-driven solutions",
                  "High client retention rate with 98% satisfaction",
                  "Robust data security and compliance measures",
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

      <div className="relative left-[30%] mt-5 w-full max-w-screen-md">
        <span className="text-blue-400">Testimonial</span>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
          Helping world-class teams grow <br /> faster together.
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
