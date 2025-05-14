// components/StartupSpotlight.tsx

const startups = [
    {
      name: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      logo: '/logos/BIAI.png',
    },
    {
      name: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      logo: '/logos/Crucibel_Fintech.png',
    },
    {
      name: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      logo: '/logos/Decarb.png',
    },
    {
      name: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      logo: '/logos/EVOLVE_.png',
    },
    {
      name: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      logo: '/logos/GENY_Jobdek.png',
    },
    {
      name: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      logo: '/logos/PHAYUR.png',
    },
  ];
  
  export default function StartupSpotlight() {
    return (
      <section className="py-16 bg-white text-gray-800 px-6">
        <h2 className="text-3xl font-bold text-orange-600 mb-10 text-center">
          STARTUP <span className="text-orange-600">SPOTLIGHT</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {startups.map((startup, index) => (
            <div key={index} className="flex items-start gap-4">
              <img
                src={startup.logo}
                alt={startup.name}
                className="w-30 h-30 object-cover aspect-square rounded bg-white p-1 border flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-lg">{startup.name}</h3>
                <p className="text-sm text-gray-600">{startup.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  