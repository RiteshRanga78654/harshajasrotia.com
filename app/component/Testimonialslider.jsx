"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Nishtha Shukla Anand",
    role: "Trustee & Director, Shoolini University",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    text: "Harsh is a thorough professional. A rare trait in this industry where most hard sell, he always makes genuine promises and does his utmost to deliver.",
  },
  {
    id: 2,
    name: "Sonia Gupta",
    role: "Marketing Lead, Dell India",
    image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg",
    text: "His keen industry knowledge helped us gain market exposure, increase sales figures and improve project planning. He is result-oriented and willing to go the extra mile.",
  },
  {
    id: 3,
    name: "Manish Thakur",
    role: "Marketing Manager, Shoolini University",
    text: "Mr Harsh is motivated, forward-thinking and intelligent. He is very knowledgeable in Digital Sales, Data Analytics and online advertising. A valuable asset.",
  },
  {
    id: 4,
    name: "Bhaswar Paul",
    role: "Founder & CEO, IREED Academy",
    text: "He shall conveniently feature in any dream team in luxury real estate. Phenomenal energy, innovative thinker and honesty make him a distinct professional.",
  }
];

const TestimonialSlider = () => {
  // 1. EXTENDED ARRAY: Create the illusion of infinity by duplicating the list
  const extendedTestimonials = [...testimonials, ...testimonials];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  const timeoutRef = useRef(null);
  const transitionTime = 500; // Matches the CSS transition duration

  // 2. RESPONSIVE LOGIC: Determine how many cards to show
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 1024 ? 2 : 1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 3. TRANSITIONAL LOGIC: Handle the "Next" movement
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

  // 4. SEAMLESS SNAP LOGIC: Watch for the end of the original list to reset instantly
  useEffect(() => {
    if (currentIndex === testimonials.length) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false); // Turn off animation
        setCurrentIndex(0); // Reset to start instantly
      }, transitionTime);
    }
  }, [currentIndex]);

  // 5. ANIMATION RESET: Turn animation back on after the "invisible" snap
  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            setIsTransitioning(true);
        });
      });
    }
  }, [isTransitioning]);

  // 6. AUTO-PLAY: Loop every 5 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 5000); 
      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide]);

  return (
    <section className="bg-white pt-20 px-4 sm:px-6 lg:px-12 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-gray-100 pb-8">
          <div className="space-y-2">
            <p className="text-[#dc2626] font-bold text-xl tracking-[0.4em] ">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#111827] tracking-tighter">
              Voices of <span className="text-[#dc2626]">Impact.</span>
            </h2>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
            className="p-3 md:p-4 rounded-full border border-[#cc0000] text-[#cc0000] hover:bg-[#cc0000] hover:text-white transition-all active:scale-90"
            >
              <ChevronLeft className="w-6 h-6 transition-colors" />
            </button>
            <button 
              onClick={nextSlide}
            className="p-3 md:p-4 rounded-full border border-[#cc0000] text-[#cc0000] hover:bg-[#cc0000] hover:text-white transition-all active:scale-90"
            >
              <ChevronRight className="w-6 h-6 transition-colors" />
            </button>
          </div>
        </div>

        {/* Slider Track */}
        <div 
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="flex"
            style={{ 
              transition: isTransitioning ? `transform ${transitionTime}ms cubic-bezier(0.4, 0, 0.2, 1)` : 'none',
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` 
            }}
          >
            {extendedTestimonials.map((item, index) => (
              <div 
                key={`${item.id}-${index}`} 
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                <div className="bg-[#b3b3b3] p-8 md:p-12 rounded-[2.5rem] border-3 border-[#cc0000]/5 h-full flex flex-col relative group hover:border-[#cc0000]/30 transition-all duration-500 shadow-2xl">
                  
                  <Quote className="absolute top-8 right-8 w-12 h-12 text-[#f4f4f4] group-hover:text-[#dc2626]/20 transition-colors" />

                  <div className="flex-1 z-10">
                    <p className="text-[#222222] text-lg md:text-xl leading-relaxed mb-8 font-light">
                      "{item.text}"
                    </p>
                    
                    <div className="flex items-center gap-5 mt-auto">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#cc0000]/20 group-hover:border-[#cc0000] transition-all">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-black text-sm uppercase tracking-widest leading-none">
                          {item.name}
                        </h4>
                        <p className="text-[#dc2626] text-[10px] font-bold tracking-[0.2em] mt-2 uppercase">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;