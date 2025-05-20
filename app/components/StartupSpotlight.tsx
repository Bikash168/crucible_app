// components/StartupSpotlight.tsx

const startups = [
    {
      name: 'BIAI',
      description:
        'BIAI is a technology company that builds AI-based solutions for businesses. It helps companies improve their processes with smart, industry-focused tools.',
      logo: '/logos/BIAI.png',
    },
    {
      name: 'PHAYUR',
      description:
        'Phayur is a wellness startup that creates Ayurvedic health products. It combines traditional knowledge with modern research for better healthcare.',
      logo: '/logos/PHAYUR.png',
    },
    {
      name: 'WWS ENERGY',
      description:
        'WWS Energy focuses on renewable and clean energy solutions. The company aims to provide affordable, eco-friendly power for a better future.',
      logo: '/logos/WWS_Energy.png',
    },
    {
      name: 'QUICKR MATHCODES',
      description:
        'Quickr MathCodes is an edtech startup that teaches math through coding. It helps students develop logical thinking in a fun and interactive way.',
      logo: '/logos/Quicker_Math_coders.png',
    },
    {
      name: 'GENY JOBDESK',
      description:
        'GenY JobDesk is a career platform that connects young job seekers with companies. It offers smart tools for better hiring and career growth.',
      logo: '/logos/GENY_Jobdek.png',
    },
    {
      name: 'EVOLVE CODELINK',
      description:
        'Evolve Codelink provides training in coding and software development. It helps students and beginners prepare for jobs in the tech industry.',
      logo: '/logos/EVOLVE_.png',
    },
    {
      name: 'CRUCIBLE FINTECH',
      description:
        'Crucible Fintech is a financial technology startup offering digital tools. It supports users with simple and secure ways to manage money.',
      logo: '/logos/Crucibel_Fintech.png',
    },
    {
      name: 'DECARB CLIMATE RESEARCH',
      description:
        'Decarb Climate Research works on climate change and sustainability. The startup focuses on research and solutions to lower carbon emissions.',
      logo: '/logos/Decarb.png',
    },
    {
      name: 'SKILLEM SERVICES',
      description:
        'Skillem Services is a skill development company for youth. It offers training programs that improve job readiness and career opportunities.',
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
  