import React from 'react';

export default function Food() {
  const foodProjects = [
    { 
      title: "CULINARY VISUAL", 
      category: "Food Photography",
      description: "Fine dining storytelling through premium visual direction",
      year: "2024"
    },
    { 
      title: "GASTRONOMIC JOURNEY", 
      category: "Commercial",
      description: "Brand narrative through culinary aesthetics",
      year: "2024"
    },
    { 
      title: "LUXURY DINING", 
      category: "Editorial Direction",
      description: "Premium restaurant and lifestyle content",
      year: "2023"
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-darkGray">
      <div className="container px-4 sm:px-6">
        <div className="mb-12 sm:mb-14 md:mb-16">
          <div className="section-divider mb-6 sm:mb-8"></div>
          <h2 className="section-title" style={{fontWeight: 300}}>FOOD</h2>
        </div>

        {/* Food Projects - Alternating Full-Width Layout */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {foodProjects.map((project, index) => (
            <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center`}>
              {/* Alternating Layout: TEXT on one side, REEL on the other */}
              {index % 2 === 0 ? (
                <>
                  {/* TEXT - LEFT */}
                  <div className="space-y-4 order-2 md:order-1">
                    <p className="text-gold text-xs tracking-widest font-light" style={{fontWeight: 300}}>{project.category}</p>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide text-white" style={{fontWeight: 300}}>{project.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light" style={{fontWeight: 300}}>{project.description}</p>
                    <p className="text-gray-500 text-xs sm:text-sm pt-4 font-light" style={{fontWeight: 300}}>{project.year}</p>
                  </div>

                  {/* REEL - RIGHT */}
                  <div className="group cursor-pointer order-1 md:order-2">
                    <div className="relative">
                      <div className="w-full aspect-video bg-gradient-to-br from-orange-700/30 to-amber-900/30 border border-gray-700 rounded-3xl flex items-center justify-center overflow-hidden hover:shadow-lg hover:shadow-gold/20 transition-all duration-300">
                        <span className="text-gray-500 text-sm">[Food Reel {index + 1}]</span>
                      </div>
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl bg-black/30">
                        <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center">
                          <svg className="w-10 h-10 text-dark" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* REEL - LEFT */}
                  <div className="group cursor-pointer order-1 md:order-1">
                    <div className="relative">
                      <div className="w-full aspect-video bg-gradient-to-br from-orange-700/30 to-amber-900/30 border border-gray-700 rounded-3xl flex items-center justify-center overflow-hidden hover:shadow-lg hover:shadow-gold/20 transition-all duration-300">
                        <span className="text-gray-500 text-sm">[Food Reel {index + 1}]</span>
                      </div>
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl bg-black/30">
                        <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center">
                          <svg className="w-10 h-10 text-dark" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* TEXT - RIGHT */}
                  <div className="space-y-4 order-2 md:order-2">
                    <p className="text-gold text-xs tracking-widest font-light" style={{fontWeight: 300}}>{project.category}</p>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide text-white" style={{fontWeight: 300}}>{project.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light" style={{fontWeight: 300}}>{project.description}</p>
                    <p className="text-gray-500 text-xs sm:text-sm pt-4 font-light" style={{fontWeight: 300}}>{project.year}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
