import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as faceapi from "face-api.js";

const ActiveExams = () => {
  const activeExams = [
    { id: 1, title: "Exam 1", duration: "" },
    // { id: 2, title: 'Exam 2', duration: '1.5 hours' },
    // { id: 3, title: 'Exam 3', duration: '3 hours' },
  ];

  const videoRef = useRef(null);
  const [scanningResult, setScanningResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadModels = async () => {
      await Promise.all([
        faceapi.nets.ssdMobilenetv1.loadFromUri("/path/to/weights"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/path/to/weights"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/path/to/weights"),
      ]);
    };

    loadModels();
  }, []);

  const handleTakeExam = async () => {
    try {
      const video = videoRef.current;

      // Access the webcam stream
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      video.srcObject = stream;

      // Wait for the video to start playing
      await new Promise((resolve) => (video.onloadedmetadata = resolve));

      // Perform face scanning and verification
      const detection = await faceapi
        .detectSingleFace(video)
        .withFaceLandmarks()
        .withFaceDescriptor();
      if (detection) {
        // Face scanned successfully
        // Compare the scanned face with the uploaded file from student registration
        const match = await compareFaces(detection.descriptor); // Placeholder function for face comparison
        if (match) {
          // Faces match
          // Navigate to the examination page
          setScanningResult("Face scanned successfully");
          // Redirect to the examination page
          navigate("/Examination"); // Replace "/examination" with the actual path to your examination page
        } else {
          // Faces don't match
          // Display an error message or prevent navigation
          setScanningResult("Face doesn't match the registered face");
        }
      } else {
        // No face detected or face scanning failed
        // Display an error message or prevent navigation
        setScanningResult("No face detected or face scanning failed");
      }

      // Stop the video stream
      stream.getTracks().forEach((track) => track.stop());
    } catch (error) {
      console.error("Error loading face detection models:", error);
    }
  };

  const compareFaces = async (scannedFaceDescriptor) => {
    // Placeholder function for face comparison
    // You should implement your own logic to compare the scanned face descriptor
    // with the uploaded file from student registration
    // Return true if the faces match, false otherwise
    // Example:
    // const registeredFaceDescriptor = getUploadedFaceDescriptor(); // Implement this function to get the registered face descriptor
    // const distance = faceapi.euclideanDistance(scannedFaceDescriptor, registeredFaceDescriptor);
    // return distance < threshold; // Implement your own threshold for matching
    return true; // Placeholder: Always return true for demo purposes
  };

  return (
    <div
      style={{
        marginTop: "5rem",
        marginLeft: "-28rem",
        color: "darkblue",
      }}
    >
      <h2 style={{ fontWeight: "bold" }}>ACTIVE EXAMS</h2>

      {activeExams.length === 0 ? (
        <p
          style={{
            color: "red",
            marginLeft: "5rem",
            marginTop: "2rem",
            fontSize: "2rem",
          }}
        >
          No active exams at the moment.
          <br />
          <br />
          <Link to="/Dashboard1">
            <button
              style={{
                height: "2rem",
                color: "darkblue",
                fontWeight: "bold",
                boxShadow: "",
                width: "6rem",
                borderRadius: "3rem",
                marginLeft: "15rem",
                marginTop: ".5rem",
                boxShadow: "1px 3px 1px #9E9E9E",
              }}
            >
              ok
            </button>
          </Link>
        </p>
      ) : (
        activeExams.map((exam) => (
          <div key={exam.id}>
            <h3>{exam.title}</h3>
            <p>Duration: {exam.duration}</p>
            <button
              onClick={handleTakeExam}
              style={{
                width: "6rem",
                height: "2rem",
                marginTop: "3rem",
                marginLeft: "5rem",
                color: "red",
                fontWeight: "bold",
                boxShadow: "1px 3px 1px #9E9E9E",
              }}
            >
              TAKE EXAM
            </button>
          </div>
        ))
      )}

      {scanningResult && (
        <p
          style={{
            marginTop: "2rem",
            color:
              scanningResult === "Face scanned successfully" ? "green" : "red",
          }}
        >
          {scanningResult}
        </p>
      )}

      <video
        ref={videoRef}
        style={{ width: "320px", height: "240px" }}
        autoPlay
        playsInline
      ></video>
    </div>
  );
};

export default ActiveExams;
