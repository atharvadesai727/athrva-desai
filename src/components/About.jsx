import React from 'react';
import { motion } from 'framer-motion';


/**
 * About Section
 * Requirements:
 * - Vibrant red (#FF2A2A) background
 * - Left: Hanging developer ID badge with black lanyard strap & metal clip, -3 deg tilt, profile photo
 * - Abstract black star icons floating with soft pulse animation
 * - Bottom divider: Large organic torn-paper SVG transition in white
 */
export default function About() {
  return (
    <section 
      id="about" 
      className="relative w-full bg-[#FF2A2A] text-white pt-24 pb-36 overflow-hidden select-none"
    >
      {/* Floating Black Star Accents */}
      <motion.div 
        animate={{ scale: [1, 1.25, 1], rotate: [0, 45, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute top-16 right-16 text-black pointer-events-none hidden sm:block"
      >
        <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"/>
        </svg>
      </motion.div>

      <motion.div 
        animate={{ scale: [1.1, 0.85, 1.1], rotate: [15, -15, 15] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-40 left-12 text-black pointer-events-none"
      >
        <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"/>
        </svg>
      </motion.div>

      <motion.div 
        animate={{ scale: [0.9, 1.2, 0.9] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-1/2 left-1/3 text-black/40 pointer-events-none hidden lg:block"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"/>
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Suspended ID Badge */}
          <div className="lg:col-span-5 flex flex-col items-center relative">
            
            {/* Hanging Lanyard Strap Coming From Top */}
            <div className="w-10 h-28 bg-[#181818] rounded-t-sm shadow-md flex items-center justify-center relative overflow-hidden">
              {/* Lanyard Fabric Texture Lines */}
              <div className="w-1.5 h-full bg-[#333333] opacity-60 mr-1"></div>
              <div className="w-1.5 h-full bg-[#333333] opacity-60"></div>
            </div>

            {/* Metal Carabiner Clip & Ring Mechanism */}
            <div className="flex flex-col items-center -mt-1 z-20">
              <div className="w-7 h-5 rounded-full border-4 border-neutral-300 bg-neutral-400 shadow-inner"></div>
              <div className="w-4 h-6 bg-gradient-to-b from-neutral-200 to-neutral-400 rounded-sm shadow-md border border-neutral-500 -mt-1"></div>
            </div>

            {/* ID Pass Card */}
            <motion.div
              initial={{ rotate: -3 }}
              whileHover={{ 
                rotate: 0, 
                scale: 1.02,
                y: -6,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              className="relative w-full max-w-[340px] bg-[#1a1a1a] text-white rounded-3xl p-6 shadow-2xl border border-white/10 -mt-2 transform -rotate-3 transition-shadow duration-300 hover:shadow-black/50"
            >
              {/* Top Oval Hole Punch Detail */}
              <div className="w-16 h-3 bg-neutral-800 rounded-full mx-auto mb-5 border border-black/40 shadow-inner flex items-center justify-center">
                <div className="w-12 h-1.5 bg-black/80 rounded-full"></div>
              </div>

              {/* Pass Header */}
              <div className="flex items-center justify-between border-b border-neutral-700/80 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF2A2A] animate-pulse"></div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-300 font-bold">
                    COPY PASS 2026
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-neutral-300">
                  ALL ACCESS
                </span>
              </div>

              {/* Developer Profile Picture */}
              <div className="relative w-full h-72 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-700 mb-5 shadow-inner group">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpeg`}
                  alt="Atharva Desai"
                  className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.98] transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Holographic Badge Watermark */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase tracking-wider text-white/90">
                  Verified ID
                </div>

                {/* Bottom Overlay Info inside photo */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 pt-6">
                  <span className="text-[10px] font-mono tracking-widest text-[#FF2A2A] uppercase block">Copywriter</span>
                  <span className="text-sm font-bold text-white uppercase tracking-tight">Atharva Desai</span>
                </div>
              </div>

              {/* Developer Metadata & Barcode */}
              <div className="space-y-3 pt-1">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-neutral-400">ROLE:</span>
                  <span className="text-white font-bold tracking-wide">COPYWRITER</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-neutral-400">FOCUS:</span>
                  <span className="text-white font-bold">ADS, WEB COPY & BIOS</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-neutral-400">ISSUED:</span>
                  <span className="text-neutral-300">2026</span>
                </div>

                {/* Simulated Barcode */}
                <div className="pt-3 border-t border-neutral-800 flex items-center justify-between">
                  <div className="h-9 flex items-center gap-[2px] opacity-85">
                    {[4,2,6,1,3,5,2,4,7,2,1,4,6,2,3,5,1,4,2,6,3,1,4,2,5,3,6].map((w, i) => (
                      <div key={i} className="h-full bg-white" style={{ width: `${w}px` }}></div>
                    ))}
                  </div>
                  <span className="font-mono text-[9px] text-neutral-400">AD-2026-COPY</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Bold Typography & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center pt-4 lg:pt-8">
            
            {/* Big Black "Hello!" Heading */}
            <motion.h2 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl sm:text-8xl md:text-9xl font-black text-black tracking-tight leading-none mb-6 select-none font-sans"
            >
              Hello!
            </motion.h2>

            {/* Narrative Paragraphs */}
            <div className="space-y-5 text-white text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
              <p>
                Hey there! I'm <strong className="font-black text-black uppercase tracking-wider text-xl sm:text-2xl bg-white/20 px-2 py-0.5 rounded">ATHARVA DESAI</strong>,
                a <span className="font-bold text-white underline decoration-black decoration-2">copywriter</span> who loves creating words that work. Whether it's an ad, website copy, or a simple bio, I write to connect and convert. While I enjoy writing copy for brands, I also dabble in content writing.
              </p>

              <p className="text-white/95">
                When I'm not playing with words, you'll probably find me on the field, playing football because hey, all work and no play makes Jack a dull boy.
              </p>

              <p className="text-white/90 text-base sm:text-lg">
                I love exploring, be it diverse cultures, perspectives, or stories. Experiencing different places helps me understand how people think, speak, and engage. This has helped me a lot in my copywriting journey. This deeper understanding of the common folk, the main viewers of ads, has allowed me to write in a way that ensures my words connect with them.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM DIVIDER: Large Organic Torn-Paper SVG Transition */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-14 sm:h-20 md:h-24 text-white fill-current"
        >
          {/* Organic Ripped/Torn Paper Edge Silhouette */}
          <path d="M0,0 L25,18 L55,8 L90,26 L125,10 L160,28 L195,14 L240,24 L280,6 L320,22 L370,12 L415,30 L460,10 L505,24 L545,8 L590,28 L635,12 L675,22 L720,6 L765,24 L810,14 L855,30 L895,12 L940,24 L980,10 L1020,26 L1065,8 L1110,22 L1155,14 L1200,28 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
