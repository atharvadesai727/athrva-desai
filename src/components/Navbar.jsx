import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Light text over the dark hero video, ink text once the header turns cream
  const overVideo = !scrolled && !mobileMenuOpen;
  const textTone = overVideo ? 'text-white' : 'text-ink';

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-cream/95 backdrop-blur-md border-b-2 border-ink'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between relative">
          {/* Left Side: Personal Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className={`group flex items-center gap-1.5 text-xl sm:text-2xl font-display font-bold tracking-tight ${textTone} focus:outline-none z-10`}
          >
            <span>Atharva Desai</span>
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent group-hover:scale-150 transition-transform"></span>
          </a>

          {/* Center Navigation (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 md:absolute md:left-1/2 md:-translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`relative py-1 text-xs lg:text-sm font-bold transition-colors duration-200 tracking-wider uppercase group ${textTone}`}
              >
                <span>{link.name}</span>
                {/* Underline grows from left to right */}
                <span className="absolute bottom-0 left-0 w-full h-[3px] rounded-full bg-sun scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Right Side: "Hire Me" CTA Button */}
          <div className="hidden md:flex items-center z-10">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="btn-primary group !px-6 !py-2.5 !text-xs"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 focus:outline-none rounded-xl border-2 border-ink bg-sun text-ink shadow-pop"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Slide-Down Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-sun text-ink flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <div className="space-y-6 flex flex-col items-start">
              <span className="eyebrow">Navigation</span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  className="text-4xl font-display font-bold uppercase tracking-tight text-ink hover:text-accent transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t-2 border-ink/20">
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="btn-secondary w-full !py-4"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-center text-xs text-ink/80 mt-4 font-medium">
                atharvadesai727@gmail.com
                <br />
                +91 76667 51319
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
