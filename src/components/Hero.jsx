import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HERO_IMAGES = ['hero-1.jpg', 'hero-3.jpg', 'hero-2.jpg'];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white text-black pt-24 pb-16 md:py-0"
    >
      {/* Background Image Slideshow with Natural Positioning & Seamless White Masking */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Image anchored naturally to the right on desktop, centered on mobile */}
        <div 
          className="absolute inset-y-0 right-0 w-full md:w-[64%] lg:w-[60%] h-full"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 28%, black 100%)',
            maskImage: 'linear-gradient(to right, transparent 0%, black 28%, black 100%)'
          }}
        >
          <AnimatePresence mode="sync">
            <motion.img
              key={HERO_IMAGES[current]}
              src={`${import.meta.env.BASE_URL}${HERO_IMAGES[current]}`}
              alt="Atharva Desai"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full object-cover object-[50%_30%] filter contrast-[1.02]"
            />
          </AnimatePresence>
        </div>

        {/* Subtle studio vignette framing */}
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
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/5 border border-black/15 text-xs font-mono text-black/80 mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF2A2A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF2A2A]"></span>
            </span>
            <span className="tracking-wide">Copywriter</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-sans tracking-tighter leading-[1.05] mb-5">
            <span className="block text-black">Hi, I'm Atharva</span>
            <span className="block text-stroke-black mt-1.5 select-none hover:text-black transition-colors duration-300">
              Copywriter
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-black/75 font-normal leading-relaxed mb-8 max-w-xl">
            Words that work. Ads, website copy, and bios written to connect and convert.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleScrollTo('#process')}
              className="px-8 py-3.5 rounded-full bg-black text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-black/20 hover:bg-neutral-800 transition-all duration-300"
            >
              View My Work
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleScrollTo('#contact')}
              className="px-8 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs sm:text-sm tracking-wider uppercase border border-black/20 shadow-xl shadow-black/10 transition-all duration-300"
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
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 cursor-pointer text-black/50 hover:text-black transition-colors"
        onClick={() => handleScrollTo('#about')}
      >
        <span className="text-[10px] uppercase font-mono tracking-[0.25em]">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-black/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
