import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Preloader Component
 * Requirements:
 * - Fullscreen fixed overlay covering the entire viewport
 * - Background: fullscreen looping video (public/intro-wall-video-2-landscape.mp4, 16:9, 5s), black fallback
 * - Centered logo text: "Atharva Desai."
 * - Bold, premium, black-weight typography with tight letter spacing
 * - Animation Sequence:
 *   1. Dark transparent text "Atharva Desai." in center as background layer
 *   2. White foreground version of same text positioned exactly above it
 *   3. Water-fill clip-path animation filling upward over 1.6s
 *   4. Smooth easing for a premium cinematic feel
 *   5. Brief wait, then entire red screen slides upward like a shutter opening
 *   6. During exit, slightly scale down and fade out the logo
 *   - Minimalist, no gradients, high z-index (100000+)
 */
export default function Preloader({ onComplete }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Hold for the full 5s video, then the shutter opens
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isLoaded && (
        <motion.div
          key="preloader-overlay"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: {
              duration: 1.0,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.1
            }
          }}
          className="fixed inset-0 z-[100000] flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Background video: 16:9, 5s, plays once while the intro is shown */}
          <video
            className="absolute inset-0 h-full w-full object-cover pointer-events-none"
            src={`${import.meta.env.BASE_URL}intro-wall-video-2-landscape.mp4`}
            autoPlay
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          />

          {/* Soft center scrim so the text stays readable over the video */}
          <div className="absolute inset-0 bg-black/25 pointer-events-none" />

          {/* Logo container, anchored toward the bottom */}
          <motion.div
            className="relative select-none text-center px-6 w-full max-w-5xl"
            exit={{
              scale: 0.9,
              opacity: 0,
              transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
            }}
          >
            {/* Layer 1: Dark Transparent Background Layer */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.02] font-sans uppercase text-white/25 drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)]">
              Welcome to my creative cosmos
            </h1>

            {/* Layer 2: White Foreground Layer with Bottom-to-Top Water Fill */}
            <motion.h1
              initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
              transition={{
                duration: 1.6,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.2
              }}
              className="absolute inset-0 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.02] font-sans uppercase text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.6)] pointer-events-none"
            >
              Welcome to my creative cosmos
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
