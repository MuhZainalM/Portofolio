'use client';

/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/media-has-caption */

import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';

// =========================================
// 1. DATABASE KARYA: BROADCAST (13 Foto, 4 Video)
// =========================================
const broadcastWorks = [
  // 4 VIDEO
  { id: 'b_v1', type: 'video', src: '/Portofolio/streaming.mp4', title: 'Live Streaming 1', tag: 'Broadcast Video' },
  { id: 'b_v2', type: 'video', src: '/Portofolio/b_vid2.mp4', title: 'Live Streaming 2', tag: 'Broadcast Video' },
  { id: 'b_v3', type: 'video', src: '/Portofolio/b_vid3.mp4', title: 'Live Streaming 3', tag: 'Broadcast Video' },
  { id: 'b_v4', type: 'video', src: '/Portofolio/b_vid4.mp4', title: 'Live Streaming 4', tag: 'Broadcast Video' },
  // 13 FOTO
  { id: 'b_f1', type: 'image', src: '/Portofolio/utv.jpeg', title: 'UGJ TV Live', tag: 'Broadcast Photo' },
  { id: 'b_f2', type: 'image', src: '/Portofolio/summer.jpeg', title: 'Cheng Hoo Cup', tag: 'Broadcast Photo' },
  { id: 'b_f3', type: 'image', src: '/Portofolio/b_foto3.jpg', title: 'Broadcast 03', tag: 'Broadcast Photo' },
  { id: 'b_f4', type: 'image', src: '/Portofolio/b_foto4.jpg', title: 'Broadcast 04', tag: 'Broadcast Photo' },
  { id: 'b_f5', type: 'image', src: '/Portofolio/b_foto5.jpg', title: 'Broadcast 05', tag: 'Broadcast Photo' },
  { id: 'b_f6', type: 'image', src: '/Portofolio/b_foto6.jpg', title: 'Broadcast 06', tag: 'Broadcast Photo' },
  { id: 'b_f7', type: 'image', src: '/Portofolio/b_foto7.jpg', title: 'Broadcast 07', tag: 'Broadcast Photo' },
  { id: 'b_f8', type: 'image', src: '/Portofolio/b_foto8.jpg', title: 'Broadcast 08', tag: 'Broadcast Photo' },
  { id: 'b_f9', type: 'image', src: '/Portofolio/b_foto9.jpg', title: 'Broadcast 09', tag: 'Broadcast Photo' },
  { id: 'b_f10', type: 'image', src: '/Portofolio/b_foto10.jpg', title: 'Broadcast 10', tag: 'Broadcast Photo' },
  { id: 'b_f11', type: 'image', src: '/Portofolio/b_foto11.jpg', title: 'Broadcast 11', tag: 'Broadcast Photo' },
  { id: 'b_f12', type: 'image', src: '/Portofolio/b_foto12.jpg', title: 'Broadcast 12', tag: 'Broadcast Photo' },
  { id: 'b_f13', type: 'image', src: '/Portofolio/b_foto13.jpg', title: 'Broadcast 13', tag: 'Broadcast Photo' },
];

// =========================================
// 2. DATABASE KARYA: KEGIATAN (5 Foto)
// =========================================
const kegiatanWorks = [
  { id: 'k_f1', type: 'image', src: '/Portofolio/k_foto1.jpg', title: 'Kegiatan 01', tag: 'Kegiatan' },
  { id: 'k_f2', type: 'image', src: '/Portofolio/k_foto2.jpg', title: 'Kegiatan 02', tag: 'Kegiatan' },
  { id: 'k_f3', type: 'image', src: '/Portofolio/k_foto3.jpg', title: 'Kegiatan 03', tag: 'Kegiatan' },
  { id: 'k_f4', type: 'image', src: '/Portofolio/k_foto4.jpg', title: 'Kegiatan 04', tag: 'Kegiatan' },
  { id: 'k_f5', type: 'image', src: '/Portofolio/k_foto5.jpg', title: 'Kegiatan 05', tag: 'Kegiatan' },
];

// =========================================
// 3. DATABASE KARYA: HASIL (6 Foto)
// =========================================
const hasilWorks = [
  { id: 'h_f1', type: 'image', src: '/Portofolio/h_foto1.jpg', title: 'Hasil Karya 01', tag: 'Hasil' },
  { id: 'h_f2', type: 'image', src: '/Portofolio/h_foto2.jpg', title: 'Hasil Karya 02', tag: 'Hasil' },
  { id: 'h_f3', type: 'image', src: '/Portofolio/h_foto3.jpg', title: 'Hasil Karya 03', tag: 'Hasil' },
  { id: 'h_f4', type: 'image', src: '/Portofolio/h_foto4.jpg', title: 'Hasil Karya 04', tag: 'Hasil' },
  { id: 'h_f5', type: 'image', src: '/Portofolio/h_foto5.jpg', title: 'Hasil Karya 05', tag: 'Hasil' },
  { id: 'h_f6', type: 'image', src: '/Portofolio/h_foto6.jpg', title: 'Hasil Karya 06', tag: 'Hasil' },
];

// Penggabungan Kategori untuk dirender di Carousel
const portfolioCategories = [
  { title: "BROADCAST", items: broadcastWorks },
  { title: "KEGIATAN", items: kegiatanWorks },
  { title: "HASIL KARYA", items: hasilWorks },
];

export default function MattisPremiumPortfolio() {
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
          3. ABOUT & PHILOSOPHY
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
          4. BIG STATS
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
              <div className="text-[10vw] md:text-[7vw] font-black tracking-tighter leading-none mb-4">/100+</div>
              <p className="text-lg uppercase font-medium max-w-sm">Hours of Live Broadcast & Production Recorded.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          5. SERVICES ACCORDION
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
            <div className="border-t border-[#333] py-8 flex flex-col md:flex-row gap-8 hover:bg-[#111] transition-colors px-4 cursor-pointer">
              <div className="text-[#888] font-mono">01</div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold uppercase tracking-tight mb-4 flex justify-between">Live Broadcasting <span className="text-[#FF3333] font-light">+</span></h4>
                <p className="text-[#A0A0A0] leading-relaxed">Multi-camera setup, live switching, and seamless streaming for sports, corporate events, and university productions. Ensuring zero downtime and maximum engagement.</p>
              </div>
            </div>
            <div className="border-t border-[#333] py-8 flex flex-col md:flex-row gap-8 hover:bg-[#111] transition-colors px-4 cursor-pointer">
              <div className="text-[#888] font-mono">02</div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold uppercase tracking-tight mb-4 flex justify-between">Cinematic Videography <span className="text-[#FF3333] font-light">+</span></h4>
                <p className="text-[#A0A0A0] leading-relaxed">High-end camera operation focusing on composition, lighting, and movement to tell a compelling story for documentaries or commercials.</p>
              </div>
            </div>
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
          6. SELECTED WORKS (FLUID PREMIUM CAROUSELS)
      ========================================= */}
      <section id="works" className="w-full py-32 border-b border-[#1A1A1A] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 mb-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col md:flex-row justify-between items-end gap-6">
            <h2 className="text-[10vw] md:text-[7vw] font-black leading-none tracking-tighter uppercase">
              SELECTED<br />WORKS.
            </h2>
            <p className="text-[#FF3333] text-sm font-bold tracking-widest uppercase animate-pulse">
              Scroll to explore ➜
            </p>
          </motion.div>
        </div>

        {/* LOOPING UNTUK MEMBUAT 3 CAROUSEL (BROADCAST, KEGIATAN, HASIL) */}
        {portfolioCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-32 last:mb-0">
            {/* Judul Kategori */}
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 mb-12 flex items-center gap-6">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-[#EAEAEA]">
                / {category.title}
              </h3>
              <div className="flex-1 border-t border-[#333]" />
            </div>

            {/* Container Carousel Geser (Fluid Design) */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUp}
              className="flex overflow-x-auto snap-x snap-mandatory gap-8 px-4 md:px-8 pb-4 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {category.items.map((work, index) => (
                <div 
                  key={work.id} 
                  className="snap-center shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] h-[55vh] md:h-[65vh] flex flex-col justify-between group cursor-pointer"
                >
                  {/* Header Teks */}
                  <div className="flex justify-between items-start text-xs font-bold tracking-widest uppercase text-[#555] mb-4 group-hover:text-[#FF3333] transition-colors duration-500">
                    <span>({String(index + 1).padStart(2, '0')})</span>
                    <span className="text-right">{work.tag}</span>
                  </div>
                  
                  {/* Container Foto/Video Tanpa Garis Kaku */}
                  <div className="relative w-full flex-1 overflow-hidden mb-6 bg-transparent">
                    {work.type === 'image' ? (
                      <img 
                        src={work.src} 
                        alt={work.title} 
                        className="w-full h-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" 
                      />
                    ) : (
                      <video 
                        src={work.src} 
                        className="w-full h-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" 
                        controls 
                        preload="metadata"
                      />
                    )}
                  </div>

                  {/* Judul Karya */}
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-[#555] group-hover:text-[#EAEAEA] transition-colors duration-500">
                    {work.title}
                  </h3>
                </div>
              ))}
            </motion.div>
          </div>
        ))}
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
            <span>© {new Date().getFullYear()} MUHAMMAD ZAINAL MUTTAQIN</span>
            <span>BASED IN INDONESIA</span>
          </div>
        </div>
      </section>

    </div>
  );
}