import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    fullTitle: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    category: {
      type: String,
      default: "REAL ESTATE",
      uppercase: true,
    },
    image: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
      maxLength: 200,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      name: { type: String, required: true },
      role: { type: String, default: "Research Associate" },
    },
    date: {
      type: Date,
      default: Date.now,
    },
    faq: [
      {
        q: String,
        a: String,
      },
    ],
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// ✅ Correct way for Next.js
export default mongoose.models.Blog ||
  mongoose.model("Blog", BlogSchema);
