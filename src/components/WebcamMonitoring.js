import React, { Component } from "react";
import "./web.css";
import * as faceapi from "face-api.js";
import "./Examination.css";
class Exam extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.startVideo();
    this.loadModels();
  }

  startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((currentStream) => {
        this.videoRef.current.srcObject = currentStream;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  loadModels = () => {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
    ]).then(() => {
      this.faceMyDetect();
    });
  };

  faceMyDetect = () => {
    let intervalId;

    intervalId = setInterval(async () => {
      console.log("video", this.videoRef.current);
      const detections = await faceapi
        .detectAllFaces(
          this.videoRef.current,
          new faceapi.TinyFaceDetectorOptions()
        )
        .withFaceLandmarks();
      console.log(detections);
      const numFaces = detections.length;
      if (numFaces > 1) {
        clearInterval(intervalId);
        alert("More than one face detected!");
        return;
      }

      this.canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
        this.videoRef.current
      );
      faceapi.matchDimensions(this.canvasRef.current, {
        width: 940,
        height: 650,
      });

      const resizedDetections = faceapi.resizeResults(detections, {
        width: 940,
        height: 650,
      });

      resizedDetections.forEach((detection) => {
        faceapi.draw.drawDetections(this.canvasRef.current, detection);
        faceapi.draw.drawFaceLandmarks(this.canvasRef.current, detection);
      });
    }, 1000);
  };

  render() {
    return (
      <div className="myapp">
        <h1>Face Detection</h1>
        <div className="appvide">
          <video crossOrigin="anonymous" ref={this.videoRef} autoPlay></video>
        </div>
        <canvas
          ref={this.canvasRef}
          width="940"
          height="650"
          className="appcanvas"
        />
      </div>
    );
  }
}

export default Exam;
