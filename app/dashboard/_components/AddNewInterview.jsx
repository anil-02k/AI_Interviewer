"use client"

import React, { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { chatSession } from "@/lib/GeminiAIModal"
import { LoaderCircle } from "lucide-react"
import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

const AddNewInterview = () => {
    const [openDialog, setOpenDialog] = useState(false)

    const [jobPosition, setJobPosition] = useState("");
    const [jobDesc, setJobDesc] = useState("");
    const [jobExperience, setJobExperience] = useState("");

    const [loading, setLoading] = useState(false)

    const [jsonResponse, setJsonResponse] = useState([])
    const router = useRouter()

    const { user } = useUser()

    const onSubmit = async (e) => {
        setLoading(true)

        e.preventDefault();

        const InputPrompt = `Job Position: ${jobPosition}, Job Description: ${jobDesc}, Job Experience: ${jobExperience}. Based on this, provide 10 interview questions along with answers in JSON format.`;

        try {
            const result = await chatSession.sendMessage(InputPrompt);
            const textResponse = await result.response.text();
            const MockJsonResp = textResponse.replace('```json', '').replace('```', '');

            setJsonResponse(JSON.parse(MockJsonResp));


            const mockInterviewData = {
                jsonMockResp: MockJsonResp,
                jobPosition: jobPosition,
                jobDesc: jobDesc,
                jobExperience: jobExperience,
                createdBy: user.id,
            }

            const response = await fetch("/api/saveInterview", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(mockInterviewData),
            })

            const data = await response.json();
            console.log("Saved to MongoDB:", data);

            if (response.ok && data?.data?.mockId) {
                setOpenDialog(false);
                router.push(`/dashboard/interview/${data.data.mockId}`);
            } else {
                console.error("Error: mockId not found in response");
            }
            

        } catch (error) {
            console.error("Error fetching interview questions:", error);
        }


        setLoading(false)
    };

    return (
        <div>
            {/* Trigger to open the dialog */}
            <div
                className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
                onClick={() => setOpenDialog(true)}
            >
                <h2 className="text-lg">+ Add New</h2>
            </div>

            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        {/* Main heading */}
                        <DialogTitle className="font-bold text-2xl">
                            Tell us more about the job you are interviewing for
                        </DialogTitle>
                        {/* Description as plain text */}
                        <DialogDescription>
                            Add details about the job position, your experience, and your skills.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={onSubmit} >
                        <div className="mt-6">
                            <div className="mb-4">
                                <label className="block mb-1 font-medium">Job Role / Position</label>
                                <Input required placeholder="Ex. Full Stack Developer" onChange={(event) => setJobPosition(event.target.value)} />
                            </div>

                            <div className="mb-4">
                                <label className="block mb-1 font-medium">Years of Experience</label>
                                <Input required placeholder="Ex. 3 years"
                                    onChange={(e) => setJobExperience(e.target.value)} />
                            </div>

                            <div className="mb-4">
                                <label className="block mb-1 font-medium">
                                    Job Description / Tech Stack (in short)
                                </label>
                                <Textarea
                                    required
                                    placeholder="Ex. React, Angular, Node Js, MongoDB"
                                    onChange={(e) => setJobDesc(e.target.value)}
                                />
                            </div>

                            <div className="flex gap-5 justify-end">
                                <Button type="button" variant="ghost" onClick={() => setOpenDialog(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit"
                                    disabled={loading}
                                >
                                    {loading ?
                                        <>
                                            <LoaderCircle className="animate-spin" />Generating from AI
                                        </>
                                        : 'Start Interview'}</Button>
                            </div>
                        </div>
                    </form>
                    {/* Form content */}
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNewInterview
