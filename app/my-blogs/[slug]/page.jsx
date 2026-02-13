"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, User, ChevronDown, Share2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
const IMAGE_GET_API = "/api/v1/file/imageGet";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
  const fetchPost = async () => {
    try {
      console.log("1. Fetching started for slug:", slug);
      const response = await fetch("/api/v1/blog");
      const data = await response.json();
      
      console.log("2. Total blogs received from API:", data.length);

      // Find the specific blog
      const foundPost = data.find((b) => b.slug === slug);
      
      if (foundPost) {
        console.log("3. Success! Post found:", foundPost.title);
        setPost(foundPost);
      } else {
        console.warn("3. Error: No blog matched the slug:", slug);
        // This is why your UI might be empty
      }
    } catch (error) {
      console.error("4. Fetch Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (slug) fetchPost();
}, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-2xl font-bold mb-4">Post not found</h2>
        <Link href="/blog" className="text-indigo-600 flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-100">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-indigo-600 origin-left z-50"
        style={{ scaleX }}
      />

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
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 mb-12"
        >
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 font-medium">
            <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full">
              {post.category || "General"}
            </span>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1.5" /> 
              {post.author?.name || "Harsha Jasrotia"}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1.5" /> 
              {post.date ? new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : "Recently"}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
            {post.fullTitle || post.title}
          </h1>
        </motion.header>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative h-[300px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl mb-16 group bg-slate-200"
        >
          {/* Changed <img> logic: Removed 'fill' which is for Next.js Image, and used CSS classes for same effect */}
          <img
            src={`${IMAGE_GET_API}/${post.image}`} 
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          <motion.article 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="prose prose-slate prose-lg max-w-none"
          >
            {/* Description/Excerpt Section */}
            {(post.excerpt || post.description) && (
              <p className="text-xl text-slate-600 leading-relaxed font-light mb-12 border-l-4 border-indigo-500 pl-6 py-2 bg-indigo-50/30">
                {post.excerpt || post.description}
              </p>
            )}

            {/* Main Content Area */}
            <div 
              className="text-slate-600 leading-loose prose-h2:text-2xl prose-h2:font-bold prose-h2:text-slate-800 prose-h2:mb-4"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </motion.article>

          {/* FAQ Section */}
          {post.faq && post.faq.length > 0 && (
            <section className="mt-20">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
                Common Questions <span className="ml-3 text-sm font-normal text-slate-400">FAQ</span>
              </h2>
              <div className="space-y-4">
                {post.faq.map((item, idx) => (
                  <div key={item._id || idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-shadow hover:shadow-md">
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
          )}

          <motion.footer 
            whileHover={{ scale: 1.01 }}
            className="mt-20 p-8 md:p-12 rounded-[2.5rem] bg-[#1e2d7d] text-white flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Want to learn more?</h3>
              <p className="text-indigo-200">Contact our experts for a personalized consultation.</p>
            </div>
            <button className="px-10 py-4 bg-white text-[#1e2d7d] rounded-full font-bold text-lg hover:shadow-xl hover:shadow-indigo-500/20 transition-all active:scale-95">
              Get Started
            </button>
          </motion.footer>
        </div>
      </main>
    </div>
  );
}