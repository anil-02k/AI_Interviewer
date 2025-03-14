import { NextResponse } from "next/server";
import dbConnect from "@/lib/db"; // Ensure you have a working DB connection
import MockInterview from "@/app/models/mockInterview";
import { v4 as uuidv4 } from 'uuid';
export async function POST(req) {
    try {
        await dbConnect(); // Ensure DB is connected
        const body = await req.json();
        
        console.log("Received Data:", body); // Log incoming data
        
        // Check for missing fields
        if (!body.jsonMockResp || !body.jobPosition || !body.jobDesc || !body.jobExperience || !body.createdBy) {
            console.error("❌ Missing fields:", body);
            return NextResponse.json({ error: "Missing required fields", received: body }, { status: 400 });
        }

        const newInterview = new MockInterview({
            jsonMockResp: body.jsonMockResp,
            jobPosition: body.jobPosition,
            jobDesc: body.jobDesc,
            jobExperience: body.jobExperience,
            createdBy: body.createdBy,
            createdAt: new Date().toISOString(),
            mockId: body.mockId || uuidv4()
        });

        await newInterview.save();

        console.log("✅ Successfully saved:", newInterview);

        return NextResponse.json({ message: "Interview saved successfully!", data: newInterview }, { status: 201 });
    } catch (error) {
        console.error("🔥 API Error:", error);
        return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
    }
}
