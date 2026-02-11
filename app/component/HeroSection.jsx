"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const HeroSection = () => {
  // Correct paths: No "public" in the string!
  const mobileImg = "/Harshjasrotia.com/Ritesh/Photos/DSC02368.JPG";
  const desktopImg = "/Harshjasrotia.com/Ritesh/Photos/P_K00144.JPG";
  
  const [bgImage, setBgImage] = useState(mobileImg);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setBgImage(desktopImg);
      } else {
        setBgImage(mobileImg);
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="relative min-h-[80vh] flex items-center bg-cover bg-center bg-no-repeat transition-all duration-700"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl px-9 md:px-23">
        <div className="max-w-3xl text-white">
          <p className="tracking-widest text-lg md:text-xl mb-5 uppercase font-medium">
            COO at IREED · IIT Patna · Real Estate Trainer
          </p>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
            Driving Strategic
            <br />
            <span className="text-[#ffffff]">Growth & Execution</span>
          </h1>

          <p className="mt-6 text-lg text-[#f4f4f4] leading-relaxed max-w-2xl">
            Harsha Jasrotia is a Sales & Marketing leader with 20+ years of
            experience across EdTech and Real Estate.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="relative overflow-hidden rounded-md border-2 border-white px-8 py-4 font-semibold group inline-block"
            >
              <span className="absolute inset-0 w-0 bg-[#cc0000] transition-all duration-300 group-hover:w-full"></span>
              <span className="relative z-10">Get In Touch</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;