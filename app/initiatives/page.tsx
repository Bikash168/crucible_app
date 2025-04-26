export default function Initiatives() {
    return (
      <main className="min-h-screen bg-white px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-orange-600 mb-6">
          Our Initiatives
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Crucible Innovation Forum supports a variety of initiatives designed to foster innovation and entrepreneurship among students.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-orange-600 mb-4">
              Entrepreneurship Development Cell (EDC)
            </h2>
            <p className="text-lg text-gray-600">
              Started in 2006, this was Trident’s first step toward promoting an entrepreneurial mindset among students. The cell helps students explore startup ideas, understand business basics, and gain confidence in shaping their own ventures.
            </p>
          </div>
  
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-orange-600 mb-4">
              Innovation and Entrepreneurship Development Cell (IEDC)
            </h2>
            <p className="text-lg text-gray-600">
              Formed in 2013 with support from the Department of Science and Technology, IEDC provides a space for students to build innovative solutions and transform them into feasible business models, with support from mentors and industry experts.
            </p>
          </div>
  
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-orange-600 mb-4">
              Cisco thingQbator – IoT Makerspace
            </h2>
            <p className="text-lg text-gray-600">
              Established in 2018, thingQbator is a dedicated space for students to work on IoT-based projects. It allows them to pitch ideas, join cohorts, and receive seed funding for their prototypes.
            </p>
          </div>
        </div>
      </main>
    );
  }
  