export default function Initiatives() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 px-4 py-16 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Our Initiatives
      </h1>
      <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
        Crucible Innovation Forum supports a variety of initiatives designed to foster innovation and entrepreneurship among students. Explore how we’re empowering the next generation of leaders and creators.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* EDC Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">
            Entrepreneurship Development Cell (EDC)
          </h2>
          <p className="text-lg text-gray-600">
            Launched in 2006, Trident’s first initiative aimed at nurturing an entrepreneurial mindset. EDC empowers students with startup skills, business understanding, and the confidence to embark on their entrepreneurial journeys.
          </p>
        </div>

        {/* IEDC Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">
            Innovation and Entrepreneurship Development Cell (IEDC)
          </h2>
          <p className="text-lg text-gray-600">
            Formed in 2013, IEDC fosters innovation through collaboration and mentorship, helping students transform their ideas into viable business models with support from industry experts and mentors.
          </p>
        </div>

        {/* IoT Makerspace Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">
            Cisco thingQbator – IoT Makerspace
          </h2>
          <p className="text-lg text-gray-600">
            Established in 2018, thingQbator is an innovative makerspace for students to explore the Internet of Things (IoT). Students can pitch ideas, join cohorts, and receive seed funding for their projects.
          </p>
        </div>

        {/* Additional Initiatives */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">
            Sustainable Innovation and Green Tech
          </h2>
          <p className="text-lg text-gray-600">
            Our Green Tech initiative aims to support sustainable innovation and address climate challenges through student-driven research, eco-friendly tech solutions, and impactful projects that shape the future of environmental conservation.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">
            Research and Development (R&D) Collaboration Hub
          </h2>
          <p className="text-lg text-gray-600">
            Our R&D Hub fosters collaboration between students, faculty, and industry experts to accelerate breakthrough innovations in fields like AI, Robotics, and Renewable Energy, creating pathways for commercializing research.
          </p>
        </div>

      </div>

      {/* Call to Action */}
      <div className="mt-12">
        <a
          href="#"
          className="bg-orange-600 text-white py-3 px-8 rounded-lg text-lg font-semibold transition-transform transform hover:scale-105 hover:bg-orange-700 duration-300 ease-in-out"
        >
          Join Our Initiatives
        </a>
      </div>
    </main>
  );
}
