import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Heart } from 'lucide-react';

export default function Footer() {
  const services = [
    'Ad Copywriting',
    'Website Copy',
    'Bios & Brand Voice',
    'Content Writing'
  ];

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToWork = (e) => {
    e.preventDefault();
    const el = document.querySelector('#process');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer 
      id="contact"
      className="relative w-full min-h-[50vh] bg-accent text-white pt-24 pb-12 px-6 sm:px-8 lg:px-12 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-between h-full">
        
        {/* 1. TOP INFORMATION GRID (3-Column Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-20 border-b-2 border-white/30">
          
          {/* Left Column: Creative Service Descriptions */}
          <div className="space-y-3">
            <span className="eyebrow !text-white block mb-4">
              Disciplines & Focus
            </span>
            <ul className="space-y-2 text-xs uppercase tracking-widest text-white">
              {services.map((service) => (
                <li key={service} className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-default flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sun border border-ink"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Center Column: Developer Journey Showcase */}
          <div className="flex flex-col justify-start md:items-center text-left md:text-center space-y-4">
            <span className="eyebrow !text-white block">
              Current Arc
            </span>
            <p className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-white max-w-xs">
              Copywriter
            </p>
            <a
              href="#process"
              onClick={handleScrollToWork}
              className="group inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-white hover:text-sun transition-colors relative"
            >
              <span>View Work</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-current"></span>
            </a>
          </div>

          {/* Right Column: Learning and Development Status */}
          <div className="flex flex-col justify-start md:items-end text-left md:text-right space-y-2">
            <span className="eyebrow !text-white block mb-2">
              Status & Ethos
            </span>
            <p className="text-base font-bold text-white tracking-wide">
              Writing. Exploring. Connecting.
            </p>
            <p className="text-xs text-white">
              Words that work
            </p>
            <span className="section-badge mt-2">
              Current Year: 2026
            </span>
          </div>

        </div>

        {/* 2. EDITORIAL PERSONAL BRAND SIGNATURE */}
        <div className="py-12 md:py-16 text-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="group cursor-default inline-flex flex-col items-center"
          >
            <span className="eyebrow !text-white mb-3 block">
              Personal Signature & Brand
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-none text-white transition-all duration-500 select-none group-hover:text-sun flex items-center justify-center gap-1.5 sm:gap-2">
              <span>Atharva Desai</span>
              <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-sun border-2 border-ink group-hover:scale-125 transition-transform duration-300"></span>
            </h2>
          </motion.div>
        </div>

        {/* 3. BOTTOM CONTACT GRID (3-Column Layout) */}
        <div className="pt-10 border-t-2 border-white/30 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-xs font-medium">
          
          {/* Left: Contact link & Copyright */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-white">
            <span>© 2026 Atharva Desai.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-white">Atharva Desai Portfolio</span>
          </div>

          {/* Center: Email Link */}
          <div className="text-left md:text-center">
            <a 
              href="mailto:atharvadesai727@gmail.com"
              className="text-white hover:text-sun text-sm sm:text-base font-bold transition-colors duration-300 relative inline-block group"
            >
              <span>atharvadesai727@gmail.com</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-sun scale-x-100 group-hover:scale-x-110 transition-transform origin-center"></span>
            </a>
            <a
              href="tel:+917666751319"
              className="block mt-2 text-white hover:text-sun text-sm transition-colors duration-300"
            >
              +91 76667 51319
            </a>
          </div>

          {/* Right: Privacy Policy & Back to Top */}
          <div className="flex items-center md:justify-end gap-6 text-white">
            <a 
              href="#privacy" 
              onClick={(e) => { e.preventDefault(); alert("Privacy Notice: No personal tracking cookies used. All portfolio rights reserved 2026."); }}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#home"
              onClick={handleScrollToTop}
              className="hover:text-white flex items-center gap-1 group"
            >
              <span>Back to Top</span>
              <span className="group-hover:-translate-y-0.5 transition-transform">↑</span>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
