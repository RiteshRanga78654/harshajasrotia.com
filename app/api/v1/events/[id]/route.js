import { NextResponse } from "next/server";
import { ConnectDb } from "@/lib/config/db";
import Event from "@/lib/model/Event";

export const runtime = "nodejs";

/* =====================================
   PATCH → Update Normal Fields
===================================== */
export async function PATCH(request, context) {
  const { id } = await context.params;   // ✅ Next 15 fix

  try {
    await ConnectDb();

    const body = await request.json();

    const updated = await Event.findByIdAndUpdate(
      id,
      body,
      { returnDocument: "after" }  // ✅ no mongoose warning
    );

    if (!updated) {
      return NextResponse.json(
        { message: "Event not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Event updated successfully",
      data: updated
    });

  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}


/* =====================================
   PUT → Replace Entire Document
===================================== */
export async function PUT(request, context) {
  const { id } = await context.params;

  try {
    await ConnectDb();

    const body = await request.json();

    const replaced = await Event.findByIdAndUpdate(
      id,
      body,
      { returnDocument: "after", overwrite: true }
    );

    if (!replaced) {
      return NextResponse.json(
        { message: "Event not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Event replaced successfully",
      data: replaced
    });

  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}


/* =====================================
   DELETE → Remove Event
===================================== */
export async function DELETE(request, context) {
  const { id } = await context.params;

  try {
    await ConnectDb();

    const deleted = await Event.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { message: "Event not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Event deleted successfully"
    });

  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
