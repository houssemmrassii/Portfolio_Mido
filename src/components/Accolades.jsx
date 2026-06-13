import React from 'react';

export default function Accolades() {
  const clients = [
    { name: "Studio A", logo: "STUDIO" },
    { name: "Brand B", logo: "IMPACT" },
    { name: "Creative C", logo: "MOTION" },
    { name: "Global D", logo: "LUXURY" },
    { name: "Vision E", logo: "CREATIVE" },
    { name: "Design F", logo: "STUDIO" },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-dark">
      <div className="container px-4 sm:px-6">
        <div className="mb-12 sm:mb-14 md:mb-16">
          <div className="section-divider mb-6 sm:mb-8"></div>
          <h2 className="section-title" style={{fontWeight: 300}}>ACCOLADES</h2>
        </div>

        <p className="text-gray-400 text-center mb-14 sm:mb-16 md:mb-20 max-w-2xl mx-auto font-light text-xs sm:text-sm md:text-base" style={{fontWeight: 300}}>
          Trusted by leading international brands and creative organizations
        </p>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6 mb-14 md:mb-20">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl flex flex-col items-center justify-center hover:border-gold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gold/20 p-3 sm:p-4 cursor-pointer"
            >
              <p className="text-gray-400 text-xs text-center font-light" style={{fontWeight: 300}}>{client.logo}</p>
              <p className="text-gray-500 text-xs text-center mt-2 sm:mt-3 line-clamp-2 font-light" style={{fontWeight: 300}}>{client.name}</p>
            </div>
          ))}
        </div>

        {/* Awards/Recognition */}
        <div className="border-t border-gray-800 pt-12 md:pt-16">
          <p className="text-gold text-xs sm:text-sm tracking-widest font-light mb-8 md:mb-10" style={{fontWeight: 300}}>RECOGNITION & AWARDS</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
            <div>
              <p className="text-gold text-3xl sm:text-4xl md:text-5xl font-light mb-2 sm:mb-3" style={{fontWeight: 300}}>25+</p>
              <p className="text-gray-400 font-light text-sm md:text-base" style={{fontWeight: 300}}>International Awards & Recognition</p>
            </div>
            <div>
              <p className="text-gold text-3xl sm:text-4xl md:text-5xl font-light mb-2 sm:mb-3" style={{fontWeight: 300}}>100+</p>
              <p className="text-gray-400 font-light text-sm md:text-base" style={{fontWeight: 300}}>Global Clients & Collaborations</p>
            </div>
            <div>
              <p className="text-gold text-3xl sm:text-4xl md:text-5xl font-light mb-2 sm:mb-3" style={{fontWeight: 300}}>40+</p>
              <p className="text-gray-400 font-light text-sm md:text-base" style={{fontWeight: 300}}>Featured in International Publications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
