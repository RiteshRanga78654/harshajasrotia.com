

"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Calendar, Search } from "lucide-react";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const events = [
  { id:1 , src: "/Harshjasrotia.com/Ritesh/Photos/P_K00191.JPG", title: "Strategic Leadership" },
  { id:2 , src: "/Harshjasrotia.com/Ritesh/Photos/DSC02207.JPG", title: "Real Estate Training" },
  { id:3 , src: "/Harshjasrotia.com/Ritesh/Photos/P_K00120.JPG", title: "EdTech Innovation" },
  { id:4 , src: "/Harshjasrotia.com/Ritesh/Photos/DSC02368.JPG", title: "Operational Scale" },
  { id:5 , src: "/Harshjasrotia.com/Ritesh/Photos/DSC02284.JPG", title: "Real Estate Training" },
  { id:6 , src: "/Harshjasrotia.com/Ritesh/Photos/Screenshot 2026-02-06 171507.png", title: "EdTech Innovation" },
  { id:7 , src: "/Harshjasrotia.com/Ritesh/Photos/P_K00141 - Copy.JPG", title: "Operational Scale" },

];
export default function EventSlider() {
  const [activeImg, setActiveImg] = useState(null);
  const brandGreen = "#22c55e";

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveImg((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveImg((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="pb-24 bg-[#fcfdfd] px-4 overflow-hidden min-h-screen ">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-end py-8 mb-16 gap-6">
          
          <div className="space-y-2 px-5">
            <h2 className="text-4xl md:text-5xl font-black text-[#111827] tracking-tighter">
              Moments of <span className="text-[#dc2626]">Impact.</span>
            </h2>
                        <div className="w-20 h-1 bg-[#cc0000] mt-4" />
          </div>

          {/* Slider Navigation Buttons */}
          <div className="flex gap-4">
            <button className="event-prev-btn p-3 md:p-4 rounded-full border border-[#cc0000] text-[#cc0000] hover:bg-[#cc0000] hover:text-white transition-all active:scale-90">
              <ChevronLeft className="w-6 h-6 transition-colors" />
            </button>
            <button className="event-next-btn p-3 md:p-4 rounded-full border border-[#cc0000] text-[#cc0000] hover:bg-[#cc0000] hover:text-white transition-all active:scale-90">
              <ChevronRight className="w-6 h-6 transition-colors" />
            </button>
          </div>
        </div>

        {/* --- Main Swiper Slider --- */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          navigation={{
            prevEl: ".event-prev-btn",
            nextEl: ".event-next-btn",
          }}
          className="w-full !overflow-visible"
        >
          {events.map((event, index) => (
            <SwiperSlide key={event.id} className="max-w-[320px] md:max-w-[450px]">
              {/* Har Image Card ab Clickable hai */}
              <motion.div 
                whileHover={{ y: -10 }}
                onClick={() => setActiveImg(index)}
                className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-slate-200 cursor-pointer shadow-2xl transition-all duration-500"
              >
                <img 
                  src={event.src} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                
                {/* Overlay with Search Icon on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 scale-50 group-hover:scale-100 transition-transform duration-500">
                      <Search size={32} />
                   </div>
                </div>

                {/* Event Details (Bottom) */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent">
                    <div className="flex items-center gap-2 text-emerald-400 mb-2 font-bold text-[10px] tracking-widest uppercase">
                      <Calendar size={14} /> {event.date}
                    </div>
                    <h3 className="text-white text-3xl font-Condensed Sans-Serif uppercase tracking-tight">{event.title}</h3>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- Modern Lightbox Modal --- */}
        <AnimatePresence>
          {activeImg !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[2000] bg-[#022c22]/98 backdrop-blur-2xl flex items-center justify-center p-4"
              onClick={() => setActiveImg(null)}
            >
              {/* Close Button Top-Right */}
              <button 
                className="absolute top-8 right-8 text-white/40 hover:text-white transition-all bg-white/5 p-4 rounded-full hover:bg-white/10 z-[2100]"
                onClick={() => setActiveImg(null)}
              >
                <X size={36} strokeWidth={1.5} />
              </button>

              {/* Lightbox Navigation Left */}
              <button 
                className="absolute left-4 md:left-10 text-white/30 hover:text-white transition-all z-[2100] hidden sm:block"
                onClick={handlePrev}
              >
                <div className="p-4 rounded-full border border-white/10 hover:border-white/40 transition-colors bg-white/5">
                    <ChevronLeft size={48} strokeWidth={1} />
                </div>
              </button>

              {/* Center Image Content */}
              <motion.div 
                initial={{ scale: 0.9, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 30, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative max-w-5xl w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative group/modal">
                    <img 
                      src={events[activeImg].src} 
                      className="w-full h-auto max-h-[75vh] object-contain rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                      alt="Full View"
                    />
                    
                    {/* Mobile Navigation (Floating on image) */}
                    <div className="flex sm:hidden absolute bottom-4 left-1/2 -translate-x-1/2 gap-6 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                        <ChevronLeft className="text-white" onClick={handlePrev} />
                        <span className="text-white/50 text-xs">{activeImg + 1} / {events.length}</span>
                        <ChevronRight className="text-white" onClick={handleNext} />
                    </div>
                </div>

                <div className="mt-8 text-center text-white">
                  <h4 className="text-4xl md:text-5xl font-Condensed Sans-Serif tracking-wider uppercase mb-2">
                    {events[activeImg].title}
                  </h4>
                  <div className="flex items-center justify-center gap-4 text-emerald-400 font-bold tracking-[0.5em] text-[10px] uppercase">
                    <span className="h-[1px] w-8 bg-emerald-900"></span>
                    {events[activeImg].date}
                    <span className="h-[1px] w-8 bg-emerald-900"></span>
                  </div>
                </div>
              </motion.div>

              {/* Lightbox Navigation Right */}
              <button 
                className="absolute right-4 md:right-10 text-white/30 hover:text-white transition-all z-[2100] hidden sm:block"
                onClick={handleNext}
              >
                <div className="p-4 rounded-full border border-white/10 hover:border-white/40 transition-colors bg-white/5">
                    <ChevronRight size={48} strokeWidth={1} />
                </div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}