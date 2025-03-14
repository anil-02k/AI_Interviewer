import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import MockInterview from "@/app/models/mockInterview";

export async function GET(request) {
  await dbConnect();

  try {
    const { searchParams } = new URL(request.url);
    const interviewId = searchParams.get("interviewId");

    console.log("✅ Received interviewId:", interviewId);

    if (!interviewId) {
      console.error("❌ interviewId is missing");
      return NextResponse.json(
        { error: "interviewId query parameter is required" },
        { status: 400 }
      );
    }

    if (interviewId.length !== 36) {
      console.error("❌ Invalid UUID format:", interviewId);
      return NextResponse.json(
        { error: "Invalid interview ID format" },
        { status: 400 }
      );
    }

    const interview = await MockInterview.findOne({ interviewId });

    if (!interview) {
      console.error("❌ Interview not found for ID:", interviewId);
      return NextResponse.json(
        { error: "Interview not found" },
        { status: 404 }
      );
    }

    console.log("✅ Interview found:", interview);
    return NextResponse.json(interview);

  } catch (e) {
    console.error("❌ API Error:", e.stack || e);
    return NextResponse.json(
      { error: "Internal Server Error", details: e.message },
      { status: 500 }
    );
  }
}
