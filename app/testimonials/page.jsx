"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../layout/Footer";
import Link from "next/link";
import {
  LuQuote,
  LuChevronRight,
  LuGraduationCap,
  LuUsers,
  LuTrophy,
  LuCircleCheck,
} from "react-icons/lu";

// --- DATA: UNIFIED TESTIMONIALS ---
const studetTestimonials = [
  {
    id: 1,
    name: "Shubhangi",
    title: "Management Trainee (HR) - IREED | MBA-HRM",
    img: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
    description:
      "I had the privilege of working under Harsha Jasrotia’s mentorship during my HR internship. Under his guidance, I gained hands-on exposure to workforce planning, recruitment lifecycle, and cross-functional communication. He is an exceptionally supportive mentor who creates a safe environment for growth and improvement through reflection.",
  },
  {
    id: 2,
    name: "Nishtha Shukla Anand",
    title: "Trustee & Director, Shoolini University | Google Awardee",
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
    description:
      "Harsh is a thorough professional. A rare trait in this industry where most hard sell—he always makes genuine promises and does his utmost to deliver. He’s detail-oriented and flowing with ideas. His approach to client management is authentic and results-driven.",
  },
  {
    id: 3,
    name: "Sonia Gupta",
    title: "Social Media & Influencer Marketing Lead, Dell India",
    img: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg",
    description:
      "Harsh was one of the best team players during our time at Lodha Group. His keen industry knowledge of the North Indian market helped us gain market exposure and increase sales. He is responsible, result-oriented, and always willing to go the extra mile for Senior Management.",
  },
  {
    id: 4,
    name: "Bhaswar Paul",
    title: "Founder & CEO, IREED Academy India",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    description:
      "A delight to work alongside. He would conveniently feature in any dream team in the luxury real estate market across India. Phenomenal energy, innovative thinking, and honesty at work make him a distinct professional. He brings a rare level of integrity to the trade.",
  },
  {
    id: 5,
    name: "Sucheta Sinhahajari",
    title: "Head - Global Editorial Selection, The CEO Magazine Global",
    img: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg",
    description:
      "Harsha has a remarkable ability to articulate value with clarity and conviction, supported by strong logical reasoning. His approach to sales is both persuasive and principled, setting a benchmark for professionalism. His mentorship during the REAP course was impactful.",
  },
  {
    id: 6,
    name: "Aditi S.",
    title: "Heading Sales & Marketing | Professional Speaker",
    img: "https://images.pexels.com/photos/1181682/pexels-photo-1181682.jpeg",
    description:
      "Harsh's leadership style combines strategic clarity with a strong people-first approach. He has worked extremely well with seniors, aligning expectations while consistently meeting deadlines. He creates a positive, accountable work culture and is effective in problem-solving.",
  },
  {
    id: 7,
    name: "Didar Singh",
    title: "Data Analyst",
    img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    description:
      "Harsh is a very analytical person, focused and hard-working. He is fast to respond and comes up with creative solutions to difficult problems. He was always available when needed and never hesitated to share his market knowledge for the overall benefit of the project.",
  },
  {
    id: 8,
    name: "Sukhwinder Singh Mann",
    title: "Strategic Marketing Director",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    description:
      "As a marketing professional, he takes pain to understand deeply what a client expects and works extremely hard to achieve it. His experience and analytical skills help him look at any situation holistically and objectively. It’s been a pleasure learning from his knowledge.",
  },
  {
    id: 9,
    name: "Manish Thakur",
    title: "Marketing Manager, Shoolini University",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    description:
      "Mr. Harsh is a motivated, forward-thinking, and intelligent professional. He is very knowledgeable in things related to Digital Sales & Marketing, Customer Success, and Data Analytics. A valuable asset to any organization. Highly recommended for executive leadership.",
  },
  {
    id: 10,
    name: "Riffat J.",
    title: "UX Designer",
    img: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg",
    description:
      "Having worked with Harsh, I must say he is an excellent professional. He helped me understand the client requirement easily that helps me in designing. I am impressed by his work ethic and communication skills.",
  },
  {
    id: 11,
    name: "Shiwani Thakur",
    title: "Strategic Human Resources Leader",
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg",
    description:
      "Harsh is an exceptionally talented, energetic, focused and result oriented. He handles all the problems very easily, and always up to the mark for each situation, and ready for taking Initiatives.",
  },
  {
    id: 12,
    name: "Sumit Bahl",
    title: "Co-Founder & Managing Director, Fair Works",
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    description:
      "A true professional and a perfect fit for the profile being handled by Harsh. His dedication and focus on delivering high-quality results is unmatched in the education sector.",
  },
];

// --- SUB-COMPONENT: TESTIMONIAL CARD ---
const TestimonialCard = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const wordLimit = 20;
  const description = item?.description || "";
  const isLongText = description.split(" ").length > wordLimit;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative bg-white pt-24 pb-10 px-8 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 group flex flex-col h-100 mt-12"
    >
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0">
        <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl transition-transform duration-700 group-hover:scale-105">
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 bg-[#cc0000] p-3 rounded-2xl shadow-lg text-white">
          <LuQuote size={18} />
        </div>
      </div>

      <div className="mb-8 pt-6 md:pt-4">
        <h4 className="text-xl font-black text-[#222222] leading-none mb-2  tracking-tight">
          {item.name}
        </h4>
        <p className="text-[#cc0000] text-[13px] font-bold tracking-[0.1em] leading-tight ">
          {item.title}
        </p>
      </div>

      <div className="flex-grow">
        <p className="text-[#222222] leading-relaxed font-light ">
          {isExpanded
            ? description
            : `${description.split(" ").slice(0, wordLimit).join(" ")}${isLongText ? "..." : ""}`}
        </p>
      </div>

      {isLongText && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 flex items-center gap-2 text-[12px] font-black tracking-widest text-[#222222] hover:text-[#cc0000] transition-all group/btn "
        >
          {isExpanded ? "Minimize Discovery" : "Explore Full Impact"}
          <LuChevronRight
            className={`transition-transform duration-300 ${isExpanded ? "rotate-90" : "group-hover/btn:translate-x-2"}`}
          />
        </button>
      )}
    </motion.div>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function TestimonialPage() {
  const [industryCount, setIndustryCount] = useState(6);
  const [studentCount, setStudentCount] = useState(6); // Start with fewer for student section to show load more

  return (
    <main className="bg-[#fcfcfc] min-h-screen font-sans selection:bg-[#cc0000] selection:text-white">
      {/* HERO SECTION */}
      {/* <section className="relative pt-40 pb-24 bg-[#cc0000] min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#cc0000]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#222222] font-black text-xl tracking-[0.5em] mb-4 "
          >
            Social Proof & Impact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8 "
          >
            Voices of <span className="text-[#222222]">Trust.</span>
          </motion.h1>
          <p className="text-white max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            A legacy built on results, strategic integrity, and the success of
            the leaders we've mentored along the way.
          </p>
        </div>
      </section> */}

      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-90">
          <img
            src="/Harshjasrotia.com/Ritesh/Photos/20260108_172637.jpg"
            className="w-full h-full object-cover"
            alt="Media Background"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-20 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none mt-45 mb-10 ">
            Voices of <span className="text-[#cc0000]">Trust.</span>
          </h1>
          <p className="text-white max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            A legacy built on results, strategic integrity, and the success of
            the leaders we've mentored along the way.
          </p>
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
      {/* INDUSTRY ENDORSEMENTS SECTION */}
      <section className="py-20 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto px-6">
          {/* <div className=" text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-[#cc0000] font-black text-xs tracking-[0.6em] mb-4 ">
                Executive Network
              </p>
              <h2 className="text-5xl md:text-7xl font-black text-[#222222] tracking-tighter leading-[0.9] ">
                Industry <br />
                <span className="text-[#cc0000]">Endorsements.</span>
              </h2>
              <div className="w-20 h-1 bg-[#cc0000] mt-4 mb-8" />
            </div>
          </div> */}

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12"
          >
            <AnimatePresence mode="popLayout">
              {studetTestimonials.slice(0, industryCount).map((item) => (
                <TestimonialCard key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </motion.div>

          {industryCount < studetTestimonials.length && (
            // <div className="mt-32 text-center">
            //   <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIndustryCount(prev => prev + 3)} className="group relative px-16 py-6 bg-[#111827] text-white rounded-[2rem] font-black text-xs tracking-[0.4em]  overflow-hidden transition-all shadow-2xl">
            //     <span className="relative z-10">Load More Industry Insights</span>
            //     <div className="absolute inset-0 bg-[#cc0000] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            //   </motion.button>
            // </div>

            <div className="mt-24 text-center">
              <button
                onClick={() => setIndustryCount((prev) => prev + 3)}
                className="relative overflow-hidden rounded-xl border-2 border-[#cc0000] px-8 py-4 font-semibold group text-[#cc0000] hover:text-white inline-block"
              >
                <span className="absolute inset-0 w-0 bg-[#cc0000] transition-all duration-300 group-hover:w-full group-hover:text-[#ffffff] "></span>
                <span className="relative z-10">
                  Load More Industry Insights
                </span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* STUDENT SUCCESS SECTION (Unified Padding/Margins) */}
      <section className="py-20 bg-[#f2f2f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className=" text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-[#cc0000] font-black text-xs tracking-[0.6em] mb-4 ">
                Mentorship Legacy
              </p>
              <h2 className="text-5xl md:text-7xl font-black text-[#222222] tracking-tighter  leading-[0.9]">
                Student <br />
                <span className="text-[#cc0000]">Success.</span>
              </h2>
              <div className="w-20 h-1 bg-[#cc0000] mt-4 mb-8" />
            </div>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12"
          >
            <AnimatePresence mode="popLayout">
              {studetTestimonials.slice(0, studentCount).map((student) => (
                <TestimonialCard key={`student-${student.id}`} item={student} />
              ))}
            </AnimatePresence>

            {/* Mentorship CTA Card - Integrated into Grid */}
            {/* <motion.div
              whileHover={{ y: -10 }}
              className="relative bg-[#cc0000] pt-16 pb-12 px-10 rounded-[3.5rem] shadow-2xl flex flex-col justify-center items-center text-center mt-12 md:mt-12"
             >
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <LuGraduationCap className="text-white" size={40} />
              </div>
              <h4 className="text-white font-black text-3xl  tracking-tighter mb-4 leading-none">
                Join the <br /> Success Story
              </h4>
              <p className="text-white/80 text-sm mb-8 font-medium leading-relaxed">
                Unlock your potential through strategic, one-on-one mentorship
                sessions tailored to your goals.
              </p>
              <button className="w-full bg-white text-[#cc0000] py-5 rounded-2xl font-black text-xs tracking-[0.2em]  hover:scale-105 transition-all shadow-xl">
                Apply for Mentorship
              </button>
            </motion.div> */}
          </motion.div>

          {studentCount < studetTestimonials.length && (
            <div className="mt-24 text-center">
              <button
                onClick={() => setStudentCount((prev) => prev + 3)}
                className="relative overflow-hidden rounded-xl border-2 border-[#cc0000] px-8 py-4 font-semibold group text-[#cc0000] hover:text-white inline-block"
              >
                <span className="absolute inset-0 w-0 bg-[#cc0000] transition-all duration-300 group-hover:w-full group-hover:text-[#ffffff] "></span>
                <span className="relative z-10">
                  Load More Industry Insights
                </span>
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
