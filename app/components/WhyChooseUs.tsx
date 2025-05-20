"use client";
import { useState } from "react";
import Image from "next/image";

const data = [
  {
    title: "Complete Ecosystem",
    content:
      "Our diverse and impactful ecosystem is designed to nurture and propel early-stage ideas, startups, and entrepreneurs. Our support spans across key areas to ensure that your startup journey is seamless: mentoring expertise, funding, infrastructure support, open-access scientific and prototyping facilities, business, IP & regulatory advisory services, specialized resource centers and so much more!",
    image: "/images/ecosystem.jpg",
  },
  {
    title: "Mentoring Expertise",
    content:
      "Get mentored by industry experts, domain leaders, and successful entrepreneurs who bring real-world experience.",
    image: "/images/mentoring.jpg",
  },
  {
    title: "Track record",
    content:
      "Our incubator has supported 100+ startups with a remarkable success rate, attracting investments and partnerships.",
    image: "/images/track-record.jpg",
  },
  {
    title: "Stimulating Environment",
    content:
      "Enjoy access to co-working spaces, labs, workshops, hackathons, and a like-minded innovation-driven community.",
    image: "/images/environment.jpg",
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className="py-20 px-4 sm:px-8 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center mb-12 leading-snug">
        Why Choose Us?
      </h2>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
        {/* Left Side - Dynamic Image */}
        <div className="rounded-2xl overflow-hidden shadow-md transition-all duration-500">
          <Image
            src={activeIndex >= 0 ? data[activeIndex].image : data[0].image}
            alt={data[activeIndex >= 0 ? activeIndex : 0].title}
            width={600}
            height={400}
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>

        {/* Right Side - Accordion */}
        <div className="space-y-4">
          {data.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl border ${
                index === activeIndex
                  ? "bg-blue-100 border-blue-300"
                  : "bg-white border-gray-200"
              } shadow-md transition-all`}
            >
              <button
                className="flex justify-between items-center w-full p-4 sm:p-5 text-left text-lg sm:text-xl font-semibold text-blue-900 hover:text-blue-700 transition-colors"
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
                <span className="text-base sm:text-lg">
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-4 sm:px-5 pb-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
