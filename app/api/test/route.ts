import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({
      status: "success",
      message: "MongoDB connected successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to connect to MongoDB",
      },
      { status: 500 }
    );
  }
}
