'use client';

/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/media-has-caption */

import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';

export default function MattisPremiumPortfolio() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

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

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-[#EAEAEA] font-sans selection:bg-[#FF3333] selection:text-white overflow-x-hidden">
      
      {/* =========================================
          GLOBAL NAVBAR
      ========================================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference px-6 py-6 flex justify-between items-center pointer-events-none">
        <div className="text-xl font-bold tracking-tighter uppercase pointer-events-auto cursor-pointer">
          M Zainal M<span className="text-[#FF3333]">.</span>Studio
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest pointer-events-auto bg-transparent">
          <a href="#about" className="hover:text-[#FF3333] transition-colors">About</a>
          <a href="#works" className="hover:text-[#FF3333] transition-colors">Works</a>
          <a href="#services" className="hover:text-[#FF3333] transition-colors">Services</a>
          <a href="#contact" className="hover:text-[#FF3333] transition-colors">Contact</a>
        </div>
      </nav>

      {/* =========================================
          1. HERO SECTION
      ========================================= */}
      <section id="home" className="relative w-full min-h-screen pt-24 px-4 md:px-8 pb-12 flex flex-col justify-center">
        <div className="absolute inset-0 pointer-events-none border-x border-[#1A1A1A] mx-4 md:mx-8" />
        <div className="absolute top-[30%] left-0 w-full border-t border-[#1A1A1A]" />
        
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative z-10 w-full max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-end justify-between border-b border-[#1A1A1A] pb-8 mb-8">
            <motion.div variants={fadeUp} className="text-xs md:text-sm tracking-[0.2em] text-[#888] uppercase">
              (EST. 2025 — Cirebon, ID)<br />Version 2.0.0
            </motion.div>
            <motion.div variants={fadeUp} className="text-xs md:text-sm tracking-[0.2em] text-[#888] uppercase text-left md:text-right">
              Broadcast Production &<br />Cinematic Videography
            </motion.div>
          </div>

          <motion.h1 variants={fadeUp} className="text-[12vw] md:text-[9vw] leading-[0.85] font-black tracking-tighter uppercase">
            MUHAMMAD<br /><span className="text-[#FF3333]">ZAINAL</span> MUTTAQIN<sup className="text-2xl md:text-5xl">®</sup>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16 border-t border-[#1A1A1A] pt-12">
            <motion.div variants={fadeUp} className="md:col-span-6 text-lg md:text-xl text-[#A0A0A0] leading-relaxed uppercase font-medium">
              We align strategy, broadcast production, and cinematic engineering into a single high-performance loop. Your vision, executed with surgical precision.
            </motion.div>
            
            <motion.div variants={fadeUp} className="md:col-span-3 md:col-start-10 flex flex-col gap-4 uppercase tracking-widest font-bold text-sm">
              <div className="border-b border-[#333] pb-2 flex justify-between"><span>Design</span><span className="text-[#FF3333]">+</span></div>
              <div className="border-b border-[#333] pb-2 flex justify-between"><span>Production</span><span className="text-[#FF3333]">+</span></div>
              <div className="flex justify-between"><span>Post-Editing</span><span className="text-[#FF3333]">+</span></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* =========================================
          2. SHOWREEL VIDEO
      ========================================= */}
      <section className="w-full px-4 md:px-8 py-12 border-t border-[#1A1A1A]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-full h-[60vh] md:h-[90vh] relative border border-[#1A1A1A] p-2 bg-[#0A0A0A] group overflow-hidden">
          <div className="absolute top-6 left-6 z-10 flex items-center gap-3 pointer-events-none">
            <div className="w-2 h-2 rounded-full bg-[#FF3333] animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-bold bg-black/50 px-2 py-1 backdrop-blur-sm text-white border border-[#333]">Live Showreel</span>
          </div>
          <video src="/Portofolio/streaming.mp4" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" controls preload="metadata" />
        </motion.div>
      </section>

      {/* =========================================
          3. ABOUT & PHILOSOPHY (RED SECTION)
      ========================================= */}
      <section id="about" className="w-full px-4 md:px-8 py-32 bg-[#FF3333] text-[#050505] border-y border-[#1A1A1A]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="md:col-span-7 text-[12vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase">
            STRATEGY<br />BEFORE<br />PIXELS.
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="md:col-span-5 flex flex-col justify-end text-lg md:text-2xl font-bold leading-tight uppercase">
            <p className="mb-12">
              People decide if they trust your visual content before they hear a word of it. That&apos;s not a metaphor. Visual credibility forms almost instantly.
            </p>
            <div className="w-full md:w-64 aspect-[3/4] relative border-2 border-[#050505] overflow-hidden group">
               <img src="/Portofolio/MUHAMMAD_ZAINAL_MUTTAQIN_122100107_FOTO_BG_BIRU.png" alt="Zainal" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-105" />
               <div className="absolute bottom-4 left-4 text-xs font-black tracking-widest bg-white text-black px-2 py-1">Muh ZAINAL MUTTAQIN</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          4. BIG STATS (NEW!)
      ========================================= */}
      <section className="w-full px-4 md:px-8 py-32 border-b border-[#1A1A1A] bg-[#EAEAEA] text-[#050505]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#050505]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-12 md:p-24 border-b md:border-b-0 md:border-r border-[#050505] flex flex-col justify-between">
            <h3 className="text-xl font-bold tracking-widest uppercase mb-24">Built on<br/>Reputation</h3>
            <div>
              <div className="text-[10vw] md:text-[7vw] font-black tracking-tighter leading-none mb-4">/12+</div>
              <p className="text-lg uppercase font-medium max-w-sm">Projects shipped with measurable broadcast quality and visual impact.</p>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-12 md:p-24 flex flex-col justify-between">
            <div className="flex justify-end mb-24">
              <a href="#contact" className="text-sm font-bold tracking-widest uppercase border-b-2 border-[#050505] pb-1 hover:text-[#FF3333] hover:border-[#FF3333] transition-colors">Start a Project ↗</a>
            </div>
            <div>
              <div className="text-[10vw] md:text-[7vw] font-black tracking-tighter leading-none mb-4">/4.9+</div>
              <p className="text-lg uppercase font-medium max-w-sm">Average client rating across all professional productions.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          5. SERVICES ACCORDION (NEW!)
      ========================================= */}
      <section id="services" className="w-full px-4 md:px-8 py-32 border-b border-[#1A1A1A]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="md:col-span-5">
            <h2 className="text-sm font-bold tracking-widest uppercase text-[#FF3333] mb-8">Services</h2>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
              Every project starts with understanding your visual goals.
            </h3>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="md:col-span-7">
            {/* Service 1 */}
            <div className="border-t border-[#333] py-8 flex flex-col md:flex-row gap-8 hover:bg-[#111] transition-colors px-4 cursor-pointer">
              <div className="text-[#888] font-mono">01</div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold uppercase tracking-tight mb-4 flex justify-between">Live Broadcasting <span className="text-[#FF3333] font-light">+</span></h4>
                <p className="text-[#A0A0A0] leading-relaxed">Multi-camera setup, live switching, and seamless streaming for sports, corporate events, and university productions. Ensuring zero downtime and maximum engagement.</p>
              </div>
            </div>
            {/* Service 2 */}
            <div className="border-t border-[#333] py-8 flex flex-col md:flex-row gap-8 hover:bg-[#111] transition-colors px-4 cursor-pointer">
              <div className="text-[#888] font-mono">02</div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold uppercase tracking-tight mb-4 flex justify-between">Cinematic Videography <span className="text-[#FF3333] font-light">+</span></h4>
                <p className="text-[#A0A0A0] leading-relaxed">High-end camera operation focusing on composition, lighting, and movement to tell a compelling story for documentaries or commercials.</p>
              </div>
            </div>
            {/* Service 3 */}
            <div className="border-y border-[#333] py-8 flex flex-col md:flex-row gap-8 hover:bg-[#111] transition-colors px-4 cursor-pointer">
              <div className="text-[#888] font-mono">03</div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold uppercase tracking-tight mb-4 flex justify-between">Post-Production <span className="text-[#FF3333] font-light">+</span></h4>
                <p className="text-[#A0A0A0] leading-relaxed">Advanced video editing, color grading, and audio syncing to transform raw footage into a polished, broadcast-ready masterpiece.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          6. SELECTED WORKS (BENTO GRID)
      ========================================= */}
      <section id="works" className="w-full px-4 md:px-8 py-32 border-b border-[#1A1A1A]">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-[10vw] md:text-[7vw] font-black leading-none tracking-tighter uppercase mb-16">
            SELECTED<br />WORKS.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative aspect-square md:aspect-[4/3] group overflow-hidden border border-[#1A1A1A] bg-[#0A0A0A] p-4 flex flex-col justify-between">
              <div className="flex justify-between items-start z-10 text-sm font-bold tracking-widest uppercase text-[#888]">
                <span>(01)</span><span className="text-right">Live Broadcast<br/>UGJ TV</span>
              </div>
              <div className="absolute inset-0 top-16 bottom-16 left-16 right-16 overflow-hidden">
                <img src="/Portofolio/utv.jpeg" alt="UGJ TV" className="w-full h-full object-cover filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              </div>
              <h3 className="text-3xl font-black uppercase z-10 tracking-tighter mt-auto">UGJ TV Live</h3>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative aspect-square md:aspect-[4/3] group overflow-hidden border border-[#1A1A1A] bg-[#0A0A0A] p-4 flex flex-col justify-between">
              <div className="flex justify-between items-start z-10 text-sm font-bold tracking-widest uppercase text-[#888]">
                <span>(02)</span><span className="text-right">Sports Coverage<br/>Cheng Hoo</span>
              </div>
              <div className="absolute inset-0 top-16 bottom-16 left-16 right-16 overflow-hidden">
                <img src="/Portofolio/summer.jpeg" alt="Cheng Hoo" className="w-full h-full object-cover filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              </div>
              <h3 className="text-3xl font-black uppercase z-10 tracking-tighter mt-auto">Cheng Hoo Cup</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          7. FOOTER / CONTACT
      ========================================= */}
      <section id="contact" className="w-full px-4 md:px-8 py-32 bg-[#020202]">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-16 h-16 bg-[#FF3333] rounded-full mb-12 animate-bounce flex items-center justify-center text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-sm font-bold tracking-[0.3em] uppercase text-[#888] mb-8">
            Start a Project
          </motion.div>
          
          <motion.a href="mailto:jenalstudio@gmail.com" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-[8vw] md:text-[6vw] font-black tracking-tighter uppercase hover:text-[#FF3333] transition-colors duration-300">
            JENALSTUDIO<br/>@GMAIL.COM
          </motion.a>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-12 mt-24 text-sm font-bold tracking-widest uppercase text-[#888]">
            <a href="https://instagram.com/mnalm_7/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </motion.div>

          <div className="w-full border-t border-[#1A1A1A] mt-24 pt-8 flex justify-between text-xs font-bold tracking-widest uppercase text-[#555]">
            <span>© 2026 MUHAMMAD ZAINAL MUTTAQIN</span>
            <span>BASED IN INDONESIA</span>
          </div>
        </div>
      </section>

    </div>
  );
}