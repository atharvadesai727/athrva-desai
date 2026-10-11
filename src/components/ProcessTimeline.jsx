import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Palette, Code, Rocket, CheckCircle2 } from 'lucide-react';

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      num: '01',
      title: 'Define',
      subtitle: 'Brief & Research',
      side: 'right', // Top right
      rotation: 'rotate-2',
      hoverRotation: 'hover:rotate-0',
      icon: <Compass className="w-6 h-6" />,
      desc: 'Understanding the brand, the audience, and the goal behind the words, so every line has a purpose.'
    },
    {
      num: '02',
      title: 'Design',
      subtitle: 'Concepts & Voice',
      side: 'left', // Left side
      rotation: '-rotate-2',
      hoverRotation: 'hover:rotate-0',
      icon: <Palette className="w-6 h-6" />,
      desc: 'Shaping the big idea, tone, and hooks that make the brand sound like itself and stick with people.'
    },
    {
      num: '03',
      title: 'Build',
      subtitle: 'Writing & Refining',
      side: 'right', // Right side
      rotation: 'rotate-2',
      hoverRotation: 'hover:rotate-0',
      icon: <Code className="w-6 h-6" />,
      desc: 'Drafting ads, website copy, and bios, then tightening every word until it connects and converts.'
    },
    {
      num: '04',
      title: 'Launch',
      subtitle: 'Delivery & Iteration',
      side: 'left', // Bottom left
      rotation: '-rotate-2',
      hoverRotation: 'hover:rotate-0',
      icon: <Rocket className="w-6 h-6" />,
      desc: 'Final polish, clean handoff, and revisions based on feedback and results.'
    }
  ];

  return (
    <section 
      id="process" 
      className="relative w-full bg-white text-black py-28 px-6 sm:px-8 lg:px-12 bg-grid-pattern overflow-hidden select-none"
    >
      <div className="max-w-6xl mx-auto relative">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-neutral-50 shadow-sm text-xs font-mono uppercase tracking-widest text-black/70 mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF2A2A]" />
            <span>How we work</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-sans text-black leading-tight mb-6"
          >
            Let us show you how we drive your brand to new heights
          </motion.h2>

          {/* Supporting paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-neutral-600 leading-relaxed"
          >
            A structured, iterative workflow engineered to turn bold concepts into fast, interactive, and memorable digital experiences.
          </motion.p>

          {/* Hand-drawn Sketch Arrow Beside Heading */}
          <div className="hidden lg:block absolute -right-16 top-10 pointer-events-none transform rotate-12 text-[#FF2A2A]">
            <svg width="84" height="60" viewBox="0 0 100 70" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M10,15 C35,5 65,15 85,45 M85,45 L70,42 M85,45 L80,30" />
            </svg>
            <span className="font-handwritten text-lg font-bold text-black -ml-4 block">Follow the path</span>
          </div>
        </div>

        {/* Giant Curved Dashed S-Curve SVG Timeline Line (Desktop) */}
        <div className="hidden md:block absolute top-[280px] bottom-36 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[950px] pointer-events-none z-0">
          <svg className="w-full h-full" viewBox="0 0 800 950" fill="none">
            <path
              d="M 400,0 
                 C 720,120 720,240 400,320 
                 C 80,400 80,560 400,640 
                 C 720,720 720,860 400,950"
              stroke="#222222"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              className="opacity-70"
            />
          </svg>
        </div>

        {/* Process Cards Container */}
        <div className="relative z-10 space-y-16 md:space-y-28 my-12">
          {steps.map((step, index) => {
            const isRight = step.side === 'right';
            const isActive = activeStep === index + 1;

            return (
              <div 
                key={step.num}
                className={`flex flex-col md:flex-row items-center w-full ${
                  isRight ? 'md:justify-end' : 'md:justify-start'
                }`}
                onMouseEnter={() => setActiveStep(index + 1)}
              >
                {/* Floating Tag Card */}
                <motion.div
                  initial={{ opacity: 0, x: isRight ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.03 }}
                  className={`w-full md:w-[460px] rounded-[2rem] p-8 md:p-10 transition-all duration-500 cursor-pointer relative shadow-xl ${
                    step.rotation
                  } ${step.hoverRotation} ${
                    isActive
                      ? 'bg-[#FF2A2A] text-white shadow-glow-red'
                      : 'bg-white text-black border border-neutral-200 hover:border-[#FF2A2A]/40'
                  }`}
                >
                  {/* Luggage Tag / Conference Badge Eyelet Hole Punch Detail */}
                  <div className="flex items-center justify-center -mt-4 mb-6">
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shadow-inner ${
                      isActive ? 'border-white/40 bg-black/20' : 'border-neutral-300 bg-neutral-100'
                    }`}>
                      <div className={`w-3.5 h-3.5 rounded-full ${
                        isActive ? 'bg-white' : 'bg-neutral-300'
                      }`} />
                    </div>
                  </div>

                  {/* Step Number & Category Icon */}
                  <div className="flex items-baseline justify-between mb-4">
                    <span className={`font-serif italic font-bold text-4xl sm:text-5xl tracking-tight transition-colors ${
                      isActive ? 'text-black/30' : 'text-neutral-300'
                    }`}>
                      {step.num}
                    </span>
                    <div className={`p-3 rounded-2xl transition-colors ${
                      isActive ? 'bg-black/20 text-white' : 'bg-neutral-100 text-black'
                    }`}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className={`text-2xl sm:text-3xl font-black font-sans tracking-tight mb-2 ${
                    isActive ? 'text-white' : 'text-black'
                  }`}>
                    {step.title}
                  </h3>

                  {/* Card Subtitle */}
                  <span className={`block text-xs font-mono uppercase tracking-wider mb-4 ${
                    isActive ? 'text-white/80' : 'text-[#FF2A2A] font-semibold'
                  }`}>
                    {step.subtitle}
                  </span>

                  {/* Card Description */}
                  <p className={`text-sm sm:text-base leading-relaxed ${
                    isActive ? 'text-white/90' : 'text-neutral-600'
                  }`}>
                    {step.desc}
                  </p>

                  {/* Interactive Status Indicator */}
                  <div className="mt-6 pt-4 border-t border-current/10 flex items-center justify-between text-xs font-mono">
                    <span className={isActive ? 'text-white/80' : 'text-neutral-400'}>
                      STAGE {step.num} OF 04
                    </span>
                    <span className={`inline-flex items-center gap-1 font-bold ${
                      isActive ? 'text-white' : 'text-neutral-700'
                    }`}>
                      {isActive ? 'CURRENTLY ACTIVE' : 'TAP TO INSPECT'}
                    </span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section: Handwritten Text */}
        <div className="text-center pt-16 pb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block transform -rotate-2"
          >
            <span className="font-handwritten text-4xl sm:text-5xl font-black text-black tracking-wide relative">
              "Ready to be delivered!"
              {/* Hand-drawn underline squiggle */}
              <svg className="w-full h-4 text-[#FF2A2A] absolute -bottom-3 left-0" viewBox="0 0 200 15" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5,10 Q 50,2 100,10 T 195,8" strokeLinecap="round" />
              </svg>
            </span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
