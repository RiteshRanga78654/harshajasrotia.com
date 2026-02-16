
"use client";

import { useState, useEffect } from "react";
import { 
  Plus, Search, Edit2, Trash2, Star, 
  ExternalLink, CheckCircle, Clock, X, Upload 
} from "lucide-react";

export default function TestimonialsDashboard() {
  const [testimonials, setTestimonials] = useState([]);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [isOpen, setIsOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    image: "",
    description: "",
    designation: "",
    testimonialType: "",
    review: "",
    rating: 0,
    googlelink: "",
    publish: false,
  });


  const IMAGE_GET_API = "/api/v1/file/imageGet";

  // API Logics (Unchanged)
  const fetchTestimonials = async () => {
    const res = await fetch("/api/v1/testimonial");
    const data = await res.json();
    setTestimonials(data.data || []);
  };

  useEffect(() => { fetchTestimonials(); }, []);

  const openModal = (item = null) => {
    if (item) {
      setForm(item);
      setEditId(item._id);
    } else {
      resetForm();
    }
    setIsOpen(true);
  };

  const closeModal = () => { setIsOpen(false); resetForm(); };

  const resetForm = () => {
    setForm({
      name: "", image: "", description: "", designation: "",
      testimonialType: "", review: "", rating: 0, googlelink: "", publish: false,
    });
    setEditId(null);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/v1/file/upload", { method: "POST", body: formData });
    const data = await res.json();
    setForm({ ...form, image: data.filename });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editId ? "PUT" : "POST";
    const url = editId ? `/api/v1/testimonial/${editId}` : "/api/v1/testimonial";
    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    fetchTestimonials();
    closeModal();
  };

  const handleDelete = async (id) => {
    if(!confirm("Are you sure?")) return;
    await fetch(`/api/v1/testimonial/${id}`, { method: "DELETE" });
    fetchTestimonials();
  };

  const filtered = testimonials.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-[#cc0000] tracking-tight">Testimonials</h1>
            <p className="text-white/60 mt-1 italic">Manage your professional social proof</p>
          </div>

          <button
            onClick={() => openModal()}
            className="flex items-center gap-2 px-6 py-3 bg-[#cc0000] text-white rounded-xl font-bold shadow-lg hover:bg-red-700 transition-all hover:scale-105 active:scale-95"
          >
            <Plus size={20} /> Create Testimonial
          </button>
        </div>

        {/* SEARCH BAR */}
        <div className="relative mb-10 group max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-[#cc0000] transition-colors" size={20} />
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-[#f4f4f4] text-gray-800 rounded-2xl border-none focus:ring-2 focus:ring-[#cc0000] transition-all shadow-inner"
          />
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.slice(0, visibleCount).map((item) => (
            <div key={item._id} className="group relative bg-[#f4f4f4] rounded-[2.5rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col border border-white/20">
              
              {/* Status Badge */}
              <div className="absolute top-6 right-6">
                {item.publish ? (
                  <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest bg-green-100 text-green-600 px-3 py-1 rounded-full">
                    <CheckCircle size={10} /> Live
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest bg-gray-200 text-gray-500 px-3 py-1 rounded-full">
                    <Clock size={10} /> Draft
                  </span>
                )}
              </div>

              <div className="flex items-center gap-5 mb-6">
                <div className="relative">
                  <img
                    src={`${IMAGE_GET_API}/${item.image}`}
                    className="w-16 h-16 rounded-2xl object-cover ring-4 ring-[#cc0000]/20 shadow-md"
                    alt={item.name}
                  />
                  <div className="absolute -bottom-1 -right-1 bg-[#cc0000] text-white text-[10px] px-2 py-0.5 rounded-md font-bold uppercase">
                    {item.testimonialType}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-xl leading-tight">{item.name}</h3>
                  <p className="text-gray-500 text-sm font-medium">{item.designation}</p>
                </div>
              </div>

              <div className="flex mb-4 gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill={star <= item.rating ? "#cc0000" : "transparent"} className={star <= item.rating ? "text-[#cc0000]" : "text-gray-300"} />
                ))}
              </div>

              <p className="text-gray-600 italic leading-relaxed mb-6 line-clamp-4 flex-1">
                "{item.review}"
              </p>

              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                <div className="flex gap-4">
                  <button onClick={() => openModal(item)} className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => handleDelete(item._id)} className="p-2 text-gray-400 hover:text-[#cc0000] transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
                {item.googlelink && (
                  <a href={item.googlelink} target="_blank" className="text-gray-400 hover:text-gray-800 transition-colors">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* LOAD MORE */}
        {visibleCount < filtered.length && (
          <div className="text-center mt-16">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="px-10 py-4 bg-white/10 text-white border border-white/20 rounded-2xl font-bold hover:bg-[#cc0000] hover:border-[#cc0000] transition-all"
            >
              Load More Reviews
            </button>
          </div>
        )}
      </div>

      {/* ================= MODERN MODAL (MATCHES SCREENSHOT) ================= */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-[100]">
          <div className="bg-white w-full max-w-5xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[95vh] animate-in fade-in zoom-in duration-300">
            
            {/* Modal Navigation (Matching Tab Style) */}
            <div className="flex justify-between items-center px-8 py-4 border-b bg-gray-50">
              <div className="flex gap-4">
                <button className="flex items-center gap-2 text-[#cc0000] font-bold border-b-2 border-[#cc0000] pb-1">
                  <Edit2 size={16} /> {editId ? "Update Testimonial" : "Create Testimonial"}
                </button>
              </div>
              <button onClick={closeModal} className="text-gray-400 hover:text-[#cc0000] transition-colors">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="overflow-y-auto p-8 md:p-12 space-y-10">
              
              {/* Form Grid */}
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                
                {/* Row 1 */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                    <span className="text-[#cc0000]">*</span> Name
                  </label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Enter full name" className="w-full px-4 py-3 text-[#222222] bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#cc0000] focus:border-transparent outline-none transition-all" required />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                    <span className="text-[#cc0000]">*</span> Designation
                  </label>
                  <input name="designation" value={form.designation} onChange={handleChange} placeholder="e.g. CEO, Student" className="w-full px-4 py-3 text-[#222222] bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#cc0000] outline-none transition-all" required />
                </div>

                {/* Row 2 */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                    <span className="text-[#cc0000]">*</span> Testimonial Type
                  </label>
                  <select name="testimonialType" value={form.testimonialType} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border text-[#222222] border-gray-200 rounded-xl focus:ring-2 focus:ring-[#cc0000] outline-none transition-all" required>
                    <option value="">Select Type</option>
                    <option value="client">Client</option>
                    <option value="student">Student</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Google Review Link</label>
                  <input name="googlelink" value={form.googlelink} onChange={handleChange} placeholder="Paste Maps URL" className="w-full px-4 py-3 text-[#222222] bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#cc0000] outline-none transition-all" />
                </div>

                {/* Description - Full Width */}
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-gray-700">Short Description</label>
                  <input name="description" value={form.description} onChange={handleChange} placeholder="One sentence summary" className="w-full px-4 py-3 text-[#222222] bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#cc0000] outline-none transition-all" />
                </div>

                {/* Review Textarea */}
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                    <span className="text-[#cc0000]">*</span> Detailed Review
                  </label>
                  <textarea name="review" value={form.review} onChange={handleChange} rows="4" placeholder="Enter review content..." className="w-full text-[#222222] px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#cc0000] outline-none transition-all resize-none" required />
                </div>

                {/* Image Upload & Rating Row */}
                <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-700">User Image</label>
                   <div className="flex items-center gap-4 p-4 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50 hover:border-[#cc0000] transition-colors relative cursor-pointer group">
                      <input type="file" onChange={handleImageUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
                      <div className="p-3 bg-white rounded-xl shadow-sm group-hover:text-[#cc0000]">
                        <Upload size={20} />
                      </div>
                      <span className="text-sm text-gray-500 font-medium">{form.image ? form.image : "Upload Image"}</span>
                   </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Rating Score</label>
                  <div className="flex gap-2 p-3 bg-gray-50 rounded-2xl border border-gray-200 w-fit">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={28}
                        onClick={() => setForm({ ...form, rating: star })}
                        fill={star <= form.rating ? "#cc0000" : "transparent"}
                        className={`cursor-pointer transition-all hover:scale-125 ${star <= form.rating ? "text-[#cc0000]" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t gap-6">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" name="publish" checked={form.publish} onChange={handleChange} className="hidden peer" />
                  <div className="w-12 h-6 bg-gray-200 rounded-full peer-checked:bg-[#cc0000] relative transition-colors after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-6"></div>
                  <span className="font-bold text-gray-700">Publish Immediately</span>
                </label>

                <div className="flex gap-4 w-full md:w-auto">
                  <button type="button" onClick={closeModal} className="flex-1 md:flex-none px-8 py-3 rounded-xl bg-gray-100 text-gray-600 font-bold hover:bg-gray-200 transition-all">
                    Cancel
                  </button>
                  <button type="submit" className="flex-1 md:flex-none px-12 py-3 rounded-xl bg-[#cc0000] text-white font-bold shadow-lg shadow-red-500/30 hover:bg-red-700 transition-all">
                    {editId ? "Save Changes" : "Confirm & Create"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}