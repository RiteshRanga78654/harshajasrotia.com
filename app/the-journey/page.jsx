"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  LuTarget, 
  LuRocket, 
  LuFactory, 
  LuCompass, 
  LuChartBar, // Corrected Name
  LuCpu, 
  LuZap,
  LuImage,
  LuChevronRight, LuShieldCheck, LuTrendingUp, LuChartPie, LuNetwork
} from "react-icons/lu";
import Footer from "../layout/Footer";

const careerPath = [
  { 
    year: "2024", 
    title: "COO - Scaling Mastery", 
    desc: "Optimizing pan-India operations, turning complex organizational challenges into scalable revenue engines with data-driven precision.", 
    icon: <LuTarget />,
    company: "Current Leadership"
  },
  { 
    year: "2018", 
    title: "The EdTech Surge", 
    desc: "Led sales and marketing for a top-tier EdTech firm, scaling from 0 to 100+ cities with a 1,000+ strong team.", 
    icon: <LuRocket />,
    company: "Tier-1 EdTech Corp"
  },
  { 
    year: "2010", 
    title: "Real Estate Strategy", 
    desc: "Pioneered luxury real estate closing frameworks and specialized sales training for high-net-worth portfolios.", 
    icon: <LuFactory />,
    company: "Major Realty Group"
  },
  { 
    year: "FOUNDATION", 
    title: "The IIT Logic", 
    desc: "Developed a core analytical mindset at IIT Patna, treating every business hurdle as an engineering problem to be solved.", 
    icon: <LuCompass />,
    company: "IIT Patna"
  }
];

const skills = [
    { icon: <LuTrendingUp />, title: "Scaling Operations", level: "Expert" },
    { icon: <LuChartPie />, title: "P&L Management", level: "Strategic" },
    { icon: <LuNetwork />, title: "Sales Automation", level: "Technical" },
    { icon: <LuShieldCheck />, title: "Risk Mitigation", level: "Analytical" },
  ];

  const galleryImages = [
  { url: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg", title: "Strategic Planning" },
  { url: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg", title: "Team Leadership" },
  { url: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg", title: "Corporate Excellence" },
  { url: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg", title: "Market Expansion" },
];

export default function JourneyPage() {
  return (
    <main className="bg-[#F8F9FA] text-[#1e1e1e] overflow-hidden min-h-screen">
      
      {/* ================= HERO: THE ORIGIN ================= */}
      <section className="relative py-24 md:py-32 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#b79662] font-black text-xs tracking-[0.5em] mb-4 uppercase">The Career Narrative</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
              The Path of <br /> <span className="text-[#b79662]">Strategic Scale.</span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-lg font-light ">
              "My journey is defined by a transition from engineering labs to the boardroom—applying the same logic to human capital and market expansion."
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[300px] md:h-[450px]"
          >
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-[#b79662] hidden md:block" />
            <div className="relative h-full w-full border-[12px] border-white shadow-2xl rounded-2xl overflow-hidden bg-gray-100">
               <img 
                src="/decoil.png" 
                alt="Leadership" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= EXECUTIVE DEPTH SECTION ================= */}
      <section className="py-24 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <LuChartBar />, title: "Data Rigor", text: "Moving beyond intuition to leverage raw data for pan-India expansion." },
              { icon: <LuCpu />, title: "Systems Thinking", text: "Engineering workflows that eliminate bottlenecks in high-speed sales teams." },
              { icon: <LuZap />, title: "Velocity", text: "Scaling from 0 to 100+ cities by optimizing lead-to-conversion cycles." }
            ].map((box, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-[#1e1e1e] p-10 rounded-3xl shadow-sm border border-gray-100 group transition-all duration-300"
              >
                <div className="text-[#b79662] text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {box.icon}
                </div>
                <h3 className="text-xl font-black mb-4 uppercase text-white tracking-tight ">{box.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{box.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
               <LuImage className="text-[#b79662] text-2xl" />
               <span className="text-[#b79662] font-black text-xs tracking-[0.4em] uppercase">Visual Milestones</span>
            </div>
            <h2 className="text-4xl font-black tracking-tighter uppercase italic">Leadership in <span className="text-[#b79662]">Action</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[500px]">
            {galleryImages.map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ flex: 2 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="relative overflow-hidden rounded-3xl group cursor-pointer flex-1 h-[300px] md:h-full border border-gray-100"
              >
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-white font-black text-xl uppercase tracking-tighter">{img.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE JOURNEY (TIMELINE) ================= */}
      <section className="py-32 bg-white relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-15">
            <h2 className="text-4xl md:text-6xl font-black text-[#1e1e1e] tracking-tighter  uppercase">
              The <span className="text-[#b79662]">Trajectory</span>
            </h2>
          </div>
          
          <div className="relative">
             <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-100" />

             <div className="space-y-24">
               {careerPath.map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                 >
                   <div className={`w-full md:w-1/2 pl-16 md:px-12 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left group`}>
                      <div className="inline-block mb-4 text-[10px] font-black px-3 py-1 bg-[#b79662]/10 text-[#b79662] rounded-full uppercase tracking-widest">
                        {item.company}
                      </div>
                      <h3 className="text-3xl font-black text-[#1e1e1e] uppercase tracking-tighter mb-2 group-hover:text-[#b79662] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-lg leading-relaxed font-light">{item.desc}</p>
                      <span className="md:hidden block mt-4 text-[#b79662] font-black font-mono text-sm">{item.year}</span>
                   </div>
                   
                   <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 bg-white border-2 border-[#b79662] rounded-full flex items-center justify-center text-[#b79662] shadow-xl z-10 transition-all duration-300 hover:bg-[#b79662] hover:text-white text-xl">
                      {item.icon}
                   </div>

                   <div className={`hidden md:flex w-1/2 h-full items-center ${i % 2 === 0 ? 'justify-start pl-12' : 'justify-end pr-12'}`}>
                      <span className="text-8xl font-black text-[#b79662] select-none font-mono">
                        {item.year.includes('FOUNDATION') ? 'ROOT' : item.year}
                      </span>
                   </div>
                 </motion.div>
               ))}
             </div>
          </div>
        </div>
      </section>

      <section className="py-15 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black uppercase tracking-tighter">Strategic <span className="text-[#b79662]">Arsenal</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div key={i} className="bg-[#1e1e1e] p-8 rounded-2xl border border-gray-100 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[#b79662] text-3xl mb-4 flex justify-center">{skill.icon}</div>
              <h4 className="font-bold text-white text-sm uppercase mb-1">{skill.title}</h4>
              <p className="text-[10px] text-[#b79662] font-black uppercase tracking-widest">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-[#111] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-8 tracking-tighter">
            LEADERSHIP THROUGH <span className="text-[#b79662]">LOGIC</span>
          </h2>
          <Link 
            href="/contact" 
            className="group inline-flex items-center gap-2 bg-[#b79662] text-[#1e1e1e] font-black uppercase tracking-widest px-10 py-4 rounded-full hover:bg-white hover:scale-105 transition-all duration-300"
          >
            Connect for Strategy <LuChevronRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
          <Footer />

    </main>

  );
}