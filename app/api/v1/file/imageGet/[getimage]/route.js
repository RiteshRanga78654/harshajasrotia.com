import path from "path";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    // 1. AWAIT params (Crucial for Next.js 15+)

    const { getimage: id } = await params;
    // console.log("[IMAGE API] Requested ID:", id); // Debug log for incoming ID
    // 2. Validate ID

    if (!id || id === "undefined" || id === "null") {
      return NextResponse.json({ error: "Invalid image ID" }, { status: 400 });
    }

    // 3. SECURE PATH CONSTRUCTING

    // Use path.join without a leading slash on 'public' to ensure it's relative to project root

    const imagePath = path.join(process.cwd(), "public", "upload", id);
    // console.log("[IMAGE API] Resolved Path:", imagePath);
    // 4. CHECK IF FILE EXISTS

    try {
      await fs.access(imagePath);
    } catch {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    // 5. READ AND RETURN

    const imageBuffer = await fs.readFile(imagePath);

    // Optional: Determine extension to set correct Content-Type

    const ext = path.extname(imagePath).toLowerCase();

    const contentType = ext === ".png" ? "image/png" : "image/jpeg";

    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": contentType,

        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    // 6. SAFE ERROR LOGGING

    console.error("[IMAGE API] Error:", error);

    return NextResponse.json(
      {
        error: "Failed to load image",

        details: error instanceof Error ? error.message : "Unknown error",
      },

      { status: 500 },
    );
  }
}
