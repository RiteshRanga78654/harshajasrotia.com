"use client";

import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[90vh] flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/001.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Gold Gradient Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#cc0000]/20 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          
          {/* Subtitle */}
          <p className="uppercase tracking-widest text-xs text-[#cc0000] mb-5">
            COO · IIT Patna · Real Estate Trainer
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-white">
            Driving Strategic
            <br />
            <span className="text-[#cc0000]">Growth & Execution</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-[#d1d1d1] leading-relaxed">
            Harsha Jasrotia is a Sales & Marketing leader with 20+ years of
            experience across EdTech and Real Estate, helping organizations
            build scalable revenue systems and high-performance teams.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="/contact"
              className="relative overflow-hidden rounded-md border-2 border-[#cc0000] px-6 py-3 font-semibold text-white group"
            >
              <span className="absolute inset-0 w-0 bg-[#cc0000] transition-all duration-300 group-hover:w-full"></span>
              <span className="relative z-10 group-hover:text-[#1e1e1e]">
                Get In Touch
              </span>
            </Link>

            <Link
              href="/journey"
              className="px-6 py-3 rounded-md border border-[#4c4949] text-[#e0e0e0] hover:border-[#cc0000] hover:text-[#cc0000] transition"
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
