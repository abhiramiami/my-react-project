// import React from "react";
// import cv from "opencv";

// class Exam extends React.Component {
//   constructor(props) {
//     super(props);
//     this.videoRef = React.createRef();
//   }

//   componentDidMount() {
//     const video = this.videoRef.current;

//     // Access webcam stream
//     navigator.mediaDevices
//       .getUserMedia({ video: true })
//       .then((stream) => {
//         video.srcObject = stream;
//         video.play();

//         // Perform face detection using OpenCV
//         const cap = new cv.VideoCapture(video);
//         const classifier = new cv.CascadeClassifier();
//         classifier.load("haarcascade_frontalface_default.xml");

//         const processFrame = () => {
//           try {
//             const frame = new cv.Mat(video.height, video.width, cv.CV_8UC4);
//             cap.read(frame);

//             // Convert frame to grayscale
//             const gray = new cv.Mat();
//             cv.cvtColor(frame, gray, cv.COLOR_RGBA2GRAY);

//             // Detect faces in the frame
//             const faces = new cv.RectVector();
//             classifier.detectMultiScale(gray, faces);

//             // Draw bounding boxes around faces
//             for (let i = 0; i < faces.size(); i++) {
//               const faceRect = faces.get(i);
//               const { x, y, width, height } = faceRect;
//               cv.rectangle(
//                 frame,
//                 { x, y },
//                 { x: x + width, y: y + height },
//                 [255, 0, 0, 255]
//               );
//             }

//             // Display the processed frame on canvas or perform further actions

//             // Clean up
//             gray.delete();
//             faces.delete();
//             frame.delete();
//           } catch (error) {
//             console.error(error);
//           }

//           requestAnimationFrame(processFrame);
//         };

//         processFrame();
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

//   render() {
//     return (
//       <div>
//         <video ref={this.videoRef} width="640" height="480" />
//       </div>
//     );
//   }
// }

// export default Exam;
