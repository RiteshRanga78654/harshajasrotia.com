import { NextResponse } from "next/server";
import { ConnectDb } from "@/lib/config/db";
import Blog from "@/lib/model/Blog";

/* GET SINGLE BLOG */
export async function GET(request, { params }) {
  await ConnectDb();
  
  // 1. Unwrapping params
  const { slug } = await params; 

  const blog = await Blog.findOne({ slug });

  if (!blog) {
    return NextResponse.json({ message: "Blog not found" }, { status: 404 });
  }

  return NextResponse.json(blog);
}

/* UPDATE BLOG */
export async function PATCH(request, { params }) {
  try {
    await ConnectDb();
    
    // 2. Unwrapping params
    const { slug } = await params; 
    const body = await request.json();

    const updated = await Blog.findOneAndUpdate(
      { slug: slug },
      body,
      { returnDocument: "after" }
    );

    if (!updated) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

/* DELETE BLOG */
export async function DELETE(request, { params }) {
  await ConnectDb();

  // 3. Unwrapping params
  const { slug } = await params; 

  const deleted = await Blog.findOneAndDelete({ slug: slug });

  if (!deleted) {
    return NextResponse.json({ message: "Blog not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Deleted successfully" });
}