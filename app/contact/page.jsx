"use client";
import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LuMail,
  LuPhone,
  LuMapPin,
  LuLinkedin,
  LuSend,
  LuClock,
  LuBriefcase,
  LuExternalLink,
} from "react-icons/lu";
// import Linked from "../component/Linked";
import Footer from "../layout/Footer";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState("idle");
  const formRef = useRef(null);

  const handleInitiate = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Protocol Initiated!",
      text: "The Harsha Jasrotia project sequence is now active.",
      icon: "success",
      confirmButtonColor: "#cc0000",
      background: "#ffffff",
      timer: 4000,
      timerProgressBar: true,
      customClass: {
        popup:
          "rounded-[2rem] md:rounded-[2.5rem] border-4 border-[#cc0000]/10",
        confirmButton: "rounded-xl px-8 py-3 font-bold tracking-widest",
      },
    });

    if (formRef.current) {
      formRef.current.reset();
    }
    setFormStatus("idle");
  };

  return (
    <main className="bg-white min-h-screen selection:bg-[#cc0000] selection:text-white">
      {/* ================= SECTION 1: EXECUTIVE HERO ================= */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-90">
          <img
            src="/Harshjasrotia.com/Ritesh/Photos/DSC02328.JPG"
            className="w-full h-full object-cover object-center"
            alt="Media Background"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-20 text-center px-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-tight mt-50 mb-10">
            Let's Build <span className="text-[#cc0000]">Impact.</span>
          </h1>
          <p className="text-white max-w-2xl mx-auto text-base md:text-xl font-light leading-relaxed">
            Available for strategic advisory, board positions, and high-stakes
            mentorship for the next generation of leaders.
          </p>
        </div>
      </section>
      <section className="py-10 bg-[#cc0000] border-t border-white">
        <div className="max-w-full bg-[#cc0000] mx-auto px-6 grid grid-cols-2 md:grid-cols-6 gap-12 text-center">
          {[
           ["< 24 Hrs", "Response Time"],
      ["Global", "Availability"],
      ["Direct", "Consultation"],
      ["Custom", "Program Design"],
      ["2026", "Calendar Open"],
      ["100%", "Confidential"],
          ].map(([num, label], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-3xl font-bold text-[#f4f4f4]">{num}</h3>
              <p className="mt-2 text-[#f4f4f4]">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* <Linked /> */}

      {/* ================= SECTION 2: THE INQUIRY HUB ================= */}
      <section className="py-12 md:py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: Contact Details & Stats */}
          <div className="lg:col-span-5 space-y-8 md:space-y-12 order-2 lg:order-1">
            <div className="bg-[#f9f9f9] p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-black text-[#111827] tracking-tight mb-8">
                Strategic Access
              </h3>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start gap-4 md:gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-[#cc0000] group-hover:bg-[#cc0000] group-hover:text-white transition-all shadow-sm">
                    <LuMail size={20} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] md:text-[12px] font-black text-gray-400 tracking-widest mb-1 ">
                      Professional Email
                    </p>
                    <a
                      href="mailto:contact@harshajasrotia.com"
                      className="text-sm sm:text-base md:text-lg font-bold text-[#111827] hover:text-[#cc0000] transition-colors tracking-tight break-all"
                    >
                      contact@harshajasrotia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 md:gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-[#cc0000] group-hover:bg-[#cc0000] group-hover:text-white transition-all shadow-sm">
                    <LuMapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-[12px] font-black text-gray-400 tracking-widest mb-1 ">
                      Operational Base
                    </p>
                    <p className="text-sm sm:text-base md:text-lg font-bold text-[#111827] tracking-tight">
                      Gurugram, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 md:gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-[#cc0000] group-hover:bg-[#cc0000] group-hover:text-white transition-all shadow-sm">
                    <LuClock size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-[12px] font-black text-gray-400 tracking-widest mb-1 ">
                      Availability
                    </p>
                    <p className="text-sm sm:text-base md:text-lg font-bold text-[#111827] tracking-tight">
                      IST (GMT +5:30) | 9:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Credentials Card */}
            <div className="bg-[#cc0000] p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] text-white overflow-hidden relative group shadow-xl">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                <LuBriefcase size={80} className="hidden sm:block" />
              </div>
              <h4 className="text-[#222222] font-black text-[11px] md:text-[13px] tracking-[0.4em] mb-6 ">
                Quick Check
              </h4>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-widest">
                  <span className="w-2 h-2 bg-white rounded-full flex-shrink-0" />{" "}
                  IIT Patna Foundation
                </li>
                <li className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-widest">
                  <span className="w-2 h-2 bg-white rounded-full flex-shrink-0" />{" "}
                  20+ Years Excellence
                </li>
              </ul>

              <div className="mt-8">
                <Link
                  href="https://www.linkedin.com/in/harshjasrotia/"
                  target="_blank"
                  className="relative block overflow-hidden rounded-xl border-2 border-white w-full py-4 text-center font-bold tracking-widest text-white group"
                >
                  <span className="absolute inset-0 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  <span className="relative z-10 group-hover:text-[#cc0000]">
                    LinkedIn Profile
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right: The Strategic Form */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-white p-6 sm:p-10 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl border border-gray-50">
              <form ref={formRef} className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label className="text-[11px] md:text-[13px] font-black text-gray-400 tracking-widest ml-4 ">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full bg-[#f3f4f6] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#cc0000] transition-all text-[#222222] outline-none font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] md:text-[13px] font-black text-gray-400 tracking-widest ml-4 ">
                      Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full bg-[#f3f4f6] border-none rounded-2xl px-6 py-4 text-[#222222] focus:ring-2 focus:ring-[#cc0000] transition-all outline-none font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] md:text-[13px] font-black text-gray-400 tracking-widest ml-4 ">
                    Inquiry Category
                  </label>
                  <select className="w-full bg-[#f3f4f6] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#cc0000] transition-all text-[#222222] outline-none font-medium appearance-none">
                    <option>Corporate Strategy Advisory</option>
                    <option>Executive Mentorship</option>
                    <option>Real Estate Operations Scaling</option>
                    <option>Speaking & Events</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] md:text-[13px] font-black text-gray-400 tracking-widest ml-4 ">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Describe your project or inquiry..."
                    className="w-full bg-[#f3f4f6] border-none rounded-2xl md:rounded-3xl px-6 py-6 text-[#222222] focus:ring-2 focus:ring-[#cc0000] transition-all outline-none font-medium resize-none"
                  />
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    onClick={handleInitiate}
                    className="relative block overflow-hidden rounded-2xl border-2 border-[#cc0000] bg-[#cc0000] px-10 w-full py-5 text-center font-black tracking-[0.2em] md:tracking-[0.3em] text-white group"
                  >
                    <span className="absolute inset-0 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    <span className="relative z-10 group-hover:text-[#cc0000]">
                      Initiate Protocol
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: LOCATION CONTEXT ================= */}
      <section className="pb-16 md:pb-24 bg-[#f9fafb] pt-8 md:pt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-[#222222] tracking-tighter mb-4">
              Current <span className="text-[#cc0000]">Base</span>
            </h2>
            <p className="text-[#222222] font-bold text-[10px] md:text-xs tracking-widest ">
              Global Strategy | Local Impact
            </p>
            <div className="w-20 h-1 bg-[#cc0000] mx-auto mt-4 mb-8 md:mb-10" />
          </div>

          <div className="h-[350px] sm:h-[450px] md:h-[550px] w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white group relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.083238203638!2d77.0366431842731!3d28.41674511334232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d233cdeec2d81%3A0xaf6144fd2d8f2f4f!2sIREED%20India%20-%20Real%20Estate%20%26%20Digital%20Marketing%20Institute!5e0!3m2!1sen!2sus!4v1770706716875!5m2!1sen!2sus"
              className="w-full h-full grayscale-[100%] contrast-[1.2] group-hover:grayscale-0 transition-all duration-1000 border-none"
              allowFullScreen=""
              loading="lazy"
            ></iframe>

            <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-10 md:right-auto p-6 md:p-8 bg-white/90 backdrop-blur-xl rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-white/20">
              <h4 className="text-[#111827] font-black text-xs md:text-sm mb-1 tracking-widest ">
                Office HQ
              </h4>
              <p className="text-gray-500 text-[10px] md:text-xs font-bold tracking-widest mb-4 ">
                Gurugram, Haryana
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                className="text-[#cc0000] font-black text-[9px] md:text-[10px] flex items-center gap-2 tracking-widest hover:gap-4 transition-all "
              >
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
