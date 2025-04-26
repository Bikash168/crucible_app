"use client";  // Add this at the very top of your file

import { useState } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importing Carousel styles

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black px-4">     
      <Carousel className="mb-8">
        <div>
          <Image src="/images/innovation1.jpg" alt="Innovation 1" width={600} height={200} />
          
        </div>
        <div>
          <Image src="/images/innovation2.jpg" alt="Innovation 2" width={600} height={200} />
        
        </div>
        <div>
          <Image src="/images/innovation3.jpg" alt="Innovation 3" width={600} height={200} />
          
        </div>
      </Carousel>
      <h1 className="text-4xl md:text-6xl font-bold text-orange-500 mb-6">
        Crucible Innovation Forum: A recognised incubator helping turn concepts into working solutions
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
        Crucible Innovation Forum is the official innovation and incubation centre of Trident Academy of Technology, Bhubaneswar. It was established in 2023 as a Section 8 company to bring together the institution’s efforts in innovation, entrepreneurship, and startup development.
      </p>
      <h2 className="text-2xl font-semibold text-orange-500 mb-4">Vision</h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
        We aim to build a space where new ideas are encouraged, innovation is supported at every step, and students are motivated to turn their thoughts into real solutions.
      </p>

      <h2 className="text-2xl font-semibold text-orange-500 mb-4">Mission</h2>
      <ul className="list-disc text-left text-lg text-gray-700 max-w-2xl mx-auto mb-8">
        <li>We bring together students, mentors, and experts to work on ideas that can solve real problems.</li>
        <li>The forum encourages a culture where trying new things and learning from failure is part of the process.</li>
        <li>We provide proper guidance, tools, and connections to help projects move forward and reach the market.</li>
        <li>The focus is on building ventures that not only succeed but also support the wider community and environment.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-orange-500 mb-4">Encouraging Young Minds to Innovate and Lead</h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
        Crucible Innovation Forum fosters an environment where students are encouraged to innovate, take risks, and lead their ideas into tangible solutions.
      </p>
    </main>
  );
}
