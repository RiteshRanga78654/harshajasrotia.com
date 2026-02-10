// "use client";
// import React, { useState, useEffect, useCallback, useRef } from "react";
// import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// const testimonials = [
//   {
//     id: 1,
//     name: "Nishtha Shukla Anand",
//     role: "Trustee & Director, Shoolini University",
//     image: "/images/nishtha.jfif",
//     text: "Harsh is a thorough professional. A rare trait in this industry where most hard sell, he always makes genuine promises and does his utmost to deliver.",
//   },
//   {
//     id: 2,
//     name: "Sonia Gupta",
//     role: "Marketing Lead, Dell India",
//     image: "/images/sonia.jfif",
//     text: "His keen industry knowledge helped us gain market exposure, increase sales figures and improve project planning. He is result-oriented and willing to go the extra mile.",
//   },
//   {
//     id: 3,
//     name: "Manish Thakur",
//     role: "Marketing Manager, Shoolini University",
//     image: "/images/manish-thakur.jfif",

//     text: "Mr Harsh is motivated, forward-thinking and intelligent. He is very knowledgeable in Digital Sales, Data Analytics and online advertising. A valuable asset.",
//   },
//   {
//     id: 4,
//     name: "Bhaswar Paul",
//     role: "Founder & CEO, IREED Academy",
//     image: "/images/new-bhaswal-paul.jpg.jpeg",

//     text: "He shall conveniently feature in any dream team in luxury real estate. Phenomenal energy, innovative thinker and honesty make him a distinct professional.",
//   },
// ];

// const TestimonialSlider = () => {
//   // 1. EXTENDED ARRAY: Create the illusion of infinity by duplicating the list
//   const extendedTestimonials = [...testimonials, ...testimonials];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [itemsPerPage, setItemsPerPage] = useState(1);
//   const [isPaused, setIsPaused] = useState(false);
//   const [isTransitioning, setIsTransitioning] = useState(true);

//   const timeoutRef = useRef(null);
//   const transitionTime = 500; // Matches the CSS transition duration

//   // 2. RESPONSIVE LOGIC: Determine how many cards to show
//   useEffect(() => {
//     const handleResize = () => {
//       setItemsPerPage(window.innerWidth >= 1024 ? 2 : 1);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // 3. TRANSITIONAL LOGIC: Handle the "Next" movement
//   const nextSlide = useCallback(() => {
//     if (isTransitioning) {
//       setCurrentIndex((prev) => prev + 1);
//     }
//   }, [isTransitioning]);

//   const prevSlide = () => {
//     if (isTransitioning) {
//       setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
//     }
//   };

//   // 4. SEAMLESS SNAP LOGIC: Watch for the end of the original list to reset instantly
//   useEffect(() => {
//     if (currentIndex === testimonials.length) {
//       timeoutRef.current = setTimeout(() => {
//         setIsTransitioning(false); // Turn off animation
//         setCurrentIndex(0); // Reset to start instantly
//       }, transitionTime);
//     }
//   }, [currentIndex]);

//   // 5. ANIMATION RESET: Turn animation back on after the "invisible" snap
//   useEffect(() => {
//     if (!isTransitioning) {
//       requestAnimationFrame(() => {
//         requestAnimationFrame(() => {
//           setIsTransitioning(true);
//         });
//       });
//     }
//   }, [isTransitioning]);

//   // 6. AUTO-PLAY: Loop every 5 seconds
//   useEffect(() => {
//     if (!isPaused) {
//       const interval = setInterval(nextSlide, 5000);
//       return () => clearInterval(interval);
//     }
//   }, [isPaused, nextSlide]);

//   return (
//     <section className="bg-white pt-20 pb-10 px-4 sm:px-6 lg:px-12 w-full overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         {/* Header with Navigation */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-gray-100 pb-8">
//           <div className="space-y-2 px-5">
//             <p className="text-[#dc2626] font-bold text-xl tracking-[0.4em] ">
//               Testimonials
//             </p>
//             <h2 className="text-4xl md:text-5xl font-black text-[#111827] tracking-tighter">
//               Voices of <span className="text-[#dc2626]">Impact.</span>
//             </h2>
//                         <div className="w-20 h-1 bg-[#cc0000] mt-4" />

//           </div>

//           <div className="flex gap-4">
//             <button
//               onClick={prevSlide}
//               className="p-3 md:p-4 rounded-full border border-[#cc0000] text-[#cc0000] hover:bg-[#cc0000] hover:text-white transition-all active:scale-90"
//             >
//               <ChevronLeft className="w-6 h-6 transition-colors" />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="p-3 md:p-4 rounded-full border border-[#cc0000] text-[#cc0000] hover:bg-[#cc0000] hover:text-white transition-all active:scale-90"
//             >
//               <ChevronRight className="w-6 h-6 transition-colors" />
//             </button>
//           </div>
//         </div>

//         {/* Slider Track */}
//         <div className="relative w-full overflow-hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
//   <div
//     className="flex"
//     style={{
//       transition: isTransitioning
//         ? `transform ${transitionTime}ms cubic-bezier(0.4, 0, 0.2, 1)`
//         : "none",
//       transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
//     }}
//   >
//     {extendedTestimonials.map((item, index) => (
//       <div
//         key={`${item.id}-${index}`}
//         className="flex-shrink-0 px-4"
//         style={{ width: `${100 / itemsPerPage}%` }}
//       >
//         {/* Added min-h-[400px] or h-full to keep all cards uniform */}
//         <div className="bg-[#b3b3b3] p-8 md:p-10 rounded-[2.5rem] border-2 border-transparent h-full flex flex-col relative group hover:border-[#cc0000]/30 transition-all duration-500 shadow-xl">
          
//           {/* Quote Icon - Fixed at Top Right */}
//           <Quote className="absolute top-8 right-8 w-10 h-10 md:w-12 md:h-12 text-[#f4f4f4] group-hover:text-[#cc0000]/20 transition-colors z-0" />

//           {/* FIXED TOP SECTION: Image, Name, and Role */}
//           <div className="flex items-center gap-5 mb-6 relative z-10">
//             {/* Responsive Image Container */}
//             <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-2xl overflow-hidden group-hover:scale-110 transition-all duration-500">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
//               />
//             </div>

//             {/* Name and Designation - Now stays at the top */}
//             <div className="flex flex-col justify-center">
//               <h4 className="text-white font-black text-[16px] md:text-[18px] tracking-widest leading-tight ">
//                 {item.name}
//               </h4>
//               <p className="text-[#cc0000] text-[13px] md:text-[14px] font-bold tracking-[0.15em] mt-1 leading-snug">
//                 {item.role}
//               </p>
//             </div>
//           </div>

//           {/* TEXT SECTION: Fills the remaining space */}
//           <div className="flex-1 relative z-10">
//             <p className="text-[#222222] text-base md:text-lg leading-relaxed font-light italic">
//               "{item.text}"
//             </p>
//           </div>

//         </div>
//       </div>
//     ))}
//   </div>
// </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSlider;


"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// ... (testimonials array stays the same)
const testimonials = [
  {
    id: 1,
    name: "Nishtha Shukla Anand",
    role: "Trustee & Director, Shoolini University",
    image: "/images/nishtha.jfif",
    text: "Harsh is a thorough professional. A rare trait in this industry where most hard sell, he always makes genuine promises and does his utmost to deliver.",
  },
  {
    id: 2,
    name: "Sonia Gupta",
    role: "Marketing Lead, Dell India",
    image: "/images/sonia.jfif",
    text: "His keen industry knowledge helped us gain market exposure, increase sales figures and improve project planning. He is result-oriented and willing to go the extra mile.",
  },
  {
    id: 3,
    name: "Manish Thakur",
    role: "Marketing Manager, Shoolini University",
    image: "/images/manish-thakur.jfif",

    text: "Mr Harsh is motivated, forward-thinking and intelligent. He is very knowledgeable in Digital Sales, Data Analytics and online advertising. A valuable asset.",
  },
  {
    id: 4,
    name: "Bhaswar Paul",
    role: "Founder & CEO, IREED Academy",
    image: "/images/new-bhaswal-paul.jpg.jpeg",

    text: "He shall conveniently feature in any dream team in luxury real estate. Phenomenal energy, innovative thinker and honesty make him a distinct professional.",
  },
];

const TestimonialSlider = () => {
  const extendedTestimonials = [...testimonials, ...testimonials];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const timeoutRef = useRef(null);
  const transitionTime = 500;

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 1024 ? 2 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    if (isTransitioning) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [isTransitioning]);

  const prevSlide = () => {
    if (isTransitioning) {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
    }
  };

  useEffect(() => {
    if (currentIndex === testimonials.length) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, transitionTime);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  }, [isTransitioning]);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide]);

  return (
    <section className="bg-white pt-20 pb-10 px-4 sm:px-6 lg:px-16 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header - Buttons Removed from here */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-100 pb-8">
          <div className="space-y-2 px-5">
            <p className="text-[#dc2626] font-bold text-xl tracking-[0.4em]">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#111827] tracking-tighter">
              Voices of <span className="text-[#dc2626]">Impact.</span>
            </h2>
            <div className="w-20 h-1 bg-[#cc0000] mt-4" />
          </div>
        </div>

        {/* Slider Track Container - Added relative and padding for buttons */}
        <div 
          className="relative w-full px-2 sm:px-8" 
          onMouseEnter={() => setIsPaused(true)} 
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* NAVIGATION BUTTONS - Now Absolute */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full border-2 border-[#cc0000] bg-white text-[#cc0000] hover:bg-[#cc0000] hover:text-white transition-all active:scale-90 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full border-2 border-[#cc0000] bg-white text-[#cc0000] hover:bg-[#cc0000] hover:text-white transition-all active:scale-90 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Mask for the slider */}
          <div className="overflow-hidden">
            <div
              className="flex"
              style={{
                transition: isTransitioning
                  ? `transform ${transitionTime}ms cubic-bezier(0.4, 0, 0.2, 1)`
                  : "none",
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {extendedTestimonials.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <div className="bg-[#b3b3b3] p-8 md:p-10 rounded-[2.5rem] border-2 border-transparent h-full flex flex-col relative group hover:border-[#cc0000]/30 transition-all duration-500 ">
                    <Quote className="absolute top-8 right-8 w-10 h-10 md:w-12 md:h-12 text-[#f4f4f4] group-hover:text-[#cc0000]/20 transition-colors z-0" />

                    <div className="flex items-center gap-5 mb-6 relative z-10">
                      <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-2xl overflow-hidden group-hover:scale-110 transition-all duration-500">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                      </div>

                      <div className="flex flex-col justify-center">
                        <h4 className="text-white font-black text-[16px] md:text-[18px] tracking-widest leading-tight">
                          {item.name}
                        </h4>
                        <p className="text-[#cc0000] text-[13px] md:text-[14px] font-bold tracking-[0.15em] mt-1 leading-snug">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex-1 relative z-10">
                      <p className="text-[#222222] text-base md:text-lg leading-relaxed font-light italic">
                        "{item.text}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;