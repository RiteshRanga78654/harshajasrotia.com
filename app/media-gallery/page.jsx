"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LuPlay, LuImage, LuAward, LuFileDown, LuMic, LuUsers, LuPresentation, LuX 
} from "react-icons/lu";
import Footer from "../layout/Footer";

// --- DATA: VIDEO CONTENT ---
const videoLibrary = [
  {
    id: 1,
    category: "Masterclass",
    title: "Strategic Scaling for EdTech",
    description: "A deep dive into operational excellence and pan-India expansion strategies.",
    thumbnail: "/Harshjasrotia.com/Ritesh/Photos/P_K00113.JPG",
    icon: <LuPresentation />
  },
  {
    id: 2,
    category: "Interview",
    title: "Future of Real Estate Tech",
    description: "Executive interview discussing digital transformation in the luxury property sector.",
    thumbnail: "/Harshjasrotia.com/Ritesh/Photos/P_K00161.JPG",
    icon: <LuMic />
  },
  {
    id: 3,
    category: "Global Event",
    title: "Leadership Summit 2025",
    description: "Keynote address on mentoring the next generation of corporate leaders.",
    thumbnail: "/Harshjasrotia.com/Ritesh/Photos/DSC02349.JPG",
    icon: <LuUsers />
  }
];
const galleryItems = [
  { id: 1, type: 'image', size: 'large', title: 'Pan-India Operations Scale', category: 'Growth', src: '/Harshjasrotia.com/Ritesh/Photos/P_K00144.JPG' },
  { id: 2, type: 'image', size: 'small', title: 'Boardroom Strategy', category: 'Leadership', src: '/Harshjasrotia.com/Ritesh/Photos/DSC02314.JPG' },
  { id: 3, type: 'image', size: 'small', title: 'EdTech Training Workshop', category: 'Education', src: '/Harshjasrotia.com/Ritesh/Photos/DSC02352.JPG' },
  { id: 4, type: 'image', size: 'medium', title: 'Real Estate Sales Module', category: 'Real Estate', src: '/Harshjasrotia.com/Ritesh/Photos/DSC02368.JPG' },
  { id: 5, type: 'image', size: 'small', title: 'Leadership Summit', category: 'Impact', src: '/Harshjasrotia.com/Ritesh/Photos/P_K00191.JPG' },
];

const certificates = [
  { title: "Java Foundation", issuer: "Infosys Springboard", date: "Jan 2026" },
  { title: "Java Programming", issuer: "VaultofCode", date: "Jan 2026" },
  { title: "IIT Patna Alumnus", issuer: "IIT Patna", date: "Alum" }
];
// --- PREVIOUS GALLERY DATA ---


export default function MediaGalleryPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <main className="bg-white min-h-screen">
      <section className="relative h-[60vh] md:h-[80vh]  flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-90">
           <img src="/Harshjasrotia.com/Ritesh/Photos/DSC02216.JPG" className="w-full h-full object-cover" alt="Video Background" />
        </div>
        <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-20 text-center px-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="inline-block px-5 py-2 bg-[#cc0000] text-white text-[10px] font-black tracking-[0.4em]  rounded-full mb-8 shadow-2xl"
                    >
                    Press & Media Kit
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-10">
                       Strategic <span className="text-[#cc0000]">Footprints.</span>
                    </h1>
                  
                  <div className=" flex flex-wrap gap-5">
            <Link
              href="/contact"
              className="relative overflow-hidden mx-auto rounded-md border-2 bg-[#cc0000] border-[#ffffff] hover:border-[#cc0000] px-10 py-4 font-semibold text-white group"
            >
              <span className="absolute inset-0 w-0 bg-[#ffffff] transition-all duration-300 group-hover:w-full"></span>
              <span className="relative z-10 group-hover:text-[#cc0000] ">
               Download Media Bio (PDF)
              </span>
            </Link>

            {/* <Link
              href="/journey"
              className="px-6 py-3 rounded-md border border-[#ffffff] text-[#ffffff] transition"
            >
              View The Journey
            </Link> */}
          </div>


          {/* <button className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full text-white font-bold hover:bg-[#cc0000] transition-all">
            <LuFileDown /> Download Media Bio (PDF)
          </button> */}
        </div>
      </section>

   
      {/* ================= SECTION 1: HERO ================= */}
      {/* <section className="relative h-[50vh] bg-[#111827] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-[#111827] z-10" />
        <div className="relative z-20 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter ">
            Media & <span className="text-[#cc0000]">Press Kit.</span>
          </h1>
          <p className="text-gray-400 mt-4 tracking-widest font-bold  text-xs">Official Records of Impact & Leadership</p>
        </div>
      </section> */}

      {/* ================= SECTION 2: VIDEO SESSIONS (NEW) ================= */}
      <section className="py-20 bg-[#f2f2f2]">
        <div className="max-w-7xl mx-auto px-6">
          {/* <div className="mb-16 border-l-4 border-[#cc0000] pl-6">
            <p className="text-[#cc0000] font-black text-xs tracking-[0.4em] mb-2 ">Audio-Visual Archive</p>
            <h2 className="text-4xl md:text-7xl font-black text-[#111827] tracking-tighter ">Sessions & <span className="text-[#cc0000]">Keynotes.</span></h2>
          </div> */}

          <div className="space-y-2 px-1">
            <p className="text-[#dc2626] font-bold text-xl tracking-[0.4em] ">
              Audio-Visual Archive
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#111827] tracking-tighter">
             Sessions & <span className="text-[#dc2626]">Keynotes.</span>
            </h2>
                        <div className="w-20 h-1 bg-[#cc0000] mt-4 mb-10" />

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {videoLibrary.map((video) => (
              <motion.div 
                key={video.id}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100"
              >
                {/* Thumbnail Wrapper */}
                <div className="relative h-64 overflow-hidden">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover  transition-all duration-700" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-16 h-16 bg-[#cc0000] rounded-full flex items-center justify-center text-white shadow-2xl"
                    >
                      <LuPlay fill="white" size={24} />
                    </motion.button>
                  </div>

                  <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-[10px] font-black tracking-widest  border border-white/20">
                    {video.icon} {video.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-black text-[#111827]  tracking-tight mb-3 group-hover:text-[#cc0000] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed ">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: THE BENTO GALLERY ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* <div className="mb-15 border-r-4 mx-auto border-[#cc0000] ">
            <p className="text-[#cc0000] font-black text-xs tracking-[0.4em] mb-2 ">Moments of Impact</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#111827] tracking-tighter ">Pan-India <span className="text-[#cc0000]">Journey.</span></h2>
          </div> */}

          <div className="space-y-2 px-1">
            <p className="text-[#dc2626] font-bold text-xl tracking-[0.4em] ">
              Moments of Impact
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#111827] tracking-tighter">
             Pan-India <span className="text-[#dc2626]">Journey.</span>
            </h2>
                        <div className="w-20 h-1 bg-[#cc0000] mt-4 mb-10" />

          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
            {galleryItems.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 0.98 }}
                className={`relative rounded-[2rem] overflow-hidden group shadow-lg ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1'}`}
              >
                <img src={item.src} className="w-full h-full object-cover  transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all p-8 flex flex-col justify-end">
                  <h4 className="text-white font-black text-lg  tracking-widest">{item.title}</h4>
                  <p className="text-[#cc0000] text-[10px] font-bold tracking-[0.3em]  mt-2">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: CERTIFICATION WALL ================= */}
      <section className="py-15 bg-[#f2f2f2] text-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="space-y-2 px-1">
            <h2 className="text-4xl md:text-5xl font-black text-[#111827] tracking-tighter">
             Academic & Professional <br /><span className="text-[#dc2626]">Credentials.</span>
            </h2>
            <div className="w-20 h-1 bg-[#cc0000] mt-4 mb-10" />

          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["IIT Patna Alumnus", "Java Foundation - Infosys", "Java Programming - VaultofCode", "EdTech Scaling Expert"].map((cert, i) => (
              <div key={i} className="bg-[#cc0000] border border-white/10 p-8 rounded-3xl hover:bg-[#cc0000]/10 hover:text-[#cc0000] transition-all group">
                <div className="w-10 h-10 rounded-full border border-[#ffffff] flex items-center justify-center text-[#ffffff] mb-6 group-hover:bg-[#cc0000] group-hover:text-white transition-all">
                  <LuAward size={18} />
                </div>
                <h4 className="text-sm font-black  tracking-widest  leading-tight">{cert}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}