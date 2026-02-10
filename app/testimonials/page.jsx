"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuQuote, LuChevronLeft, LuChevronRight, LuGraduationCap, LuUsers, LuTrophy, LuCircleCheck } from "react-icons/lu";

// --- DATA: PEER TESTIMONIALS ---
const peerTestimonials = [
  {
    name: "Nishtha Shukla Anand",
    role: "Trustee & Director, Shoolini University",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    text: "Harsh is a thorough professional. A rare trait in this industry where most hard sell, he always makes genuine promises and does his utmost to deliver.",
  },
  {
    name: "Sonia Gupta",
    role: "Marketing Lead, Dell India",
    image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg",
    text: "His keen industry knowledge helped us gain market exposure, increase sales figures and improve project planning. He is result-oriented.",
  },
  {
    name: "Bhaswar Paul",
    role: "Founder & CEO, IREED Academy",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    text: "He shall conveniently feature in any dream team in luxury real estate. Phenomenal energy, innovative thinker and honesty make him a distinct professional.",
  },
];

// --- DATA: STUDENT TESTIMONIALS ---
const studentTestimonials = [
  {
    name: "Sukhwinder Singh Mann",
    role: "Strategic Marketing Director",
    text: "As a marketing professional, he takes pain to understand deeply what a client expects and works extremely hard to achieve the same.",
    tag: "Strategy & Growth",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
  },
  {
    name: "Jagdeep Singh",
    role: "Education Consultant",
    text: "Harsh is truly interested in the client's interest. He is a master of his subject and has the right intent to deliver results.",
    tag: "Sales Mastery",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
];

export default function TestimonialPage() {
  const [peerIndex, setPeerIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Pagination Logic
  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setPeerIndex((prev) => (prev + newDirection + peerTestimonials.length) % peerTestimonials.length);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => paginate(1), 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused, paginate]);

  return (
    <main className="bg-[#fcfcfc] min-h-screen">
      
      {/* SECTION 1: MODERN HERO */}
      <section className="relative pt-32 pb-20 bg-[#b3b3b3] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#cc0000]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="text-[#cc0000] font-black text-xs tracking-[0.5em] mb-4 uppercase"
          >
            Social Proof & Impact
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6"
          >
            Voices of <span className="text-[#cc0000]">Trust.</span>
          </motion.h1>
          <p className="text-[#f4f4f4] max-w-2xl mx-auto text-lg font-light">
            A legacy built on results, strategic integrity, and the success of the leaders we've mentored along the way.
          </p>
        </div>
      </section>

      {/* SECTION 2: STATS COUNTER (Modern Break) */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Students Mentored", val: "5000+", icon: LuGraduationCap },
            { label: "Corporate Partners", val: "120+", icon: LuUsers },
            { label: "Years Excellence", val: "20+", icon: LuTrophy },
            { label: "Success Rate", val: "98%", icon: LuCircleCheck },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <stat.icon className="text-[#cc0000] mb-2" size={24} />
              <span className="text-3xl font-black text-gray-900 tracking-tighter">{stat.val}</span>
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: PEER INSIGHTS SLIDER (Professional Context) */}
      <section className="py-24 overflow-hidden relative flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#111827]">
              PEER <span className="text-[#cc0000]">INSIGHTS.</span>
            </h2>
            <div className="w-20 h-1 bg-[#cc0000] mt-4" />
          </div>
          <div className="flex gap-4">
            <button onClick={() => paginate(-1)} className="p-4 rounded-full border border-gray-200 text-gray-400 hover:bg-[#cc0000] hover:text-white transition-all shadow-sm">
              <LuChevronLeft size={20} />
            </button>
            <button onClick={() => paginate(1)} className="p-4 rounded-full border border-gray-200 text-gray-400 hover:bg-[#cc0000] hover:text-white transition-all shadow-sm">
              <LuChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative h-[550px] md:h-[450px] w-full flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={peerIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="absolute w-[92%] max-w-5xl bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-50 grid md:grid-cols-5 h-full md:h-[400px]"
            >
              <div className="md:col-span-2 relative h-48 md:h-full">
                <img src={peerTestimonials[peerIndex].image} className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/60 to-transparent" />
              </div>
              <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center bg-white relative">
                <LuQuote className="text-[#cc0000]/10 absolute top-10 right-10" size={120} />
                <p className="text-gray-600 text-lg md:text-xl font-light italic leading-relaxed mb-8 relative z-10">
                  "{peerTestimonials[peerIndex].text}"
                </p>
                <div>
                  <h4 className="text-[#111827] font-black tracking-tight text-lg">{peerTestimonials[peerIndex].name}</h4>
                  <p className="text-[#cc0000] text-xs font-bold tracking-widest mt-1 uppercase">{peerTestimonials[peerIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* SECTION 4: STUDENT SUCCESS GRID (Mentorship Context) */}
      <section className="py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#cc0000] font-black text-xs tracking-[0.5em] mb-4 uppercase">Mentorship Legacy</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
              STUDENT <span className="text-[#cc0000]">SUCCESS.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentTestimonials.map((student, i) => (
              <motion.div 
                whileHover={{ y: -10 }}
                key={i} 
                className="bg-[#1f2937] p-8 rounded-[2.5rem] border border-white/5 relative group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#cc0000]/30">
                    <img src={student.image} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{student.name}</h4>
                    <span className="text-[10px] text-[#cc0000] font-bold uppercase tracking-widest">{student.tag}</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed italic mb-4">"{student.text}"</p>
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-tighter">{student.role}</p>
              </motion.div>
            ))}
            
            {/* CTA Card for Mentorship */}
            <div className="bg-[#cc0000] p-8 rounded-[2.5rem] flex flex-col justify-center items-center text-center">
               <LuGraduationCap className="text-white mb-4" size={40} />
               <h4 className="text-white font-black text-xl mb-2">Join the Success Story</h4>
               <p className="text-white/80 text-xs mb-6 font-medium">Empower your career with strategic mentorship.</p>
               <button className="bg-white text-[#cc0000] px-6 py-3 rounded-xl font-bold text-xs tracking-widest uppercase hover:scale-105 transition-all">
                  Apply for Mentorship
               </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}