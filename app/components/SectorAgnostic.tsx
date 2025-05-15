// components/SectorAgnostic.tsx

const sectors = [
    { icon: '/icons/biotech.svg', name: 'Biotech' },
    { icon: '/icons/renwable-energy.svg', name: 'Renwable Energy' },
    { icon: '/icons/ai.svg', name: 'AI' },
    { icon: '/icons/climate-tech.svg', name: 'Climate Tech' },
    { icon: '/icons/clean-tech.svg', name: 'Clean Tech' },
    { icon: '/icons/Environment_Sustainability.svg', name: 'Environment Sustainability' },
    { icon: '/icons/agritech.svg', name: 'Agri Tech' },
    { icon: '/icons/edutech.svg', name: 'Edutech' },
    { icon: '/icons/social-innovation.svg', name: 'Social Innovation' },
    { icon: '/icons/defence.svg', name: 'Defence Innovation' },
  ];
  
  export default function SectorAgnostic() {
    return (
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-800">
          SECTOR <span className="text-blue-800">AGNOSTIC</span>
        </h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 px-6">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition hover:scale-105 duration-300"
            >
              <img src={sector.icon} alt={sector.name} className="w-14 h-14 mb-2" />
              <p className="font-medium text-sm">{sector.name.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  