import { NextResponse } from "next/server";
import { ConnectDb } from "@/lib/config/db"; // adjust path if needed
import Moment from "@/lib/model/Moment";

export const runtime = "nodejs";

/* =========================
   CREATE MOMENT (POST)
========================= */
export async function POST(request) {
  try {
    await ConnectDb();

    const body = await request.json();
    const { image, title } = body;

    if (!image || !title) {
      return NextResponse.json(
        { status: 400, message: "Image and Title are required" },
        { status: 400 }
      );
    }

    const newMoment = await Moment.create({
      image,
      title
    });

    return NextResponse.json(
      {
        status: 201,
        message: "Moment created successfully",
        data: newMoment
      },
      { status: 201 }
    );

  } catch (error) {
    return NextResponse.json(
      { status: 500, message: error.message },
      { status: 500 }
    );
  }
}


/* =========================
   GET ALL MOMENTS
========================= */
export async function GET() {
  try {
    await ConnectDb();

    const moments = await Moment.find().sort({ createdAt: -1 });

    return NextResponse.json(
      {
        status: 200,
        data: moments
      },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { status: 500, message: error.message },
      { status: 500 }
    );
  }
}
