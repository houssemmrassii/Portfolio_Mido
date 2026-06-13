import React, { useState, useEffect, useRef } from 'react';
import Player from '@vimeo/player';

const HERO_VIMEO_ID = '1200987833';

export default function Hero({ onReady }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [needsTap, setNeedsTap] = useState(false);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const player = new Player(iframeRef.current);
    playerRef.current = player;
    let fired = false;

    const markReady = () => {
      if (fired) return;
      fired = true;
      setIsLoaded(true);
      setNeedsTap(false);
      onReady?.();
    };

    // Fires once the video actually starts playing (real readiness, not just iframe load)
    player.on('play', markReady);
    player.on('bufferend', markReady);

    // Some browsers (notably iOS Safari with Low Power Mode / Reduce Motion)
    // silently ignore the autoplay query param even when muted, so kick
    // playback off via the JS API as well.
    player.play().catch(() => {});

    // Fallback in case Vimeo's events never fire (slow/blocked connections).
    // If playback still hasn't started, reveal a tap-to-play control since
    // autoplay was likely blocked by the browser.
    const timeout = setTimeout(() => {
      if (!fired) {
        setIsLoaded(true);
        setNeedsTap(true);
        onReady?.();
      }
    }, 4000);

    return () => {
      clearTimeout(timeout);
      player.off('play', markReady);
      player.off('bufferend', markReady);
    };
  }, []);

  const handleTapToPlay = () => {
    playerRef.current
      ?.play()
      .then(() => setNeedsTap(false))
      .catch(() => {});
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center pt-16 sm:pt-20">
      {/* Full-width Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Poster shown instantly, fades out once the player is ready */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[55.81vw] min-w-[179.18vh] min-h-[100vh] bg-cover bg-center transition-opacity duration-700 ease-out"
          style={{
            backgroundImage: `url(https://vumbnail.com/${HERO_VIMEO_ID}.jpg)`,
            opacity: isLoaded ? 0 : 1,
          }}
        ></div>

        <iframe
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${HERO_VIMEO_ID}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&loop=1&muted=1`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          title="final site hero"
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[55.81vw] min-w-[179.18vh] min-h-[100vh] transition-opacity duration-700 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        ></iframe>

        {/* Multi-layer overlay for premium look */}
        {/* Bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        
        {/* Subtle top vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent"></div>
      </div>

      {/* Tap-to-play fallback for browsers that block autoplay (e.g. iOS Low Power Mode) */}
      {needsTap && (
        <button
          onClick={handleTapToPlay}
          aria-label="Play video"
          className="absolute z-20 inset-0 flex items-center justify-center"
        >
          <span className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/40 border border-white/60 backdrop-blur-sm">
            <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 sm:w-8 sm:h-8 ml-0.5">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}

      {/* Text Content Overlay */}
      <div className="relative z-10 container px-4 sm:px-6 text-center mt-44 sm:mt-56 md:mt-72">
        <div className="space-y-6 sm:space-y-8 md:space-y-10 animate-fade-in">
          {/* Main Title */}
          <div className="space-y-1 md:space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-0 leading-tight drop-shadow-lg" style={{fontWeight: 300, letterSpacing: '0.04em', lineHeight: 0.9}}>
              ABDELHAMID
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-tight drop-shadow-lg" style={{fontWeight: 300, letterSpacing: '0.04em', lineHeight: 0.9}}>
              GHAOUI
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-widest text-gray-200 drop-shadow-md" style={{fontWeight: 300}}>
            VIDEO EDITS FOR SOCIAL & ADVERTISING
          </p>

          {/* Divider with glow effect */}
          <div className="flex justify-center my-6 sm:my-8 md:my-10">
            <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent shadow-lg shadow-gold/50"></div>
          </div>

          {/* Description */}
          
        </div>
      </div>

      {/* Scroll Indicator */}
    
    </section>
  );
}

