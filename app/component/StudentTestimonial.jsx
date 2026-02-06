"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuQuote, LuChevronLeft, LuChevronRight, LuGraduationCap } from "react-icons/lu";


const testimonials = [
  {
    name: "Sukhwinder Singh Mann",
    role: "Strategic Marketing Director",
    text: "As a marketing professional, he takes pain to understand deeply what a client expects and works extremely hard to achieve the same. His analytical skills help him look at situations holistically.",
    tag: "Strategy & Growth",
    image: "/images/new-bhaswal-paul.jpg.jpeg", // Add your local path or URL here
  },
  {
    name: "Jagdeep Singh",
    role: "Education Consultant",
    text: "Harsh is one of the few sales professionals who are truly interested in the client's interest. He is a master of his subject and has the right intent to deliver results.",
    tag: "Sales Mastery",
    image: "/assets/images/student2.jpg", // Add your local path or URL here
  },
  {
    name: "Manish Thakur",
    role: "Marketing Manager",
    text: "Mr. Harsh is a motivated, forward-thinking, and intelligent professional. He is exceptionally knowledgeable in Digital Sales, Data Analytics, and automated marketing systems.",
    tag: "Digital Leadership",
    image: "/assets/images/student3.jpg", // Add your local path or URL here
  },
];



export default function ProfessionalPerspectiveSlider() {
  const [index, setIndex] = useState(0);
   // Separate index for students
  const [direction, setDirection] = useState(0);
  
  const [isPaused, setIsPaused] = useState(false);

  // Pagination for Peers
  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
  }, []);

  // Autoplay
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        paginate(1);
    
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused, paginate]);

  const getCardData = (offset) => {
    const dataIndex = (index + offset + testimonials.length) % testimonials.length;
    return testimonials[dataIndex];
  };


  return (
    <>
      {/* SECTION 1: PEER TESTIMONIALS */}
      <section className="py-15 bg-[#b3b3b3] overflow-hidden relative min-h-[750px] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 mb-10 relative z-30">
          <p className="text-[#cc0000] font-black text-xs tracking-[0.5em] mb-4 ">Mentorship Legacy</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#222222] leading-none">
            STUDENT <span className="text-[#cc0000]">SUCCESS.</span>
          </h2>
          <div className="w-20 h-1 bg-[#cc0000] mx-auto my-6" />
        </div>

        <div
          className="relative flex items-center justify-center w-full h-[550px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute w-full max-w-[95%] flex justify-between z-50 pointer-events-none">
            <button onClick={() => paginate(-1)} className="p-4 bg-[#cc0000]/80 backdrop-blur-md border border-white/10 text-white rounded-full hover:bg-[#cc0000] transition-all pointer-events-auto shadow-xl">
              <LuChevronLeft size={24} />
            </button>
            <button onClick={() => paginate(1)} className="p-4 bg-[#cc0000]/80 backdrop-blur-md border border-white/10 text-white rounded-full hover:bg-[#cc0000] transition-all pointer-events-auto shadow-xl">
              <LuChevronRight size={24} />
            </button>
          </div>

          <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              {[-1, 0, 1].map((offset) => {
                const card = getCardData(offset);
                const isActive = offset === 0;
                return (
                  <motion.div
                    key={`peer-${card.name}-${offset}`}
                    custom={direction}
                    initial={{ opacity: 0, scale: 0.8, x: offset * 500, filter: "blur(10px)" }}
                    animate={{ 
                      opacity: isActive ? 1 : 0.3, 
                      scale: isActive ? 1 : 0.85, 
                      x: offset * (typeof window !== "undefined" && window.innerWidth < 768 ? 0 : 380),
                      zIndex: isActive ? 40 : 10,
                      filter: isActive ? "blur(0px)" : "blur(6px)"
                    }}
                    transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                    className={`absolute w-full max-w-[92%] md:max-w-4xl h-full md:h-[480px] rounded-[2.5rem] overflow-hidden border-2 ${isActive ? "border-[#cc0000]" : "border-white/5"} shadow-2xl grid md:grid-cols-2 bg-[#1f2937]`}
                  >
                    <div className="relative h-56 md:h-full group">
                      <img src={card.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={card.name} />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#cc0000]/10 to-transparent" />
                    </div>
                    <div className="p-8 md:p-14 flex flex-col relative bg-gradient-to-br from-[#cc0000] to-[#b3b3b3]">
                      <div className="absolute top-8 left-8 w-14 h-14 border-t-2 border-l-2 border-[#cc0000] opacity-40" />
                      <LuQuote className="text-[#cc0000] mb-8 opacity-80" size={44} />
                      <p className="text-[#f4f4f4] text-lg md:text-xl font-light italic leading-relaxed mb-10 relative z-10">"{card.text}"</p>
                      <div className="mt-auto flex items-center gap-4">
                        <div className="h-10 w-[2px] bg-[#cc0000]" />
                        <div>
                          <h4 className="text-white font-black tracking-widest text-sm ">{card.name}</h4>
                          <p className="text-[#cc0000] text-[10px] font-bold tracking-[0.25em] mt-2 ">{card.role}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-10 relative z-30">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }} className={`h-1.5 transition-all duration-700 rounded-full ${index === i ? "w-16 bg-[#cc0000]" : "w-4 bg-gray-200"}`} />
          ))}
        </div>
      </section>

     
   
    </>
  );
}