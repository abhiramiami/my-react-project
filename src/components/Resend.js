import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const resendOTP = () => {
    setMinutes(1);
    setSeconds(30);
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "rgb(236,237,243)",
          marginLeft: "35rem",
          height: "20rem",
          width: "22rem",
          marginTop: "12rem",
          borderRadius: "10%",
        }}
      >
        <div
          style={{
            padding: "4rem 2rem",
            marginLeft: "3rem",
            borderRadius: "10%",
            marginTop: "20%",
            color: "darkblue",
          }}
        >
          <h4>Verify OTP</h4>

          <input
            className="valid"
            placeholder="Enter OTP"
            value={otp}
            onChange={({ target }) => {
              setOtp(target.value);
            }}
          />

          <div>
            {seconds > 0 || minutes > 0 ? (
              <p>
                Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </p>
            ) : (
              <p>Didn't recieve code?</p>
            )}

            <button
              disabled={seconds > 0 || minutes > 0}
              style={{
                color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
              }}
              onClick={resendOTP}
            >
              Resend OTP
            </button>
          </div>
          <Link to="/Reset">
            <button
              style={{
                backgroundColor: "lightgray",
                height: "2.5rem",
                width: "5rem",
                borderRadius: "5rem",
              }}
            >
              SUBMIT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
