"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Linked from "../component/Linked";
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
      <section className="relative h-[70vh] md:h-[83vh] flex items-center justify-center overflow-hidden">
        {/* Cinematic Video/Image Loop Background */}
        <div className="absolute inset-0 z-0 opacity-90">
          <img
            src="/Harshjasrotia.com/Ritesh/Photos/tableimg.JPG"
            className="w-full h-full object-cover"
            alt="Stage background"
          />
        </div>
        <div className="absolute inset-0  z-10" />

        <div className="relative z-20 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mt-50 mb-10">
            The Executive <span className="text-[#cc0000]">Stage.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[#f4f4f4] text-lg md:text-xl font-light leading-relaxed">
            "Bridging operational complexity with technological innovation on
            the world's most prestigious corporate stages."
          </p>
        </div>
      </section>

        <section className="py-10 bg-[#cc0000] border-t border-white">
              <div className="max-w-full bg-[#cc0000] mx-auto px-6 grid grid-cols-2 md:grid-cols-6 gap-12 text-center">
                {[      ["100+", "Cities Covered"],
      ["10k+", "Professionals Trained"],
      ["50+", " Clients"],
      ["15+", "Unique Modules"],
      ["95%", "Repeat Engagement"],
                        ["500+", "Workshops Delivered"],
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

<Linked />

      <Footer />
    </main>
  );
}
