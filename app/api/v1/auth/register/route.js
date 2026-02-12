import { NextResponse } from "next/server";
import { ConnectDb } from "@/lib/config/db";
import User from "@/lib/model/User";

export async function POST(request) {
  try {
    await ConnectDb();
    const { name, email, password } = await request.json();

    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 400 }
      );
    }

    await User.create({ name, email, password });

    return NextResponse.json({ message: "User registered successfully" });

  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
