import React, { useState } from 'react';
import VideoModal from './VideoModal';

const VIMEO_PARAMS = 'title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479';

const embedUrl = (vimeoId, extra = '') =>
  `https://player.vimeo.com/video/${vimeoId}?${VIMEO_PARAMS}${extra}`;

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "REEL ONE",
      category: "DIRECTION",
      vimeoId: "1200989289",
      year: "2024"
    },
    {
      id: 2,
      title: "REEL TWO",
      category: "COMMERCIAL",
      vimeoId: "1200989684",
      year: "2024"
    },
    {
      id: 3,
      title: "REEL THREE",
      category: "MOTION DESIGN",
      vimeoId: "1200989895",
      year: "2023"
    },
    {
      id: 4,
      title: "REEL FOUR",
      category: "LUXURY CAMPAIGN",
      vimeoId: "1200990157",
      year: "2023"
    },
  ];

  return (
    <>
      <section className="py-16 sm:py-20 md:py-24 bg-dark">
        <div className="container px-4 sm:px-6">
          {/* Section Header */}
          <div className="flex flex-col items-center space-y-8 sm:space-y-10 md:space-y-12 mb-16 sm:mb-20 md:mb-28">
            <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gold" style={{fontWeight: 700, letterSpacing: '0.05em'}}>REELS</h2>
            <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                {/* Video Container */}
                <div className="relative overflow-hidden rounded-2xl mb-6 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30">
                  {/* Thumbnail with aspect ratio 9:16 */}
                  <div className="w-full aspect-[9/16] bg-gradient-to-br from-gray-800 to-gray-950 relative overflow-hidden group">
                    {/* Looping muted preview via Vimeo background mode */}
                    <iframe
                      src={embedUrl(video.vimeoId, '&background=1&autoplay=1&loop=1&muted=1')}
                      className="w-full h-full pointer-events-none"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title={video.title}
                    ></iframe>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 rounded-2xl"></div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-20 sm:w-24 h-20 sm:h-24 bg-gold rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-gold/50">
                        <svg className="w-8 sm:w-10 h-8 sm:h-10 text-dark ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Title Overlay - Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <p className="text-gold text-xs sm:text-xs tracking-widest font-light mb-2" style={{fontWeight: 300}}>{video.category}</p>
                      <h3 className="text-white text-sm sm:text-base font-light tracking-wide" style={{fontWeight: 300}}>{video.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="space-y-2">
                  <p className="text-gray-400 text-xs sm:text-sm font-light" style={{fontWeight: 300}}>{video.year}</p>
                  <p className="text-gold text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-light" style={{fontWeight: 300}}>
                    PLAY REEL →
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videos={videos}
          onVideoChange={setSelectedVideo}
        />
      )}
    </>
  );
}
