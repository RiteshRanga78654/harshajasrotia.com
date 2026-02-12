"use client";


import { useState, useEffect } from "react";
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  X,
  Image as ImageIcon,
  MapPin,
  Calendar,
  Youtube,
  Globe,
  Loader2,
  Link as LinkIcon,
} from "lucide-react";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    date: "",
    slug: "",
    banner: "",
    thumbnail: "",
    gallery: [""],
    youtube: [{ YoutubeHeading: "", Youtubelink: "" }],
    location: { city: "", state: "", country: "", pincode: "" },
    map: "",
    website: "",
    metaTitle: "",
    metaDescription: "",
    metaKeyword: "",
    published: false,
    featured: false,
    eventGrid: false,
    university: false,
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  // 🔍 Search Logic
  useEffect(() => {
    const filtered = events.filter(
      (event) =>
        event.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location?.city?.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredEvents(filtered);
  }, [searchTerm, events]);

  const fetchEvents = async () => {
    try {
      const res = await fetch("/api/v1/events");
      const data = await res.json();
      setEvents(data.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `/api/v1/events/${editingId}` : "/api/v1/events";
    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setIsModalOpen(false);
        fetchEvents();
      }
    } catch (err) {
      alert("Action failed");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this event forever?")) return;
    await fetch(`/api/v1/events/${id}`, { method: "DELETE" });
    fetchEvents();
  };

  //   upload

  // Helper to handle the actual file upload to your API
  const handleFileUpload = async (e, field) => {
    const file = e.target.files[0];
    if (!file) return;

    const formDataUpload = new FormData();
    formDataUpload.append("file", file); // Must match formData.getAll("file") in your API

    try {
      const res = await fetch("/api/v1/file/upload", {
        method: "POST",
        body: formDataUpload,
      });

      const data = await res.json();

      if (res.ok) {
        // Your API returns { filename: "..." }
        // We update the specific field (banner or thumbnail) with the new filename
        setFormData((prev) => ({ ...prev, [field]: data.filename }));
      } else {
        alert(data.message || "Upload failed");
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Error uploading file");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 text-white">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h1 className="text-4xl font-black tracking-tight">EVENTS</h1>
          <p className="text-slate-400">
            Manage property exhibitions and event listings.
          </p>
        </div>
        <button
          onClick={() => {
            setEditingId(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20"
        >
          <Plus size={20} /> Create New Event
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <Search
          className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
          size={20}
        />
        <input
          type="text"
          placeholder="Search by title, city, or status..."
          className="w-full bg-slate-900/50 border border-white/10 rounded-2xl py-5 pl-14 pr-6 outline-none focus:ring-2 focus:ring-blue-500/40 transition-all text-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Modern Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event) => (
          <div
            key={event._id}
            className="bg-slate-900/40 border border-white/10 rounded-[2.5rem] overflow-hidden group hover:border-blue-500/50 transition-all"
          >
            <div className="relative h-48 w-full bg-slate-800">
              {event.thumbnail ? (
                <img
                  src={`/api/v1/file/imageGet/${event.thumbnail}`}
                  alt=""
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-600">
                  <ImageIcon size={40} />
                </div>
              )}
              <div className="absolute top-4 left-4 flex gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${event.published ? "bg-green-500 text-white" : "bg-orange-500 text-white"}`}
                >
                  {event.published ? "Live" : "Draft"}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 line-clamp-1">
                {event.title}
              </h3>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Calendar size={14} className="text-blue-500" /> {event.date}
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <MapPin size={14} className="text-blue-500" />{" "}
                  {event.location?.city}, {event.location?.state}
                </div>
              </div>
              <div className="flex gap-3 border-t border-white/5 pt-5">
                <button
                  onClick={() => {
                    setEditingId(event._id);
                    setFormData(event);
                    setIsModalOpen(true);
                  }}
                  className="flex-1 bg-white/5 hover:bg-blue-600 py-3 rounded-xl flex justify-center gap-2 transition-all font-bold text-sm"
                >
                  <Edit2 size={16} /> Edit
                </button>
                <button
                  onClick={() => handleDelete(event._id)}
                  className="px-4 bg-white/5 hover:bg-red-600 text-red-500 hover:text-white py-3 rounded-xl transition-all"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🚀 Wide Modern Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div
            className="absolute inset-0 bg-[#05070a]/95 backdrop-blur-xl"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative bg-slate-900 border border-white/10 w-full max-w-6xl h-full overflow-y-auto rounded-[3rem] shadow-2xl flex flex-col">
            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-12">
              <div className="flex justify-between items-center sticky top-0 bg-slate-900 z-10 pb-4 border-b border-white/5">
                <h2 className="text-3xl font-black">
                  {editingId ? "Update Event" : "Create New Event"}
                </h2>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-white/5 p-3 rounded-full hover:bg-red-500 transition-all"
                >
                  <X />
                </button>
              </div>

              {/* SECTION 1: VISUALS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-3">
                  <h3 className="text-blue-500 font-black uppercase tracking-tighter">
                    1. Imagery & Media
                  </h3>
                </div>

                {/* Thumbnail Upload */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                    Thumbnail
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Filename or URL"
                      className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-4 outline-none"
                      value={formData.thumbnail}
                      onChange={(e) =>
                        setFormData({ ...formData, thumbnail: e.target.value })
                      }
                    />
                    <label className="bg-blue-600 hover:bg-blue-500 p-4 rounded-2xl cursor-pointer transition-all">
                      <ImageIcon size={20} />
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, "thumbnail")}
                      />
                    </label>
                  </div>
                </div>

                {/* Banner Upload */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                    Banner Image
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Filename or URL"
                      className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-4 outline-none"
                      value={formData.banner}
                      onChange={(e) =>
                        setFormData({ ...formData, banner: e.target.value })
                      }
                    />
                    <label className="bg-blue-600 hover:bg-blue-500 p-4 rounded-2xl cursor-pointer transition-all">
                      <ImageIcon size={20} />
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, "banner")}
                      />
                    </label>
                  </div>
                </div>

                {/* Gallery remains as text for now as it's multiple values */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                    Gallery (CSV)
                  </label>
                  <input
                    type="text"
                    placeholder="url1, url2"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none"
                    value={formData.gallery.join(", ")}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        gallery: e.target.value.split(", "),
                      })
                    }
                  />
                </div>
              </div>

              {/* SECTION 2: CONTENT */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-2">
                  <h3 className="text-blue-500 font-black uppercase tracking-tighter border-t border-white/5 pt-8">
                    2. Content Details
                  </h3>
                </div>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Main Event Title"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-xl font-bold"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    required
                  />
                  <input
                    type="text"
                    placeholder="Subtitle / Tagline"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4"
                    value={formData.subtitle}
                    onChange={(e) =>
                      setFormData({ ...formData, subtitle: e.target.value })
                    }
                  />
                  <textarea
                    placeholder="Full Event Description"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 h-40"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Date (e.g. Oct 20)"
                      className="bg-white/5 border border-white/10 rounded-2xl p-4"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="URL Slug (unique)"
                      className="bg-white/5 border border-white/10 rounded-2xl p-4"
                      value={formData.slug}
                      onChange={(e) =>
                        setFormData({ ...formData, slug: e.target.value })
                      }
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="City"
                      className="bg-white/5 border border-white/10 rounded-2xl p-4"
                      value={formData.location.city}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          location: {
                            ...formData.location,
                            city: e.target.value,
                          },
                        })
                      }
                    />
                    <input
                      type="text"
                      placeholder="State"
                      className="bg-white/5 border border-white/10 rounded-2xl p-4"
                      value={formData.location.state}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          location: {
                            ...formData.location,
                            state: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Map Iframe Link"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4"
                    value={formData.map}
                    onChange={(e) =>
                      setFormData({ ...formData, map: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* SECTION 3: STATUS */}
              <div className="flex flex-wrap gap-8 bg-blue-600/10 p-8 rounded-[2rem] border border-blue-500/20">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-blue-500"
                    checked={formData.published}
                    onChange={(e) =>
                      setFormData({ ...formData, published: e.target.checked })
                    }
                  />{" "}
                  <span className="font-bold">Publicly Visible</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-blue-500"
                    checked={formData.featured}
                    onChange={(e) =>
                      setFormData({ ...formData, featured: e.target.checked })
                    }
                  />{" "}
                  <span className="font-bold">Featured Event</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-blue-500"
                    checked={formData.eventGrid}
                    onChange={(e) =>
                      setFormData({ ...formData, eventGrid: e.target.checked })
                    }
                  />{" "}
                  <span className="font-bold">Show in Grid</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 py-6 rounded-3xl text-xl font-black shadow-2xl shadow-blue-600/30 transition-all active:scale-[0.98]"
              >
                {editingId ? "SAVE CHANGES" : "PUBLISH EVENT"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
