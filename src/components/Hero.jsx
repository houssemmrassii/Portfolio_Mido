import React, { useState, useEffect, useRef } from 'react';

export default function Hero({ onReady }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  const markReady = () => {
    if (isLoaded) return;
    setIsLoaded(true);
    onReady?.();
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Mobile Safari/Chrome require muted to be set as a JS property (not just
    // the HTML attribute) before play() for autoplay to be allowed.
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.play().catch(() => {});

    // Fallback in case the loading events never fire (e.g. cached/instant video)
    const timeout = setTimeout(markReady, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center pt-16 sm:pt-20">
      {/* Full-width Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Self-hosted video so autoplay/loop works reliably on iOS (muted + playsInline) */}
        <video
          ref={videoRef}
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={markReady}
          onLoadedData={markReady}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        ></video>

        {/* Multi-layer overlay for premium look */}
        {/* Bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none"></div>

        {/* Subtle top vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent pointer-events-none"></div>
      </div>

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
