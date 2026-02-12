"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaChartLine,
  FaUsers,
  FaHandshake,
  FaLightbulb,
  FaBuilding,
} from "react-icons/fa";
import HeroSection from "./component/HeroSection";
import Imageslider from "./component/Imageslider";
import Testimonialslider from "./component/Testimonialslider";
import Footer from "./layout/Footer";
import { FaShieldAlt, FaRocket, FaGlobe } from "react-icons/fa";

const fade = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};
const pillars = [
  {
    icon: FaRocket,
    title: "Revenue Scaling",
    desc: "Transforming fragmented sales processes into high-output revenue engines using data-driven EdTech strategies.",
    tag: "Execution",
  },
  {
    icon: FaShieldAlt,
    title: "Operational Rigor",
    desc: "Applying IIT-level analytical discipline to streamline complex business operations and maximize ROI.",
    tag: "Strategy",
  },
  {
    icon: FaGlobe,
    title: "Pan-India Expansion",
    desc: "Bridging the gap between regional potential and national presence through scalable leadership frameworks.",
    tag: "Growth",
  },
];
const steps = [
  {
    year: "2024 - Present",
    role: "COO & Strategic Leader",
    company: "Industry Leadership",
    detail:
      "Leading organizational transformation and scaling Pan-India revenue operations.",
  },
  {
    year: "2018 - 2023",
    role: "Business Head",
    company: "Tier-1 EdTech Firm",
    detail:
      "Scalability from 0 to 100+ cities, managing high-performance sales forces.",
  },
  {
    year: "2010 - 2017",
    role: "Real Estate Strategist",
    company: "Major Realty Group",
    detail:
      "Pioneered luxury sales training modules and high-ticket closing frameworks.",
  },
  {
    year: "The Foundation",
    role: "IIT Patna",
    company: "The Academic Root",
    detail:
      "Developing the core analytical mindset that drives every business decision.",
  },
];

const highlights = [
  {
    title: "EdTech Revolution",
    category: "Scaling Operations",
    img: "/Harshjasrotia.com/Ritesh/Photos/DSC02314.JPG",
    stat: "100+ Cities",
  },
  {
    title: "Real Estate Mastery",
    category: "Sales Leadership",
    img: "/Harshjasrotia.com/Ritesh/Photos/DSC02328.JPG",
    stat: "20+ Years",
  },
  {
    title: "IIT Mentorship",
    category: "Strategy & Logic",
    img: "/Harshjasrotia.com/Ritesh/Photos/P_K00141 - Copy.JPG",
    stat: "Academic ",
  },
];

const partners = [
  { name: "IREED", src: "/images/Ireed-Logo (1).png" },
  { name: "Lodha", src: "/images/lodha logo.png" },
    { name: "Shiksha", src: "/Harshjasrotia.com/Ritesh/Photos/2.png" },
  { name: "Career Launcher", src: "/Harshjasrotia.com/Ritesh/Photos/1.png" },
  { name: "infoedge", src: "/Harshjasrotia.com/Ritesh/Photos/infoedge.jfif" },
  { name: "phoenix", src: "/Harshjasrotia.com/Ritesh/Photos/phoenix logo.png" },
  { name: "squareyard", src: "/Harshjasrotia.com/Ritesh/Photos/squareyards logo.webp" },

];

export default function HomePage() {
  return (
    <main className="bg-[#0f0f0f] text-white overflow-hidden">
      {/* ================= HERO ================= */}
      {/* <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#cc0000]/20 to-transparent" />

        <div className="relative max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          
          <motion.div
            initial="hidden"
            animate="show"
            variants={fade}
            transition={{ duration: 0.9 }}
          >
            <p className=" tracking-[0.35em] text-xs text-[#cc0000] mb-6">
              COO · IIT Patna · Real Estate Trainer
            </p>

            <h1 className="text-[44px] md:text-[70px] leading-[1.05] font-bold">
              Modern Leadership
              <br />
              <span className="text-[#cc0000]">That Scales Businesses</span>
            </h1>

            <p className="mt-8 text-lg text-[#cfcfcf] max-w-xl">
              20+ years of building sales engines, strong brands, and
              high-performance teams across EdTech & Real Estate.
            </p>

            <div className="mt-12 flex gap-6">
              <Link
                href="/contact"
                className="rounded-full bg-[#cc0000] px-8 py-3 text-black font-semibold hover:scale-105 transition"
              >
                Let’s Connect
              </Link>
              <Link
                href="/journey"
                className="text-[#cfcfcf] hover:text-[#cc0000] transition"
              >
                View Journey →
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <div className="relative w-[340px] h-[460px] rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="/assets/images/harsha.jpg" // add professional image
                alt="Harsha Jasrotia"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </motion.div>
        </div>
      </section> */}

      <HeroSection />
      {/* ================= STATS ================= */}
      <section className="py-10 bg-[#cc0000] border-t border-white">
        <div className="max-w-7xl bg-[#cc0000] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            ["20+", "Years Experience"],
            ["EdTech", "Industry"],
            ["Real Estate", "Industry"],
            ["Pan India", "Leadership"],
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
      <Testimonialslider />

      {/* ================= ICON SKILLS (WHITE BG VERSION) ================= */}
      <section className="py-15 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* <motion.h2
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fade}
      className="text-4xl md:text-5xl font-bold text-center mb-15 text-[#4c4949]"
    >
      What <span className="text-[#cc0000]">I Do Best</span>
            <div className="w-20 h-1 bg-[#cc0000] mx-auto mt-4" />

    </motion.h2> */}
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-black text-[#111827] tracking-tighter">
              What I Do <span className="text-[#dc2626]">Best</span>
            </h2>
            <div className="w-20 h-1 bg-[#cc0000] mt-4 mb-8" />
          </div>

          {/* Added a 6th card "Operational Excellence" to balanceling the grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <Feature icon={FaChartLine} title="Revenue Growth">
              Building predictable and scalable revenue systems.
            </Feature>
            <Feature icon={FaUsers} title="Team Leadership">
              Creating accountable, high-performance teams.
            </Feature>
            <Feature icon={FaHandshake} title="Client Expansion">
              Strategic acquisition & long-term relationships.
            </Feature>
            <Feature icon={FaLightbulb} title="Strategic Thinking">
              Data-driven decisions with long-term impact.
            </Feature>
            <Feature icon={FaBuilding} title="Early-Stage Scaling">
              Helping young businesses grow sustainably.
            </Feature>
            <Feature icon={FaBuilding} title="Operational Excellence">
              Optimizing internal workflows for peak organizational efficiency.
            </Feature>
          </div>
        </div>
      </section>

      {/* ================= TRUSTED BY ================= */}
      {/* <section className="py-20 border-y border-white/5 bg-[#b3b3b3] backdrop-blur-sm">
  <div className="max-w-7xl mx-auto px-6">
    <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-center text-xl  tracking-[0.5em] text-[#cc0000] mb-12 font-semibold"
    >
      Strategic Leadership & Partnerships
    </motion.p>
    
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
      {["IIT PATNA", "EDTECH CORP", "REALTY GROUP", "VENTURE HUB"].map((brand, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          whileHover={{ opacity: 1, scale: 1.1, color: "#cc0000" }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="text-xl md:text-2xl font-black tracking-tighter cursor-default transition-all"
        >
          {brand}
        </motion.span>
      ))}
    </div>
  </div>
</section> */}

      <section className="py-20 bg-[#f4f4f4] overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xl md:text-2xl tracking-[0.4em] text-[#cc0000] mb-16 font-semibold"
        >
          Scaling Impact Across Industry Titans.
        </motion.p>

        {/* Slider Container */}
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex gap-12 items-center"
            animate={{
              x: ["0%", "-50%"], // Moves halfway because the list is duplicated
            }}
            transition={{
              duration: 25, // Adjust speed here (higher = slower)
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* We render the list twice to create the infinite loop effect */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 group relative flex items-center justify-center 
                           w-40 h-40 md:w-52 md:h-52 rounded-full border border-gray-100 
                           bg-white shadow-sm transition-all duration-500
                           hover:shadow-2xl hover:border-[#cc0000]/20"
              >
                <div className="w-2/3 h-2/3 flex items-center justify-center">
                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain  transition-all duration-700"
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Gradient Overlays for smooth fade-in/out effect */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f4f4f4] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f4f4f4] to-transparent z-10" />
        </div>
      </div>
    </section>

      <section className="py-20 bg-[#b3b3b3] relative overflow-hidden">
        {/* Background Decorative Text */}
        <div className="absolute top-10 right-[-5%] text-[15rem] font-black text-white/[0.02] select-none leading-none">
          STRATEGY
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* The Gold Frame Accent */}
              {/* The Gold Frame Accent */}
              <div className="absolute -top-4 -left-3 md:-top-6 md:-left-6 w-24 h-24 md:w-32 md:h-32 border-t-2 border-l-2 border-[#cc0000] z-10" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <Image
                  src="/Harshjasrotia.com/Ritesh/Photos/DSC02338.JPG" // Use the same top-aligned professional image
                  alt="Harsha Jasrotia - Chief Operating Officer"
                  fill
                  className="object-cover object-top scale-x-[-1]  hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-10 -right-10 bg-[#cc0000] p-8 rounded-2xl hidden md:block shadow-2xl">
                <p className="text-white font-black text-4xl tracking-tighter">
                  20+
                </p>
                <p className="text-white text-[10px] font-bold  tracking-widest leading-none">
                  Years of <br /> Excellence
                </p>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="text-[#cc0000] font-bold text-xl tracking-[0.4em] mb-6">
                THE VISIONARY BEHIND THE SCALE
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-trighter">
                Architecting <span className="text-[#cc0000]">Growth</span>{" "}
                <br />
                Through Logical Precision.
              </h2>
              <div className="w-20 h-1 bg-[#cc0000] my-4" />

              {/* <div className="space-y-2">
            <p className="text-[#dc2626] font-bold text-xl tracking-[0.4em] ">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#111827] tracking-tighter">
              Voices of <span className="text-[#dc2626]">Impact.</span>
            </h2>
                        <div className="w-20 h-1 bg-[#cc0000] mt-4" />

          </div> */}

              <div className="space-y-6 text-[#f4f4f4] text-lg leading-relaxed">
                <p>
                  With over two decades of experience, Harsha Jasrotia stands at
                  the intersection of
                  <strong> analytical engineering</strong> and{" "}
                  <strong>high-stakes business execution</strong>. As an alumnus
                  of{" "}
                  <span className="text-white border-b border-[#cc0000]">
                    IIT Patna
                  </span>
                  , his approach to leadership is rooted in a fundamental
                  belief: business problems are engineering problems waiting for
                  a logical solution.
                </p>
                <p>
                  From spearheading massive Pan-India expansions in the{" "}
                  <strong>EdTech</strong> sector to architecting luxury sales
                  modules in <strong>Real Estate</strong>, his career is defined
                  by the ability to turn fragmented operations into predictable,
                  scalable revenue engines.
                </p>
                <p>
                  Beyond the numbers, Harsha is a dedicated mentor, having
                  empowered over <strong>1,000+ professionals</strong>
                  to master the art of the high-ticket close and strategic
                  marketing.
                </p>
              </div>

              {/* Signature / Designation */}
              <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-6">
                <div className="h-12 w-[1px] bg-[#cc0000]" />
                <div>
                  <p className="text-white font-bold text-xl  tracking-tighter">
                    Harsha Jasrotia
                  </p>
                  <p className="text-[#cc0000] text-xs font-mono  tracking-widest mt-1">
                    COO at IREED· IIT Patna Alum · Strategic Advisor
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-15 bg-[#ffffff] relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#cc0000]/5 blur-[120px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-black text-[#111827] tracking-tighter">
              Scaling <span className="text-[#dc2626]">Blueprint</span>
            </h2>
            <div className="w-20 h-1 bg-[#cc0000] mt-4 mb-8" />
          </div>

          <div className="grid lg:grid-cols-3 bg-[#cc0000] gap-0 border-2 border-[#cc0000]">
            {[
              {
                step: "01",
                title: "Strategic Audit",
                desc: "Granular analysis of sales funnels and operational leakage to find hidden ROI.",
              },
              {
                step: "02",
                title: "Cultural Alignment",
                desc: "Instilling a high-stakes, performance-driven mindset across the organization.",
              },
              {
                step: "03",
                title: "Rapid Scale",
                desc: "Deploying automated systems and training engines for pan-India expansion.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                whileHover={{ backgroundColor: "rgba(183, 150, 98, 0.03)" }}
                className="relative p-12 border-2 border-white/5 hover:border-[#ffffff] transition-all duration-500 group"
              >
                <div className="text-sm font-mono text-[#f4f4f4] mb-6 block tracking-widest">
                  {item.step} —
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#f4f4f4] leading-relaxed font-light">
                  {item.desc}
                </p>

                {/* Animated Line on Hover */}
                <motion.div className="absolute bottom-0 left-0 h-[2px] bg-[#ffffff] w-0 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= METHODOLOGY ================= */}

      <Imageslider />

      {/* ================= CTA ================= */}
      {/* <section className="py-32 bg-gradient-to-br from-[#141414] to-black text-center">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="text-4xl font-bold mb-6"
        >
          Let’s Build Something
          <span className="text-[#cc0000]"> Meaningful</span>
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          transition={{ delay: 0.2 }}
          className="text-[#cfcfcf] max-w-xl mx-auto mb-10"
        >
          Always open to collaborations, leadership opportunities, and industry
          conversations.
        </motion.p>

        <Link
          href="/contact"
          className="inline-block rounded-full bg-[#cc0000] px-10 py-3 text-black font-semibold hover:scale-105 transition"
        >
          Contact Me
        </Link>
      </section> */}

      <section className="pb-20 bg-[#ffffff] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-black text-[#111827] tracking-tighter">
              Strategic <span className="text-[#dc2626]">Best</span>
            </h2>
            <div className="w-20 h-1 bg-[#cc0000] mt-4 mb-8" />
          </div>

          <p className="text-[#222222] max-w-2xl mt-4 mb-8 text-lg">
            A methodology refined over two decades of leading market
            transitions.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                // --- NEW HOVER ANIMATIONS ---
                whileHover={{
                  y: -15, // Lifts the card up
                  scale: 1.02, // Subtle zoom
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group relative p-10 bg-[#cc0000] border border-white/5 rounded-3xl hover:border-[#cc0000]/50 transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_rgba(183,150,98,0.15)]"
              >
                {/* Radial glow that follows the lift */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#cc0000]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                <div className="relative z-10">
                  <motion.p className="text-[#f4f4f4] font-mono text-2xl  tracking-widest mb-6">
                    {p.tag}
                  </motion.p>

                  {/* --- ICON ANIMATION --- */}
                  <motion.div
                    variants={{
                      hover: { rotate: 5, scale: 1.1 },
                    }}
                    whileHover="hover"
                    className="inline-block"
                  >
                    <p.icon className="text-5xl text-[#f4f4f4] mb-6 transition-transform group-hover:-translate-y-2 duration-300" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-4 transition-colors group-hover:text-[#f4f4f4]">
                    {p.title}
                  </h3>

                  <p className="text-white leading-relaxed group-hover:text-white transition-colors">
                    {p.desc}
                  </p>

                  {/* --- DECORATIVE LINE --- */}
                  <div className="w-10 h-[1px] bg-[#cc0000] mt-6 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#b3b3b3] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-24">

            <p className="text-[#cc0000] font-bold text-xl tracking-[0.4em] mb-6">
                MILESTONES
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-trighter">
                Two Decades of <br/><span className="text-[#cc0000]">Operational Excellence</span>
                
              </h2>
              <div className="w-20 h-1 bg-[#cc0000] my-4" />


          </div>

          <div className="relative">
            {/* Vertical Line Container */}
            <div className="absolute left-0 md:left-12 top-0 bottom-0 w-[1px] bg-white/10">
              {/* Animated Progress Line on Scroll */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="w-full bg-gradient-to-b from-[#cc0000] to-transparent origin-top shadow-[0_0_15px_#b79662]"
              />
            </div>

            <div className="space-y-24">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="relative pl-12 md:pl-32"
                >
                  {/* Connector Dot */}
                  <div className="absolute left-[-5px] md:left-[43px] top-2 w-[11px] h-[11px] bg-[#cc0000] rounded-full z-10 shadow-[0_0_10px_#b79662]" />

                  <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-20">
                    {/* Year Column */}
                    <div className="relative">
                      <span className="text-2xl md:text-3xl font-black text-white font-mono tracking-tighter group-hover:text-[#cc0000] transition-colors">
                        {step.year.split(" ")[0]}
                      </span>
                      <p className="text-[#cc0000] text-xs font-bold tracking-widest mt-1">
                        {step.year.includes("-") ? step.year.split("-")[1] : ""}
                      </p>
                    </div>

                    {/* Content Column */}
                    <div className="max-w-2xl">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight ">
                        {step.role}
                      </h3>
                      <p className="text-[#cc0000] font-semibold text-sm mb-6 tracking-widest ">
                        {step.company}
                      </p>
                      <p className="text-[#f4f4f4] text-lg leading-relaxed font-light">
                        {step.detail}
                      </p>

                      {/* Visual separation line for mobile */}
                      <div className="w-12 h-[1px] bg-[#cc0000]/30 mt-8 md:hidden" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-[#4c4949]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header with high contrast */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-2">
              <p className="text-[#cc0000] font-bold tracking-[0.4em] text-xl">
                SECTOR EXPERTISE
              </p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">
                Transforming <br />
                <span className="text-[#cc0000]">Vision into Reality.</span>
              </h2>
              <div className="w-20 h-1 bg-[#cc0000] mt-4" />
            </div>

            <div className="pb-2">
              <p className="text-[#222222] max-w-xs text-sm border-l-2 border-[#cc0000] pl-6 ">
                "Strategic execution is the bridge between a great idea and a
                market leader."
              </p>
            </div>
          </div>

          {/* The Light Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -15 }}
                className="relative group cursor-pointer"
              >
                {/* Image Container with shadow for white bg */}
                <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating Content Box */}
                <div className="absolute -bottom-6 left-6 right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
                  <span className="text-[#cc0000] text-[10px] font-black  tracking-[0.2em]">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 group-hover:text-[#cc0000] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                    <span className="text-4xl font-black text-gray-300">
                      {item.stat}
                    </span>
                    <span className="text-gray-900 font-bold group-hover:translate-x-2 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="py-20 bg-[#f4f4f4] overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative text-center"
          >
            <span className="text-8xl text-[#cc0000]/20 font-serif absolute -top-12 left-0">
              “
            </span>
            <h2 className="text-2xl md:text-3xl leading-relaxed text-[#222222] relative z-10">
              Harsha possesses a rare blend of operational discipline and
              visionary thinking. His ability to build Pan-India sales engines
              from scratch is unparalleled in the EdTech space.
            </h2>
            <div className="mt-10">
              <div className="font-bold text-[#b3b3b3] text-lg">
                Former CEO / Board Member
              </div>
              <div className="text-[#cc0000] text-sm  tracking-widest mt-1">
                Top-Tier EdTech Organization
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
/* ---------- Feature Card Component ---------- */
function Feature({ icon: Icon, title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      className="bg-[#cc0000] border border-white/5 rounded-2xl p-8 transition-all duration-300 shadow-2xl shadow-black/30 group"
    >
      {/* ICON CONTAINER 
          - Default: bg is gold with 10% opacity
          - Hover: bg turns white, adds shadow to stand out against white section bg
      */}
      <div className="fsd w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 bg-white group-hover:shadow-md">
        <Icon className="text-[#cc0000] text-3xl transition-transform duration-300 group-hover:scale-110" />
      </div>

      <h3 className="text-xl font-semibold mb-3 text-white transition-colors duration-300 ">
        {title}
      </h3>
      <p className="text-[#f4f4f4] text-sm leading-relaxed">{children}</p>
    </motion.div>
  );
}
