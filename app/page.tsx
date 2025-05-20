"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectorAgnostic from "@/components/SectorAgnostic";
import StartupSpotlight from "@/components/StartupSpotlight";
import WhyChooseUs from "@/components/WhyChooseUs";
import Link from "next/link";
import CountUp from "react-countup";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-black">
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
            className={`${isSelected ? "bg-blue-900" : "bg-gray-300"
              } w-3 h-3 rounded-full mx-1`}
            onClick={onClickHandler}
            aria-label={`Slide ${index + 1}`}
          ></button>
        )}
      >
        {["innovation1.jpg", "innovation2.jpg", "innovation3.jpg"].map((img, i) => (
          <div
            key={i}
            className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh]"
          >
            <Image
              src={`/images/${img}`}
              alt={`Slide ${i + 1}`}
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </Carousel>

      {/* Hero Callout */}
      <section className="relative overflow-hidden text-center py-20 px-4 sm:px-10 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-blue-800 mb-6 leading-tight animate-fade-in">
            Empowering Startups & Innovators of Tomorrow
          </h1>

          <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in delay-200">
            A catalyst for transforming bold ideas into scalable solutions through support, mentorship, funding, and infrastructure.
          </p>

          <Link href="/initiatives">
            <button className="bg-blue-800 hover:bg-orange-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition duration-300 ease-in-out animate-fade-in delay-300">
              Explore Programs
            </button>
          </Link>
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-orange-100 rounded-full opacity-30 blur-3xl -z-10 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-100 rounded-full opacity-30 blur-3xl -z-10 animate-float delay-500"></div>
      </section>

      {/* About Section */}
      <section className="space-y-16 px-4 sm:px-12 py-16 bg-gradient-to-br from-white to-blue-50">
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 transition duration-300 hover:shadow-xl">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-800 mb-4 leading-snug">
              Crucible Innovation Forum: <br className="hidden sm:inline" />
              A Recognized Incubator
            </h2>
            <p className="text-gray-700 text-sm sm:text-base mb-4 text-justify leading-relaxed">
              Established in 2023, Crucible Innovation Forum is the official incubation center of the Trident Group of Institutions. We empower innovators with guidance, mentorship, and infrastructure to transform ideas into sustainable ventures.
            </p>
            <p className="text-gray-700 text-sm sm:text-base mb-4 text-justify leading-relaxed">
              Our strategic partnerships with academia, industry, and government agencies help expand our impact across Eastern India.
            </p>
            <p className="text-gray-700 text-sm sm:text-base text-justify leading-relaxed">
              From ideation to execution, our support ensures that innovation drives meaningful, long-lasting impact.
            </p>
          </div>

          {/* Logo Section */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end animate-fade-in delay-200">
            <div className="bg-white p-3 md:p-5 rounded-xl shadow-sm border border-gray-100 max-w-xs w-full">
              <img
                src="/logo.png"
                alt="Crucible Logo"
                className="w-full h-auto object-contain"
              />
            </div>
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
                <h3 className="text-3xl font-bold text-blue-800 mb-4">
                  {title}
                </h3>
                <div className="text-lg text-gray-700">{content}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Encouragement */}
        <div className="bg-white shadow-xl rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-blue-800 mb-4">
            Encouraging Young Minds to Innovate and Lead
          </h3>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            Crucible fosters a space where risk-taking and leadership go hand in hand with innovation.
          </p>
        </div>

        <SectorAgnostic />
 <WhyChooseUs />
        {/* Stats */}
        <div className="bg-white shadow-xl rounded-2xl p-10 text-center">
          <h3 className="text-3xl font-bold text-blue-800 mb-8">
            Our Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Startups Incubated", value: 50 },
              { label: "Mentors & Experts", value: 30 },
              { label: "Job Created", value: 100 },
              { label: "Patents Filed", value: 12 },
            ].map(({ label, value }, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-blue-800 mb-2">
                  <CountUp end={value} duration={2} suffix="+" />
                </div>
                <div className="text-gray-600 text-lg">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="bg-white shadow-xl rounded-2xl p-10 text-center mt-16">
          <h3 className="text-3xl font-bold text-blue-800 mb-8">
            Our Partners
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
            {[
              "/partners/partner1.png",
              "/partners/partner2.png",
              "/partners/partner3.png",
              "/partners/partner4.jpg",
            ].map((logo, i) => (
              <div key={i} className="flex justify-center">
                <img
                  src={logo}
                  alt={`Partner ${i + 1}`}
                  className={`${i === 2 ? "h-28" : "h-20"} w-auto object-contain transition`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Focus Areas */}
        <div className="bg-white p-10 rounded-2xl shadow-xl">
          <h3 className="text-3xl font-bold text-blue-800 text-center mb-10">
            Focus Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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
                className="bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{icon}</div>
                <h4 className="text-xl font-semibold text-blue-800 mb-2">
                  {title}
                </h4>
                <p className="text-lg text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <StartupSpotlight />
      </section>
    </main>
  );
}
