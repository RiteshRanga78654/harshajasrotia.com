"use client";

import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import { Calendar, User, ChevronDown, Share2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function BlogPost({ params }) {
  const [openFaq, setOpenFaq] = useState(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Sample Mock Data (Replace with your actual API/CMS fetch)
  const post = {
    fullTitle: "Full Stack Web Development Course- From Basics to Advanced Projects",
    title: "Full Stack Web Development",
    author: "Priyanka Aggarwal",
    date: "October 7, 2025",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072",
    description: `The modern real estate market is quickly adopting technology to enhance management of its real estate, communication with clients and investment decision making. Digital platforms have now become the industry pillars...`,
    content: [
      {
        heading: "Core Frontend Skills You Gain",
        text: "The front end is often the initial point of interaction for the user in the modern real estate market. The full stack web development program for real estate trains students in building visually attractive, responsive, and intuitive interfaces."
      },
      {
        heading: "1. Styling Basics and Webpage Structure",
        text: "Full-stack development is no longer a matter of coding. It is a multidimensional competency that is a combination of front-end and back-end technologies, databases and cloud integration."
      }
    ],
    faq: [
      { q: "Is this course suitable for beginners?", a: "Yes, we start from the very basics of HTML and CSS." },
      { q: "Do I get a certification?", a: "Upon successful completion of all advanced projects, you receive a professional certificate." }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-100">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-indigo-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation Header */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md z-40 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/blog" className="flex items-center text-slate-600 hover:text-indigo-600 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="font-medium text-sm">Back to Blogs</span>
          </Link>
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <Share2 className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 mb-12"
        >
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 font-medium">
            <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full">Web Development</span>
            <div className="flex items-center"><User className="w-4 h-4 mr-1.5" /> {post.author}</div>
            <div className="flex items-center"><Calendar className="w-4 h-4 mr-1.5" /> {post.date}</div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
            {post.fullTitle}
          </h1>
        </motion.header>

        {/* Featured Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative h-[300px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl mb-16 group"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
        </motion.div>

        {/* Article Body */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          <motion.article 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="prose prose-slate prose-lg max-w-none"
          >
            <p className="text-xl text-slate-600 leading-relaxed font-light mb-12 border-l-4 border-indigo-500 pl-6 py-2 bg-indigo-50/30">
              {post.description}
            </p>

            {post.content.map((section, idx) => (
              <div key={idx} className="mb-10">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">{section.heading}</h2>
                <p className="text-slate-600 leading-loose">{section.text}</p>
              </div>
            ))}
          </motion.article>

          {/* FAQ Section */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
              Common Questions <span className="ml-3 text-sm font-normal text-slate-400">FAQ</span>
            </h2>
            <div className="space-y-4">
              {post.faq.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-shadow hover:shadow-md">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center"
                  >
                    <span className="font-semibold text-slate-800">{item.q}</span>
                    <motion.div animate={{ rotate: openFaq === idx ? 180 : 0 }}>
                      <ChevronDown className="w-5 h-5 text-indigo-500" />
                    </motion.div>
                  </button>
                  <motion.div 
                    initial={false}
                    animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                    className="overflow-hidden bg-slate-50/50"
                  >
                    <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed">
                      {item.a}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action Footer (Inspired by your "Read Full Blog" style) */}
          <motion.footer 
            whileHover={{ scale: 1.01 }}
            className="mt-20 p-8 md:p-12 rounded-[2.5rem] bg-[#1e2d7d] text-white flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Ready to start your journey?</h3>
              <p className="text-indigo-200">Join 70+ other students today.</p>
            </div>
            <button className="px-10 py-4 bg-white text-[#1e2d7d] rounded-full font-bold text-lg hover:shadow-xl hover:shadow-indigo-500/20 transition-all active:scale-95">
              Enroll in Course
            </button>
          </motion.footer>
        </div>
      </main>
    </div>
  );
}