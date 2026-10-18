import React from 'react';
import { motion } from 'framer-motion';
import { Sparkle } from 'lucide-react';

/**
 * About Section
 * - Sunny yellow background with ink text and chunky outlines
 * - Left: hanging ID badge (lanyard + clip), tilted, with profile photo
 * - Sparkle icons floating with a soft pulse
 */
export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-sun text-ink py-24 border-b-2 border-ink overflow-hidden select-none"
    >
      {/* Floating sparkle accents */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], rotate: [0, 45, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute top-16 right-16 text-accent pointer-events-none hidden sm:block"
      >
        <Sparkle size={44} fill="currentColor" strokeWidth={0} />
      </motion.div>

      <motion.div
        animate={{ scale: [1.1, 0.85, 1.1], rotate: [15, -15, 15] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-24 left-12 text-ink pointer-events-none"
      >
        <Sparkle size={34} fill="currentColor" strokeWidth={0} />
      </motion.div>

      <motion.div
        animate={{ scale: [0.9, 1.2, 0.9] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-1/2 left-1/3 text-white pointer-events-none hidden lg:block"
      >
        <Sparkle size={26} fill="currentColor" strokeWidth={0} />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT COLUMN: Suspended ID Badge */}
          <div className="lg:col-span-5 flex flex-col items-center relative">

            {/* Hanging lanyard strap */}
            <div className="w-10 h-28 bg-ink rounded-t-sm flex items-center justify-center relative overflow-hidden">
              <div className="w-1.5 h-full bg-white/30 mr-1"></div>
              <div className="w-1.5 h-full bg-white/30"></div>
            </div>

            {/* Metal clip */}
            <div className="flex flex-col items-center -mt-1 z-20">
              <div className="w-7 h-5 rounded-full border-4 border-ink bg-neutral-300"></div>
              <div className="w-4 h-6 bg-neutral-300 rounded-sm border-2 border-ink -mt-1"></div>
            </div>

            {/* ID pass card */}
            <motion.div
              initial={{ rotate: -3 }}
              whileHover={{
                rotate: 2,
                scale: 1.03,
                y: -6,
                transition: { type: 'spring', stiffness: 300, damping: 12 }
              }}
              className="card-surface relative w-full max-w-[340px] p-6 shadow-pop-lg -mt-2 transform -rotate-3"
            >
              {/* Hole punch */}
              <div className="w-16 h-3 bg-sun rounded-full mx-auto mb-5 border-2 border-ink"></div>

              {/* Pass header */}
              <div className="flex items-center justify-between border-b-2 border-ink/10 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></div>
                  <span className="text-[11px] uppercase tracking-widest text-ink font-bold">
                    COPY PASS 2026
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-sun border-2 border-ink text-ink">
                  ALL ACCESS
                </span>
              </div>

              {/* Profile picture */}
              <div className="relative w-full h-72 rounded-2xl overflow-hidden bg-ink border-2 border-ink mb-5 group">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpeg`}
                  alt="Atharva Desai"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white border-2 border-ink text-[10px] font-bold uppercase tracking-wider text-ink">
                  Verified ID
                </div>

                {/* Overlay info inside photo */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-3 pt-6">
                  <span className="text-[10px] font-bold tracking-widest text-sun uppercase block">Copywriter</span>
                  <span className="text-sm font-bold text-white uppercase tracking-tight">Atharva Desai</span>
                </div>
              </div>

              {/* Metadata and barcode */}
              <div className="space-y-3 pt-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-ink/60 font-bold">ROLE:</span>
                  <span className="text-ink font-bold tracking-wide">COPYWRITER</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-ink/60 font-bold">FOCUS:</span>
                  <span className="text-ink font-bold">ADS, WEB COPY & BIOS</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-ink/60 font-bold">ISSUED:</span>
                  <span className="text-ink font-bold">2026</span>
                </div>

                <div className="pt-3 border-t-2 border-ink/10 flex items-center justify-between">
                  <div className="h-9 flex items-center gap-[2px]">
                    {[4,2,6,1,3,5,2,4,7,2,1,4,6,2,3,5,1,4,2,6,3,1,4,2,5,3,6].map((w, i) => (
                      <div key={i} className="h-full bg-ink" style={{ width: `${w}px` }}></div>
                    ))}
                  </div>
                  <span className="text-[9px] font-bold text-ink/60">AD-2026-COPY</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Bold typography and narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center pt-4 lg:pt-8">

            <span className="section-badge self-start mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              About me
            </span>

            <motion.h2
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl sm:text-8xl md:text-9xl font-bold text-ink tracking-tight leading-none mb-6 select-none"
            >
              Hello<span className="text-accent">!</span>
              <span className="animate-wiggle ml-3 text-6xl sm:text-7xl md:text-8xl" aria-hidden="true">👋</span>
            </motion.h2>

            <div className="space-y-5 text-ink text-lg sm:text-xl leading-relaxed max-w-2xl font-medium">
              <p>
                Hey, I'm <strong className="font-bold text-white uppercase tracking-wider text-xl sm:text-2xl bg-accent border-2 border-ink px-2 py-0.5 rounded-lg shadow-pop inline-block -rotate-1">ATHARVA</strong>,
                a <span className="font-bold underline decoration-accent decoration-4 underline-offset-4">professional overthinker</span> who happens to write copy.
              </p>

              <p>
                Forget the usual talk about creative campaigns and amazing ads. I'm here to convince you that somewhere in this ever-expanding universe, there might be an entire planet where people overthink more than I do. And honestly, I'd love to meet them. We'd have a lot to talk about. Probably too much.
              </p>

              <p className="text-base sm:text-lg">
                Until then, I write words for a living, question things I probably shouldn't, and occasionally turn all that mental chaos into something creative.
              </p>

              <p className="text-base sm:text-lg">
                Welcome to my little corner of the internet. Try not to overthink it. I already did.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
