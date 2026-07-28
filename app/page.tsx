'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function PortfolioWebsite() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen text-white font-inter relative z-0 selection:bg-[#E10613] selection:text-white">
      
      {/* =========================================
          BACKGROUND & NAVBAR GLOBAL
      ========================================= */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat -z-20 opacity-30"
        style={{ backgroundImage: "url('/Portofolio/bg-gelap.jpg')" }}
      />
      <div className="fixed inset-0 w-full h-full bg-black/50 -z-10" />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/80 backdrop-blur-md border-b border-[#222] py-4">
        <div className="container mx-auto px-6 flex justify-center gap-6 md:gap-12 text-sm md:text-base font-medium">
          <a href="#home" className="hover:text-[#E10613] transition-colors cursor-pointer">Beranda</a>
          <a href="#about" className="hover:text-[#E10613] transition-colors cursor-pointer">My Profile</a>
          <a href="#portfolio" className="hover:text-[#E10613] transition-colors cursor-pointer">Foto & Video</a>
          <a href="#contact" className="hover:text-[#E10613] transition-colors cursor-pointer">Kontak</a>
        </div>
      </nav>

      {/* =========================================
          1. HERO SECTION (Sampul Depan)
      ========================================= */}
      <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6 z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-0 pt-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-64 h-80 md:w-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-[#222]"
          >
            <img 
              src="/Portofolio/MUHAMMAD_ZAINAL_MUTTAQIN_122100107_FOTO_BG_BIRU.png" 
              alt="Muhammad Zainal Muttaqin"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right w-full md:w-1/2 z-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-black text-white drop-shadow-md leading-tight tracking-tighter uppercase"
            >
              MUHAMMAD<br/>
              <span className="text-[#E10613]">ZAINAL MUTTAQIN</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-xl md:text-2xl mt-4 text-[#FF3B5C] font-semibold h-8 drop-shadow"
            >
              <TypeAnimation
                sequence={[
                  'Broadcast Production', 2000,
                  'Camera Operator', 2000,
                  'Live Streaming Operator', 2000,
                  'Replay Operator', 2000,
                  'Video Editor', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto"
            >
              <a href="#portfolio" className="px-8 py-3 bg-[#E10613] text-white font-medium rounded-full hover:bg-[#FF3B5C] transition-all duration-300 shadow-[0_0_20px_rgba(225,6,19,0.4)] hover:shadow-[0_0_30px_rgba(255,59,92,0.6)] hover:-translate-y-1 text-center">
                View Portfolio
              </a>
              <a href="#about" className="px-8 py-3 bg-transparent border border-[#BDBDBD] text-white font-medium rounded-full hover:bg-white hover:text-[#080808] hover:border-white transition-all duration-300 hover:-translate-y-1 text-center cursor-pointer">
                About Me
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. ABOUT SECTION 
      ========================================= */}
      <section id="about" className="w-full min-h-[50vh] bg-transparent py-28 flex items-center justify-center border-t border-[#222]/50">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-md"
          >
            ABOUT <span className="text-[#E10613]">ME</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white drop-shadow-lg max-w-3xl mx-auto leading-relaxed"
          >
            Fresh Graduate in Communication Science with practical experience in broadcast production, live streaming, videography, replay operation, and video editing. Experienced in supporting university productions and national sports events while working collaboratively in professional production teams.
          </motion.p>
        </div>
      </section>

      {/* =========================================
          3. PORTFOLIO SECTION (CAROUSEL)
      ========================================= */}
      <section id="portfolio" className="w-full min-h-[80vh] bg-transparent py-28 flex flex-col justify-center overflow-hidden border-t border-[#222]/50">
        <div className="container mx-auto px-6 text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white drop-shadow-md"
          >
            SELECTED <span className="text-[#E10613]">WORKS</span>
          </motion.h2>
          <p className="text-white drop-shadow-lg mt-4 tracking-wide text-sm animate-pulse">
            Swipe / Geser untuk melihat karya ➜
          </p>
        </div>
        
        <div 
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-8 md:px-[10vw] pb-10" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* FOTO 1: UGJ TV Live */}
          <div className="snap-center shrink-0 w-[80vw] md:w-[600px] h-[300px] md:h-[400px] relative rounded-2xl overflow-hidden group border border-[#222] shadow-xl">
            <img 
              src="/Portofolio/utv.jpeg" 
              alt="UGJ TV Live" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent flex items-end p-6 md:p-8 opacity-90 pointer-events-none">
              <h3 className="text-2xl font-bold text-white drop-shadow-md">UGJ TV Live</h3>
            </div>
          </div>

          {/* VIDEO 2: STREAMING */}
          <div className="snap-center shrink-0 w-[80vw] md:w-[600px] h-[300px] md:h-[400px] relative rounded-2xl overflow-hidden group border border-[#222] shadow-xl">
            <video 
              src="/Portofolio/streaming.mp4" 
              className="absolute inset-0 w-full h-full object-cover"
              controls
              preload="metadata"
            >
              Browser kamu tidak mendukung pemutar video.
            </video>
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#080808]/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <h3 className="text-xl font-bold text-white drop-shadow-md">Live Streaming Production</h3>
            </div>
          </div>

          {/* FOTO 3: CHENG HOO */}
          <div className="snap-center shrink-0 w-[80vw] md:w-[600px] h-[300px] md:h-[400px] relative rounded-2xl overflow-hidden group border border-[#222] shadow-xl">
            <img 
              src="/Portofolio/summer.jpeg" 
              alt="Cheng Hoo Tournament" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent flex items-end p-6 md:p-8 opacity-90 pointer-events-none">
              <h3 className="text-2xl font-bold text-white drop-shadow-md">Cheng Hoo Tournament</h3>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. CONTACT SECTION (FOOTER)
      ========================================= */}
      <section id="contact" className="w-full bg-transparent py-20 border-t border-[#222]/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-md">
            Let's Work <span className="text-[#E10613]">Together</span>
          </h2>
          <p className="text-white drop-shadow-lg mb-10 max-w-xl mx-auto">
            Tertarik untuk berkolaborasi dalam produksi video, live streaming, atau project broadcast selanjutnya? Mari diskusikan ide Anda!
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12">
            <a href="mailto:jenalstudio@gmail.com" className="flex items-center gap-3 text-white hover:text-[#E10613] transition-colors cursor-pointer drop-shadow">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span>jenalstudio@gmail.com</span>
            </a>
            
            <a href="https://instagram.com/mnalm_7/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-[#E10613] transition-colors cursor-pointer drop-shadow">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              <span>@mnalm_7</span>
            </a>
            
            <div className="flex items-center gap-3 text-white drop-shadow">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>Cirebon, Jawa Barat</span>
            </div>
          </div>
          
          <p className="text-sm text-white/70 border-t border-[#222]/50 pt-6">
            © {new Date().getFullYear()} Muhammad Zainal Muttaqin. All rights reserved.
          </p>
        </div>
      </section>

      {/* =========================================
          5. TOMBOL SCROLL TO TOP
      ========================================= */}
      {showTopBtn && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-[#E10613] text-white rounded-full shadow-[0_0_20px_rgba(225,6,19,0.5)] hover:bg-[#FF3B5C] hover:-translate-y-2 transition-all duration-300 group"
          title="Kembali ke Atas"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}

    </div>
  );
}