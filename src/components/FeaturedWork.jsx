import React from 'react';

export default function FeaturedWork() {
  const featured = [
    {
      title: "Campaign Alpha",
      year: "2024",
      client: "Luxury Brand Collaboration",
      description: "Premium brand campaign with cinematic direction",
      image: "[Featured Work 1]"
    },
    {
      title: "Studio Project",
      year: "2024",
      client: "Creative Studio Partnership",
      description: "In-house studio production and direction",
      image: "[Featured Work 2]"
    },
    {
      title: "Visual Series",
      year: "2023",
      client: "Fashion & Lifestyle",
      description: "Editorial campaign for luxury fashion house",
      image: "[Featured Work 3]"
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-darkGray">
      <div className="container px-4 sm:px-6">
        <div className="mb-12 sm:mb-14 md:mb-16">
          <div className="section-divider mb-6 sm:mb-8"></div>
          <h2 className="section-title" style={{fontWeight: 300}}>FEATURED WORK</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featured.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl mb-4 sm:mb-6">
                <div className="w-full aspect-square bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-gold/20 transition-all duration-300">
                  <span className="text-gray-500 text-xs sm:text-sm">{project.image}</span>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-light tracking-wide text-white mb-1" style={{fontWeight: 300}}>{project.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 font-light" style={{fontWeight: 300}}>{project.client}</p>
                  </div>
                  <span className="text-gold text-xs tracking-widest ml-2 sm:ml-4 font-light flex-shrink-0" style={{fontWeight: 300}}>{project.year}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light" style={{fontWeight: 300}}>{project.description}</p>
              </div>

              <div className="mt-3 sm:mt-4 text-gold text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-light" style={{fontWeight: 300}}>
                VIEW PROJECT →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
