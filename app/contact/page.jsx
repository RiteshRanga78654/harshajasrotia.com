"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import { 
  LuMail, LuPhone, LuMapPin, LuLinkedin, LuSend, LuClock, LuBriefcase, LuExternalLink 
} from "react-icons/lu";
import Footer from "../layout/Footer";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => setFormStatus("sent"), 2000);
  };

  return (
    <main className="bg-white min-h-screen selection:bg-[#cc0000] selection:text-white">
      
      {/* ================= SECTION 1: EXECUTIVE HERO ================= */}
      <section className="relative pt-32 pb-20 bg-[#cc0000] overflow-hidden">
        {/* Animated background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#cc0000]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-[#ffffff] font-black text-xs tracking-[0.5em] mb-6 ">Get In Touch</p>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8 ">
              Let's Build <span className="text-[#222222]">Impact.</span>
            </h1>
            <p className="text-[#f4f4f4] text-lg md:text-xl leading-relaxed font-light">
              Available for strategic advisory, board positions, and high-stakes mentorship for the next generation of leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2: THE INQUIRY HUB ================= */}
      <section className="py-24 relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
          
          {/* Left: Contact Details & Stats */}
          <div className="lg:col-span-5 space-y-12">
            <div className="bg-[#f9f9f9] p-10 rounded-[3rem] border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-black text-[#111827]  tracking-tight mb-8">Strategic Access</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-[#cc0000] group-hover:bg-[#cc0000] group-hover:text-white transition-all shadow-sm">
                    <LuMail size={20} />
                  </div>
                  <div>
                    <p className="text-[12px] font-black  text-gray-400 tracking-widest mb-1">Professional Email</p>
                    <a href="mailto:contact@harshajasrotia.com" className="text-lg font-bold text-[#111827] hover:text-[#cc0000] transition-colors tracking-tight">
                      contact@harshajasrotia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-[#cc0000] group-hover:bg-[#cc0000] group-hover:text-white transition-all shadow-sm">
                    <LuMapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[12px] font-black  text-gray-400 tracking-widest mb-1">Operational Base</p>
                    <p className="text-lg font-bold text-[#111827] tracking-tight">Kharkhoda, Haryana, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-[#cc0000] group-hover:bg-[#cc0000] group-hover:text-white transition-all shadow-sm">
                    <LuClock size={20} />
                  </div>
                  <div>
                    <p className="text-[12px] font-black  text-gray-400 tracking-widest mb-1">Availability</p>
                    <p className="text-lg font-bold text-[#111827] tracking-tight">IST (GMT +5:30) | 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Credentials Card */}
            <div className="bg-[#cc0000] p-10 rounded-[3rem] text-white overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                <LuBriefcase size={80} />
              </div>
              <h4 className="text-[#222222] font-black text-[13px] tracking-[0.4em] mb-6 ">Quick Check</h4>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-center gap-3 text-sm font-bold  tracking-widest"><span className="w-1.5 h-1.5 bg-[#cc0000] rounded-full" /> IIT Patna Foundation</li>
                <li className="flex items-center gap-3 text-sm font-bold  tracking-widest"><span className="w-1.5 h-1.5 bg-[#cc0000] rounded-full" /> 20+ Years Excellence</li>
                <li className="flex items-center gap-3 text-sm font-bold  tracking-widest"><span className="w-1.5 h-1.5 bg-[#cc0000] rounded-full" /> Java Foundations (Infosys)</li>
              </ul>
              {/* <a href="https://linkedin.com" target="_blank" className="mt-8 flex items-center justify-between w-full p-4 bg-[#f4f4f4] border border-white/10 rounded-2xl  transition-all">
                <span className="font-bold text-xs text-[#222222] tracking-[0.2em]">LinkedIn Profile</span>
                <LuExternalLink size={16} />
              </a> */}
              <div className="mt-8 flex flex-wrap gap-5">

              <Link
              href="https://linkedin.com"
              className="relative overflow-hidden rounded-md border-2 border-[#ffffff] px-34 w-full py-3 font-semibold text-white group"
            >
              <span className="absolute inset-0 w-0 bg-[#f4f4f4] transition-all duration-300 group-hover:w-full"></span>
              <span className="relative z-10 font-semibold group-hover:text-[#cc0000]">
                LinkedIn Profile
              </span>
            </Link>
            </div>
            </div>
          </div>

          {/* Right: The Strategic Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-14 rounded-[3.5rem] shadow-2xl border border-gray-50">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[13px] font-black  text-gray-400 tracking-widest ml-4">Full Name</label>
                    <input type="text" required placeholder="John Doe" className="w-full bg-[#b3b3b3] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#cc0000] transition-all outline-none font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] font-black  text-gray-400 tracking-widest ml-4">Organization</label>
                    <input type="text" placeholder="Company Name" className="w-full bg-[#b3b3b3] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#cc0000] transition-all outline-none font-medium" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-black  text-gray-400 tracking-widest ml-4">Inquiry Category</label>
                  <select className="w-full bg-[#b3b3b3] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#cc0000] transition-all outline-none font-medium appearance-none">
                    <option>Corporate Strategy Advisory</option>
                    <option>Executive Mentorship</option>
                    <option>Real Estate Operations Scaling</option>
                    <option>Speaking & Events</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-black  text-gray-400 tracking-widest ml-4">Message</label>
                  <textarea rows={5} required placeholder="Describe your project or inquiry..." className="w-full bg-[#b3b3b3] border-none rounded-3xl px-6 py-6 focus:ring-2 focus:ring-[#cc0000] transition-all outline-none font-medium resize-none" />
                </div>

                <div className="mt-8 flex flex-wrap gap-5 ">
              <Link
              href="https://linkedin.com"
              className="relative overflow-hidden rounded-2xl border-2 bg-[#cc0000] hover:border-[#cc0000] px-45 w-full py-5 font-semibold tracking-[0.3em] text-white group"
            >
              <span className="absolute inset-0 w-0 bg-[#ffffff] transition-all duration-300 group-hover:w-full "></span>
              <span className="relative z-10 font-semibold group-hover:text-[#cc0000]">
              Initiate Protocol
              </span>
            </Link>
            </div>

                {/* <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={formStatus === "sending"}
                  className="w-full py-5 bg-[#cc0000] text-white rounded-2xl font-black  tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-[#cc0000] transition-all disabled:opacity-50"
                >
                  {formStatus === "idle" && <><LuSend size={18} /> Initiate Protocol</>}
                  {formStatus === "sending" && "Processing..."}
                  {formStatus === "sent" && "Message Received. Expect a reply within 24h."}
                </motion.button> */}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: LOCATION CONTEXT ================= */}
      <section className="pb-24 bg-[#f2f2f2] pt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-5xl md:text-7xl font-black text-[#222222] tracking-tighter  mb-4">Current <span className="text-[#cc0000]">Base</span></h2>
            <p className="text-[#222222] font-bold text-xs  tracking-widest">Global Strategy | Local Impact</p>
          </div>

          <div className="h-[450px] md:h-[550px] w-full rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white group relative">
            {/* Embedded Google Map - Centered on Kharkhoda area */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13968.17056087532!2d76.8996515436696!3d28.852928682974866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da0178330089f%3A0xc3f8e5831557008!2sKharkhoda%2C%20Haryana!5e0!3m2!1sen!2sin!4v1707000000000!5m2!1sen!2sin" 
              className="w-full h-full grayscale-[100%] contrast-[1.2] invert-[0] group-hover:grayscale-0 transition-all duration-1000 border-none"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Map Overlay Badge */}
            <div className="absolute bottom-10 left-10 p-8 bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/20 hidden md:block">
               <h4 className="text-[#111827] font-black  text-sm mb-1 tracking-widest">Office HQ</h4>
               <p className="text-gray-500 text-xs font-bold  tracking-widest mb-4">Kharkhoda, Haryana</p>
               <a href="https://maps.app.goo.gl" target="_blank" className="text-[#cc0000] font-black text-[10px]  flex items-center gap-2 tracking-widest hover:gap-4 transition-all">
                  Open in Google Maps <LuExternalLink />
               </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}