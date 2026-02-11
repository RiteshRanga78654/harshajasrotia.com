"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EVENTS_API_URL =
  "https://service.ireedindia.com/v1/events?published=true&page=1&limit=10";

const getImageUrl = (file) => {
  if (!file) return "/placeholder-event.png";
  if (file.startsWith("http")) return file;
  if (file.startsWith("/uploads"))
    return `https://service.ireedindia.com${file}`;
  if (file.startsWith("uploads"))
    return `https://service.ireedindia.com/${file}`;
  return `https://service.ireedindia.com/image/${file}`;
};

export default function EventsPage({ events = [] }) {
  const [eventList, setEventList] = useState(events);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (events.length === 0) {
      const fetchEvents = async () => {
        try {
          setLoading(true);
          const res = await fetch(EVENTS_API_URL);
          const data = await res.json();
          setEventList(Array.isArray(data) ? data : data.data || []);
        } catch (err) {
          console.error("Client fetch error:", err);
        } finally {
          setLoading(false);
        }
      };
      fetchEvents();
    }
  }, [events]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, eventList.length));
  };

  const parseDate = (dateStr = "") => {
    const [month, day] = dateStr.split(" ");
    return { month: month || "", day: day || "" };
  };

  const firstEvent = eventList[0] || null;

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-24 bg-[#cc0000] min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#cc0000]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#222222] font-black text-xl tracking-[0.5em] mb-4 "
          >
            Social Proof & Impact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8 "
          >
            Voices of <span className="text-[#222222]">Trust.</span>
          </motion.h1>
          <p className="text-white max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            A legacy built on results, strategic integrity, and the success of
            the leaders we've mentored along the way.
          </p>
        </div>
      </section>
      <main className="min-h-screen bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto w-full">
          {loading && eventList.length === 0 ? (
            <p className="text-gray-500 text-lg">Loading events...</p>
          ) : eventList.length === 0 ? (
            <p className="text-gray-500 text-sm">No events found.</p>
          ) : (
            <>
              {/* Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {eventList.slice(0, visibleCount).map((event) => {
                  const { month, day } = parseDate(event.date);
                  const location = event.location?.[0];
                  const imageUrl = getImageUrl(event.thumbNail || event.banner);

                  return (
                    <div
                      key={event._id || event.slug}
                      className="group relative bg-white rounded-[18px] overflow-hidden shadow-[0_14px_40px_rgba(28,37,65,0.09)] hover:shadow-[0_20px_50px_rgba(17,24,39,0.18)] transition-all duration-300 hover:-translate-y-2 flex flex-col cursor-pointer"
                    >
                      {/* Image Section */}
                      <div className="relative w-full pb-[60%] overflow-hidden bg-gray-100">
                        <img
                          src={imageUrl}
                          alt={event.altTag || event.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <span className="text-white text-[17px] font-semibold">
                            {event.SubTitle || event.title}
                          </span>
                        </div>
                      </div>

                      {/* Date Badge */}
                      {event.date && (
                        <div className="absolute right-3 top-[40%] -translate-y-1/2 w-[86px] h-[86px] rounded-full bg-[#cc0000] text-white flex flex-col items-center justify-center shadow-xl z-10">
                          <span className="text-2xl font-extrabold leading-none">
                            {day}
                          </span>
                          <span className="text-[11px] font-medium mt-1 uppercase">
                            {month}
                          </span>
                        </div>
                      )}

                      {/* Content Section */}
                      <div className="p-6 pt-10 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold text-[#1c1840] mb-4 leading-snug">
                          {event.title}
                        </h3>

                        <p
                          className="text-sm leading-relaxed text-[#6f6a8d] mb-4 line-clamp-3"
                          dangerouslySetInnerHTML={{
                            __html: event.subDescription || "",
                          }}
                        />

                        {location && (
                          <div className="flex items-center text-xs text-[#776f9d] mt-auto">
                            <span className="w-[18px] h-[18px] rounded-full border-2 border-[#776f9d] flex items-center justify-center mr-2 text-[10px]">
                              📍
                            </span>
                            {location.city}
                            {location.state ? `, ${location.state}` : ""}
                          </div>
                        )}

                        {/* Learn More Button - Visible on Hover */}

                        <div className="mt-8">
                          <a
                            href={`/events/${event.slug}`}
                            className="relative overflow-hidden rounded-md border-2 border-[#cc0000] text-[#cc0000] group-hover:text-[#ffffff] px-9 py-5 font-semibold group inline-block"
                          >
                            <span className="absolute inset-0 w-0 bg-[#cc0000] transition-all duration-300 group-hover:w-full"></span>
                            <span className="relative z-10">Learn More</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Load More Button */}
              {visibleCount < eventList.length && (
                <div className="mt-10 flex justify-center">
                  <button
                    onClick={handleLoadMore}
                    className="relative overflow-hidden bg-[#cc0000] text-white px-9 py-3.5 rounded-lg text-xl font-normal group"
                  >
                    <div className="absolute inset-0 w-0 group-hover:w-full h-full bg-gradient-to-r from-green-500 to-teal-500 transition-all duration-500 -z-10" />
                    <span className="relative z-10">Load More</span>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
}
