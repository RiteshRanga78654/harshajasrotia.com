import path from "path";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  try {
    const id = params?.getimage;
    
    // Validate image ID
    if (!id || id === 'undefined' || id === 'null') {
      console.error('[IMAGE API] Invalid image ID:', id);
      return NextResponse.json(
        { error: 'Invalid image ID provided' },
        { status: 400 }
      );
    }

    const imagePath = path.join(process.cwd(), "/public/uploads", id);
    console.log('[IMAGE API] Attempting to read image:', imagePath);

    // Check if file exists
    try {
      await fs.access(imagePath);
    } catch (error) {
      console.error('[IMAGE API] Image not found:', imagePath);
      return NextResponse.json(
        { error: 'Image not found' },
        { status: 404 }
      );
    }

    const imageBuffer = await fs.readFile(imagePath);
    const response = new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": "image/jpeg"
      },
    });
    return response;
  } catch (error) {
    console.error('[IMAGE API] Error reading image:', error);
    return NextResponse.json(
      { error: 'Failed to load image', details: error.message },
      { status: 500 }
    );
  }
}

