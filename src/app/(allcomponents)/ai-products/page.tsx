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
              <h1 className="text-xl md:text-5xl lg:text-5xl font-semibold absolute top-[37%] left-1/4 transform -translate-x-1/4">
                Gen-AI Products
              </h1>
              <span className="absolute top-[48%] left-[20%] block w-20 h-1 bg-blue-600"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-12 px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-19 max-w-screen-md">
          {/* Left Side Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-semibold mb-4">
              Harnessing Gen-AI to Revolutionize Your Customer Experience
            </h1>
            <p className="text-base md:text-xs text-gray-400">
              Reimagine Customer Experience with Gen-AI hands! Efficiency,
              cost-effectiveness, and innovation at your service with
              Technotask.
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
            <h1 className="text-2xl md:text-4xl font-semibold mb-4">
              Gen-AI Era, featuring Human expertise.
            </h1>
            <p className="text-base md:text-xs text-gray-400">
              Technotask transforms customer experiences in contact centers by
              efficiently handling 90% of Level 1 queries, reducing
              Cost-to-Serve by 23%.
            </p>
            <p className="text-base md:text-xs text-gray-400 mt-2">
              With over 100+ years of cumulative leadership experience, we lead
              in harnessing AI through products
            </p>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl w-[60%]">
          {/* Card 1 */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <div className="mb-4 mr-auto">
              <Image
                src="/logistics-icon.png"
                alt="Logistics"
                width={50}
                height={50}
              />
            </div>
            <h2 className="text-md font-semibold mb-2 mr-auto">
              Speech Analytics Tool
            </h2>
            <p className="text-gray-400 mb-4 mr-auto text-justify text-xs">
              TURNING CONVERSATIONS INTO ACTIONABLE INSIGHTS Unlocking Clarity
              and Intelligence with Every Spoken Word. AI-enabled Omnichannel
              analytics gleans deep customer insights from various channels and
              presents them in a manner to enables actions for improving CX.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <div className="mb-4 mr-auto">
              <Image
                src="/fintech-icon.png"
                alt="Fintech"
                width={50}
                height={50}
              />
            </div>
            <h2 className="text-md font-semibold mb-2 mr-auto flex text-left">
              AI Avatars
            </h2>
            <p className="text-gray-400 mb-4 mr-auto text-justify text-xs">
              Experience the next level of customer interaction with our Gen-AI
              avatars. These lifelike digital assistants engage customers with
              personalized, human-like interactions, creating a more immersive
              and satisfying experience. They bridge the gap between technology
              and human touch, offering support that feels truly authentic.
            </p>
          </div>

          {/* Card 1 */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <div className="mb-4 mr-auto">
              <Image
                src="/logistics-icon.png"
                alt="Logistics"
                width={50}
                height={50}
              />
            </div>
            <h2 className="text-md font-semibold mb-2 mr-auto text-left">
              AI Voicebots & Chatbots
            </h2>
            <p className="text-gray-400 mb-4 mr-auto text-justify text-xs">
              Our humanlike voice & chat assistants seamlessly handle customer
              inquiries, delivering accurate and efficient responses to enhance
              customer satisfaction.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <div className="mb-4 mr-auto">
              <Image
                src="/fintech-icon.png"
                alt="Fintech"
                width={50}
                height={50}
              />
            </div>
            <h2 className="text-md font-semibold mb-2 mr-auto flex text-left">
              Advanced Omnichannel Analytics
            </h2>
            <p className="text-gray-400 mb-4 mr-auto text-justify text-xs">
              Unlock the full potential of your customer interactions with our
              AI-enabled omnichannel analytics. By integrating data from various
              touchpoints, our advanced analytics provide deep insights into
              customer behavior and preferences. This holistic view allows for
              strategic decision-making, enhancing customer experience and
              driving business growth.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-10 px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10 max-w-screen-md">
          {/* Left Side Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-semibold mb-4">
              Benefits of Conversational AI
            </h1>
            <p className="text-gray-400 text-xs">
              Enhance customer interactions with personalized and responsive
              AI-driven support, available 24/7 to improve engagement and
              satisfaction.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="flex-1">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="bg-blue-100 px-2">
                  Time, Cost, and Resource Efficiency
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 px-2">
                  Streamline operations and reduce expenses.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="bg-blue-100 my-2 px-2">
                  Tailored Interactions
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 px-2">
                  Deliver personalised customer experiences.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="bg-blue-100 my-2 px-2">
                  Multilingual Capabilities
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 px-2">
                  Communicate seamlessly in multiple languages.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="bg-blue-100 my-2 px-2">
                  Around-the-Clock Support
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 px-2">
                  Provide 24/7 assistance to your customers
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="bg-blue-100 my-2 px-2">
                  Valuable Customer Insights
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 px-2">
                  Gain actionable insights for better decision-making.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="bg-blue-100 my-2 px-2">
                  Minimized Churn
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 px-2">
                  Enhance retention with improved customer satisfaction.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="bg-blue-100 my-2 px-2">
                  Boosted Efficiency
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 px-2">
                  Optimize processes for maximum productivity.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
              <p className="text-xs text-gray-600 mb-4">
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
              <p className="text-xs text-gray-600 mb-4">
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
              <p className="text-xs text-gray-600 mb-4">
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
