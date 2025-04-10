"use client";
import React from "react";
import Image from "../../../../node_modules/next/image";
import { Footer } from "../../../defaultpage/footer/page";
import Navbar from "../navbar/page";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
// import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Whyus() {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenSecond, setIsOpenSecond] = useState(true);
  const [startIndex, setStartIndex] = useState(0);

  const slideLeft = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const slideRight = () => {
    setStartIndex((prev) => (prev < recentdata.length - 3 ? prev + 1 : prev));
  };
  const recentdata = [
    {
      year: "2022",
      title: "Scaling New Heights",
      points: [
        "Employee count surged to 3200, reflecting rapid expansion.",
        "Expanded to 11 Delivery Centers, including 2 international centers.",
        "Diversified service offerings across 28 LOBs, catering to 25 clients.",
      ],
    },
    {
      year: "2023",
      title: "Global Presence and Expertise",
      points: [
        "Continued growth with 4567 employees.",
        "Expanded to 13 Delivery Centers and 3 international locations.",
        "Enhanced service portfolio to 36 LOBs, serving 32 global clients.",
      ],
    },
    {
      year: "2024",
      title: "Thriving for Excellence",
      points: [
        "Employee count reached 5200, solidifying our position as a leading employer.",
        "Expanded to over 16 Delivery Centers, with a presence in 6 countries.",
        "Serving 48 LOBs with a commitment to excellence, trusted by 40 global clients.",
      ],
    },
    {
      year: "2025",
      title: "Innovation and Growth",
      points: [
        "Employee count touched 6000.",
        "Started 5 new initiatives on tech innovation.",
        "Expanded to 20 countries worldwide.",
      ],
    },
    {
      year: "2026",
      title: "Sustainability Focus",
      points: [
        "Achieved carbon neutral operations.",
        "Employee count reached 7000+.",
        "Launched 10 CSR initiatives globally.",
      ],
    },
    {
      year: "2027",
      title: "Leadership in Industry",
      points: [
        "Recognized among Top 10 Global Outsourcing Firms.",
        "Employee strength crossed 8000.",
        "Serving 60+ global clients with excellence.",
      ],
    },
  ];

  //   const recentdata = [
  //     {
  //       name: "Arjun Arya",
  //       location: "Pune West",
  //       Description:
  //         "Great efforts and regular follow-up to get leads for my rental apartment. Because of your enthusiasm and dedication, various parties who saw the house were in a positive frame of mind.",
  //     },
  //     {
  //       name: "Sohan Rai",
  //       location: "Pune South",
  //       Description:
  //         "Great efforts and regular follow-up to get leads for my rental apartment. Because of your enthusiasm and dedication, various parties who saw the house were in a positive frame of mind.",
  //     },
  //     {
  //       name: "Neetu pal",
  //       location: "Pune East",
  //       Description:
  //         "Great efforts and regular follow-up to get leads for my rental apartment. Because of your enthusiasm and dedication, various parties who saw the house were in a positive frame of mind.",
  //     },
  //     {
  //       name: "Neetu pal",
  //       location: "Pune East",
  //       Description:
  //         "Great efforts and regular follow-up to get leads for my rental apartment. Because of your enthusiasm and dedication, various parties who saw the house were in a positive frame of mind.",
  //     },
  //     {
  //       name: "Neetu pal",
  //       location: "Pune East",
  //       Description:
  //         "Great efforts and regular follow-up to get leads for my rental apartment. Because of your enthusiasm and dedication, various parties who saw the house were in a positive frame of mind.",
  //     },
  //   ];

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
            <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-start text-white ">
              <span className="text-sm text-blue-600 text-vold absolute top-[34%] left-[19%]">
                Why Us
              </span>
              <h1 className="text-xl md:text-5xl lg:text-5xl w-[25%] font-semibold absolute top-[37%] left-1/4 transform -translate-x-1/4">
                Transforming CX one interaction at a time
              </h1>
              <span className="absolute top-[51%] left-[19%] block w-20 h-1 bg-blue-600 mt-0"></span>
              <p className="text-xs md:text-xs lg:text-sm  w-[25%] absolute top-[53%] left-[25%] transform -translate-x-1/4">
                We’re a next-gen contact center committed to delivering
                personalized CX to our global clients with our diverse
                workforce, and tech innovations at scale.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-20 px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10 max-w-screen-md">
          {/* Left Side Content */}

          <div className="flex-1 text-center md:text-left">
            <span className="text-md text-blue-600">About Us</span>
            <h1 className="text-2xl md:text-4xl font-semibold mb-4">
              Overview
            </h1>
            <p className="text-base md:text-xs text-gray-400">
              Technotask is an AI-driven Contact Center service provider that
              offers a comprehensive suite of solutions designed to enhance the
              customer experience for businesses worldwide. We offer a blend of
              Gen-AI technology & industry expertise that gives the company a
              competitive edge, allowing it to meet the unique needs of
              international brands in diverse industries.
            </p>
            <button className="bg-blue-600 rounded-lg p-2 text-white mt-4 hover:border-2 border-blue-600 hover:bg-white hover:text-blue-600">
              Know more
            </button>
          </div>

          {/* Right Side Image */}
          <div className="flex-1">
            <Image
              src="/imgs/img6.png" // public folder me image place karna
              alt="Sample Image"
              width={200}
              height={200}
              className="w-full h-auto md:h-92 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-20 px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10 max-w-screen-md">
          {/* Left Side Content */}
          <div className="flex-1">
            <Image
              src="/imgs/img2.png"
              alt="Sample Image"
              width={200}
              height={200}
              className="w-full h-auto md:h-92 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side Image */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-10 max-w-6xl w-[60%]">
            {/* Card 1 */}
            {/* <div className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"> */}
            <div className="rounded-2xl overflow-hidden shadow-lg max-w-screen-md">
              <div className="bg-indigo-500 text-white text-center p-4 font-semibold text-left text-md text-bold">
                Mission
              </div>
              <div className="bg-white text-center p-4 text-gray-800 text-base p-2 text-justify text-xs text-semibold">
                To be at the forefront of tech innovation, driving unparalleled
                customer satisfaction worldwide. Empower our diverse workforce
                to thrive in a dynamic digital landscape.
              </div>
            </div>
            {/* </div> */}

            {/* Card 2 */}
            {/* <div className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"> */}
            <div className="rounded-2xl overflow-hidden shadow-lg max-w-screen-md">
              <div className="bg-indigo-500 text-white text-center text-left p-4 font-semibold text-md text-bold">
                Vision
              </div>
              <div className="bg-white text-center text-gray-800 text-base text-xs text-justify text-semibold p-4">
                To revolutionize global customer experiences through innovative
                AI-powered solutions. Foster seamless interactions and exceed
                client expectations at every touchpoint.{" "}
              </div>
              {/* </div> */}
            </div>
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
            <Image
              src="/imgs/img3.png" // public folder me image place karna
              alt="Sample Image"
              width={200}
              height={200}
              className="w-full h-auto md:h-92 rounded-lg shadow-lg"
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
              width={200}
              height={200}
              className="w-full h-auto md:h-92 rounded-lg shadow-lg"
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
            <Image
              src="/imgs/img6.png" // public folder me image place karna
              alt="Sample Image"
              width={200}
              height={200}
              className="w-full h-auto md:h-92 rounded-lg shadow-lg"
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
              width={200}
              height={200}
              className="w-full h-auto md:h-92 rounded-lg shadow-lg"
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
            <Image
              src="/imgs/img66.png" // public folder me image place karna
              alt="Sample Image"
              width={200}
              height={200}
              className="w-full h-auto md:h-92 rounded-lg shadow-lg"
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

      <div className="flex items-center justify-center py-4 mb-10">
        <div className="w-full max-w-4xl">
          <div className="flex items-center justify-center">
            <h2 className="text-5xl font-semibold text-center w-[52%] text-gray-700 mb-8">
              Story of Resilience & Excellence
            </h2>
          </div>

          <div className="relative px-0">
            <div className="overflow-hidden">
              <div
                className="flex gap-4 transition-all duration-300"
                style={{ transform: `translateX(-${startIndex * (100 / 3)}%)` }}
              >
                {recentdata.map((article, index) => (
                  <div
                    key={index}
                    className="w-[calc(33.33%-1rem)] pl-4 py-2 flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="p-4 border-1 border-gray-200 rounded-lg h-[100%]">
                      <p className="text-gray-500 text-xs">{article.year}</p>
                      <h3 className="text-base font-semibold text-gray-900 my-4 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-500 text-xs">
                        <ul className="list-none space-y-2">
                          {article.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2" />
                              <span className="text-gray-600 text-sm">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={slideLeft}
              className={`absolute left-[-4%]  top-1/2 -translate-y-1/2 bg-blue-400 p-1.5 rounded-full shadow-lg ${
                startIndex === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-50"
              }`}
              disabled={startIndex === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={slideRight}
              className={`absolute right-[-4%] top-1/2 -translate-y-1/2 bg-blue-400 p-1.5 rounded-full shadow-lg ${
                startIndex >= recentdata.length - 3
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-50"
              }`}
              disabled={startIndex >= recentdata.length - 3}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <section className="px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>

        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-3xl mx-auto relative">
          {/* Top Bar */}
          <div
            className="flex justify-between items-center mb-4 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <h3 className="text-md font-semibold">
              Safeguarding Growth Amidst RBI Challenges
            </h3>
            {isOpen ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </div>

          {/* Collapsible Content */}
          {isOpen && (
            <div className="space-y-6">
              {/* Problem Statement */}
              <div className="bg-indigo-100 rounded-2xl p-4">
                <h4 className="font-bold mb-2 text-md">Problem Statement:</h4>
                <p className="text-xs">
                  Facing the adverse impact of the new RBI guidelines in 2022,
                  our client was at risk of losing a substantial portion of
                  their customer base, leading to revenue loss.
                </p>
              </div>

              {/* Solutions + Image */}
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Text */}
                <div className="flex-1 space-y-3">
                  <h4 className="font-semibold text-md text-gray-800">
                    Solutions offered by Technotask:
                  </h4>
                  <ul className="list-disc text-xs list-inside space-y-2 text-gray-600">
                    <li>
                      Introduced a new line of business (LOB) focused on
                      anti-fraud measures to handle red flag scenarios.
                    </li>
                    <li>
                      Deployed a dedicated team of 10 trained personnel to
                      manage concerns and implemented a CIBIL squad to monitor
                      credit ratings.
                    </li>
                    <li>
                      Achieved a remarkable 70% reduction in customer complaints
                      within six months.
                    </li>
                    <li>
                      Expanded the Online Reputation Management (ORM) team with
                      12 additional resources to mitigate the negative effects
                      of RBI regulations.
                    </li>
                    <li>
                      Enhanced client value by increasing their customer base
                      and significantly reducing fraud cases, resulting in
                      substantial revenue growth.
                    </li>
                  </ul>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <Image
                    src="/imgs/img6.png" // public folder me image place karna
                    alt="Puzzle"
                    width={200}
                    height={200}
                    className="w-full h-auto md:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Impact */}
              <div className="bg-green-100 rounded-2xl p-4">
                <h4 className="font-bold mb-2 text-md">Impact:</h4>
                <p className="text-xs">
                  Technotask successfully increased the client&apos;s customer
                  base and achieved a significant 35% reduction in fraud cases,
                  demonstrating effective risk mitigation and growth strategies.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="py-10 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-3xl mx-auto relative">
          {/* Top Bar */}
          <div
            className="flex justify-between items-center mb-4 cursor-pointer"
            onClick={() => setIsOpenSecond(!isOpenSecond)}
          >
            <h3 className="text-md font-semibold">Freemium to Premium</h3>
            {isOpen ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </div>

          {/* Collapsible Content */}
          {isOpenSecond && (
            <div className="space-y-6">
              {/* Problem Statement */}
              <div className="bg-indigo-100 rounded-2xl p-4">
                <h4 className="font-bold mb-2 text-md">Problem Statement:</h4>
                <p className="text-xs">
                  Facing the adverse impact of the new RBI guidelines in 2022,
                  our client was at risk of losing a substantial portion of
                  their customer base, leading to revenue loss.
                </p>
              </div>

              {/* Solutions + Image */}
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Text */}
                <div className="flex-1 space-y-3">
                  <h4 className="font-semibold text-md text-gray-800">
                    Solutions offered by Technotask:
                  </h4>
                  <ul className="list-disc text-xs list-inside space-y-2 text-gray-600">
                    <li>
                      Introduced a new line of business (LOB) focused on
                      anti-fraud measures to handle red flag scenarios.
                    </li>
                    <li>
                      Deployed a dedicated team of 10 trained personnel to
                      manage concerns and implemented a CIBIL squad to monitor
                      credit ratings.
                    </li>
                    <li>
                      Achieved a remarkable 70% reduction in customer complaints
                      within six months.
                    </li>
                    <li>
                      Expanded the Online Reputation Management (ORM) team with
                      12 additional resources to mitigate the negative effects
                      of RBI regulations.
                    </li>
                    <li>
                      Enhanced client value by increasing their customer base
                      and significantly reducing fraud cases, resulting in
                      substantial revenue growth.
                    </li>
                  </ul>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <Image
                    src="/imgs/img6.png" // public folder me image place karna
                    alt="Puzzle"
                    width={200}
                    height={200}
                    className="w-full h-auto md:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Impact */}
              <div className="bg-green-100 rounded-2xl p-4">
                <h4 className="font-bold mb-2 text-md">Impact:</h4>
                <p className="text-xs">
                  Technotask successfully increased the client&apos;s customer
                  base and achieved a significant 35% reduction in fraud cases,
                  demonstrating effective risk mitigation and growth strategies.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
