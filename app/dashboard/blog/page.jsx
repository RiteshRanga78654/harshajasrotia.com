"use client";
import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit3, Save, X, Upload, MessageSquare, User, FileText, Link as LinkIcon, Calendar, Briefcase } from 'lucide-react';

const API_BASE = "http://localhost:3000/api/v1/blog";
const UPLOAD_API = "/api/v1/file/upload";
const IMAGE_GET_API = "/api/v1/file/imageGet";

export default function CompleteBlogDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const initialFormState = {
    title: "",
    fullTitle: "",
    slug: "",
    category: "REAL ESTATE",
    image: "",
    excerpt: "",
    description: "",
    content: "",
    author: { name: "Harsha Jasrotia", role: "Research Associate" },
    faq: [{ q: "", a: "" }],
    isPublished: false,
    date: new Date().toISOString().split('T')[0]
  };

  const [formData, setFormData] = useState(initialFormState);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => { fetchBlogs(); }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(API_BASE);
      const data = await res.json();
      setBlogs(Array.isArray(data) ? data : []);
    } catch (err) { console.error("Fetch failed", err); }
  };

  const handleFileUpload = async (e, field) => {
    const file = e.target.files[0];
    if (!file) return;
    const formDataUpload = new FormData();
    formDataUpload.append("file", file);

    try {
      const res = await fetch(UPLOAD_API, { method: "POST", body: formDataUpload });
      const data = await res.json();
      if (res.ok) {
        setFormData((prev) => ({ ...prev, [field]: data.filename }));
      }
    } catch (err) { alert("Error uploading file"); }
  };

  const deleteBlog = async (slug) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    try {
      const res = await fetch(`${API_BASE}/${slug}`, { method: "DELETE" });
      if (res.ok) {
        setBlogs(blogs.filter(blog => blog.slug !== slug));
      }
    } catch (err) { console.error("Delete error:", err); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url = editingId ? `${API_BASE}/${editingId}` : API_BASE;
    try {
      const res = await fetch(url, {
        method: editingId ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        fetchBlogs();
        closeModal();
      } else {
        const err = await res.json();
        alert(`Error: ${err.message}`);
      }
    } catch (err) { console.error(err); } finally { setLoading(false); }
  };

  const openEdit = (blog) => {
    const formattedDate = blog.date ? new Date(blog.date).toISOString().split('T')[0] : initialFormState.date;
    setFormData({ ...blog, date: formattedDate });
    setEditingId(blog.slug);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setFormData(initialFormState);
  };

  const updateFaq = (index, field, value) => {
    const newFaq = [...formData.faq];
    newFaq[index][field] = value;
    setFormData({ ...formData, faq: newFaq });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10 text-slate-900">
      {/* Dashboard Header */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-8">
        <h1 className="text-3xl font-black text-slate-800 tracking-tight">Blog Admin</h1>
        <button 
          onClick={() => { setFormData(initialFormState); setEditingId(null); setIsModalOpen(true); }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 shadow-lg transition-all"
        >
          <Plus size={20} /> Create Post
        </button>
      </div>

      {/* List Table */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Post Info</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
              <th className="px-6 py-4 text-right text-xs font-bold text-slate-400 uppercase tracking-widest">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {blogs.map((blog) => (
              <tr key={blog.slug} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 border overflow-hidden">
                    <img src={`${IMAGE_GET_API}/${blog.image}`} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-700 line-clamp-1">{blog.title}</p>
                    <p className="text-[10px] text-slate-400 font-mono uppercase tracking-tighter">{blog.slug}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-[10px] font-black px-2 py-1 rounded-md ${blog.isPublished ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                    {blog.isPublished ? 'LIVE' : 'DRAFT'}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => openEdit(blog)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg"><Edit3 size={18} /></button>
                    <button onClick={() => deleteBlog(blog.slug)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg"><Trash2 size={18} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Full Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex justify-center items-center p-4">
          <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col">
            <div className="p-6 border-b flex justify-between items-center bg-white sticky top-0 z-10">
              <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight">{editingId ? 'Update Article' : 'Compose New Article'}</h2>
              <button onClick={closeModal} className="p-2 hover:bg-slate-100 rounded-full transition-colors"><X size={20}/></button>
            </div>

            <form onSubmit={handleSubmit} className="p-8 overflow-y-auto space-y-8 bg-white">
              
              {/* Media & Essential Meta */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <label className="block">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Main Banner Image</span>
                    <div className="mt-2 border-2 border-dashed border-slate-200 rounded-2xl p-4 text-center hover:border-blue-400 transition-all cursor-pointer relative group">
                      {formData.image ? (
                        <img src={`${IMAGE_GET_API}/${formData.image}`} className="w-full h-32 object-cover rounded-xl" alt="Preview" />
                      ) : (
                        <div className="py-6"><Upload className="mx-auto text-slate-300 mb-2" /><p className="text-[10px] text-slate-400 tracking-tighter uppercase font-bold text-blue-500">Click to Upload</p></div>
                      )}
                      <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => handleFileUpload(e, 'image')} />
                    </div>
                  </label>
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1"><Calendar size={12}/> Post Date</label>
                    <input type="date" className="w-full mt-1 bg-slate-50 border-none rounded-xl p-3 text-sm focus:ring-2 ring-blue-500 transition-all" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                  </div>
                </div>

                <div className="md:col-span-2 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Short Title</label>
                      <input className="w-full mt-1 bg-slate-50 border-none rounded-xl p-3 font-bold text-slate-700 focus:ring-2 ring-blue-500" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value, slug: editingId ? formData.slug : e.target.value.toLowerCase().replace(/\s+/g, '-')})} required />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Category</label>
                      <input className="w-full mt-1 bg-slate-50 border-none rounded-xl p-3 text-sm font-bold text-blue-600 focus:ring-2 ring-blue-500" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value.toUpperCase()})} />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1"><LinkIcon size={12}/> Manual Slug</label>
                    <input className="w-full mt-1 bg-slate-100 border-none rounded-xl p-3 text-slate-500 font-mono text-xs focus:bg-white focus:ring-2 ring-blue-500" value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-')})} required />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Display Title (SEO H1)</label>
                    <input className="w-full mt-1 bg-slate-50 border-none rounded-xl p-3 text-sm focus:ring-2 ring-blue-500" value={formData.fullTitle} onChange={e => setFormData({...formData, fullTitle: e.target.value})} required />
                  </div>
                </div>
              </div>

              {/* Excerpt and Description */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Excerpt (Card Preview Text)</label>
                  <textarea className="w-full mt-1 bg-slate-50 border-none rounded-xl p-3 h-24 text-sm focus:ring-2 ring-blue-500" maxLength="200" value={formData.excerpt} onChange={e => setFormData({...formData, excerpt: e.target.value})} required />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Description (Meta Tags)</label>
                  <textarea className="w-full mt-1 bg-slate-50 border-none rounded-xl p-3 h-24 text-sm focus:ring-2 ring-blue-500" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} required />
                </div>
              </div>

              {/* Main Content Body */}
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block text-blue-600">Article Content (Markdown or HTML)</label>
                <textarea 
                  className="w-full bg-slate-50 border-none rounded-2xl p-5 h-64 text-sm font-mono focus:ring-4 ring-blue-50 transition-all shadow-inner" 
                  value={formData.content} 
                  onChange={e => setFormData({...formData, content: e.target.value})} 
                  placeholder="Type full content here..."
                  required
                />
              </div>

              {/* Restore Author Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-slate-50 rounded-3xl space-y-4 border border-slate-100">
                  <h3 className="font-bold text-sm flex items-center gap-2 text-slate-600"><User size={18} className="text-blue-500"/> Author Profile</h3>
                  <div className="space-y-3">
                    <input placeholder="Author Name" className="w-full bg-white border-none rounded-xl p-3 text-sm shadow-sm" value={formData.author.name} onChange={e => setFormData({...formData, author: {...formData.author, name: e.target.value}})} required />
                    <div className="relative">
                        <Briefcase className="absolute left-3 top-3 text-slate-300" size={16}/>
                        <input placeholder="Author Role" className="w-full bg-white border-none rounded-xl p-3 pl-10 text-sm shadow-sm" value={formData.author.role} onChange={e => setFormData({...formData, author: {...formData.author, role: e.target.value}})} />
                    </div>
                  </div>
                </div>

                {/* Restore FAQ Items */}
                <div className="p-6 bg-slate-50 rounded-3xl space-y-4 border border-slate-100">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-sm flex items-center gap-2 text-slate-600"><MessageSquare size={18} className="text-blue-500"/> FAQ Section</h3>
                    <button type="button" onClick={() => setFormData({...formData, faq: [...formData.faq, {q:"", a:""}]})} className="text-[10px] font-black bg-blue-500 text-white px-3 py-1 rounded-full uppercase transition-transform active:scale-95 shadow-md shadow-blue-100">+ Add Question</button>
                  </div>
                  <div className="space-y-3 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                    {formData.faq.map((item, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-2xl border border-slate-100 space-y-2 relative group">
                        <button type="button" onClick={() => setFormData({...formData, faq: formData.faq.filter((_, i) => i !== idx)})} className="absolute -top-2 -right-2 bg-red-100 text-red-600 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"><X size={10}/></button>
                        <input placeholder="Question" className="w-full text-xs font-bold outline-none border-b border-slate-50 pb-1" value={item.q} onChange={e => updateFaq(idx, 'q', e.target.value)} />
                        <input placeholder="Answer" className="w-full text-xs outline-none text-slate-400" value={item.a} onChange={e => updateFaq(idx, 'a', e.target.value)} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status & Final Footer */}
              <div className="flex items-center justify-between border-t pt-8 sticky bottom-0 bg-white pb-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-12 h-6 rounded-full transition-all relative ${formData.isPublished ? 'bg-green-500 shadow-lg shadow-green-100' : 'bg-slate-300'}`}>
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all shadow-sm ${formData.isPublished ? 'left-7' : 'left-1'}`} />
                  </div>
                  <input type="checkbox" className="hidden" checked={formData.isPublished} onChange={e => setFormData({...formData, isPublished: e.target.checked})} />
                  <span className={`text-[10px] font-black uppercase tracking-widest ${formData.isPublished ? 'text-green-600' : 'text-slate-400'}`}>{formData.isPublished ? 'Live on Site' : 'Draft Mode'}</span>
                </label>
                <div className="flex gap-4">
                  <button type="button" onClick={closeModal} className="text-slate-400 font-bold px-4 hover:text-slate-600 transition-colors">Discard</button>
                  <button type="submit" disabled={loading} className="bg-blue-600 text-white px-10 py-3 rounded-2xl font-black shadow-xl shadow-blue-100 hover:scale-[1.02] active:scale-95 transition-all">
                    {loading ? 'PROCESSING...' : (editingId ? 'UPDATE POST' : 'PUBLISH POST')}
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