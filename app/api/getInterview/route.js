import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import MockInterview from "@/app/models/mockInterview";

export async function GET(request) {
  await dbConnect();

  try {
    const { searchParams } = new URL(request.url);
    const interviewId = searchParams.get("interviewId");

    if (!interviewId) {
      return NextResponse.json(
        { error: "interviewId query parameter is required" },
        { status: 400 }
      );
    }

    if (interviewId.length !== 36) {
      return NextResponse.json(
        { error: "Invalid interview ID format" },
        { status: 400 }
      );
    }

    const interview = await MockInterview.findOne({ mockId: interviewId });

    if (!interview) {
      return NextResponse.json({ error: "Interview not found" }, { status: 404 });
    }

    return NextResponse.json(interview);
  } catch (e) {
    return NextResponse.json(
      { error: "Internal Server Error", details: e.message },
      { status: 500 }
    );
  }
}
