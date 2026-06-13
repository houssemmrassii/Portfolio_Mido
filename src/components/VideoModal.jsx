import React, { useEffect } from 'react';

const VIMEO_PARAMS = 'title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479';

const embedUrl = (vimeoId, extra = '') =>
  `https://player.vimeo.com/video/${vimeoId}?${VIMEO_PARAMS}${extra}`;

export default function VideoModal({ video, onClose, videos, onVideoChange }) {
  const currentIndex = videos.findIndex(v => v.id === video.id);
  const hasNext = currentIndex < videos.length - 1;
  const hasPrev = currentIndex > 0;

  const handleNext = () => {
    if (hasNext) {
      onVideoChange(videos[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (hasPrev) {
      onVideoChange(videos[currentIndex - 1]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 hover:bg-gold/20 rounded-full transition-all duration-300 group"
      >
        <svg className="w-6 h-6 text-white group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Main Container */}
      <div className="w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Video Container - 9:16 aspect ratio */}
        <div className="relative w-full max-w-md lg:max-w-2xl h-screen max-h-[90vh] flex items-center justify-center">
          {/* Video Player */}
          <div className="w-full h-full rounded-2xl overflow-hidden bg-black shadow-2xl shadow-gold/30">
            <iframe
              key={video.id}
              src={embedUrl(video.vimeoId, '&autoplay=1')}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title={video.title}
            ></iframe>
          </div>

          {/* Video Info - Bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-b-2xl pointer-events-none">
            <div className="space-y-2">
              <p className="text-gold text-xs sm:text-sm tracking-widest font-light" style={{fontWeight: 300}}>{video.category}</p>
              <h2 className="text-white text-lg sm:text-2xl font-light tracking-wide" style={{fontWeight: 300}}>{video.title}</h2>
              <p className="text-gray-400 text-xs sm:text-sm font-light" style={{fontWeight: 300}}>
                {currentIndex + 1} / {videos.length}
              </p>
            </div>
          </div>

          {/* Navigation - Left Arrow */}
          {hasPrev && (
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 sm:-translate-x-20 z-50 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white/10 hover:bg-gold/20 rounded-full transition-all duration-300 group"
              title="Previous video (← arrow key)"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Navigation - Right Arrow */}
          {hasNext && (
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 sm:translate-x-20 z-50 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white/10 hover:bg-gold/20 rounded-full transition-all duration-300 group"
              title="Next video (→ arrow key)"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Keyboard Hints */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-gray-400 text-xs sm:text-sm font-light space-y-1" style={{fontWeight: 300}}>
        <p>Press <span className="text-gold">ESC</span> to close</p>
        <p>Use <span className="text-gold">← →</span> to navigate</p>
      </div>
    </div>
  );
}
