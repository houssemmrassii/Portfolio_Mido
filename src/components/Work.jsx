import React, { useState } from 'react';

const VIMEO_PARAMS = 'title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479';

const embedUrl = (vimeoId, autoplay = false) =>
  `https://player.vimeo.com/video/${vimeoId}?${VIMEO_PARAMS}${autoplay ? '&autoplay=1' : ''}`;

export default function Work() {
  const [fullscreenIndex, setFullscreenIndex] = useState(null);

  const projects = [
    {
      title: "GYM ANNIVERSARY / LES MILLS EXPERIENCE",
      description: "Capturing movement, rhythm, and the atmosphere of a Les Mills fitness experience during a gym anniversary celebration.",
      year: "2024",
      vimeoId: "1200989289"
    },
    {
      title: "IMPACT / TUNISIAN NATIONAL TEAM",
      description: "Highlighting performance, intensity, and the energy behind Impact's partnership with the Tunisian national volleyball team.",
      year: "2024",
      vimeoId: "1200989684"
    },
    {
      title: "STEAK PASTA / SOUND THROUGH FOOD",
      description: "Focused on texture, motion, and immersive sound design to elevate the sensory experience of the dish.",
      year: "2023",
      vimeoId: "1200989895"
    },
    {
      title: "HYDRAFACIAL / MACRO DETAILS",
      description: "Combining macro visuals and immersive sound design to highlight texture, precision, and skincare aesthetics.",
      year: "2023",
      vimeoId: "1200990157"
    },
  ];

  const handleFullscreen = (index) => {
    setFullscreenIndex(index);
  };

  const handleCloseFullscreen = () => {
    setFullscreenIndex(null);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-dark">
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col items-center space-y-8 sm:space-y-10 md:space-y-12 mb-16 sm:mb-20 md:mb-28">
          <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gold" style={{fontWeight: 700, letterSpacing: '0.05em'}}>WORK</h2>
          <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        </div>

        {/* Projects - Alternating Full-Width Layout */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {projects.map((project, index) => (
            <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center`}>
              {/* Alternating Layout: TEXT on one side, REEL on the other */}
              {index % 2 === 0 ? (
                <>
                  {/* TEXT - LEFT */}
                  <div className="space-y-3 order-2 md:order-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-light tracking-wide text-white" style={{fontWeight: 300, letterSpacing: '0.05em'}}>{project.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light" style={{fontWeight: 300}}>{project.description}</p>
                  </div>

                  {/* REEL - RIGHT */}
                  <div className="group order-1 md:order-2">
                    <div className="relative mx-auto max-w-xs">
                      <div className="w-full aspect-[9/16] bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 relative">
                        <iframe
                          src={embedUrl(project.vimeoId)}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          title={project.title}
                        ></iframe>

                        {/* Fullscreen Button - Minimalist */}
                        <button
                          onClick={() => handleFullscreen(index)}
                          className="absolute bottom-3 right-3 w-8 h-8 bg-white/20 hover:bg-white/40 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 backdrop-blur-sm"
                          title="Fullscreen"
                        >
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M8 8h8M8 8v8h8V8m6 6v6h-6m0-6h6v6m-6-6V8" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* REEL - LEFT */}
                  <div className="group order-1 md:order-1">
                    <div className="relative mx-auto max-w-xs">
                      <div className="w-full aspect-[9/16] bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 relative">
                        <iframe
                          src={embedUrl(project.vimeoId)}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          title={project.title}
                        ></iframe>

                        {/* Fullscreen Button - Minimalist */}
                        <button
                          onClick={() => handleFullscreen(index)}
                          className="absolute bottom-3 right-3 w-8 h-8 bg-white/20 hover:bg-white/40 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 backdrop-blur-sm"
                          title="Fullscreen"
                        >
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M8 8h8M8 8v8h8V8m6 6v6h-6m0-6h6v6m-6-6V8" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* TEXT - RIGHT */}
                  <div className="space-y-3 order-2 md:order-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-light tracking-wide text-white" style={{fontWeight: 300, letterSpacing: '0.05em'}}>{project.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light" style={{fontWeight: 300}}>{project.description}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal - 9:16 Aspect Ratio */}
      {fullscreenIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          onClick={handleCloseFullscreen}
        >
          <div
            className="relative w-screen h-screen flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Video Container - 9:16 ratio centered */}
            <div className="flex items-center justify-center h-full">
              <div className="relative" style={{aspectRatio: '9/16', height: '100vh'}}>
                <iframe
                  key={fullscreenIndex}
                  src={embedUrl(projects[fullscreenIndex].vimeoId, true)}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title={projects[fullscreenIndex].title}
                ></iframe>

                {/* Close Button */}
                <button
                  onClick={handleCloseFullscreen}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/40 rounded-md flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-50"
                  title="Close"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
