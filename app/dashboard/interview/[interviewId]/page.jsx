"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Webcam from "react-webcam";
import { LightbulbIcon, WebcamIcon, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const Interview = () => {
  const params = useParams();
  const [interviewData, setInterviewData] = useState(null);
  const [webcam, setWebcam] = useState(false);
  const [interviewStarted, setInterviewStarted] = useState(false);

  useEffect(() => {
    if (params?.interviewId) {
      fetchInterviewDetails();
    }
  }, [params.interviewId]);

  const fetchInterviewDetails = async () => {
    try {
      const response = await fetch(`/api/getInterview?interviewId=${params.interviewId}`);
      const data = await response.json();
      setInterviewData(data);
    } catch (e) {
      console.error("Error fetching interview details:", e);
    }
  };

  const startInterview = () => {
    setInterviewStarted(true);
    // Add your interview start logic here
  };

  // Custom Card components
  const Card = ({ children, className }) => (
    <div className={`rounded-lg border bg-background p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );

  const CardHeader = ({ children }) => (
    <div className="flex items-center gap-2 mb-4">
      {children}
    </div>
  );

  const CardTitle = ({ children }) => (
    <h3 className="text-lg font-semibold">{children}</h3>
  );

  const CardContent = ({ children, className }) => (
    <div className={`space-y-4 ${className}`}>
      {children}
    </div>
  );

  return (
    <div className="my-10 mx-4 lg:mx-8">
      <h2 className="text-3xl font-bold text-center mb-8">Let's Get Started with Your Mock Interview</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Interview Details Card */}
          <Card>
            <CardHeader>
              <Briefcase className="w-6 h-6 text-primary" />
              <CardTitle>Interview Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {interviewData ? (
                <>
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-muted-foreground">Position</h3>
                      <p className="font-medium">{interviewData.jobPosition}</p>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-muted-foreground">Experience</h3>
                      <p className="font-medium">{interviewData.jobExperience} years</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Description & Tech Stack</h3>
                    <p className="whitespace-pre-line text-justify">{interviewData.jobDesc}</p>
                  </div>
                </>
              ) : (
                <div className="flex justify-center py-4">
                  <p>Loading interview details...</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Information Card */}
          <Card className="bg-blue-50 border-blue-100">
            <CardHeader>
              <LightbulbIcon className="w-6 h-6 text-yellow-600" />
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-3 pl-5 text-muted-foreground">
                <li>Enable camera/microphone to start AI-powered mock interview</li>
                <li>10 common interview questions with real-time analysis</li>
                <li>Immediate feedback on your answers</li>
                <li>Practice in a realistic interview environment</li>
                <li className="font-medium text-blue-800">Note: We never record your video/audio - only answer analysis</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Webcam Section */}
        <div className="flex flex-col items-center">
          <Card className="w-full h-full">
            <CardContent className="p-6">
              {webcam ? (
                <div className="space-y-6">
                  <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden border">
                    <Webcam
                      mirrored={true}
                      className="h-full w-full object-cover"
                      onUserMediaError={() => {
                        setWebcam(false);
                        alert("Unable to access webcam. Please check permissions.");
                      }}
                    />
                  </div>
                  <div className="text-center space-y-4">
                    <p className="text-sm text-green-600 font-medium">
                      Webcam enabled - You're ready to start!
                    </p>
                    {!interviewStarted && (
                      <Button
                        onClick={startInterview}
                        size="lg"
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg"
                      >
                        Start Interview Now
                      </Button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] space-y-6">
                  <div className="bg-gray-100 p-8 rounded-full">
                    <WebcamIcon className="w-16 h-16 text-gray-400" />
                  </div>
                  <Button
                    onClick={() => setWebcam(true)}
                    size="lg"
                    className="gap-2 py-5 px-8"
                  >
                    <WebcamIcon className="w-5 h-5" />
                    Enable Webcam & Microphone
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">
                    Camera access required for interview analysis
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Interview;