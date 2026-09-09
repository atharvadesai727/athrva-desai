import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ChevronDown } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onEnded = () => setIsPlaying(false);
    const onPause = () => setIsPlaying(false);
    const onPlay = () => setIsPlaying(true);

    video.addEventListener('ended', onEnded);
    video.addEventListener('pause', onPause);
    video.addEventListener('play', onPlay);

    return () => {
      video.removeEventListener('ended', onEnded);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('play', onPlay);
    };
  }, []);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!video.paused && !video.ended) {
      video.pause();
      setIsPlaying(false);
    } else {
      // If video has finished or is near end, restart from 0
      if (video.ended || (video.duration && video.currentTime >= video.duration - 0.15)) {
        video.currentTime = 0;
      }
      video.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Video playback interrupted:", err);
          setIsPlaying(false);
        });
    }
  };

  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#b8080d] text-white pt-24 pb-16 md:py-0"
      style={{
        background: 'radial-gradient(circle at 70% 48%, #c60911 0%, #b8080d 38%, #9e0508 75%, #850305 100%)'
      }}
    >
      {/* Background Video Container with Natural Positioning & Seamless Red Masking */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Video anchored naturally to the right on desktop, centered on mobile */}
        <div 
          className="absolute inset-y-0 right-0 w-full md:w-[64%] lg:w-[60%] h-full"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 16%, black 100%)',
            maskImage: 'linear-gradient(to right, transparent 0%, black 16%, black 100%)'
          }}
        >
          <video
            ref={videoRef}
            src={`${import.meta.env.BASE_URL}hero-video.mp4`}
            playsInline
            preload="metadata"
            className="w-full h-full object-cover object-[70%_center] md:object-center filter contrast-[1.02] brightness-[1.0]"
          />
        </div>

        {/* Subtle studio vignette framing */}
        <div className="absolute inset-0 bg-radial-vignette opacity-25 pointer-events-none" />
      </div>

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Content Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="flex-1 max-w-2xl text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/30 border border-white/25 backdrop-blur-md text-xs font-mono text-white/95 mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="tracking-wide">Full Stack Developer in Progress</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-sans tracking-tighter leading-[1.05] mb-5">
            <span className="block text-white drop-shadow-sm">Hi, I'm Siva</span>
            <span className="block text-stroke-white mt-1.5 select-none hover:text-white transition-colors duration-300">
              Full Stack Developer
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-white font-normal leading-relaxed mb-8 max-w-xl drop-shadow-sm opacity-95">
            Passionate full-stack web learner exploring modern web engineering with{' '}
            <span className="text-white font-semibold">Python</span>,{' '}
            <span className="text-white font-semibold">HTML5</span>,{' '}
            <span className="text-white font-semibold">CSS3</span>, and{' '}
            <span className="text-white font-semibold">JavaScript</span>. 
            Focused on building high-performance, scalable web architectures and clean user experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleScrollTo('#process')}
              className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-black/20 hover:bg-neutral-100 transition-all duration-300"
            >
              View My Work
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleScrollTo('#contact')}
              className="px-8 py-3.5 rounded-full bg-black/60 hover:bg-black/80 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase border border-white/25 backdrop-blur-md shadow-xl shadow-black/20 transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side: Circular Play Reel Button (Matching reference photo) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex flex-col items-center justify-center self-center md:self-end md:translate-y-8 lg:translate-y-12 md:translate-x-4 lg:translate-x-8 mt-6 md:mt-0"
        >
          <div className="relative group">
            {/* Outer Accent Halo on Hover / Playing */}
            <div className={`absolute -inset-3 rounded-full bg-black/30 blur-lg transition-opacity duration-500 pointer-events-none ${
              isPlaying ? 'opacity-90 animate-pulse' : 'opacity-0 group-hover:opacity-75'
            }`} />

            {/* Pulsing ring when playing */}
            {isPlaying && (
              <div className="absolute -inset-1.5 rounded-full border border-white/60 animate-ping pointer-events-none" />
            )}

            {/* Main Interactive Circle Button */}
            <motion.button
              onClick={toggleVideo}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.94 }}
              aria-label={isPlaying ? 'Pause Reel' : 'Play Reel'}
              className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 border backdrop-blur-md cursor-pointer ${
                isPlaying 
                  ? 'bg-black/70 border-white shadow-2xl' 
                  : 'bg-black/40 hover:bg-black/60 border-white/30 hover:border-white/80 shadow-2xl'
              }`}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-white fill-white transition-transform group-hover:scale-110" />
              ) : (
                <Play className="w-6 h-6 text-white fill-white translate-x-0.5 transition-transform group-hover:scale-110" />
              )}
            </motion.button>
          </div>

          {/* Button Status Label */}
          <motion.span 
            className="mt-2 text-[10px] sm:text-xs tracking-[0.25em] font-mono uppercase text-white/90 font-bold select-none text-center drop-shadow-sm"
          >
            {isPlaying ? 'PAUSE' : 'PLAY REEL'}
          </motion.span>
        </motion.div>
      </div>

      {/* Bottom Center Desktop Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 cursor-pointer text-white/60 hover:text-white transition-colors"
        onClick={() => handleScrollTo('#about')}
      >
        <span className="text-[10px] uppercase font-mono tracking-[0.25em]">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
