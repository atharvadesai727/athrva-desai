import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Code2, Layers, Cpu, ShieldCheck } from 'lucide-react';

/**
 * About Section
 * Requirements:
 * - Vibrant red (#FF2A2A) background
 * - Left: Hanging developer ID badge with black lanyard strap & metal clip, -3 deg tilt, profile photo
 * - Right: Bold black "Hello!", name "SIVA KUNCHE", Full Stack Developer in Progress / Learner
 * - Tech skills: Python, HTML, CSS, JavaScript logos displayed horizontally with floating effect
 * - Abstract black star icons floating with soft pulse animation
 * - Bottom divider: Large organic torn-paper SVG transition in white
 */
export default function About() {
  const techStack = [
    {
      name: 'Python',
      level: 'Core Language',
      icon: (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path fill="#ffffff" d="M63.7 1.8c-15.6 0-25 6.7-25 19.3v14.4h25.4v3.6H17.8C7.1 39.1 0 46.2 0 61.5c0 15.5 8.9 22.8 21.6 22.8h11.2V72.9c0-10.4 8.7-18.9 19.4-18.9h25.2c8.6 0 15.5-7.1 15.5-15.7V21.1c0-11.8-9.4-19.3-29.2-19.3zm-11 11.2a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8z"/>
          <path fill="#ffffff" d="M110.2 43.7H99v11.4c0 10.4-8.7 18.9-19.4 18.9H54.4c-8.6 0-15.5 7.1-15.5 15.7v17.2c0 11.8 9.4 19.3 29.2 19.3 15.6 0 25-6.7 25-19.3V92.8H67.7v-3.6h46.3c10.7 0 14-7.6 14-22.7 0-15.5-6.7-22.8-17.8-22.8zm-35.9 71.3a5.4 5.4 0 1 1 0-10.8 5.4 5.4 0 0 1 0 10.8z"/>
        </svg>
      )
    },
    {
      name: 'HTML5',
      level: 'Semantic Structure',
      icon: (
        <svg viewBox="0 0 512 512" className="w-12 h-12">
          <path fill="#ffffff" d="M71.4 461.5l-35.8-401.5h440.8l-35.8 401.4-184.6 51.2-184.6-51.1z"/>
          <path fill="#000000" opacity="0.2" d="M256 472.4l150.9-41.8 30.6-343H256v384.8z"/>
          <path fill="#FF2A2A" d="M256 182.2h81.3l-5.6 62.6H256v54.8h71.4l-6.8 76.5-64.6 17.5v57.1l119.7-33.2 16.5-185.1H256v-50.2zm-81.3 0h81.3v-50.2H168.9l2.8 31.4 13.9 155.8 70.4 19.5v-57.1l-40-11-2.6-29.2h42.6v-54.8h-74.9l-2.8-55.4z"/>
        </svg>
      )
    },
    {
      name: 'CSS3',
      level: 'Modern Styling',
      icon: (
        <svg viewBox="0 0 512 512" className="w-12 h-12">
          <path fill="#ffffff" d="M71.4 461.5l-35.8-401.5h440.8l-35.8 401.4-184.6 51.2-184.6-51.1z"/>
          <path fill="#000000" opacity="0.2" d="M256 472.4l150.9-41.8 30.6-343H256v384.8z"/>
          <path fill="#FF2A2A" d="M256 182.2h81.3l-5.6 62.6H256v54.8h71.4l-6.8 76.5-64.6 17.5v57.1l119.7-33.2 16.5-185.1H256v-50.2zm-81.3 0h81.3v-50.2H168.9l2.8 31.4 13.9 155.8 70.4 19.5v-57.1l-40-11-2.6-29.2h42.6v-54.8h-74.9l-2.8-55.4z"/>
        </svg>
      )
    },
    {
      name: 'JavaScript',
      level: 'Interactive Logic',
      icon: (
        <svg viewBox="0 0 512 512" className="w-12 h-12">
          <rect width="512" height="512" rx="64" fill="#ffffff" />
          <path fill="#000000" d="M292.5 350.5c7.8 13.5 18 24.2 36.3 24.2 15.3 0 25.1-7.7 25.1-18.4 0-12.8-10.2-17.4-27.3-24.8l-9.4-4c-27.1-11.5-45.1-26-45.1-57.5 0-28.7 22.4-50.6 57.5-50.6 24.8 0 42.6 9.8 55.4 32.7l-25.1 16.1c-5.5-9.8-12.8-14.7-22.4-14.7-10.7 0-17.4 6.9-17.4 15.5 0 10.7 6.9 15.5 22.4 22.1l9.4 4c31.9 13.5 50.8 27.3 50.8 60 0 34.3-27.1 53.6-64.4 53.6-36.1 0-58.7-17.4-69.6-38.3l23.9-14.7zm-143.8 2.7c4.6 8 8.7 14.7 18.6 14.7 10 0 16.5-4.2 16.5-20.5v-123h32.1v124.5c0 33.2-19.3 48.6-47.8 48.6-25.8 0-41.2-13.3-48.9-29.2l29.5-15.1z" />
        </svg>
      )
    }
  ];

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
          
          {/* LEFT COLUMN: Suspended Developer ID Badge */}
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

            {/* Developer ID Pass Card */}
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
                    DEV PASS 2026
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-neutral-300">
                  ALL ACCESS
                </span>
              </div>

              {/* Developer Profile Picture */}
              <div className="relative w-full h-72 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-700 mb-5 shadow-inner group">
                <img
                  src={`${import.meta.env.BASE_URL}profile.png`}
                  alt="Siva Kunche Profile"
                  className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[0.98] transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Holographic Badge Watermark */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase tracking-wider text-white/90">
                  Verified ID
                </div>

                {/* Bottom Overlay Info inside photo */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 pt-6">
                  <span className="text-[10px] font-mono tracking-widest text-[#FF2A2A] uppercase block">Full Stack Learner</span>
                  <span className="text-sm font-bold text-white uppercase tracking-tight">Siva Kunche</span>
                </div>
              </div>

              {/* Developer Metadata & Barcode */}
              <div className="space-y-3 pt-1">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-neutral-400">ROLE:</span>
                  <span className="text-white font-bold tracking-wide">BUILDER / DEV IN PROGRESS</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-neutral-400">FOCUS:</span>
                  <span className="text-white font-bold">PYTHON & MODERN WEB</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-neutral-400">ISSUED:</span>
                  <span className="text-neutral-300">2026 • AUTONOMOUS</span>
                </div>

                {/* Simulated Barcode */}
                <div className="pt-3 border-t border-neutral-800 flex items-center justify-between">
                  <div className="h-9 flex items-center gap-[2px] opacity-85">
                    {[4,2,6,1,3,5,2,4,7,2,1,4,6,2,3,5,1,4,2,6,3,1,4,2,5,3,6].map((w, i) => (
                      <div key={i} className="h-full bg-white" style={{ width: `${w}px` }}></div>
                    ))}
                  </div>
                  <span className="font-mono text-[9px] text-neutral-400">SK-2026-DEV</span>
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
                I'm <strong className="font-black text-black uppercase tracking-wider text-xl sm:text-2xl bg-white/20 px-2 py-0.5 rounded">SIVA KUNCHE</strong>, 
                an aspiring software engineer and dedicated <span className="font-bold text-white underline decoration-black decoration-2">Full Stack Developer in Progress</span>.
              </p>

              <p className="text-white/95">
                Rather than claiming decades of corporate industry tenure, I bring relentless curiosity, rapid hands-on execution, and a fresh perspective to building responsive, scalable, and dynamic web applications from the ground up.
              </p>

              <p className="text-white/90 text-base sm:text-lg">
                I spend my days mastering modern frontend interaction paradigms with React and JavaScript, crafting resilient server logic with Python, and writing clean, accessible semantic HTML & CSS.
              </p>
            </div>

            {/* Technology Skills Header */}
            <div className="mt-10 pt-8 border-t border-black/20">
              <span className="block font-mono text-xs uppercase tracking-[0.25em] text-black font-bold mb-6">
                CORE TECHNICAL COMPETENCIES
              </span>

              {/* Horizontal Technology Logos Display */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {techStack.map((tech, idx) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.6 }}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="p-4 rounded-2xl bg-black/25 hover:bg-black/40 border border-white/15 backdrop-blur-sm transition-all duration-300 flex flex-col items-center text-center shadow-lg group cursor-pointer"
                  >
                    <div className="mb-3 text-white drop-shadow-md group-hover:scale-110 transition-transform">
                      {tech.icon}
                    </div>
                    <span className="font-bold text-white text-sm tracking-wide">{tech.name}</span>
                    <span className="text-[11px] text-white/70 font-mono mt-0.5">{tech.level}</span>
                  </motion.div>
                ))}
              </div>
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
