"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuMic,
  LuPlay,
  LuFileDown,
  LuArrowUpRight,
  LuCalendar,
  LuCircleCheck,
  LuMonitor,
  LuUsers,
  LuClock,
  LuExternalLink,
  LuChevronRight,
} from "react-icons/lu";
import Footer from "../layout/Footer";
const blogs = [
  {
    title: "Scaling Beyond 100 Cities: The COO's Playbook",
    excerpt:
      "Insights into operational resilience and the logistical architecture required for Pan-India expansion.",
    date: "Feb 2026",
    tag: "Operations",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
  },
  {
    title: "Why Every COO Needs a Developer's Mindset",
    excerpt:
      "Bridging the gap between front-end innovation and executive decision-making.",
    date: "Jan 2026",
    tag: "Leadership",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
  },
];

// --- NEW DATA: EVENT VIDEO GALLERY ---
const eventVideos = [
  {
    title: "Shoolini University Keynote",
    description: "Full session on 'Empowering the Next 1,000 Professionals'.",
    thumbnail:
      "https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg",
    duration: "18:42",
  },
  {
    title: "Real Estate Tech Summit",
    description:
      "Panel discussion on digital adoption in luxury property markets.",
    thumbnail:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
    duration: "12:15",
  },
  {
    title: "IIT Patna Alumni Meet",
    description: "A talk on the foundational values of technical excellence.",
    thumbnail:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
    duration: "08:30",
  },
];

export default function EventsSpeakingPage() {
  const [activeBio, setActiveBio] = useState("short");
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <main className="bg-white min-h-screen selection:bg-[#cc0000] selection:text-white">
      {/* ================= SECTION 1: KEYNOTE SPOTLIGHT (HERO) ================= */}
      <section className="relative h-[70vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Cinematic Video/Image Loop Background */}
        <div className="absolute inset-0 z-0 opacity-90">
          <img
            src="https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg"
            className="w-full h-full object-cover"
            alt="Stage background"
          />
        </div>
        <div className="absolute inset-0  z-10" />

        <div className="relative z-20 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-5 py-2 bg-[#cc0000] text-white text-[10px] font-black tracking-[0.4em]  rounded-full mb-8 shadow-2xl"
          >
            Voice of Authority
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-10">
            The Executive <span className="text-[#cc0000]">Stage.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[#f4f4f4] text-lg md:text-xl font-light leading-relaxed">
            "Bridging operational complexity with technological innovation on
            the world's most prestigious corporate stages."
          </p>
        </div>
      </section>

      {/* ================= SECTION 2: DUAL-BIO & DOWNLOADS ================= */}
      <section className="py-24 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <div className="flex gap-8 mb-8 border-b border-gray-100">
              {["short", "long"].map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveBio(type)}
                  className={`pb-4 text-[15px] font-black  tracking-widest transition-all ${activeBio === type ? "text-[#cc0000] border-b-2 border-[#cc0000]" : "text-gray-400"}`}
                >
                  {type} Bio
                </button>
              ))}
            </div>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light ">
              {activeBio === "short"
                ? "Harsha Jasrotia is a seasoned COO and front-end expert with 20+ years of experience scaling operations across 100+ cities. An IIT Patna alumnus, he specializes in bridging technical innovation with operational efficiency."
                : "With a career spanning over two decades, Harsha Jasrotia has established himself as a powerhouse in operational scaling and digital transformation. From his foundational years at IIT Patna to leading Pan-India expansions for high-growth EdTech and Real Estate firms, Harsha brings a unique 'developer-eye' to the COO boardroom. He has mentored over 1,000 professionals, focusing on supply chain resilience and technology adoption. His keynotes are known for being data-driven, strategically grounded, and deeply impactful for executive leadership teams."}
            </p>
          </div>

          <div className="lg:col-span-4 bg-[#b3b3b3] p-10 rounded-[2.5rem] shadow-xl border border-gray-50 h-fit">
            <h4 className="text-sm font-black text-[#cc0000] tracking-widest mb-6">
              Speaker Toolkit
            </h4>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-[#cc0000] rounded-2xl group hover:bg-[#f4f4f4] transition-all">
                <span className="text-[10px] font-black text-[#f4f4f4] tracking-widest group-hover:text-[#cc0000]">
                  Speaker One-Sheet (PDF)
                </span>
                <LuFileDown className="group-hover:text-white" />
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-[#cc0000] rounded-2xl group hover:bg-[#f4f4f4] transition-all">
                <span className="text-[10px] font-black text-[#f4f4f4] tracking-widest group-hover:text-[#cc0000]">
                  Headshot Gallery (ZIP)
                </span>
                <LuFileDown className="group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 1: HERO (UVP & HEADSHOT) ================= */}
      <section className="relative pt-20 pb-20 bg-[#b3b3b3] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="text-[#cc0000] font-black text-[15px] tracking-[0.4em] mb-6 ">
              Keynote Speaker & COO
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8 ">
              Operational <span className="text-[#cc0000]">Excellence:</span>{" "}
              <br />
              <span className="text-3xl md:text-5xl font-light  text-[#f4f4f4]">
                Scaling Startups in High-Growth Phases.
              </span>
            </h1>
            <div className="flex gap-4">
              <button className="bg-[#cc0000] text-white px-8 py-4 rounded-full font-black text-xs  tracking-widest hover:bg-white hover:text-[#cc0000] transition-all">
                Book for 2026
              </button>
              <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-black text-xs  tracking-widest hover:bg-white/20 transition-all">
                Watch Sizzle Reel
              </button>
            </div>
          </motion.div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-[#cc0000]/20 blur-3xl rounded-full opacity-50" />
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-[#f4f4f4] shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                alt="Harsha Jasrotia Professional"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: TOPICS & EXPERTISE ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-[#111827]  tracking-tighter mb-16">
            Signature <span className="text-[#cc0000]">Keynotes.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Operations at Scale",
                take: "Managing 100+ cities with precision.",
                icon: <LuMonitor />,
              },
              {
                title: "The COO-Dev Bridge",
                take: "Using technical logic to drive business.",
                icon: <LuMic />,
              },
              {
                title: "Mentorship legacy",
                take: "Scaling human capital & talent.",
                icon: <LuUsers />,
              },
            ].map((topic, i) => (
              <div
                key={i}
                className="group p-10 bg-[#cc0000] rounded-[3rem] border border-transparent hover:border-[#cc0000] transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 5 }}
                  className="text-[#f4f4f4] text-4xl mb-6 flex relative z-10 transition-transform"
                >
                  {topic.icon}
                </motion.div>
                {/* <div className="text-[#f4f4f4] mb-8 group-hover:scale-110 transition-transform">{topic.icon}</div> */}
                <h4 className="text-xl font-black  tracking-tight mb-4">
                  {topic.title}
                </h4>
                <p className="text-[#f4f4f4] text-sm ">
                  Key Takeaway: {topic.take}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: SHOWREEL & PROOF ================= */}
      <section className="py-24 bg-[#b3b3b3] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-[3rem] overflow-hidden group shadow-2xl border border-white/10">
              <img
                src="https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-[#cc0000] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                  <LuPlay fill="white" size={30} />
                </button>
              </div>
              <div className="absolute bottom-6 left-6 text-[10px] font-black  tracking-widest bg-black/40 px-4 py-2 rounded-full">
                Speaker Sizzle Reel
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-black  tracking-tighter mb-8 leading-none">
                Voices from{" "}
                <span className="text-[#cc0000]">The Boardroom.</span>
              </h3>
              <div className="space-y-8">
                <p className="text-xl font-light  text-[#f4f4f4]">
                  "Harsha's ability to simplify complex supply chain issues into
                  actionable leadership steps is unmatched. A true strategist."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-1 bg-[#cc0000]" />
                  <p className="text-xs font-black  tracking-[0.2em]">
                    Director, Shoolini University
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION: CHRONICLES OF LEADERSHIP (BLOGS) ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <p className="text-[#cc0000] font-black text-xs tracking-[0.4em] mb-4 ">
                Thought Leadership
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-[#111827] tracking-tighter ">
                The <span className="text-[#cc0000]">Chronicles.</span>
              </h2>
            </div>
            <button className="flex items-center gap-2 font-black text-xs  tracking-widest text-gray-400 hover:text-[#cc0000] transition-colors">
              View All Articles <LuExternalLink size={14} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {blogs.map((blog, i) => (
              <motion.article
                key={i}
                whileHover={{ x: 10 }}
                className="group grid md:grid-cols-5 gap-8 items-center border-b border-gray-100 pb-12 transition-all"
              >
                <div className="md:col-span-2 aspect-video rounded-3xl overflow-hidden shadow-lg">
                  <img
                    src={blog.image}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    alt={blog.title}
                  />
                </div>
                <div className="md:col-span-3">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-[#cc0000]/10 rounded-full text-[#cc0000] text-[10px] font-black  tracking-widest">
                      {blog.tag}
                    </span>
                    <span className="text-gray-400 text-[10px] font-bold  tracking-widest flex items-center gap-1">
                      <LuCalendar size={12} /> {blog.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-[#111827]  tracking-tighter mb-4 group-hover:text-[#cc0000] transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 ">
                    {blog.excerpt}
                  </p>
                  <button className="flex items-center gap-2 text-[10px] font-black  tracking-[0.3em] text-[#111827] hover:gap-4 transition-all">
                    Read Insight <LuArrowUpRight />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#b3b3b3] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-[#cc0000] font-black text-xs tracking-[0.4em] mb-4 ">
              Video Archives
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter ">
              Sessions in <span className="text-[#cc0000]">Motion.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {eventVideos.map((video, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    alt={video.title}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedVideo(video)}
                      className="w-14 h-14 bg-[#cc0000] rounded-full flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform"
                    >
                      <LuPlay fill="white" size={20} />
                    </button>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-bold">
                    {video.duration}
                  </div>
                </div>
                <div className="p-8 bg-[#cc0000]">
                  <h4 className="text-lg font-black  tracking-tight mb-2 group-hover:text-[#f4f4f4] transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-[#ffffff] text-sm font-light leading-relaxed ">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: BOOKING & LOGISTICS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-black  tracking-tighter text-[#222222] mb-8">
              Initiate <span className="text-[#cc0000]">Engagement.</span>
            </h2>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-[#b3b3b3] border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#cc0000] transition-all"
              />
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Event Date"
                  className="bg-[#b3b3b3] border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#cc0000] transition-all"
                />
                <input
                  type="text"
                  placeholder="Expected Audience"
                  className="bg-[#b3b3b3] border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#cc0000] transition-all"
                />
              </div>
              <textarea
                rows={5}
                placeholder="Topic or Theme"
                className="w-full bg-[#b3b3b3] border-none rounded-[2rem] px-6 py-6 outline-none focus:ring-2 focus:ring-[#cc0000] transition-all resize-none"
              />
              <button className="w-full py-5 bg-[#cc0000] text-white rounded-2xl font-black  tracking-[0.3em] hover:bg-[#b3b3b3] hover:text-[#222222] transition-all">
                Submit Inquiry
              </button>
            </form>
          </div>

          <div className="space-y-12">
            <div className="bg-[#f9f9f9] p-10 rounded-[3rem]">
              <h4 className="text-xs font-black  tracking-[0.3em] text-[#cc0000] mb-6">
                Technical Rider
              </h4>
              <ul className="space-y-4">
                {[
                  "Wireless Lapel Microphone",
                  "HDMI Input for GSAP Presentations",
                  "Comfort Monitor for High-Growth Data",
                  "Sound patch for Audio Sizzle Reels",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm font-bold  tracking-widest text-gray-600"
                  >
                    <LuCircleCheck className="text-[#cc0000]" size={16} />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#"
              className="flex items-center justify-between p-10 bg-[#cc0000] rounded-[3rem] group"
            >
              <div className="text-white">
                <h4 className="text-xs font-black  tracking-widest text-[#222222] mb-2">
                  Direct Consult
                </h4>
                <p className="text-2xl font-black  tracking-tight">
                  Schedule on Calendly
                </p>
              </div>
              <LuChevronRight
                className="text-white group-hover:translate-x-4 transition-transform"
                size={40}
              />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
