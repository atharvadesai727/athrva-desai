import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
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
    <div className="relative min-h-screen bg-cream text-ink selection:bg-sun selection:text-ink font-sans antialiased overflow-x-hidden">
      {/* 1. Fullscreen video preloader */}
      <Preloader onComplete={() => setPreloaderComplete(true)} />

      {/* 2. Floating Navbar */}
      <Navbar />

      {/* 3. Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <Brands />
        <About />
        <ProcessTimeline />
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}
