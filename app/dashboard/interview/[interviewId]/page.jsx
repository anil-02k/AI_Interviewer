"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Webcam from "react-webcam";
import { WebcamIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Interview = () => {
  const params = useParams();
  const [interviewData, setInterviewData] = useState(null);
  const [webcam, setWebcam] = useState(false);

  useEffect(() => {
    if (params?.interviewId) {
       fetchInterviewDetails();
    }
  }, [params.interviewId]); // Add params.interviewId as a dependency

  const fetchInterviewDetails = async () => {
    try {
      const response = await fetch(`/api/getInterview?interviewId=${params.interviewId}`);
      const data = await response.json();
      setInterviewData(data);
    } catch (e) {
      console.error("Error fetching interview details:", e);
    }
  };
  

  return (
    <div className="my-10 flex justify-center flex-col items-center">
      <h2 className="text-3xl font-bold">Let's Get Started</h2>
      <div>
        {webcam ? (
          <Webcam
            onUserMedia={() => setWebcam(true)}
            onUserMediaError={() => {
              setWebcam(false);
              alert("Unable to access webcam. Please check permissions.");
            }}
            mirrored={true}
            style={{
              height: 300,
              width: 300,
            }}
          />
        ) : (
          <>
            <WebcamIcon className="h-72 w-full my-7 p-20 bg-secondary rounded-lg border" />
            <Button onClick={() => setWebcam(true)}>
              Enable Webcam and Microphone
            </Button>
          </>
        )}
  
        {interviewData ? (
          <div>
            <h2>
              <strong>Job Role/Job Position: </strong>
              {interviewData.jobPosition}
            </h2>
          </div>
        ) : (
          <p>Loading interview details...</p>
        )}
      </div>
    </div>
  );
  
};

export default Interview;