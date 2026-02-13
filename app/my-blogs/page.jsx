"use client"; // Required for useState and click events

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function BlogPage() {
  // Your original data (Note: I kept your 6 items)
  const allBlogs = [
    { id: 1, category: "REAL ESTATE", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000", title: "Online vs Offline Real Estate Courses in India", excerpt: "Real estate has become a skill-oriented profession where formal education has a significant influence on career building...", author: "Priyanka Aggarwal", date: "January 7, 2026" },
    { id: 2, category: "REAL ESTATE", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000", title: "Real Estate Course in India vs Overseas: What You Should Know", excerpt: "The real estate business has become a professionalized profession everywhere. From residential sales and commercial leasing...", author: "Priyanka Aggarwal", date: "December 30, 2025" },
    { id: 3, category: "REAL ESTATE", image: "https://images.unsplash.com/photo-1454165833767-027ffea9e778?q=80&w=1000", title: "RERA Certification: Eligibility, Training, Exam & Key Benefits", excerpt: "The RERA certification is increasingly becoming essential to real estate professionals who need credible credentials...", author: "Priyanka Aggarwal", date: "December 12, 2025" },
    { id: 4, category: "REAL ESTATE", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000", title: "Online vs Offline Real Estate Courses in India", excerpt: "Real estate has become a skill-oriented profession where formal education has a significant influence on career building...", author: "Priyanka Aggarwal", date: "January 7, 2026" },
    { id: 5, category: "REAL ESTATE", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000", title: "Real Estate Course in India vs Overseas: What You Should Know", excerpt: "The real estate business has become a professionalized profession everywhere. From residential sales and commercial leasing...", author: "Priyanka Aggarwal", date: "December 30, 2025" },
    { id: 6, category: "REAL ESTATE", image: "https://images.unsplash.com/photo-1454165833767-027ffea9e778?q=80&w=1000", title: "RERA Certification: Eligibility, Training, Exam & Key Benefits", excerpt: "The RERA certification is increasingly becoming essential to real estate professionals who need credible credentials...", author: "Priyanka Aggarwal", date: "December 12, 2025" },
    // Adding extra dummy items so you can see the "Load More" work
    { id: 7, category: "REAL ESTATE", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000", title: "New Trends in Real Estate 2026", excerpt: "Exploring the shift towards sustainable architecture and smart home integration in urban developments...", author: "Priyanka Aggarwal", date: "January 15, 2026" },
    { id: 8, category: "REAL ESTATE", image: "https://images.unsplash.com/photo-1582408921715-18e7806365c1?q=80&w=1000", title: "Investing in Commercial Property", excerpt: "Commercial real estate offers different risks and rewards compared to residential markets. Here is what to look for...", author: "Priyanka Aggarwal", date: "February 1, 2026" },
    { id: 9, category: "REAL ESTATE", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1000", title: "Urban vs Suburban: Where to Buy?", excerpt: "Deciding between the city center and the quiet suburbs is a major hurdle for first-time home buyers in 2026...", author: "Priyanka Aggarwal", date: "February 10, 2026" }
  ];

  // Logic: State to track how many items to show
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  // Slice the array based on state
  const displayedBlogs = allBlogs.slice(0, visibleCount);

  return (
    <>
     <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Cinematic Video/Image Loop Background */}
        <div className="absolute inset-0 z-0 opacity-90">
          <img
            src="https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg"
            className="w-full h-full object-cover"
            alt="Stage background"
          />
        </div>
        <div className="absolute inset-0  z-10" />

        <div className="relative z-20 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-5 py-2 bg-[#cc0000] text-white text-[10px] font-black tracking-[0.4em]  rounded-full mb-8 shadow-2xl"
          >
            Voice of Authority
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-10">
            The Executive <span className="text-[#cc0000]">Stage.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[#f4f4f4] text-lg md:text-xl font-light leading-relaxed">
            "Bridging operational complexity with technological innovation on
            the world's most prestigious corporate stages."
          </p>
        </div>
      </section>
    <div className="min-h-screen bg-gray-100 p-6 md:p-12 ">
      <div className="mx-auto max-w-6xl">
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedBlogs.map((blog) => (
            <div 
              key={blog.id} 
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* FIXED IMAGE SECTION */}
              <div className="relative h-52 w-full shrink-0 overflow-hidden bg-gray-200">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-4 top-4 rounded-full bg-[#2d368e] px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                  {blog.category}
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 line-clamp-2 text-lg font-bold leading-tight text-slate-800 min-h-[3rem]">
                  {blog.title}
                </h3>
                
                <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-gray-500">
                  {blog.excerpt}
                </p>

                <div className="mt-auto flex items-center gap-3 border-t border-gray-100 pt-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1d4ed8] text-xs font-bold text-white shadow-sm">
                    {blog.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-800">{blog.author}</span>
                    <span className="text-[10px] text-gray-400 font-medium">{blog.date}</span>
                  </div>
                </div>

                <button className="mt-6 w-full rounded-lg bg-[#2d368e] py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#1e2563] sm:w-fit sm:px-8">
                  Read Full Blog
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* LOAD MORE BUTTON */}
        {visibleCount < allBlogs.length && (
          <div className="mt-12 flex justify-center">
            <button 
              onClick={handleLoadMore}
              className="rounded-full bg-white border-2 border-[#2d368e] px-10 py-3 text-sm font-bold text-[#2d368e] transition-all hover:bg-[#2d368e] hover:text-white active:scale-95 shadow-sm"
            >
              Load More
            </button>
          </div>
        )}

      </div>
    </div>
    </>
  );
}



// "use client";

// import React, { useState } from 'react';
// import { motion } from "framer-motion";

// export default function BlogPage() {
//   const allBlogs = [
//     { id: 1, category: "REAL ESTATE", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000", title: "Online vs Offline Real Estate Courses in India", excerpt: "Real estate has become a skill-oriented profession where formal education has a significant influence on career building...", author: "Priyanka Aggarwal", date: "January 7, 2026" },
//     { id: 2, category: "REAL ESTATE", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000", title: "Real Estate Course in India vs Overseas: What You Should Know", excerpt: "The real estate business has become a professionalized profession everywhere. From residential sales and commercial leasing...", author: "Priyanka Aggarwal", date: "December 30, 2025" },
//     { id: 3, category: "REAL ESTATE", image: "https://images.unsplash.com/photo-1454165833767-027ffea9e778?q=80&w=1000", title: "RERA Certification: Eligibility, Training, Exam & Key Benefits", excerpt: "The RERA certification is increasingly becoming essential to real estate professionals who need credible credentials...", author: "Priyanka Aggarwal", date: "December 12, 2025" },
//     { id: 4, category: "REAL ESTATE", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000", title: "Online vs Offline Real Estate Courses in India", excerpt: "Real estate has become a skill-oriented profession where formal education has a significant influence on career building...", author: "Priyanka Aggarwal", date: "January 7, 2026" },
//     { id: 5, category: "REAL ESTATE", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000", title: "Real Estate Course in India vs Overseas: What You Should Know", excerpt: "The real estate business has become a professionalized profession everywhere. From residential sales and commercial leasing...", author: "Priyanka Aggarwal", date: "December 30, 2025" },
//     { id: 6, category: "REAL ESTATE", image: "https://images.unsplash.com/photo-1454165833767-027ffea9e778?q=80&w=1000", title: "RERA Certification: Eligibility, Training, Exam & Key Benefits", excerpt: "The RERA certification is increasingly becoming essential to real estate professionals who need credible credentials...", author: "Priyanka Aggarwal", date: "December 12, 2025" },
//     { id: 7, category: "REAL ESTATE", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000", title: "New Trends in Real Estate 2026", excerpt: "Exploring the shift towards sustainable architecture and smart home integration in urban developments...", author: "Priyanka Aggarwal", date: "January 15, 2026" },
//     { id: 8, category: "REAL ESTATE", image: "https://images.unsplash.com/photo-1582408921715-18e7806365c1?q=80&w=1000", title: "Investing in Commercial Property", excerpt: "Commercial real estate offers different risks and rewards compared to residential markets. Here is what to look for...", author: "Priyanka Aggarwal", date: "February 1, 2026" },
//     { id: 9, category: "REAL ESTATE", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1000", title: "Urban vs Suburban: Where to Buy?", excerpt: "Deciding between the city center and the quiet suburbs is a major hurdle for first-time home buyers in 2026...", author: "Priyanka Aggarwal", date: "February 10, 2026" }
//   ];

//   const [visibleCount, setVisibleCount] = useState(6);
//   const totalBlogs = allBlogs.length;

//   const handleLoadMore = () => {
//     setVisibleCount((prevCount) => Math.min(prevCount + 3, totalBlogs));
//   };

//   const displayedBlogs = allBlogs.slice(0, visibleCount);

//   return (
//     <div className="relative">
//       {/* HERO SECTION */}
//       <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0 opacity-90">
//           <img
//             src="https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg"
//             className="w-full h-full object-cover"
//             alt="Stage background"
//           />
//         </div>
//         <div className="relative z-20 text-center px-6">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="inline-block px-5 py-2 bg-[#cc0000] text-white text-[10px] font-black tracking-[0.4em] rounded-full mb-8 shadow-2xl"
//           >
//             Voice of Authority
//           </motion.div>
//           <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-10">
//             The Executive <span className="text-[#cc0000]">Stage.</span>
//           </h1>
//           <p className="max-w-2xl mx-auto text-[#f4f4f4] text-lg md:text-xl font-light leading-relaxed">
//             "Bridging operational complexity with technological innovation on the world's most prestigious corporate stages."
//           </p>
//         </div>
//       </section>

//       {/* BLOG SECTION WITH FIXED BACKGROUND */}
//       <div 
//         className="relative min-h-screen bg-fixed bg-cover bg-center py-12 px-6 md:px-12"
//         style={{ backgroundImage: `url('/unnamed.jpg')` }}
//       >
//         {/* Overlay to make cards pop against the background */}
//         <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-[2px] z-0" />

//         <div className="relative z-10 mx-auto max-w-6xl">
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {displayedBlogs.map((blog) => (
//               <div 
//                 key={blog.id} 
//                 className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full"
//               >
//                 {/* Fixed Image height */}
//                 <div className="relative h-52 w-full shrink-0 overflow-hidden bg-gray-200">
//                   <img 
//                     src={blog.image} 
//                     alt={blog.title} 
//                     className="h-full w-full object-cover"
//                   />
//                   <div className="absolute left-4 top-4 rounded-full bg-[#2d368e] px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
//                     {blog.category}
//                   </div>
//                 </div>

//                 {/* Content Section - Improved for Mobile */}
//                 <div className="flex flex-1 flex-col p-6">
//                   {/* Fixed Overlapping: removed min-height on mobile, used line-clamp */}
//                   <h3 className="mb-3 text-lg font-bold leading-tight text-slate-800 line-clamp-2 md:h-[3rem]">
//                     {blog.title}
//                   </h3>
                  
//                   <p className="mb-6 text-sm leading-relaxed text-gray-500 line-clamp-3">
//                     {blog.excerpt}
//                   </p>

//                   <div className="mt-auto flex items-center gap-3 border-t border-gray-100 pt-5">
//                     <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1d4ed8] text-xs font-bold text-white shadow-sm">
//                       {blog.author.split(' ').map(n => n[0]).join('')}
//                     </div>
                    
//                     <div className="flex flex-col">
//                       <span className="text-xs font-bold text-slate-800">{blog.author}</span>
//                       <span className="text-[10px] text-gray-400 font-medium">{blog.date}</span>
//                     </div>
//                   </div>

//                   <button className="mt-6 w-full rounded-lg bg-[#2d368e] py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#1e2563] sm:w-fit sm:px-8">
//                     Read Full Blog
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* CUSTOM LOAD MORE UI (Matching your Image) */}
//           <div className="mt-20 flex flex-col items-center gap-4">
//             {visibleCount < totalBlogs && (
//               <button 
//                 onClick={handleLoadMore}
//                 className="rounded-full bg-[#2d368e] px-12 py-4 text-white font-bold text-lg transition-all hover:bg-[#1e2563] active:scale-95 shadow-xl w-full max-w-md"
//               >
//                 Load More Blogs ({visibleCount} of {totalBlogs})
//               </button>
//             )}
//             <p className="text-white/90 text-sm font-medium drop-shadow-md">
//               Showing {visibleCount} of {totalBlogs} blogs
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }