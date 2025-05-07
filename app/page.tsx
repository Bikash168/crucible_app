"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-black">
      {/* Hero Carousel */}
      <Carousel
        className="mb-0"
        autoPlay
        interval={3000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        swipeable
        emulateTouch
      >
        {["innovation1.jpg", "innovation2.jpg", "innovation3.jpg"].map((img, i) => (
          <div key={i}>
            <Image
              src={`/images/${img}`}
              alt={`Slide ${i + 1}`}
              width={1920}
              height={1080}
              className="w-full h-[30vh] sm:h-[50vh] md:h-[60vh] xl:h-[70vh] object-cover"
            />
          </div>
        ))}
      </Carousel>

      {/* Hero Callout */}
      <div className="text-center bg-white py-12 px-4 sm:px-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-4">
          Empowering Startups & Innovators of Tomorrow
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          We are a catalyst for transforming bold ideas into scalable solutions through support, mentorship, funding, and infrastructure.
        </p>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition">
          Explore Programs
        </button>
      </div>

      <div className="space-y-12 px-4 sm:px-12 py-12 bg-gray-50">

        {/* Main Heading Card */}
        <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-orange-500 mb-4">
              Crucible Innovation Forum: A Recognized Incubator
            </h2>
            <p className="text-lg text-gray-700 text-justify mb-4">
            Established in 2023, Crucible Innovation Forum stands as a beacon of innovation and entrepreneurship at the heart of the Trident Group of Institutions. As the official incubation center, we embrace a holistic and inclusive approach to nurturing startups—empowering aspiring innovators with the guidance, mentorship, and infrastructure needed to transform bold ideas into sustainable ventures.
            </p>
            <p className="text-lg text-gray-700 text-justify mb-4">
            Through strategic partnerships with academic institutions, industry leaders, government agencies, and development organizations, we extend our reach far beyond the campus, positively impacting communities and ecosystems across Eastern India.
            </p>
            <p className="text-lg text-gray-700 text-justify mb-4">
            At Crucible, we don’t just support startups—we cultivate changemakers, strengthen local economies, and inspire future-ready enterprises. From ideation to execution, our comprehensive support ecosystem ensures that innovation leads to action, and action leads to meaningful, long-lasting impact.
            </p>
          </div>
        </div>

        {/* Vision + Mission Cards (Side-by-Side) */}
        {[{
          title: "Vision",
          image: "/images/vision.jpg",
          content: "We aim to build a space where new ideas are encouraged, innovation is supported at every step, and students are motivated to turn their thoughts into real solutions."
        }, {
          title: "Mission",
          image: "/images/mission.jpg",
          content: (
            <ul className="list-disc list-inside text-left space-y-2">
              <li>Connect students, mentors, and experts to build problem-solving ideas.</li>
              <li>Encourage experimentation and learning from failures.</li>
              <li>Provide tools, guidance, and networks to go to market.</li>
              <li>Build ventures that benefit the community and environment.</li>
            </ul>
          )
        }].map(({ title, image, content }, i) => (
          <div key={i} className="bg-white shadow-lg rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="md:w-1/3">
              <Image 
                src={image} 
                alt={title} 
                width={150} 
                height={150} 
                className="rounded-full mx-auto shadow-lg transition-transform transform hover:scale-110"
              />
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-3xl font-semibold text-orange-600 mb-6 transition-all duration-300 hover:text-orange-700">{title}</h3>
              <div className="text-lg text-gray-800">{content}</div>
            </div>
          </div>
        ))}


        {/* Encouragement Block */}
        <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
          <h3 className="text-2xl font-semibold text-orange-500 mb-4">Encouraging Young Minds to Innovate and Lead</h3>
          <p className="text-lg text-gray-700">
            Crucible fosters a space where risk-taking and leadership go hand in hand with innovation.
          </p>
        </div>

        {/* Stats Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Startups Incubated", value: "50+" },
            { label: "Mentors & Experts", value: "30+" },
            { label: "Funding Raised", value: "₹2 Cr+" },
            { label: "Patents Filed", value: "12" }
          ].map(({ label, value }, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-orange-500">{value}</div>
              <div className="text-gray-600">{label}</div>
            </div>
          ))}
        </div>

        {/* Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { icon: "🚀", title: "Startup Acceleration", desc: "Scale your product with guidance, funding & market access." },
            { icon: "💡", title: "Pre-Incubation Support", desc: "From idea validation to prototype assistance." },
            { icon: "🌱", title: "Social Innovation", desc: "Impact-driven ideas that transform communities." }
          ].map(({ icon, title, desc }, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <div className="text-4xl mb-4">{icon}</div>
              <h4 className="text-xl font-semibold text-orange-500 mb-2">{title}</h4>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
