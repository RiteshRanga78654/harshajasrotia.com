import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { ConnectDb } from "@/lib/config/db";
import User from "@/lib/model/User";

export async function PATCH(request) {
  try {
    await ConnectDb();

    const token = request.headers.get("authorization")?.split(" ")[1];
    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { oldPassword, newPassword } = await request.json();

    const user = await User.findById(decoded.id);

    const isMatch = await user.comparePassword(oldPassword);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Old password incorrect" },
        { status: 400 }
      );
    }

    user.password = newPassword;
    await user.save();

    return NextResponse.json({
      message: "Password updated successfully"
    });

  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
