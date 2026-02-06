"use client";

import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Harshjasrotia.com/Ritesh/Photos/Screenshot 2026-02-06 170558.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Gold Gradient Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#b79662]/20 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mr-25 px-6 md:px-10">
        <div className="max-w-3xl">
          
          {/* Subtitle */}
          <p className=" tracking-widest text-xl text-[#ffffff] mb-5">
            COO · IIT Patna · Real Estate Trainer
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-white">
            Driving Strategic
            <br />
            <span className="text-[#ffffff]">Growth & Execution</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-[#f4f4f4] leading-relaxed">
            Harsha Jasrotia is a Sales & Marketing leader with 20+ years of
            experience across EdTech and Real Estate, helping organizations
            build scalable revenue systems and high-performance teams.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="/contact"
              className="relative overflow-hidden rounded-md border-2 border-[#ffffff] px-6 py-3 font-semibold text-white group"
            >
              <span className="absolute inset-0 w-0 bg-[#cc0000] transition-all duration-300 group-hover:w-full"></span>
              <span className="relative z-10 group-hover:text-[#1e1e1e]">
                Get In Touch
              </span>
            </Link>

            <Link
              href="/journey"
              className="px-6 py-3 rounded-md border border-[#ffffff] text-[#ffffff] transition"
            >
              View The Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
