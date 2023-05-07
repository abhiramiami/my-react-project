import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import RouterWrapper from "./Router";

// import profile from "./images/user.svg"
// import email from "./images./email-lock.svg"
// import phoneno from './images./baseline-send-to-mobile.svg'
// import password from './images./lock-person-sharp.svg'
// import confirm from './images./password-check.svg'

export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <RouterWrapper></RouterWrapper>
      </div>
    </>
  );
}
