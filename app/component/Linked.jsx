import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Plus } from 'lucide-react';

const HarshaGridSection = () => {
  const projects = [
    { id: 12, title: "Digital Transformation",   image: "/assets/images/event/traning12.jpeg", link: "https://www.linkedin.com/posts/ireed-academy_ireedindia-tridentrealty-panchkula-activity-7415973234489077761-F5UX?utm_source=share&utm_medium=member_ios&rcm=ACoAADUFF_oBrIovnLZiCB0G1lO28-XZClujc3E" },
    { id: 11, title: "Public Relations",         image: "/assets/images/event/training11.jpg", link: "https://www.linkedin.com/feed/update/urn:li:activity:7413121493024346112" },
    { id: 1, title: "Strategic Leadership",     image: "/assets/images/event/training1.jpg", link: "https://www.linkedin.com/posts/ireed-academy_ireedindia-navraj-realestatetraining-activity-7345790906458849281-G6RY/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE57DooBA_VN8hmJhTsAMZSh1qW_JSJrCOo" },
    { id: 2, title: "Market Expansion",         image: "/assets/images/event/training2.jpg", link: "https://www.linkedin.com/posts/ireed-academy_ireed-svsconstructions-partnershipsuccess-activity-7348327501691043840-3TcW/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE57DooBA_VN8hmJhTsAMZSh1qW_JSJrCOo" },
    { id: 3, title: "Operational Excellence",   image: "/assets/images/event/training3.jpg", link: "https://www.linkedin.com/posts/ireed-academy_sustainabilitygoals-greenfuture-esgleadership-activity-7351285030121373696-sdVW/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE57DooBA_VN8hmJhTsAMZSh1qW_JSJrCOo" },
    { id: 4, title: "Corporate Governance",     image: "/assets/images/event/training4.jpg", link: "https://www.linkedin.com/posts/ireed-academy_corporatetraining-ireed-ireedindia-activity-7341728921085800448-95op/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE57DooBA_VN8hmJhTsAMZSh1qW_JSJrCOo" },
    { id: 5, title: "Digital Transformation",   image: "/assets/images/event/training5.jpg", link: "https://www.linkedin.com/posts/ireed-academy_ireedindia-navraj-realestatetraining-activity-7345511394223509505-zQma/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE57DooBA_VN8hmJhTsAMZSh1qW_JSJrCOo" },
    { id: 6, title: "Public Relations",         image: "/assets/images/event/training6.jpg", link: "https://www.linkedin.com/posts/ireed-academy_ireed-masterclass-industrypartners-activity-7340699843876556800-RrDQ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE57DooBA_VN8hmJhTsAMZSh1qW_JSJrCOo" },
    { id: 7, title: "Strategic Leadership",     image: "/assets/images/event/training7.jpg", link: "https://www.linkedin.com/posts/ireed-academy_ireed-capstraining-corporatetraining-activity-7352362610849189890-H4sM/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE57DooBA_VN8hmJhTsAMZSh1qW_JSJrCOo" },
    { id: 8, title: "Market Expansion",         image: "/assets/images/event/training8.jpg", link: "https://www.linkedin.com/posts/ireed-academy_ireedindia-suhanarealtors-realestateexcellence-activity-7367164321266597889-oLeR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE57DooBA_VN8hmJhTsAMZSh1qW_JSJrCOo" },
    { id: 9, title: "Operational Excellence",   image: "/assets/images/event/training9.jpg", link: "https://www.linkedin.com/posts/ireed-academy_great-real-estate-professionals-dont-just-activity-7370393430843121664-PN9U?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE57DooBA_VN8hmJhTsAMZSh1qW_JSJrCOo" },
    { id: 10, title: "Corporate Governance",    image: "/assets/images/event/training10.jpg", link: "https://www.linkedin.com/posts/ireed-academy_%F0%9D%90%82%F0%9D%90%A8%F0%9D%90%A7%F0%9D%90%A0%F0%9D%90%AB%F0%9D%90%9A%F0%9D%90%AD%F0%9D%90%AE%F0%9D%90%A5%F0%9D%90%9A%F0%9D%90%AD%F0%9D%90%A2%F0%9D%90%A8%F0%9D%90%A7%F0%9D%90%AC-%F0%9D%90%AD%F0%9D%90%A8-%F0%9D%90%8D-activity-7384102467954888704-C-aI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE57DooBA_VN8hmJhTsAMZSh1qW_JSJrCOo" },
  ];

  const [visibleCount, setVisibleCount] = useState(6);
  const loadMore = () => setVisibleCount((prev) => prev + 3);

  return (
    <section className="py-24 bg-[#f8f9fa] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#dc2626] font-bold text-sm tracking-[0.4em] uppercase mb-4"
          >
            Portfolio
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-[#111827] tracking-tighter"
          >
            Executive <span className="text-[#dc2626]">Milestones.</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-[#dc2626] mt-6 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {projects.slice(0, visibleCount).map((item, index) => (
              <motion.a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative block aspect-[4/5] bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100"
              >
                {/* Image Wrapper */}
                <div className="relative h-full w-full overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                  />
                  
                  {/* BOTTOM GRADIENT SHADOW (Height of the title) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Top Icon */}
                  <div className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ExternalLink size={20} />
                  </div>
                </div>

                {/* Content - APPEARS ONLY ON HOVER */}
                <div className="absolute bottom-0 left-0 right-0 p-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <h4 className="text-white text-2xl font-bold tracking-tight transform transition-transform duration-500 group-hover:translate-x-2">
                    {item.title}
                  </h4>
                  <div className="mt-2 w-0 h-1 bg-[#dc2626] transition-all duration-700 group-hover:w-12 delay-100" />
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {visibleCount < projects.length && (
          <div className="mt-20 flex flex-wrap gap-5">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={loadMore}
            className="relative overflow-hidden mx-auto rounded-xl border-2 bg-[#ffffff] border-[#cc0000]  px-10 py-5 font-semibold text-[#cc0000] group"
            >
                          <span className="absolute inset-0 w-0 bg-[#cc0000] transition-all duration-300 group-hover:w-full"></span>

            <span className="relative z-10 group-hover:text-[#ffffff] ">
            Load More Milestones</span>  
            </motion.button>
          </div>


          
        )}
      </div>
    </section>
  );
};

export default HarshaGridSection;