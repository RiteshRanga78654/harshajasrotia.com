"use client";

import { useState, useEffect } from "react";

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

  // Fetch
  const fetchTestimonials = async () => {
    const res = await fetch("/api/v1/testimonial");
    const data = await res.json();
    setTestimonials(data.data || []);
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const openModal = (item = null) => {
    if (item) {
      setForm(item);
      setEditId(item._id);
    } else {
      resetForm();
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setForm({
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
    setEditId(null);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/v1/file/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setForm({ ...form, image: data.filename });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editId ? "PUT" : "POST";
    const url = editId
      ? `/api/v1/testimonial/${editId}`
      : "/api/v1/testimonial";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    fetchTestimonials();
    closeModal();
  };

  const handleDelete = async (id) => {
    await fetch(`/api/v1/testimonial/${id}`, {
      method: "DELETE",
    });
    fetchTestimonials();
  };

  const filtered = testimonials.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <h1 className="text-3xl font-bold">Testimonials</h1>

          <button
            onClick={() => openModal()}
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            + Add Testimonial
          </button>
        </div>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search testimonial..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-6 w-full md:w-1/3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        />

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.slice(0, visibleCount).map((item) => (
            <div key={item._id}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">

              <div className="flex items-center gap-4">
                <img
                  src={`/uploads/${item.image}`}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.designation}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-600 line-clamp-3">
                {item.review}
              </p>

              <div className="flex justify-between items-center mt-4">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <span key={star}
                      className={`text-xl ${
                        star <= item.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}>
                      ★
                    </span>
                  ))}
                </div>

                <span className={`px-3 py-1 text-xs rounded-full ${
                  item.publish
                    ? "bg-green-100 text-green-600"
                    : "bg-gray-200 text-gray-500"
                }`}>
                  {item.publish ? "Published" : "Draft"}
                </span>
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => openModal(item)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(item._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* LOAD MORE */}
        {visibleCount < filtered.length && (
          <div className="text-center mt-6">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Load More
            </button>
          </div>
        )}

      </div>

      {/* ================= MODAL ================= */}
{isOpen && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
    <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl p-8 overflow-y-auto max-h-[90vh] animate-fadeIn">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {editId ? "Edit Testimonial" : "Create New Testimonial"}
        </h2>
        <button
          onClick={closeModal}
          className="text-gray-400 hover:text-red-500 text-xl"
        >
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Basic Info */}
        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="label">Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter full name"
              className="input-style"
              required
            />
          </div>

          <div>
            <label className="label">Designation</label>
            <input
              name="designation"
              value={form.designation}
              onChange={handleChange}
              placeholder="CEO / Student / Manager"
              className="input-style"
            />
          </div>

          <div>
            <label className="label">Testimonial Type</label>
            <select
              name="testimonialType"
              value={form.testimonialType}
              onChange={handleChange}
              className="input-style"
              required
            >
              <option value="">Select Type</option>
              <option value="client">Client</option>
              <option value="student">Student</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="label">Google Review Link</label>
            <input
              name="googlelink"
              value={form.googlelink}
              onChange={handleChange}
              placeholder="https://google.com/..."
              className="input-style"
            />
          </div>

        </div>

        {/* Description */}
        <div>
          <label className="label">Short Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="2"
            placeholder="Short summary..."
            className="input-style"
          />
        </div>

        {/* Review */}
        <div>
          <label className="label">Detailed Review</label>
          <textarea
            name="review"
            value={form.review}
            onChange={handleChange}
            rows="4"
            placeholder="Write testimonial review..."
            className="input-style"
            required
          />
        </div>

        {/* Rating */}
        <div>
          <label className="label mb-2 block">Rating</label>
          <div className="flex gap-2 text-3xl cursor-pointer">
            {[1,2,3,4,5].map((star) => (
              <span
                key={star}
                onClick={() => setForm({ ...form, rating: star })}
                className={`transition ${
                  star <= form.rating
                    ? "text-yellow-400 scale-110"
                    : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label className="label">Upload Image</label>
          <input type="file" onChange={handleImageUpload} className="mt-2" />
          {form.image && (
            <div className="flex items-center gap-4 mt-3">
              <img
                src={`/uploads/${form.image}`}
                className="w-14 h-14 rounded-full object-cover border"
              />
              <p className="text-sm text-green-600">
                {form.image}
              </p>
            </div>
          )}
        </div>

        {/* Publish Toggle */}
        <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
          <span className="font-medium text-gray-700">
            Publish Testimonial
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="publish"
              checked={form.publish}
              onChange={handleChange}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 pt-4 border-t">
          <button
            type="button"
            onClick={closeModal}
            className="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition shadow"
          >
            {editId ? "Update Testimonial" : "Create Testimonial"}
          </button>
        </div>

      </form>

    </div>

    <style jsx>{`
      .input-style {
        @apply w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition;
      }
      .label {
        @apply block text-sm font-semibold text-gray-600 mb-1;
      }
      .animate-fadeIn {
        animation: fadeIn 0.3s ease-in-out;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
      }
    `}</style>

  </div>
)}

{/* 
      <style jsx>{`
        .input-style {
          @apply w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500;
        }
      `}</style> */}

    </div>
  );
}
