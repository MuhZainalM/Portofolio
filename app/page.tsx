'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function MattisPremiumPortfolio() {
  // Smooth scroll logic untuk menu navigasi
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (!link) return;
      
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Preset animasi elegan
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-[#EAEAEA] font-sans selection:bg-[#FF3333] selection:text-white overflow-x-hidden">
      
      {/* =========================================
          GLOBAL NAVBAR (EXECUTIVE STYLE)
      ========================================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference px-6 py-6 flex justify-between items-center pointer-events-none">
        <div className="text-xl font-bold tracking-tighter uppercase pointer-events-auto">
          Zainal<span className="text-[#FF3333]">.</span>Studio
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest pointer-events-auto">
          <a href="#about" className="hover:text-[#FF3333] transition-colors">About</a>
          <a href="#works" className="hover:text-[#FF3333] transition-colors">Works</a>
          <a href="#contact" className="hover:text-[#FF3333] transition-colors">Contact</a>
        </div>
      </nav>

      {/* =========================================
          1. HERO SECTION (GRID & BIG TYPOGRAPHY)
      ========================================= */}
      <section id="home" className="relative w-full min-h-screen pt-24 px-4 md:px-8 pb-12 flex flex-col justify-center">
        {/* Garis Grid Dekoratif */}
        <div className="absolute inset-0 pointer-events-none border-x border-[#1A1A1A] mx-4 md:mx-8" />
        <div className="absolute top-[30%] left-0 w-full border-t border-[#1A1A1A]" />
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full max-w-[1400px] mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-8 items-end justify-between border-b border-[#1A1A1A] pb-8 mb-8">
            <motion.div variants={fadeUp} className="text-xs md:text-sm tracking-[0.2em] text-[#888] uppercase">
              (EST. 2025 — Cirebon, ID)<br />
              Version 2.0.0
            </motion.div>
            <motion.div variants={fadeUp} className="text-xs md:text-sm tracking-[0.2em] text-[#888] uppercase text-left md:text-right">
              Broadcast Production &<br />
              Cinematic Videography
            </motion.div>
          </div>

          <motion.h1 
            variants={fadeUp}
            className="text-[12vw] md:text-[8vw] leading-[0.85] font-black tracking-tighter uppercase"
          >
            MUHAMMAD<br />
            <span className="text-[#FF3333]">ZAINAL</span> MUTTAQIN<sup className="text-2xl md:text-5xl">®</sup>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16 border-t border-[#1A1A1A] pt-12">
            <motion.div variants={fadeUp} className="md:col-span-5 text-lg md:text-xl text-[#A0A0A0] leading-relaxed">
              WE ALIGN STRATEGY, PRODUCTION, AND ENGINEERING INTO A SINGLE HIGH-PERFORMANCE LOOP. YOUR VISION, EXECUTED WITH SURGICAL PRECISION AND BROADCAST-FIRST LOGIC.
            </motion.div>
            
            <motion.div variants={fadeUp} className="md:col-span-3 md:col-start-10 flex flex-col gap-2 uppercase tracking-widest font-bold text-sm">
              <span className="border-b border-[#333] pb-2">Camera Operation</span>
              <span className="border-b border-[#333] pb-2">Live Streaming</span>
              <span className="border-b border-[#333] pb-2">Video Editing</span>
              <span className="pb-2">Replay Systems</span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* =========================================
          2. SHOWREEL / FEATURED VIDEO
      ========================================= */}
      <section className="w-full px-4 md:px-8 py-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="w-full h-[50vh] md:h-[80vh] relative border border-[#1A1A1A] p-2 bg-[#0A0A0A] group"
        >
          <div className="absolute top-6 left-6 z-10 flex items-center gap-3 pointer-events-none">
            <div className="w-2 h-2 rounded-full bg-[#FF3333] animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-bold bg-black/50 px-2 py-1 backdrop-blur-sm text-white">Live Production</span>
          </div>
          <video 
            src="/Portofolio/streaming.mp4" 
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
            controls
            preload="metadata"
          />
        </motion.div>
      </section>

      {/* =========================================
          3. ABOUT / PHILOSOPHY
      ========================================= */}
      <section id="about" className="w-full px-4 md:px-8 py-24 bg-[#FF3333] text-[#050505]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-[10vw] md:text-[6vw] font-black leading-[0.85] tracking-tighter uppercase"
          >
            STRATEGY<br />
            BEFORE<br />
            PIXELS.
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col justify-end text-lg md:text-2xl font-medium leading-tight"
          >
            <p className="mb-8">
              PEOPLE DECIDE IF THEY TRUST YOUR CONTENT BEFORE THEY HEAR A WORD OF IT. THAT'S NOT A METAPHOR. VISUAL CREDIBILITY FORMS ALMOST INSTANTLY.
            </p>
            <div className="w-48 h-64 relative border-2 border-[#050505] overflow-hidden">
               <img 
                 src="/Portofolio/MUHAMMAD_ZAINAL_MUTTAQIN_122100107_FOTO_BG_BIRU.png" 
                 alt="Zainal"
                 className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
               />
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          4. SELECTED WORKS (BENTO GRID)
      ========================================= */}
      <section id="works" className="w-full px-4 md:px-8 py-32 border-t border-[#1A1A1A]">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-[8vw] md:text-[5vw] font-black leading-none tracking-tighter uppercase mb-16"
          >
            WE BUILD<br />EXPERIENCES.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* WORK 1 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative aspect-square md:aspect-[4/3] group overflow-hidden border border-[#1A1A1A] bg-[#0A0A0A] p-4 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start z-10 text-sm font-medium tracking-widest uppercase text-[#888]">
                <span>(01)</span>
                <span className="text-right">Live Broadcast<br/>UGJ TV</span>
              </div>
              <div className="absolute inset-0 top-16 bottom-16 left-16 right-16 overflow-hidden">
                <img 
                  src="/Portofolio/utv.jpeg" 
                  alt="UGJ TV"
                  className="w-full h-full object-cover filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <h3 className="text-3xl font-black uppercase z-10 tracking-tighter mt-auto">UGJ TV Live</h3>
            </motion.div>

            {/* WORK 2 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, delay: 0.2 }}
              variants={fadeUp}
              className="relative aspect-square md:aspect-[4/3] group overflow-hidden border border-[#1A1A1A] bg-[#0A0A0A] p-4 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start z-10 text-sm font-medium tracking-widest uppercase text-[#888]">
                <span>(02)</span>
                <span className="text-right">Sports Coverage<br/>Cheng Hoo</span>
              </div>
              <div className="absolute inset-0 top-16 bottom-16 left-16 right-16 overflow-hidden">
                <img 
                  src="/Portofolio/summer.jpeg" 
                  alt="Cheng Hoo"
                  className="w-full h-full object-cover filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <h3 className="text-3xl font-black uppercase z-10 tracking-tighter mt-auto">Cheng Hoo Cup</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. FOOTER / CONTACT
      ========================================= */}
      <section id="contact" className="w-full px-4 md:px-8 py-32 border-t border-[#1A1A1A] bg-[#020202]">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-sm font-bold tracking-[0.3em] uppercase text-[#FF3333] mb-8"
          >
            Start a Project
          </motion.div>
          
          <motion.a 
            href="mailto:jenalstudio@gmail.com"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-[6vw] md:text-[4vw] font-black tracking-tighter uppercase hover:text-[#FF3333] transition-colors duration-300"
          >
            JENALSTUDIO<br/>@GMAIL.COM
          </motion.a>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex gap-8 mt-16 text-sm font-medium tracking-widest uppercase text-[#888]"
          >
            <a href="https://instagram.com/mnalm_7/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}