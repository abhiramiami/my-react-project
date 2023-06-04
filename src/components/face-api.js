import React, { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";

const Exam = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isFaceDetected, setIsFaceDetected] = useState(false);

  useEffect(() => {
    // Load face detection models
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/path/to/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/path/to/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/path/to/models"),
    ])
      .then(startFaceDetection)
      .catch((error) => {
        console.error("Error loading face detection models:", error);
      });
  }, []);

  const startFaceDetection = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        })
        .catch((error) => {
          console.error("Error accessing video stream:", error);
        });
    }
  };

  const detectFaces = async () => {
    const videoElement = videoRef.current;
    const canvasElement = canvasRef.current;
    const displaySize = { width: videoElement.width, height: videoElement.height };
    faceapi.matchDimensions(canvasElement, displaySize);

    const detections = await faceapi.detectAllFaces(videoElement, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptors();

    // Clear canvas
    const context = canvasElement.getContext("2d");
    context.clearRect(0, 0, canvasElement.width, canvasElement.height);

    // Draw face detections on the canvas
    const resizedDetections = faceapi.resizeResults(detections, displaySize);
    faceapi.draw.drawDetections(canvasElement, resizedDetections);

    // Check if at least one face is detected
    setIsFaceDetected(resizedDetections.length > 0);

    // Schedule the next face detection
    requestAnimationFrame(detectFaces);
  };

  useEffect(() => {
    if (videoRef.current) {
      detectFaces();
    }
  }, [videoRef.current]);

  return (
    <div>
      <h1>Face Detection Example</h1>
      <video ref={videoRef} width={640} height={480} muted playsInline />
      {isFaceDetected && <p>Face detected!</p>}
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Exam;
