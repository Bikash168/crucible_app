'use client';
import Image from "next/image";

export default function About() {
  return (
    <>
      {/* Main About Page */}
      <main className="min-h-screen bg-white px-4 py-12 sm:px-6 lg:px-16 text-center">
        {/* Hero Section */}
        <div className="relative w-full h-[300px] md:h-[400px] mb-12 rounded-xl overflow-hidden shadow-xl group">
          <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-orange-500 bg-opacity-60 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg animate-fadeIn">
              About Crucible Innovation Forum
            </h1>
          </div>
          <div className="absolute inset-0 animate-networking">
            <div className="network-container">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="network-node"
                  style={{
                    animationDelay: `${Math.random() * 5}s`, // Random delay for each node
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="max-w-4xl mx-auto text-gray-700">
          <p className="text-lg md:text-xl mb-8">
            <span className="font-semibold text-orange-600">Crucible Innovation Forum</span> is the official innovation and incubation centre of <strong>Trident Group of Institutions, Bhubaneswar</strong>. Established in 2023, it acts as a launchpad for creative minds to turn ideas into impactful ventures with mentorship, resources, and infrastructure.
          </p>

          {/* Key Initiatives */}
          <h2 className="text-2xl md:text-3xl font-semibold text-orange-600 mb-4">
            Key Initiatives
          </h2>
          <ul className="list-disc list-inside text-left text-lg text-gray-600 mb-10 px-4 sm:px-10">
            <li>Entrepreneurship Development Cell (EDC)</li>
            <li>Innovation and Entrepreneurship Development Cell (IEDC) funded by DST</li>
            <li>Cisco thingQbator – an IoT-focused makerspace</li>
            <li>Startup Bootcamps and Hackathons</li>
            <li>Workshops on emerging technologies (AI, IoT, Blockchain, etc.)</li>
          </ul>

          {/* Image */}
          <div className="my-12 px-4">
            <div className="max-w-xl mx-auto overflow-hidden rounded-lg shadow-lg border-4 border-orange-500 hover:scale-105 transition-all duration-300 ease-in-out">
              <Image
                src="/images/CrucibleNew.png" // replace with your actual static file name
                alt="Test Crucible Image"
                width={800}
                height={400}
                className="object-cover"
              />
            </div>

          </div>

          {/* Mission */}
          <h2 className="text-2xl md:text-3xl font-semibold text-orange-600 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            To empower innovators by nurturing their ideas with expert mentorship, training programs, access to labs and workspace, and guiding them to build scalable and sustainable startups that address real-world problems.
          </p>

          {/* Vision */}
          <h2 className="text-2xl md:text-3xl font-semibold text-orange-600 mb-4">
            Our Vision
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            To be a premier hub for innovation and entrepreneurship in Eastern India, inspiring the next generation of changemakers.
          </p>

          {/* What We Offer */}
          <h2 className="text-2xl md:text-3xl font-semibold text-orange-600 mb-4">
            What We Offer
          </h2>
          <ul className="list-disc list-inside text-left text-lg text-gray-600 px-4 sm:px-10 mb-12">
            <li>Mentorship from experienced entrepreneurs and industry experts</li>
            <li>Co-working spaces with high-speed internet</li>
            <li>Access to labs and prototyping tools</li>
            <li>Funding guidance and investor connects</li>
            <li>Startup registration and legal support</li>
          </ul>
        </section>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes networking {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-networking {
          animation: networking 15s linear infinite;
        }

        .network-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .network-node {
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: #ffeb3b; /* Bulb color */
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(255, 235, 59, 0.8);
          animation: nodeAnimation 2s infinite ease-in-out, moveNode 5s infinite ease-in-out;
        }

        @keyframes nodeAnimation {
          0% {
            opacity: 0.5;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
          100% {
            opacity: 0.5;
            transform: scale(0.8);
          }
        }

        @keyframes moveNode {
          0% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(20px);
          }
          50% {
            transform: translateY(20px) translateX(-20px);
          }
          75% {
            transform: translateY(-10px) translateX(-30px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>
    </>
  );
}
