"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuPlay,
  LuMonitor,
  LuMic,
  LuUsers,
  LuChevronRight,
  LuFileDown,
  LuX,
} from "react-icons/lu";
import Footer from "../layout/Footer";

// --- DATA: VIDEO CONTENT ---
const videoLibrary = [
  {
    id: 1,
    title: "REITs in India Explained",
    description:
      "Deep dive into SEBI regulations, history, and the future of Real Estate Investment Trusts.",
    category: "Masterclass",
    icon: <LuMonitor size={14} />,
    thumbnail: "/Harshjasrotia.com/Ritesh/Photos/P_K00191.JPG",
    videoUrl: "https://www.youtube.com/embed/gc9ZAfi2C_w?autoplay=1",
  },
  {
    id: 2,
    title: "Future of Real Estate Tech",
    description:
      "Executive interview discussing digital transformation in the luxury property sector.",
    category: "Interview",
    icon: <LuMic size={14} />,
    thumbnail: "/Harshjasrotia.com/Ritesh/Photos/P_K00120.JPG",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  },
  {
    id: 3,
    title: "Leadership Summit 2025",
    description:
      "Keynote address on mentoring the next generation of corporate leaders.",
    category: "Global Event",
    icon: <LuUsers size={14} />,
    thumbnail: "/Harshjasrotia.com/Ritesh/Photos/P_K00163.JPG",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  },
  {
    id: 4,
    title: "Operational Excellence Module",
    description:
      "Strategies for scaling business operations across 100+ cities in India.",
    category: "Masterclass",
    icon: <LuMonitor size={14} />,
    thumbnail: "/Harshjasrotia.com/Ritesh/Photos/DSC02174.JPG",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  },
];

const galleryItems = [
  {
    id: 1,
    type: "image",
    size: "large",
    title: "Pan-India Operations Scale",
    category: "Growth",
    src: "/Harshjasrotia.com/Ritesh/Photos/P_K00144.JPG",
  },
  {
    id: 2,
    type: "image",
    size: "small",
    title: "Boardroom Strategy",
    category: "Leadership",
    src: "/Harshjasrotia.com/Ritesh/Photos/DSC02314.JPG",
  },
  {
    id: 3,
    type: "image",
    size: "small",
    title: "EdTech Training Workshop",
    category: "Education",
    src: "/Harshjasrotia.com/Ritesh/Photos/DSC02352.JPG",
  },
  {
    id: 4,
    type: "image",
    size: "medium",
    title: "Real Estate Sales Module",
    category: "Real Estate",
    src: "/Harshjasrotia.com/Ritesh/Photos/DSC02368.JPG",
  },
  {
    id: 5,
    type: "image",
    size: "small",
    title: "Leadership Summit",
    category: "Impact",
    src: "/Harshjasrotia.com/Ritesh/Photos/P_K00191.JPG",
  },
  {
    id: 6,
    type: "image",
    size: "large",
    title: "Pan-India Operations Scale",
    category: "Growth",
    src: "/Harshjasrotia.com/Ritesh/Photos/DSC02174.JPG",
  },
  {
    id: 7,
    type: "image",
    size: "small",
    title: "Boardroom Strategy",
    category: "Leadership",
    src: "/Harshjasrotia.com/Ritesh/Photos/DSC02288.JPG",
  },
  {
    id: 8,
    type: "image",
    size: "small",
    title: "EdTech Training Workshop",
    category: "Education",
    src: "/Harshjasrotia.com/Ritesh/Photos/DSC02328.JPG",
  },
  {
    id: 9,
    type: "image",
    size: "medium",
    title: "Real Estate Sales Module",
    category: "Real Estate",
    src: "/Harshjasrotia.com/Ritesh/Photos/P_K00153.JPG",
  },
  {
    id: 10,
    type: "image",
    size: "small",
    title: "Leadership Summit",
    category: "Impact",
    src: "/Harshjasrotia.com/Ritesh/Photos/Screenshot 2026-02-06 170558.png",
  },
];

export default function MediaGalleryPage() {
  const [visiblePhotos, setVisiblePhotos] = useState(5);

  const loadMorePhotos = () => {
    setVisiblePhotos((prev) => prev + 5);
  };
  const [selectedImage, setSelectedImage] = useState(null);

  const [visibleCount, setVisibleCount] = useState(3);
  const [activeVideo, setActiveVideo] = useState(null);

  const loadMore = () => setVisibleCount((prev) => prev + 3);

  return (
    <main className="bg-white min-h-screen font-sans selection:bg-[#cc0000] selection:text-white">
      {/* ================= VIDEO LIGHTBOX ================= */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 p-4 md:p-10"
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 text-white hover:text-[#cc0000] transition-colors z-[1010]"
            >
              <LuX size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black"
            >
              <iframe
                src={activeVideo}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-90">
          <img
            src="/Harshjasrotia.com/Ritesh/Photos/P_K00316.JPG"
            className="w-full h-full object-cover"
            alt="Media Background"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-20 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none mt-40 mb-10 ">
            Strategic <span className="text-[#cc0000]">Footprints.</span>
          </h1>
          <div className="flex justify-center">
            <Link
              href="#"
              className="relative overflow-hidden rounded-md border-2 bg-[#cc0000] border-[#cc0000] px-10 py-4 font-black text-xs tracking-[0.2em] text-white group transition-all"
            >
              <span className="absolute inset-0 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              <span className="relative z-10 group-hover:text-[#cc0000] flex items-center gap-2   font-bold">
                <LuFileDown size={16} /> Download Media Bio (PDF)
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-10 bg-[#cc0000] border-t border-white">
        <div className="max-w-full bg-[#cc0000] mx-auto px-6 grid grid-cols-2 md:grid-cols-6 gap-12 text-center">
          {[
            ["98%", "Client Satisfaction"],
      ["50+", "Workshops Hosted"],
      ["25k+", "Success Stories"],
      ["150+", "Corporate Partners"],
      ["Pan India", "Service Reach"],
      ["24/7", "Dedicated Support"],
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
      {/* ================= BENTO GALLERY ================= */}
      <section className="py-20 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="space-y-2 px-1">
            <p className="text-[#dc2626] font-bold text-xl tracking-[0.4em]">
              Moments of Impact
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#111827] tracking-tighter">
              Pan-India <span className="text-[#dc2626]">Journey.</span>
            </h2>
            <div className="w-20 h-1 bg-[#cc0000] mt-4 mb-8" />
          </div>

          {/* Bento Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]"
          >
            <AnimatePresence mode="popLayout">
              {galleryItems.slice(0, visiblePhotos).map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  onClick={() => setSelectedImage(item)} // Trigger Lightbox
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ scale: 0.98 }}
                  className={`relative rounded-[2.5rem] overflow-hidden group shadow-lg cursor-pointer ${
                    item.size === "large"
                      ? "md:col-span-2 md:row-span-2"
                      : "md:col-span-1"
                  }`}
                >
                  <img
                    src={item.src}
                    className="w-full h-full object-cover transition-all duration-700 "
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end">
                    <h4 className="text-white font-black text-lg tracking-widest">
                      {item.title}
                    </h4>
                    <p className="text-[#cc0000] text-[10px] font-bold tracking-[0.3em] mt-2 ">
                      {item.category}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* LIGHTBOX OVERLAY */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)} // Close on click background
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10"
              >
                {/* Close Button */}
                <button className="absolute top-10 right-10 text-white text-4xl z-[60] font-light">
                  ×
                </button>

                <motion.div
                  initial={{ scale: 0.8, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.8, y: 20 }}
                  className="relative max-w-5xl w-full h-full max-h-[90vh] overflow-hidden rounded-3xl"
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
                >
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-[#cc0000] font-bold tracking-widest text-xs uppercase mb-1">
                      {selectedImage.category}
                    </p>
                    <h3 className="text-white text-3xl font-black">
                      {selectedImage.title}
                    </h3>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Centered Load More Button */}
          {visiblePhotos < galleryItems.length && (
            <div className="mt-20 w-full flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={loadMorePhotos}
                className="relative overflow-hidden rounded-2xl border-2 border-[#cc0000] px-12 py-5 font-black text-[14px] tracking-[0.2em] group text-[#cc0000]  transition-all"
              >
                <span className="absolute inset-0 w-0 bg-[#cc0000] transition-all duration-500 group-hover:w-full"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  Load More Moments
                </span>
              </motion.button>
            </div>
          )}
        </div>
      </section>
      {/* ================= AUDIO-VISUAL ARCHIVE ================= */}
      <section className="py-20 bg-[#f2f2f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-2 px-1">
            <p className="text-[#dc2626] font-bold text-xl tracking-[0.4em]">
              Audio-Visual Archive
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#111827] tracking-tighter">
              Sessions & <span className="text-[#dc2626]">Keynotes.</span>
            </h2>
            <div className="w-20 h-1 bg-[#cc0000] mt-4 mb-8 " />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {videoLibrary.slice(0, visibleCount).map((video) => (
              <motion.div
                key={video.id}
                layout
                whileHover={{ y: -12 }}
                className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    className="w-full h-full object-cover transition-all duration-700"
                    alt={video.title}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                  <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-xl text-white text-[10px] font-black tracking-widest border border-white/20 ">
                    {video.icon} {video.category}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setActiveVideo(video.videoUrl)}
                      className="w-15 h-15 bg-[#cc0000] rounded-2xl flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform"
                    >
                      <LuPlay fill="white" size={28} className="ml-1" />
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-black text-[#222222] mb-4  tracking-tight group-hover:text-[#cc0000] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-[#222222] text-m leading-relaxed ">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RESTORED LOAD MORE BUTTON */}
          {visibleCount < videoLibrary.length && (
            <div className="mt-20 w-full flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={loadMore}
                className="relative overflow-hidden rounded-2xl border-2 border-[#cc0000] px-12 py-5 font-black text-[14px] tracking-[0.3em] group text-[#cc0000]  transition-all"
              >
                <span className="absolute inset-0 w-0 bg-[#cc0000] transition-all duration-500 group-hover:w-full"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  Load More Archieve
                </span>
              </motion.button>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
