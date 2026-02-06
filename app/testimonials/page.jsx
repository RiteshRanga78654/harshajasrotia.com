// "use client";
// import React, { useState, useEffect, useCallback } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { LuQuote, LuArrowLeft, LuArrowRight, LuCircleCheck } from "react-icons/lu";
// import Footer from "../layout/Footer";

// // Data remains consistent with your professional history
// const colleagues = [
//   { name: "Sonia Gupta", role: "Marketing Lead, Dell India", text: "His keen industry knowledge helped us gain market exposure and increase sales figures. Anyone would be lucky to have him on their team.", image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg" },
//   { name: "Bhaswar Paul", role: "Founder & CEO, IREED Academy", text: "Phenomenal energy, innovative thinker and honesty at work makes him a distinct professional of the trade. A delight to work with.", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" },
//   { name: "Nishtha Shukla Anand", role: "Trustee, Shoolini University", text: "A rare trait in this industry... he always makes genuine promises and does his utmost to deliver. Detail oriented and flowing with ideas.", image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" }
// ];

// const students = [
//   { name: "Sukhwinder Singh Mann", role: "Strategic Marketing Director", text: "His analytical skills help him look at situations holistically. He works extremely hard to achieve what a client expects.", tag: "COO Mentorship" },
//   { name: "Jagdeep Singh", role: "Inphase Education", text: "One of few sales professionals interested in the client's interest rather than just pushing sales. Right intent and subject mastery.", tag: "Sales Mastery" },
//   { name: "Manish Thakur", role: "Marketing Manager", text: "Motivated, forward-thinking and intelligent. Expert in Digital Sales, Data Analytics and online advertising.", tag: "Strategy" }
// ];

// export default function UniqueTestimonialsPage() {
//   const [peerIndex, setPeerIndex] = useState(0);
//   const [studentIndex, setStudentIndex] = useState(0);

//   // Auto-play for Peer Perspective
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setPeerIndex((prev) => (prev + 1) % colleagues.length);
//     }, 7000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <main className="bg-[#fcfcfc] min-h-screen font-sans selection:bg-[#cc0000] selection:text-white">

//       {/* ================= SECTION 1: PERSPECTIVE CAROUSEL (PEERS) ================= */}
//       <section className="py-24 md:py-32 overflow-hidden bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
//             <div className="max-w-xl text-center md:text-left">
//               <h2 className="text-5xl md:text-7xl font-black text-[#111827] tracking-tighter leading-none mb-6">
//                 PEER <br/><span className="text-[#cc0000]">INSIGHTS.</span>
//               </h2>
//               <div className="h-1.5 w-24 bg-[#cc0000] mb-6 hidden md:block" />
//               <p className="text-gray-500 font-medium tracking-wide  text-xs">Executive Endorsements & Leadership Reviews</p>
//             </div>

//             {/* Custom Minimal Controls */}
//             <div className="flex items-center gap-8">
//               <button onClick={() => setPeerIndex((prev) => (prev - 1 + colleagues.length) % colleagues.length)} className="group">
//                 <LuArrowLeft size={32} className="text-gray-300 group-hover:text-[#cc0000] transition-colors" />
//               </button>
//               <span className="text-sm font-mono font-bold text-[#cc0000]">0{peerIndex + 1} / 0{colleagues.length}</span>
//               <button onClick={() => setPeerIndex((prev) => (prev + 1) % colleagues.length)} className="group">
//                 <LuArrowRight size={32} className="text-gray-300 group-hover:text-[#cc0000] transition-colors" />
//               </button>
//             </div>
//           </div>

//           <div className="relative h-[500px] flex items-center justify-center">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={peerIndex}
//                 initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
//                 animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
//                 exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
//                 transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//                 className="grid md:grid-cols-2 gap-12 items-center bg-white p-6 md:p-16 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] border border-gray-50"
//               >
//                 <div className="relative">
//                   <div className="aspect-square rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl">
//                     <img src={colleagues[peerIndex].image} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Peer" />
//                   </div>
//                   <div className="absolute -bottom-6 -right-6 bg-[#cc0000] p-6 rounded-2xl shadow-xl text-white">
//                     <LuQuote size={32} />
//                   </div>
//                 </div>
//                 <div>
//                   <p className="text-2xl md:text-3xl font-light text-gray-700 italic leading-relaxed mb-8">
//                     "{colleagues[peerIndex].text}"
//                   </p>
//                   <h4 className="text-xl font-black text-[#111827]  tracking-widest">{colleagues[peerIndex].name}</h4>
//                   <p className="text-[#cc0000] text-xs font-bold tracking-[0.3em] mt-2 ">{colleagues[peerIndex].role}</p>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </section>

//       {/* ================= SECTION 2: THE MENTORSHIP STACK (STUDENTS) ================= */}
//       <section className="py-24 md:py-32 bg-[#111827] relative overflow-hidden">
//         {/* Abstract Red Background Shape */}
//         <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-[#cc0000]/10 rounded-full blur-[120px]" />

//         <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-20">
//           <div className="lg:w-1/3">
//             <p className="text-[#cc0000] font-black text-xs tracking-[0.5em] mb-6 ">Mentorship Journey</p>
//             <h2 className="text-5xl font-black text-white tracking-tighter leading-none mb-10">
//               SUCCESS <br/> STORIES.
//             </h2>
//             <p className="text-gray-400 text-lg leading-relaxed mb-12">
//               Transforming career trajectories for over 1,000+ professionals through logical strategy and high-stakes training.
//             </p>
//             <div className="space-y-4">
//               {students.map((s, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setStudentIndex(i)}
//                   className={`flex items-center gap-4 w-full p-4 rounded-xl transition-all border ${studentIndex === i ? "bg-[#cc0000] border-[#cc0000] text-white" : "bg-transparent border-white/10 text-gray-500 hover:border-white/30"}`}
//                 >
//                   <LuCircleCheck size={18} />
//                   <span className="font-bold text-xs  tracking-widest">{s.name}</span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="lg:w-2/3">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={studentIndex}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -30 }}
//                 className="bg-[#1f2937] p-10 md:p-20 rounded-[4rem] border border-white/5 relative overflow-hidden h-full flex flex-col justify-center"
//               >
//                 <div className="absolute top-0 right-0 p-10 opacity-[0.02]">
//                   <LuQuote size={200} className="text-white" />
//                 </div>
//                 <div className="inline-block px-4 py-1.5 bg-[#cc0000]/20 text-[#cc0000] text-[10px] font-black tracking-widest rounded-full  mb-8">
//                   {students[studentIndex].tag}
//                 </div>
//                 <p className="text-2xl md:text-4xl text-gray-200 font-light leading-snug italic mb-12">
//                   "{students[studentIndex].text}"
//                 </p>
//                 <div className="flex items-center gap-6">
//                   <div className="h-[2px] w-16 bg-[#cc0000]" />
//                   <div>
//                     <h4 className="text-white font-black text-lg  tracking-widest">{students[studentIndex].name}</h4>
//                     <p className="text-gray-500 text-xs font-bold mt-1  tracking-widest">{students[studentIndex].role}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// }

// "use client";
// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import { LuChevronLeft, LuChevronRight, LuQuote, LuLinkedin } from "react-icons/lu";
// import Footer from "../layout/Footer";

// // Data Arrays
// const colleagues = [
//   {
//     id: 1,
//     name: "Nishtha Shukla Anand",
//     role: "Trustee & Director, Shoolini University",
//     image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
//     text: "Harsh is a thorough professional. A rare trait in this industry where most hard sell, he always makes genuine promises and does his utmost to deliver. He’s detail-oriented and flowing with ideas."
//   },
//   {
//     id: 2,
//     name: "Sonia Gupta",
//     role: "Marketing Lead, Dell India",
//     image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg",
//     text: "His keen industry knowledge of North Indian market helped us gain market exposure, increase sales figures and improve project planning. Anyone would be lucky to have him on their team."
//   },
//   {
//     id: 3,
//     name: "Bhaswar Paul",
//     role: "Founder & CEO, IREED Academy",
//     image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
//     text: "He shall conveniently feature in any dream team in the luxury real estate market across India. Phenomenal energy, innovative thinker and honesty at work makes him a distinct professional."
//   },
//   {
//     id: 4,
//     name: "Sacheta Pandey",
//     role: "Global Sales Enablement Manager, PepsiCo",
//     image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg",
//     text: "Building trust, communicate effectively and drive execution. He solves problems creatively and demonstrates high integrity."
//   }
// ];

// const students = [
//   {
//     id: 1,
//     name: "Sukhwinder Singh Mann",
//     role: "Strategic Marketing Director",
//     text: "As a marketing professional he takes pain to understand deeply what a client expects and works extremely hard to achieve the same. His analytical skills help him look at situations holistically.",
//     achievement: "Career Growth"
//   },
//   {
//     id: 2,
//     name: "Jagdeep Singh",
//     role: "Inphase Education Consultants",
//     text: "Harsh is one of few sales professionals who are interested in the clients interest and not pushing sales whatsoever. He is good in his subject and has the right intent.",
//     achievement: "Sales Mastery"
//   },
//   {
//     id: 3,
//     name: "Manish Thakur",
//     role: "Marketing Manager, Shoolini University",
//     text: "Mr Harsh is motivated, forward-thinking and intelligent. He is very knowledgeable in Digital Sales, customer success, Data Analytics and online advertising.",
//     achievement: "Digital Strategy"
//   }
// ];

// // --- Reusable Slider Logic ---
// const useInfiniteSlider = (data, transitionTime = 500) => {
//   const extendedData = [...data, ...data];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(true);
//   const [itemsPerPage, setItemsPerPage] = useState(1);
//   const timeoutRef = useRef(null);

//   useEffect(() => {
//     const handleResize = () => setItemsPerPage(window.innerWidth >= 1024 ? 2 : 1);
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const nextSlide = useCallback(() => {
//     if (isTransitioning) setCurrentIndex((prev) => prev + 1);
//   }, [isTransitioning]);

//   const prevSlide = () => {
//     if (isTransitioning) setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
//   };

//   useEffect(() => {
//     if (currentIndex === data.length) {
//       timeoutRef.current = setTimeout(() => {
//         setIsTransitioning(false);
//         setCurrentIndex(0);
//       }, transitionTime);
//     }
//   }, [currentIndex, data.length, transitionTime]);

//   useEffect(() => {
//     if (!isTransitioning) {
//       requestAnimationFrame(() => requestAnimationFrame(() => setIsTransitioning(true)));
//     }
//   }, [isTransitioning]);

//   return { extendedData, currentIndex, nextSlide, prevSlide, isTransitioning, itemsPerPage, setCurrentIndex };
// };

// export default function TestimonialsPage() {
//   const peerSlider = useInfiniteSlider(colleagues);
//   const studentSlider = useInfiniteSlider(students);

//   return (
//     <main className="bg-white min-h-screen">
//       {/* ================= SECTION 1: EXECUTIVE PEERS ================= */}
//       <section className="py-24 bg-white overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-gray-100 pb-10">
//             <div>
//               <p className="text-[#cc0000] font-black text-xs tracking-[0.4em] mb-4 ">Executive Network</p>
//               <h2 className="text-4xl md:text-6xl font-black text-[#111827] tracking-tighter">
//                 Peer <span className="text-[#cc0000]">Perspectives.</span>
//               </h2>
//             </div>
//             <div className="flex gap-4">
//               <button onClick={peerSlider.prevSlide} className="w-14 h-14 border border-gray-200 flex items-center justify-center hover:bg-[#cc0000] group transition-all rounded-full">
//                 <LuChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
//               </button>
//               <button onClick={peerSlider.nextSlide} className="w-14 h-14 border border-gray-200 flex items-center justify-center hover:bg-[#cc0000] group transition-all rounded-full">
//                 <LuChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
//               </button>
//             </div>
//           </div>

//           <div className="relative w-full overflow-hidden">
//             <div className="flex" style={{
//                 transition: peerSlider.isTransitioning ? `transform 500ms cubic-bezier(0.4, 0, 0.2, 1)` : 'none',
//                 transform: `translateX(-${peerSlider.currentIndex * (100 / peerSlider.itemsPerPage)}%)`
//             }}>
//               {peerSlider.extendedData.map((item, i) => (
//                 <div key={i} className="flex-shrink-0 px-4" style={{ width: `${100 / peerSlider.itemsPerPage}%` }}>
//                   <div className="bg-[#f9f9f9] p-10 rounded-[2.5rem] border border-gray-100 h-full flex flex-col relative group hover:shadow-2xl transition-all duration-500">
//                     <LuQuote className="absolute top-8 right-8 w-12 h-12 text-gray-100 group-hover:text-[#cc0000]/10 transition-colors" />
//                     <div className="flex items-center gap-5 mb-8 relative z-10">
//                       <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#cc0000]/10 group-hover:border-[#cc0000] transition-all">
//                         <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0" />
//                       </div>
//                       <div>
//                         <h4 className="text-[#111827] font-black text-sm  tracking-widest leading-none">{item.name}</h4>
//                         <p className="text-[#cc0000] text-[10px] font-bold tracking-[0.2em] mt-2 ">{item.role}</p>
//                       </div>
//                     </div>
//                     <p className="flex-1 text-gray-600 italic font-light text-lg leading-relaxed">"{item.text}"</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= SECTION 2: STUDENT SUCCESS ================= */}
//       <section className="py-24 bg-[#111827] text-white overflow-hidden relative">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#cc0000]/5 blur-[120px] pointer-events-none" />
//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
//             <div className="text-left">
//               <p className="text-[#cc0000] font-black text-xs tracking-[0.4em] mb-4 ">Mentorship Legacy</p>
//               <h2 className="text-4xl md:text-5xl font-black tracking-tighter ">
//                 Empowering <span className="text-[#cc0000]">Future Leaders.</span>
//               </h2>
//             </div>
//             <div className="flex gap-4">
//               <button onClick={studentSlider.prevSlide} className="w-14 h-14 border border-white/10 flex items-center justify-center hover:bg-[#cc0000] group transition-all rounded-full">
//                 <LuChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
//               </button>
//               <button onClick={studentSlider.nextSlide} className="w-14 h-14 border border-white/10 flex items-center justify-center hover:bg-[#cc0000] group transition-all rounded-full">
//                 <LuChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
//               </button>
//             </div>
//           </div>

//           <div className="relative w-full overflow-hidden">
//             <div className="flex" style={{
//                 transition: studentSlider.isTransitioning ? `transform 500ms cubic-bezier(0.4, 0, 0.2, 1)` : 'none',
//                 transform: `translateX(-${studentSlider.currentIndex * (100 / studentSlider.itemsPerPage)}%)`
//             }}>
//               {studentSlider.extendedData.map((item, i) => (
//                 <div key={i} className="flex-shrink-0 px-4" style={{ width: `${100 / studentSlider.itemsPerPage}%` }}>
//                   <div className="bg-[#1f2937]/50 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/5 h-full flex flex-col group hover:border-[#cc0000]/30 transition-all duration-500 shadow-2xl">
//                     <div className="inline-block bg-[#cc0000] px-4 py-1 rounded-full text-[10px] font-black tracking-widest  mb-8 self-start">
//                       {item.achievement}
//                     </div>
//                     <p className="flex-1 text-gray-300 text-lg leading-relaxed mb-10 italic font-light">"{item.text}"</p>
//                     <div className="h-[1px] w-12 bg-[#cc0000] mb-6" />
//                     <div>
//                       <h4 className="font-black tracking-widest text-white  text-sm">{item.name}</h4>
//                       <p className="text-[#cc0000] text-[10px] font-bold tracking-widest  mt-1 leading-tight">{item.role}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// }

// "use client";
// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { LuQuote, LuChevronLeft, LuChevronRight } from "react-icons/lu";
// import Footer from "../layout/Footer";

// // Data with your real endorsements
// const colleagues = [
//   {
//     name: "Nishtha Shukla Anand",
//     role: "Trustee & Director, Shoolini University",
//     image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
//     text: "Harsh is a thorough professional. A rare trait in this industry where most hard sell, he always makes genuine promises and does his utmost to deliver."
//   },
//   {
//     name: "Sonia Gupta",
//     role: "Marketing Lead, Dell India",
//     image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg",
//     text: "His keen industry knowledge helped us gain market exposure, increase sales figures and improve project planning. He is result-oriented and willing to go the extra mile."
//   },
//   {
//     name: "Bhaswar Paul",
//     role: "Founder & CEO, IREED Academy",
//     image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
//     text: "He shall conveniently feature in any dream team in the luxury real estate market. Phenomenal energy, innovative thinker and honesty at work makes him distinct."
//   }
// ];

// export default function TestimonialsPage() {
//   const [index, setIndex] = useState(0);

//   const next = () => setIndex((prev) => (prev + 1) % colleagues.length);
//   const prev = () => setIndex((prev) => (prev - 1 + colleagues.length) % colleagues.length);

//   return (
//     <main className="bg-[#fcfcfc] min-h-screen">

//       {/* ================= PEER SECTION (SCREENSHOT STYLE) ================= */}
//       <section className="py-24 md:py-32 overflow-hidden bg-white">
//         <div className="max-w-7xl mx-auto px-6 mb-16 text-center md:text-left">
//           <h2 className="text-4xl md:text-6xl font-black text-[#111827] tracking-tighter">
//             WHAT PEOPLE <span className="text-[#cc0000]">SAY...</span>
//           </h2>
//         </div>

//         <div className="relative flex items-center justify-center">
//           {/* Navigation Arrows */}
//           <button onClick={prev} className="absolute left-4 md:left-10 z-30 p-4 bg-[#111827] text-white rounded-full hover:bg-[#cc0000] transition-all shadow-xl">
//             <LuChevronLeft size={24} />
//           </button>
//           <button onClick={next} className="absolute right-4 md:right-10 z-30 p-4 bg-[#111827] text-white rounded-full hover:bg-[#cc0000] transition-all shadow-xl">
//             <LuChevronRight size={24} />
//           </button>

//           {/* Slider Container */}
//           <div className="flex items-center justify-center w-full max-w-6xl overflow-visible">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.5, ease: "circOut" }}
//                 className="grid md:grid-cols-2 w-full bg-[#111827] rounded-none overflow-hidden shadow-2xl"
//               >
//                 {/* Image Section */}
//                 <div className="h-[300px] md:h-[500px] relative">
//                   <img
//                     src={colleagues[index].image}
//                     className="w-full h-full object-cover"
//                     alt={colleagues[index].name}
//                   />
//                   {/* Red Overlay matching your theme */}
//                   <div className="absolute inset-0 bg-[#cc0000]/10" />
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-8 md:p-16 flex flex-col justify-center relative bg-[#1f2937]">
//                   <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-white/20 -translate-x-4 -translate-y-4 md:block hidden" />

//                   <LuQuote className="text-[#cc0000] mb-8" size={48} />

//                   <p className="text-white text-lg md:text-2xl font-light italic leading-relaxed mb-10">
//                     "{colleagues[index].text}"
//                   </p>

//                   <div className="flex items-center gap-4 border-l-2 border-[#cc0000] pl-6">
//                     <div>
//                       <h4 className="text-white font-black  tracking-widest text-sm">
//                         {colleagues[index].name}
//                       </h4>
//                       <p className="text-[#cc0000] text-[10px] font-bold tracking-[0.2em] mt-1 ">
//                         {colleagues[index].role}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </section>

//       {/* ================= MENTORSHIP LEGACY (ALTERNATE STYLE) ================= */}
//       <section className="py-24 bg-[#111827] text-white">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//             <p className="text-[#cc0000] font-black text-xs tracking-[0.4em] mb-4 ">Legacy of Impact</p>
//             <h2 className="text-4xl font-black tracking-tighter mb-20 ">Student Success Stories</h2>

//             <div className="grid md:grid-cols-3 gap-10 text-left">
//                {colleagues.map((s, i) => (
//                  <div key={i} className="group cursor-default">
//                     <div className="h-1 w-full bg-white/10 mb-6 group-hover:bg-[#cc0000] transition-all duration-500" />
//                     <p className="text-gray-400 italic mb-8">"{s.text}"</p>
//                     <h4 className="font-bold text-white  text-sm tracking-widest">{s.name}</h4>
//                     <p className="text-[#cc0000] text-[10px] font-bold mt-1 ">{s.role}</p>
//                  </div>
//                ))}
//             </div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// }

// "use client";
// import React, { useState, useEffect, useCallback } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { LuQuote, LuChevronLeft, LuChevronRight } from "react-icons/lu";

// const testimonials = [
//   {
//     name: "Nishtha Shukla Anand",
//     role: "Trustee & Director, Shoolini University",
//     image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
//     text: "Harsh is a thorough professional. A rare trait in this industry where most hard sell, he always makes genuine promises and does his utmost to deliver."
//   },
//   {
//     name: "Sonia Gupta",
//     role: "Marketing Lead, Dell India",
//     image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg",
//     text: "His keen industry knowledge helped us gain market exposure, increase sales figures and improve project planning. He is result-oriented and willing to go the extra mile."
//   },
//   {
//     name: "Bhaswar Paul",
//     role: "Founder & CEO, IREED Academy",
//     image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
//     text: "He shall conveniently feature in any dream team in the luxury real estate market. Phenomenal energy, innovative thinker and honesty at work makes him distinct."
//   }
// ];

// export default function ProfessionalTestimonialSlider() {
//   const [index, setIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   const next = useCallback(() => {
//     setIndex((prev) => (prev + 1) % testimonials.length);
//   }, []);

//   const prev = () => {
//     setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   // Autoplay Logic
//   useEffect(() => {
//     if (!isPaused) {
//       const timer = setInterval(next, 5000);
//       return () => clearInterval(timer);
//     }
//   }, [isPaused, next]);

//   // Helper to get relative indices for the "Background Blur" effect
//   const getCardIndex = (offset) => (index + offset + testimonials.length) % testimonials.length;

//   return (
//     <section className="py-24 bg-[#111827] overflow-hidden relative min-h-[700px] flex flex-col justify-center">
//       <div className="max-w-7xl mx-auto px-6 mb-12 relative z-20 text-center md:text-left">
//         <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter ">
//           What People <span className="text-[#cc0000]">Say...</span>
//         </h2>
//       </div>

//       <div
//         className="relative flex items-center justify-center w-full h-[500px]"
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//       >
//         {/* Navigation Arrows */}
//         <div className="absolute w-full max-w-[95%] flex justify-between z-50 pointer-events-none">
//           <button onClick={prev} className="p-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-[#cc0000] transition-all pointer-events-auto shadow-2xl">
//             <LuChevronLeft size={24} />
//           </button>
//           <button onClick={next} className="p-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-[#cc0000] transition-all pointer-events-auto shadow-2xl">
//             <LuChevronRight size={24} />
//           </button>
//         </div>

//         {/* The Card Stack */}
//         <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
//           <AnimatePresence mode="popLayout">
//             {[-1, 0, 1].map((offset) => {
//               const cardData = testimonials[getCardIndex(offset)];
//               const isActive = offset === 0;

//               return (
//                 <motion.div
//                   key={`${cardData.name}-${offset}`}
//                   initial={{ opacity: 0, scale: 0.8, x: offset * 200 }}
//                   animate={{
//                     opacity: isActive ? 1 : 0.4,
//                     scale: isActive ? 1 : 0.8,
//                     x: offset * (typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : 350),
//                     zIndex: isActive ? 30 : 10,
//                     filter: isActive ? "blur(0px)" : "blur(8px)"
//                   }}
//                   transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
//                   className={`absolute w-full max-w-[90%] md:max-w-4xl h-full md:h-[450px] rounded-[2rem] overflow-hidden border-2 ${isActive ? 'border-[#cc0000]' : 'border-white/10'} shadow-2xl grid md:grid-cols-2 bg-[#1f2937]`}
//                 >
//                   {/* Image Section */}
//                   <div className="relative h-48 md:h-full">
//                     <img src={cardData.image} className="w-full h-full object-cover" alt={cardData.name} />
//                     <div className="absolute inset-0 bg-[#cc0000]/10" />
//                   </div>

//                   {/* Content Section */}
//                   <div className="p-8 md:p-12 flex flex-col justify-center relative">
//                     {/* Gold Frame Corners as seen in screenshot */}
//                     <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-[#cc0000] opacity-50" />

//                     <LuQuote className="text-[#cc0000] mb-6" size={40} />
//                     <p className="text-gray-300 text-lg md:text-xl font-light italic leading-relaxed mb-8">
//                       "{cardData.text}"
//                     </p>

//                     <div className="mt-auto">
//                       <h4 className="text-white font-black  tracking-widest text-sm">{cardData.name}</h4>
//                       <p className="text-[#cc0000] text-[10px] font-bold tracking-[0.2em] mt-1 ">{cardData.role}</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Progress Dots */}
//       <div className="flex justify-center gap-3 mt-12 relative z-20">
//         {testimonials.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`h-1 transition-all duration-500 rounded-full ${index === i ? "w-12 bg-[#cc0000]" : "w-3 bg-white/20"}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuQuote, LuChevronLeft, LuChevronRight, LuGraduationCap } from "react-icons/lu";
import StudentTestimonial from "../component/StudentTestimonial";

const testimonials = [
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
    text: "His keen industry knowledge of North Indian market helped us gain market exposure, increase sales figures and improve project planning.",
  },
  {
    name: "Bhaswar Paul",
    role: "Founder & CEO, IREED Academy",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    text: "He shall conveniently feature in any dream team in the luxury real estate market. Phenomenal energy, innovative thinker and honesty at work.",
  },
];

// const studentTestimonials = [
//   {
//     name: "Sukhwinder Singh Mann",
//     role: "Strategic Marketing Director",
//     text: "As a marketing professional, he takes pain to understand deeply what a client expects and works extremely hard to achieve the same. His analytical skills help him look at situations holistically.",
//     tag: "Strategy & Growth",
//     image: "/assets/images/student1.jpg", // Add your local path or URL here
//   },
//   {
//     name: "Jagdeep Singh",
//     role: "Education Consultant",
//     text: "Harsh is one of the few sales professionals who are truly interested in the client's interest. He is a master of his subject and has the right intent to deliver results.",
//     tag: "Sales Mastery",
//     image: "/assets/images/student2.jpg", // Add your local path or URL here
//   },
//   {
//     name: "Manish Thakur",
//     role: "Marketing Manager",
//     text: "Mr. Harsh is a motivated, forward-thinking, and intelligent professional. He is exceptionally knowledgeable in Digital Sales, Data Analytics, and automated marketing systems.",
//     tag: "Digital Leadership",
//     image: "/assets/images/student3.jpg", // Add your local path or URL here
//   },
// ];

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
      <section className="pt-24 pb-15 bg-[#ffffff] overflow-hidden relative min-h-[750px] flex flex-col justify-center">
        <div className="max-w-xl pt-10 mx-auto">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#222222] leading-none">
                PEER <span className="text-[#cc0000]">INSIGHTS.</span>
              </h2>
          <div className="w-20 mx-auto h-1 bg-[#cc0000] my-6" />
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
                    <div className="p-8 md:p-14 flex flex-col relative bg-gradient-to-br from-[#b3b3b3] to-[#111827]">
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
 <StudentTestimonial/>
     </>
    
  );
}