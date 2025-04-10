"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "../../../node_modules/next/image";
import Link from "../../../node_modules/next/link";

export function Footer() {
  return (
    <main className="min-h-screen">
      {/* Contact Form Section */}
      <section className="bg-[#7C3AED] py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Partner with us.
              </h1>
              <p className="text-white/90 mb-8">
                A forefront provider of outsourced digital services and 360°
                Customer Experiences that are Real, Virtual & Scalable for the
                world&apos;s most innovative companies
              </p>
              <p className="text-white/90">Success Stories in a Go!</p>
            </div>
            <form className="space-y-4">
              <Input
                type="text"
                placeholder="Your name"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Input
                type="tel"
                placeholder="Phone"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Input
                type="text"
                placeholder="Industry"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Input
                type="text"
                placeholder="Country"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-white text-[#7C3AED] hover:bg-white/90">
                Contact Us
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Logo and Newsletter Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <Image
                  src="/imgs/iso6.png"
                  alt="TechInTask"
                  width={150}
                  height={40}
                />
              </div>
              <p className="text-sm text-gray-600 mb-4">
                TechInTask Business Solutions, Gomati Galaxy City, Ayodhya
                bypass Road, Near Ayodhya Square, Bhopal, Madhya Pradesh 462041
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Email"
                  className="max-w-[200px]"
                />
                <Button>Sign Up</Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Join our CX360 Newsletter for industry insights!
              </p>
            </div>

            {/* Useful Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Useful Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Our Leadership
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Global Presence
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Contact Center Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Advisory Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    E-Commerce
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Gen AI Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    JustTask
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Social</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    YouTube
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="mailto:info@techintask.co.in"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Support: info@techintask.co.in
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+917358773115"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Phone: +91 73587 73115
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:sales@techintaskglobal.com"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Sales: sales@techintaskglobal.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">© 2024, TECHINTASK LLC.</p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Employee Redressal Policy
              </Link>
            </div>
            <Button variant="ghost" size="sm" className="text-gray-600">
              Back to top
            </Button>
          </div>
        </div>
      </footer>
    </main>
  );
}
