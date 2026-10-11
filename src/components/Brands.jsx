import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { src: 'logos/logo-1.png', alt: 'Kabra' },
  { src: 'logos/logo-2.png', alt: 'Aakasa Worli' },
  { src: 'logos/logo-3.png', alt: 'ID Group, AVA Group and Eleva by Hiranandani' },
  { src: 'logos/logo-4.png', alt: 'CREDAI-MCHI' },
  { src: 'logos/logo-5.png', alt: 'iGolf' },
];

export default function Brands() {
  // Two identical sets side by side; the track slides by exactly one set for a seamless loop
  const renderSet = (suffix) =>
    logos.map((logo) => (
      <div key={`${logo.alt}-${suffix}`} className="flex items-center justify-center shrink-0 px-8 sm:px-14">
        <img
          src={`${import.meta.env.BASE_URL}${logo.src}`}
          alt={logo.alt}
          loading="lazy"
          draggable="false"
          className="h-10 sm:h-14 w-auto max-w-none grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
      </div>
    ));

  return (
    <section id="brands" className="relative w-full bg-white text-black py-14 sm:py-20 overflow-hidden select-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center px-6 mb-10 sm:mb-12"
      >
        <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-[0.3em] text-black/60">
          <span className="w-2 h-2 rounded-full bg-[#FF2A2A]" />
          Brands I've written for
        </span>
      </motion.div>

      <div
        className="relative flex w-full"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div className="flex w-max items-center animate-marquee hover:[animation-play-state:paused]">
          {renderSet('a')}
          {renderSet('b')}
        </div>
      </div>
    </section>
  );
}
