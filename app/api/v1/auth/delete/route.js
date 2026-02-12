import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { ConnectDb } from "@/lib/config/db";
import User from "@/lib/model/User";

export async function DELETE(request) {
  try {
    await ConnectDb();

    const token = request.headers.get("authorization")?.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    await User.findByIdAndDelete(decoded.id);

    return NextResponse.json({
      message: "Account deleted successfully"
    });

  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
