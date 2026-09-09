import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProcessTimeline from './components/ProcessTimeline';
import Footer from './components/Footer';

export default function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    if (!preloaderComplete) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [preloaderComplete]);

  return (
    <div className="relative min-h-screen bg-[#111111] text-white selection:bg-[#FF2A2A] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* 1. Fullscreen Red Framer Motion Preloader */}
      <Preloader onComplete={() => setPreloaderComplete(true)} />

      {/* 2. Floating Navbar */}
      <Navbar />

      {/* 3. Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <ProcessTimeline />
      </main>

      {/* 4. Luxury Dark Footer */}
      <Footer />
    </div>
  );
}
