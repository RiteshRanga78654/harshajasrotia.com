import { NextResponse } from "next/server";
import { ConnectDb } from "@/lib/config/db";
import Blog from "@/lib/model/Blog";

/* =========================
   GET ALL PUBLISHED BLOGS
========================= */
export async function GET() {
  try {
    await ConnectDb();

    const blogs = await Blog.find({ isPublished: true })
      .sort({ createdAt: -1 });

    return NextResponse.json(blogs);

  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}

/* =========================
   CREATE BLOG
========================= */
export async function POST(request) {
  try {
    await ConnectDb();
    const body = await request.json();

    // Slug required validation
    if (!body.slug) {
      return NextResponse.json(
        { message: "Slug is required" },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const existing = await Blog.findOne({ slug: body.slug });
    if (existing) {
      return NextResponse.json(
        { message: "Slug already exists" },
        { status: 400 }
      );
    }

    const blog = await Blog.create(body);

    return NextResponse.json(blog, { status: 201 });

  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
