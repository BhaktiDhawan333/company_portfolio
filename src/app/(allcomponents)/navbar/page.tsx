"use client";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const aboutuspaths: { title: string; href: string }[] = [
  {
    title: "Why us",
    href: "/why-us",
  },
  {
    title: "Global Presence",
    href: "/our-presence",
  },
  {
    title: "Awards and Events",
    href: "/awards-events",
  },
  {
    title: "Certifications",
    href: "/certifications",
  },
  {
    title: "Our Clients",
    href: "/our-clients",
  },
];

const solutionspaths: { title: string; href: string }[] = [
  {
    title: "Contact Center Service",
    href: "/centerservices",
  },
  {
    title: "Advisory Services",
    href: "/advisoryservices",
  },
  {
    title: "E-governance",
    href: "/egovernance",
  },
  {
    title: "AI Products",
    href: "/ai-products",
  },
  {
    title: "Justtawk",
    href: "/justtawk",
  },
];

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white p-4 border-b-1 border-gray-300">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo - Left Side */}
          <div className="text-blue-600 font-bold text-3xl">
            <a href="#">Logo</a>
          </div>

          <NavigationMenu>
            <NavigationMenuList>
              {/* Center Tabs with Dropdown for About Us and Career */}
              <div className="flex space-x-8 text-black">
                <NavigationMenuItem>
                  <NavigationMenuLink href="/Homepage">Home</NavigationMenuLink>
                </NavigationMenuItem>

                {/* Career Dropdown */}
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>About us</NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-white">
                        <ul className="grid w-[400px] md:w-[500px] lg:w-[160px] p-2 text-sm bg-white">
                          {aboutuspaths.map((component) => (
                            <NavigationMenuLink
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            >
                              {component.title}
                            </NavigationMenuLink>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-white">
                        <ul className="grid w-[400px] gap-3 md:w-[500px] lg:w-[200px] p-2 text-sm bg-white">
                          {solutionspaths.map((component) => (
                            <NavigationMenuLink
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            >
                              {component.title}
                            </NavigationMenuLink>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

                <NavigationMenuItem>
                  <NavigationMenuLink href="industries">
                    Industries
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="career">Career</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/blogs">Blog</NavigationMenuLink>
                </NavigationMenuItem>
              </div>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <a
              href="/contact-us"
              className="bg-blue-600 rounded text-white py-2 px-4"
            >
              Contact Us
            </a>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-black"
            >
              <i className="fa fa-search"></i>
            </button>

            {searchOpen && (
              <div className="relative">
                <input
                  type="text"
                  className="absolute right-0 w-48 h-8 border rounded-lg px-2"
                  placeholder="Search..."
                />
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
