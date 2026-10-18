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
          className="h-10 sm:h-14 w-auto max-w-none transition-transform duration-300 hover:scale-110"
        />
      </div>
    ));

  return (
    // White band so the logo files (white backgrounds) blend in; runs edge to edge, no box
    <section
      id="brands"
      className="relative w-full bg-white text-ink py-12 sm:py-16 border-y-2 border-ink overflow-hidden select-none"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center px-6 mb-10 sm:mb-12"
      >
        <span className="section-badge !bg-sun">
          <span className="w-2 h-2 rounded-full bg-accent" />
          Brands I've written for
        </span>
      </motion.div>

      <div
        className="relative flex w-full"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
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
