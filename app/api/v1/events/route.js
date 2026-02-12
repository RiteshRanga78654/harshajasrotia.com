import { NextResponse } from "next/server";
import { ConnectDb } from "@/lib/config/db";
import Event from "@/lib/model/Event";

export const runtime = "nodejs";

/* =========================
   CREATE EVENT
========================= */
export async function POST(request) {
  try {
    await ConnectDb();

    const body = await request.json();

    const newEvent = await Event.create(body);

    return NextResponse.json(
      {
        status: 201,
        message: "Event created successfully",
        data: newEvent
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
   GET ALL EVENTS
========================= */
export async function GET() {
  try {
    await ConnectDb();

    const events = await Event.find().sort({ createdAt: -1 });

    return NextResponse.json(
      {
        status: 200,
        data: events
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
