"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const originalImages = [
  { src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Strategic Leadership" },
  { src: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Real Estate Training" },
  { src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "EdTech Innovation" },
  { src: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Operational Scale" },
  { src: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Real Estate Training" },
  { src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "EdTech Innovation" },
  { src: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Operational Scale" },
];

const images = [...originalImages, ...originalImages, ...originalImages];

export default function ImageSlider() {
  const [index, setIndex] = useState(originalImages.length);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  // Dynamic measurements
  const [dimensions, setDimensions] = useState({ width: 500, gap: 40 });

  // Update dimensions based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDimensions({ width: window.innerWidth * 0.8, gap: 20 });
      } else {
        setDimensions({ width: 500, gap: 40 });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalWidth = dimensions.width + dimensions.gap;

  useEffect(() => {
    if (index >= originalImages.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(originalImages.length);
      }, 700);
    }
    if (index < originalImages.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(originalImages.length * 2 - 1);
      }, 700);
    }
    if (!isTransitioning) {
      const timeout = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timeout);
    }
  }, [index, isTransitioning]);

  const nextStep = useCallback(() => setIndex((prev) => prev + 1), []);
  const prevStep = useCallback(() => setIndex((prev) => prev - 1), []);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextStep, 1500);
      return () => clearInterval(interval);
    }
  }, [nextStep, isPaused]);

  return (
    <section className="py-16 md:py-20 bg-[#1e1e1e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-12 flex justify-between items-center">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-2xl md:text-5xl font-bold text-white uppercase tracking-tighter"
        >
          Moments of <span className="text-[#b79662]">Impact</span>
                    <div className="w-20 h-1 bg-[#b79662] md:mx-auto mt-4" />

        </motion.h2>

        <div className="flex gap-2 md:gap-4 z-20">
          <button
            onClick={prevStep}
            className="p-3 md:p-4 rounded-full border border-white/10 text-[#b79662] hover:bg-[#b79662] hover:text-black transition-all active:scale-90"
          >
            <FaChevronLeft size={16} className="md:w-5 md:h-5" />
          </button>
          <button
            onClick={nextStep}
            className="p-3 md:p-4 rounded-full border border-white/10 text-[#b79662] hover:bg-[#b79662] hover:text-black transition-all active:scale-90"
          >
            <FaChevronRight size={16} className="md:w-5 md:h-5" />
          </button>
        </div>
      </div>

      <div
        className="relative w-full h-[350px] md:h-[550px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="absolute left-1/2 top-0 h-full flex items-center">
          <motion.div
            className="flex"
            style={{ gap: `${dimensions.gap}px` }}
            animate={{
              x: -(index * totalWidth) - dimensions.width / 2,
            }}
            transition={
              isTransitioning
                ? { duration: 0.7, ease: [0.32, 0.72, 0, 1] }
                : { duration: 0 }
            }
          >
            {images.map((img, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: i === index ? 1 : 0.85,
                  opacity: i === index ? 1 : 0.3,
                  filter: i === index ? "blur(0px)" : "blur(1px)",
                }}
                style={{ width: `${dimensions.width}px` }}
                className="relative flex-shrink-0 h-[300px] md:h-[450px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover select-none"
                />
                
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 md:p-8 flex items-end transition-opacity duration-500 ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div>
                    <p className="text-[#b79662] text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] mb-1 md:mb-2">
                      Leadership Spotlight
                    </p>
                    <h3 className="text-white font-bold text-lg md:text-3xl tracking-tight">
                      {img.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="flex justify-center gap-2 md:gap-3 mt-8 md:mt-12">
        {originalImages.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-500 ${
              index % originalImages.length === i
                ? "w-8 md:w-12 bg-[#b79662]"
                : "w-2 md:w-3 bg-white/10"
            }`}
          />
        ))}
      </div>
    </section>
  );
}