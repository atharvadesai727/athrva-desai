import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-ink text-white pt-24 pb-16 md:py-0"
    >
      {/* Full-screen looping background video with a dark scrim so light text stays readable */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Blurred copy fills the whole screen as ambient backdrop */}
        <video
          src={`${import.meta.env.BASE_URL}intro-wall-video-3.mp4`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-80"
        />
        {/* Sharper, less zoomed copy anchored right; left edge fades into the backdrop */}
        <div
          className="absolute inset-y-0 right-0 w-full md:w-[58%]"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 22%, black 100%)',
            maskImage: 'linear-gradient(to right, transparent 0%, black 22%, black 100%)'
          }}
        >
          <video
            src={`${import.meta.env.BASE_URL}intro-wall-video-3.mp4`}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Atharva Desai"
            className="absolute inset-0 w-full h-full object-cover object-[50%_40%]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/35 to-transparent" />
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
          <div className="section-badge mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span>Copywriter</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.02] mb-5 drop-shadow-[0_3px_0_rgba(0,0,0,0.35)]">
            <span className="block text-white">Hi, I'm Atharva</span>
            <span className="block text-stroke-white mt-1.5 select-none hover:text-white transition-colors duration-300">
              Copywriter
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-white font-medium leading-relaxed mb-8 max-w-xl">
            “In a universe full of noise, I write words that pull you in.”
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary CTA */}
            <motion.a
              href="https://drive.google.com/drive/folders/1sX8316MobQxdLL7-Gy2r5P8PJ-jwjkb5?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="btn-primary"
            >
              View My Work
            </motion.a>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleScrollTo('#contact')}
              className="btn-secondary"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Center Desktop Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 cursor-pointer text-white/70 hover:text-white transition-colors"
        onClick={() => handleScrollTo('#about')}
      >
        <span className="eyebrow !text-[10px] !text-current">Explore</span>
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
