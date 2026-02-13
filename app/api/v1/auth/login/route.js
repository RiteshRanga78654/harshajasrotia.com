import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { ConnectDb } from "@/lib/config/db";
import User from "@/lib/model/User";

export async function POST(request) {
  try {
    await ConnectDb();
    const { email, password } = await request.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 400 },
      );
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 400 },
      );
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "sdfghjhkjllnkbjhgfdnfg7iu6tyret5wa5w6e7rtuyfvhjyutdrsxfhgc", {
      expiresIn: "7d",
    });

    const response = NextResponse.json({ message: "Login successful" });

    response.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: false, // VERY IMPORTANT for localhost
      sameSite: "lax",
      path: "/", // VERY IMPORTANT
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
