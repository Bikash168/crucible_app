"use client";  // Add this at the very top of your file

import { useState } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importing Carousel styles

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black px-4">
     <Carousel
  className="mb-8"
  autoPlay
  interval={3000}
  infiniteLoop
  showThumbs={false}
  showStatus={false}
  showArrows={false}
  swipeable
  emulateTouch
>
  <div>
    <Image
      src="/images/innovation1.jpg"
      alt="Innovation 1"
      width={1920}
      height={1080}
      className="w-full h-[180px] sm:h-[240px] md:h-[300px] lg:h-[400px] xl:h-[500px] object-cover transition-all duration-700 ease-in-out"
    />
  </div>
  <div>
    <Image
      src="/images/innovation2.jpg"
      alt="Innovation 2"
      width={1920}
      height={1080}
      className="w-full h-[180px] sm:h-[240px] md:h-[300px] lg:h-[400px] xl:h-[500px] object-cover transition-all duration-700 ease-in-out"
    />
  </div>
  <div>
    <Image
      src="/images/innovation3.jpg"
      alt="Innovation 3"
      width={1920}
      height={1080}
      className="w-full h-[180px] sm:h-[240px] md:h-[300px] lg:h-[400px] xl:h-[500px] object-cover transition-all duration-700 ease-in-out"
    />
  </div>
</Carousel>



      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {/* Main Heading Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 mb-4">
            Crucible Innovation Forum: A recognised incubator helping turn concepts into working solutions
          </h1>
          <p className="text-lg text-gray-700">
            Crucible Innovation Forum is the official innovation and incubation centre of Trident Academy of Technology, Bhubaneswar. It was established in 2023 as a Section 8 company to bring together the institution’s efforts in innovation, entrepreneurship, and startup development.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/vision.jpg"
              alt="Vision"
              width={800}
              height={300}
              className="rounded-xl w-full h-auto"
            />

          </div>
          <h2 className="text-2xl font-semibold text-orange-500 mb-4 text-center">Vision</h2>
          <p className="text-lg text-gray-700 text-center">
            We aim to build a space where new ideas are encouraged, innovation is supported at every step, and students are motivated to turn their thoughts into real solutions.
          </p>
        </div>


        {/* Mission Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 md:col-span-2">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4 text-center">Mission</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 text-center space-y-2">
            <li>We bring together students, mentors, and experts to work on ideas that can solve real problems.</li>
            <li>The forum encourages a culture where trying new things and learning from failure is part of the process.</li>
            <li>We provide proper guidance, tools, and connections to help projects move forward and reach the market.</li>
            <li>The focus is on building ventures that not only succeed but also support the wider community and environment.</li>
          </ul>
        </div>

        {/* Encouragement Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 md:col-span-2">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4 text-center">Encouraging Young Minds to Innovate and Lead</h2>
          <p className="text-lg text-gray-700 text-center">
            Crucible Innovation Forum fosters an environment where students are encouraged to innovate, take risks, and lead their ideas into tangible solutions.
          </p>
        </div>
      </div>

    </main>
  );
}
