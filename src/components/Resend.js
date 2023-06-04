
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Resend.css";

function App() {
  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  const initialvalues = {
    OTP: "",
  };
  const validationSchema = Yup.object().shape({
    OTP: Yup.string().required("OTP IS REQUIRED"),
  });
  const formik = useFormik({
    initialValues: {
      OTP: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
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
    <div className="main5">
      <form className="align-centerr5" onSubmit={formik.handleSubmit}>
        <div
          className="card5"
          style={{
            height: "15rem",
            width: "22rem",
            padding: "2rem 2rem",
            borderRadius: "10%",
            marginTop: "20%",
            marginLeft: "35rem",
            justifySelf: "center",
            backgroundColor: "rgb(236,237,243)",
          }}
        >
          <h4 style={{ color: "darkblue", marginLeft: "5rem" }}>Verify OTP</h4>

          <input
            style={{ borderRadius: "2rem" }}
            className="valid"
            placeholder="Enter OTP"
            name="OTP"
            onChange={formik.handleChange}
            value={formik.values.OTP}
            onBlur={formik.handleBlur}
          />
          {formik.touched.OTP && formik.errors.OTP ? (
            <div style={{ color: "red" }}>{formik.errors.OTP}</div>
          ) : null}

          <div className="countdown-text">
            {seconds > 0 || minutes > 0 ? (
              <p style={{ color: "darkblue" }}>
                Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </p>
            ) : (
              <p style={{ color: "darkblue" }}>Didn't recieve code?</p>
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
                color: "darkblue",

                marginLeft: "5rem",
                height: "2rem",
              }}
              type="submit"
              className="submit-btn"
            >
              SUBMIT
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default App;

