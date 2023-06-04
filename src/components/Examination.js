import React, { useState } from "react";
import {
  loadSsdMobilenetv1Model,
  loadFaceLandmarkModel,
  loadFaceRecognitionModel,
  detectSingleFace,
  TinyFaceDetectorOptions,
} from "face-api.js";
import * as faceapi from "face-api.js";

// import"./web.css";
import "./Examination.css";
import Videoaudio from "./Examportal/videoaudio";
import { useSelector } from "react-redux";
import Face from "./Examportal/face";

function EXAMM() {
  let state = {
    currentPage: "start",
    timer: 2 * 60 + 15, // Start with 2 hours 15 minutes
    isStarted: false,
    isAudioEnabled: false,
    isVideoEnabled: false,
    stream: null,
    faceDetectionWarnings: 0,
    faceFrameDataURL: null, // Store the face frame data URL
    isScreenLocked: false, // Track whether the screen is locked
  };
  const [examstate, setexamstate] = useState(state);
  const { videoaudiostate } = useSelector((state) => state.EXAM);
  // this.startExam = this.startExam.bind(this);
  // this.handleNextPage = this.handleNextPage.bind(this);
  // this.enableAudio = this.enableAudio.bind(this);
  // this.enableVideo = this.enableVideo.bind(this);
  const videoRef = React.useRef(); // Create a ref for the video element
  // this.handleKeyPress = this.handleKeyPress.bind(this); // Bind the key press handler to the component

  function handleKeyPress(event) {
    const { currentPage } = this.state;

    // Check if the Enter, Left Arrow, or Right Arrow keys are pressed
    if (
      currentPage === "inProgress" &&
      (event.key === "Enter" ||
        event.key === "ArrowLeft" ||
        event.key === "ArrowRight")
    ) {
      // Allow specific keys and prevent the default behavior for all other keys
      event.preventDefault();
    }
  }

  function startExam() {
    setexamstate({
      ...examstate,
      currentPage: "instructions",
      isStarted: true,
    });
    // Start the timer
    // this.timerInterval = setInterval(() => {
    //   this.setState((prevState) => {
    //     if (prevState.timer <= 0) {
    //       // Exam time is up
    //       clearInterval(this.timerInterval);
    //       // Perform any necessary actions after the exam is completed
    //       // e.g., submit the exam or show a message
    //       return null;
    //     } else {
    //       return { timer: prevState.timer - 1 };
    //     }
    //   });
    // }, 1000); // Update timer every second

    // Request full-screen mode
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
  }

  function handleNextPage() {
    const { currentPage, isVideoEnabled, isAudioEnabled } = examstate;

    if (
      currentPage === "instructions" &&
      videoaudiostate.videoenabled &&
      videoaudiostate.videoenabled
    ) {
      setexamstate({ ...examstate, currentPage: "inProgress" });
      handleFaceDetection();
    } else {
      // Show a warning message that both video and audio are required
      console.log("Both video and audio are required");
    }
    // Add logic for navigating to other sections or ending the exam
  }

  function enableAudio() {
    // Prompt user for audio access permission
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(() => {
        this.setState({ isAudioEnabled: true });
      })
      .catch((error) => {
        console.error("Error enabling audio:", error);
      });
  }

  function enableVideo() {
    // Prompt user for video access permission
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        this.setState({ isVideoEnabled: true, stream });
        console.log("videostarted");
      })
      .catch((error) => {
        console.error("Error enabling video:", error);
      });
  }

  function handleFaceDetection() {
    // const videoElement = videoRef.current;
    
    // Load the face detection models

    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
    ])
      .then(() => {
        // Run the face detection loop
        const faceDetectionOptions = new faceapi.TinyFaceDetectorOptions({
          inputSize: 512,
          scoreThreshold: 0.5,
        });

        faceapi
          .detectAllFaces("", faceDetectionOptions)
          .withFaceLandmarks()
          .withFaceDescriptors()
          .then((results) => {
            console.log("result", results);
            if (results.length === 0) {
              // No faces detected
              // Show a warning message
              console.log("No faces detected");
              setexamstate((prevState) => ({
                faceDetectionWarnings: prevState.faceDetectionWarnings + 1,
                faceFrameDataURL: null, // Reset the face frame data URL
              }));
            } else {
              // Faces detected
              // Reset the warning count
              this.setState({ faceDetectionWarnings: 0 });

              // Draw face frames on a canvas
              const canvas = document.createElement("canvas");
              const context = canvas.getContext("2d");
              faceapi.matchDimensions(canvas, "");

              results.forEach(({ detection }) => {
                const resizedDetection = faceapi.resizeResults(
                  detection,
                  canvas
                );
                const faceFrame = resizedDetection.detection.box;
                context.strokeStyle = "red";
                context.lineWidth = 2;
                context.beginPath();
                context.rect(
                  faceFrame.x,
                  faceFrame.y,
                  faceFrame.width,
                  faceFrame.height
                );
                context.stroke();
              });

              // Convert the canvas to a data URL
              const dataURL = canvas.toDataURL("image/png");

              // Update the face frame data URL in the state
              setexamstate({ ...examstate, faceFrameDataURL: dataURL });
            }

            // Check if the exam should be terminated
            if (examstate.faceDetectionWarnings >= 2) {
              // Terminate the exam and return to the login page
              setexamstate({
                currentPage: "start",
                isStarted: false,
                isAudioEnabled: false,
                isVideoEnabled: false,
                stream: null,
                faceDetectionWarnings: 0,
                faceFrameDataURL: null, // Reset the face frame data URL
              });
              // Stop the face detection loop
              return;
            }

            // Delay for a certain interval before performing the next face detection
            setInterval(() => handleFaceDetection(), 1000);
          })
          .catch((error) => {
            console.error("Error detecting faces:", error);
          });
      })
      .catch((error) => {
        console.error("Error loading face detection models:", error);
      });
  }

  //  componentDidUpdate() {
  //   // Update the video element's srcObject when the stream is available
  //   const { isVideoEnabled, stream } = this.state;
  //   console.log("stream", stream);
  //   if (
  //     isVideoEnabled &&
  //     stream &&
  //     this.videoRef.current

  //   ) {
  //     console.log("if is working");
  //     this.videoRef.current.srcObject = stream;
  //   }
  // }
  //  componentWillUnmount() {
  //   // Exit full-screen mode when the component unmounts
  //   if (document.exitFullscreen) {
  //     document.exitFullscreen();
  //   } else if (document.mozCancelFullScreen) {
  //     document.mozCancelFullScreen();
  //   } else if (document.webkitExitFullscreen) {
  //     document.webkitExitFullscreen();
  //   } else if (document.msExitFullscreen) {
  //     document.msExitFullscreen();
  //   }
  // }

  function handleKeyPress(event) {
    const { isScreenLocked, currentPage } = this.state;

    // Check if the ESC key is pressed
    if (event.key === "Escape") {
      // Prevent the default ESC key behavior if the screen is locked or the exam is in progress
      if (isScreenLocked || currentPage === "inProgress") {
        event.preventDefault();
      }
    }
  }

  return (
    <>
      {examstate.isStarted && examstate.currentPage === "instructions" && (
        <div>
          <nav>{/* Include your navigation bar here */}</nav>
          <ExamInstructions />
          <button className="bt1" onClick={handleNextPage}>
            Next
          </button>
        </div>
      )}

      {examstate.currentPage === "inProgress" && (
        <div>
          <nav>{/* Include your navigation bar here */}</nav>
          <h1 className="ep">Exam in progress</h1>
          <div className="examContainer">
            <div className="examContent">
              <p className="er">
                Remaining time:{" "}
                {`${Math.floor(examstate.timer / 60)}:${examstate.timer % 60}`}
              </p>
              {/* Render the sections and questions */}
              {/* ... */}
            </div>
            {videoaudiostate.videoenabled && (
            //  <div className="videoContainer">
            //    <video className="video" autoPlay playsInline ref={videoRef} />
            //      {examstate.faceFrameDataURL && (
            //        <img
            //          className="faceFrame"
            //        src={examstate.faceFrameDataURL}
            //          alt="Face frame"
            //        />
            //      )}
            //    </div>
            <Face> </Face>
            )}
          </div>
        </div>
      )}
{examstate.currentPage=="start"&& <Videoaudio functionClick={startExam}></Videoaudio>}
     
    </>
  );
}
// end of video component

class ExamInstructions extends React.Component {
  render() {
    return (
      <div>
        <h1 className="EI">Exam Instructions</h1>
        <p className="a">You must use a functioning webcam and microphone.</p>
        <p className="a">
          During the entire duration of the test, you must keep your video and
          audio turned on and maintain a stable internet connection.
        </p>
        <p className="a">
          Before you begin, ensure that you are in a quiet and well-lit room
          where you will not be disturbed.
        </p>
        <p className="a">Do not use any external aids or references.</p>
        <p className="a">Good luck!</p>
      </div>
    );
  }
}

export default EXAMM;
