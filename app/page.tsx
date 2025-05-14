"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectorAgnostic from "@/components/SectorAgnostic";
import StartupSpotlight from "@/components/StartupSpotlight";
import Link from "next/link";
import { useEffect } from "react";
import CountUp from 'react-countup';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-black">
      {/* Hero Carousel */}
      <Carousel
        autoPlay
        interval={4000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        swipeable
        emulateTouch
        className="w-full h-full"
        renderIndicator={(onClickHandler, isSelected, index) => (
          <button
            className={`${isSelected ? "bg-orange-500" : "bg-gray-300"
              } w-3 h-3 rounded-full mx-1`}
            onClick={onClickHandler}
          ></button>
        )}
      >
        {["innovation1.jpg", "innovation2.jpg", "innovation3.jpg"].map(
          (img, i) => (
            <div key={i} className="relative w-full" style={{ height: "85vh" }}>
              <Image
                src={`/images/${img}`}
                alt={`Slide ${i + 1}`}
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          )
        )}
      </Carousel>

      {/* Hero Callout */}
      <section className="text-center py-16 px-4 sm:px-12 bg-white">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-6 leading-tight">
          Empowering Startups & Innovators of Tomorrow
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          A catalyst for transforming bold ideas into scalable solutions through
          support, mentorship, funding, and infrastructure.
        </p>
        <button className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition shadow-md hover:shadow-lg">
          Explore Programs
        </button>
      </section>

      <section className="space-y-16 px-4 sm:px-12 py-16 bg-gray-50">

        {/* About Crucible */}
        <div className="bg-white rounded-3xl shadow-lg p-10 flex flex-col md:flex-row items-center gap-8 transition hover:shadow-2xl">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-4">
              Crucible Innovation Forum: A Recognized Incubator
            </h2>
            <p className="text-gray-700 text-lg mb-4 text-justify">
              Established in 2023, Crucible Innovation Forum is the official
              incubation center of the Trident Group of Institutions. We empower
              innovators with guidance, mentorship, and infrastructure to transform
              ideas into sustainable ventures.
            </p>
            <p className="text-gray-700 text-lg mb-4 text-justify">
              Our strategic partnerships with academia, industry, and government
              agencies help expand our impact across Eastern India.
            </p>
            <p className="text-gray-700 text-lg text-justify">
              From ideation to execution, our support ensures that innovation drives
              meaningful, long-lasting impact.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Vision",
              image: "/images/vision.jpg",
              content:
                "To build a space where ideas are encouraged, innovation is supported, and students are motivated to turn their thoughts into real solutions.",
            },
            {
              title: "Mission",
              image: "/images/mission.jpg",
              content: (
                <ul className="list-disc list-inside text-left space-y-2 text-gray-700">
                  <li>Connect students, mentors, and experts to build ideas.</li>
                  <li>Encourage experimentation and learning from failures.</li>
                  <li>Provide tools, guidance, and networks to go to market.</li>
                  <li>Build ventures that benefit society and environment.</li>
                </ul>
              ),
            },
          ].map(({ title, image, content }, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-md p-8 flex flex-col sm:flex-row items-center gap-6 hover:shadow-xl transition"
            >
              <div className="sm:w-1/3">
                <Image
                  src={image}
                  alt={title}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto shadow-lg transition-transform transform hover:scale-110"
                />
              </div>
              <div className="sm:w-2/3 text-center sm:text-left">
                <h3 className="text-2xl font-semibold text-orange-600 mb-4">
                  {title}
                </h3>
                <div className="text-lg text-gray-700">{content}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Encouragement */}
        <div className="bg-white shadow-xl rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-orange-500 mb-4">
            Encouraging Young Minds to Innovate and Lead
          </h3>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            Crucible fosters a space where risk-taking and leadership go hand in hand with innovation.
          </p>
        </div>

        <SectorAgnostic />


        {/* Stats */}
        <div className="bg-white shadow-xl rounded-2xl p-10 text-center">
          <h3 className="text-3xl font-semibold text-orange-500 mb-8">
            OUR IMPACT
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Startups Incubated", value: 50 },
              { label: "Mentors & Experts", value: 30 },
              { label: "Job Created", value: 100 },
              { label: "Patents Filed", value: 12 },
            ].map(({ label, value }, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  <CountUp end={value} duration={2} suffix="+" />
                </div>
                <div className="text-gray-600 text-lg">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            {
              icon: "🚀",
              title: "Startup Acceleration",
              desc: "Scale your product with expert guidance, funding & market access.",
            },
            {
              icon: "💡",
              title: "Pre-Incubation Support",
              desc: "From idea validation to prototype assistance and testing.",
            },
            {
              icon: "🌱",
              title: "Social Innovation",
              desc: "Impact-driven ideas that solve real-world community challenges.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{icon}</div>
              <h4 className="text-xl font-semibold text-orange-600 mb-2">
                {title}
              </h4>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>

        <StartupSpotlight />

      </section>
    </main>
  );
}
