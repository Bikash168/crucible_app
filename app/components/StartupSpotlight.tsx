// components/StartupSpotlight.tsx

const startups = [
    {
      name: 'BIAI',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      logo: '/logos/BIAI.png',
    },
    {
      name: 'PHAYUR',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      logo: '/logos/PHAYUR.png',
    },
    {
      name: 'WWS ENERGY',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      logo: '/logos/WWS_Energy.png',
    },
    {
      name: 'QUICKR MATHCODES',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      logo: '/logos/Quicker_Math_coders.png',
    },
    {
      name: 'GENY JOBDESK',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      logo: '/logos/GENY_Jobdek.png',
    },
    {
      name: 'EVOLVE CODELINK',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      logo: '/logos/EVOLVE_.png',
    },
    {
      name: 'CRUCIBLE FINTECH',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      logo: '/logos/Crucibel_Fintech.png',
    },
    {
      name: 'DECARB CLIMATE RESEARCH',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      logo: '/logos/Decarb.png',
    },
    {
      name: 'SKILLEM SERVICES',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      logo: '/logos/Skillem.png',
    },
  ];
  
  export default function StartupSpotlight() {
    return (
      <section className="py-16 bg-white text-gray-800 px-6">
        <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">
          STARTUP <span className="text-blue-800">SPOTLIGHT</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
  