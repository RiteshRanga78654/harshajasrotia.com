"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useParams } from "next/navigation"; 

const EVENTS_API_URL = "https://service.ireedindia.com/v1/events";
const BLOGS_API_URL = "https://service.ireedindia.com/v1/blog?published=true&size=1000";

// Robust YouTube ID extractor
const getYoutubeId = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = String(url).match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export default function EventPage() {
  const params = useParams();
  const slug = params?.slug;

  const [event, setEvent] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!slug) return;

    async function fetchData() {
      try {
        setLoading(true);
        
        // 1. Fetch Events
        const eventRes = await fetch(EVENTS_API_URL);
        const eventData = await eventRes.json();
        const allEvents = Array.isArray(eventData) ? eventData : (eventData.data || []);
        const foundEvent = allEvents.find(e => e.slug === slug || e._id === slug);
        setEvent(foundEvent);

        // 2. Fetch Blogs
        const blogsRes = await fetch(BLOGS_API_URL);
        const blogsData = await blogsRes.json();
        const finalBlogs = Array.isArray(blogsData) ? blogsData : (blogsData.data || []);
        setBlogs(finalBlogs);

      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [slug]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2a3290]"></div>
    </div>
  );

  if (!event) return (
    <div className="py-20 text-center bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold">Event not found</h2>
      <Link href="/events" className="text-blue-600 hover:underline mt-4 block">Back to events</Link>
    </div>
  );

  // Data Formatting Helpers
  const title = event.title || event.Title || "Event";
  const rawBanner = event.banner || event.Banner || "";
  const bannerUrl = rawBanner.startsWith("http") 
    ? rawBanner 
    : `https://service.ireedindia.com/image/${rawBanner.replace(/^\/+|^image\//, "")}`;

  const photos = (event.gallery || event.Gallery || [])
    .map(p => p ? `https://service.ireedindia.com/image/${String(p).replace(/^\/+|^image\//, "")}` : "")
    .filter(Boolean);

  const youtubeEntries = event.Youtube || event.youtube || [];

  return (
    <div className="w-full font-sans text-gray-800 bg-gray-50 min-h-screen pb-12">
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-6">
        
        {/* Restored Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-8 shadow-xl h-[300px] md:h-[450px]">
          <img src={bannerUrl} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent flex items-end p-8">
             <h1 className="text-white text-3xl md:text-5xl font-bold">{title}</h1>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-6">
            
            {/* About Section */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-4 border-b pb-2">About the Event</h2>
              <div 
                className="prose prose-blue max-w-none text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: event.description || event.content || "" }} 
              />
              {event.date && (
                <p className="mt-4 font-semibold text-[#2a3290]">📅 Date: <span className="text-gray-700 font-normal">{event.date}</span></p>
              )}
            </div>

            {/* Restored Gallery */}
            {photos.length > 0 && (
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-4">Event Gallery</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {photos.map((src, idx) => (
                    <div key={idx} onClick={() => { setCurrentIndex(idx); setLightboxOpen(true); }}
                      className="aspect-[4/3] relative rounded-xl overflow-hidden cursor-pointer group shadow-sm">
                      <img src={src} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Restored Location Map */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Location & Venue</h3>
              <div className="w-full h-[350px] rounded-xl overflow-hidden border border-gray-200">
                {event.map ? (
                  <iframe src={event.map} width="100%" height="100%" className="border-0" loading="lazy" />
                ) : (
                  <div className="h-full bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
                    <p className="font-bold text-xl">{event.venue || "Venue Details"}</p>
                    <p className="text-gray-500">{event.address}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <aside className="lg:w-[380px] space-y-6">
            
            {/* Restored YouTube Section */}
            {youtubeEntries.length > 0 && (
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-6">Event Glimpses</h3>
                <div className="space-y-4">
                  {youtubeEntries.map((item, idx) => {
                    const videoId = getYoutubeId(item?.Youtubelink || item);
                    return videoId ? (
                      <div key={idx} className="rounded-xl overflow-hidden bg-black aspect-video">
                        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0" allowFullScreen />
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            )}

            {/* Sidebar Blogs (Fixed with slice check) */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Latest Insights</h3>
              <div className="space-y-6">
                {Array.isArray(blogs) && blogs.slice(0, 3).map((blog, i) => (
                  <div key={i} className="group border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 group-hover:text-blue-700 line-clamp-2 mb-3">{blog.title}</h4>
                    <Link href={`/blog-details/${blog.slug}`} className="block w-full text-center bg-[#2a3290] text-white py-2 rounded-lg text-sm font-medium">
                      Read More
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4" onClick={() => setLightboxOpen(false)}>
          <button className="absolute top-6 right-6 text-white text-4xl">&times;</button>
          <img src={photos[currentIndex]} className="max-w-full max-h-[85vh] object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}