import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import "./Studentreg.css";

import { Icon } from "@iconify/react";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function Studentt() {
  const initial_values = {
    firstName: "",
    lastName: "",
    examName: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    email: "",
    phoneno: "",
  };

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    examName: Yup.string().required("exam name is required"),
    password: Yup.string()
      .required("password is required")
      .min(4, "Too Short!")
      .max(10, "Too Long!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("confirm password is required"),
    dateOfBirth: Yup.string().required("dateofBirth is required"),
    phoneno: Yup.string().required("phono is required"),
  });

  const formik = useFormik({
    initialValues: initial_values,
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(values);
      // Show alert popup
      window.alert("Form submitted successfully!");
      navigate("/Home");
    },
  });

  const [gender, setGender] = useState("");
  const [uploadafile, setuploadafile] = useState("");
  const [phoneno, setphoneno] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/success");
  };

  return (
    <div className="main" style={{}}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2rem",
          marginTop: "2.5rem",
          padding: "2rem",
        }}
      >
        <div
          style={{ color: "darkblue", fontSize: "2rem", fontWeight: "bold" }}
        >
          INVIGILATOR REGISTRATION
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                className="form-input"
                type="text"
                placeholder="Enter first name"
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.errors.firstName && formik.touched.firstName && (
                <div className="error">{formik.errors.firstName}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                className="form-input"
                type="text"
                placeholder="Enter last name"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.errors.lastName && formik.touched.lastName && (
                <div className="error">{formik.errors.lastName}</div>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-input"
                type="password"
                placeholder="Enter password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.errors.password && formik.touched.password && (
                <div className="error">{formik.errors.password}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                className="form-input"
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              {formik.errors.confirmPassword &&
                formik.touched.confirmPassword && (
                  <div className="error">{formik.errors.confirmPassword}</div>
                )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-input"
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              className="form-input"
              type="date"
              placeholder="Enter date of birth"
              name="dateOfBirth"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dateOfBirth}
            />
            {formik.errors.dateOfBirth && formik.touched.dateOfBirth && (
              <div className="error">{formik.errors.dateOfBirth}</div>
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="examName">Exam Name</label>
              <input
                className="form-input"
                type="text"
                placeholder="Enter exam name"
                name="examName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.examName}
              />
              {formik.errors.examName && formik.touched.examName && (
                <div className="error">{formik.errors.examName}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="phoneno">Phone Number</label>
              <input
                className="form-input"
                type="tel"
                placeholder="Enter phone number"
                name="phoneno"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneno}
              />
              {formik.errors.phoneno && formik.touched.phoneno && (
                <div className="error">{formik.errors.phoneno}</div>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <div className="gender-container">
              <div
                className={`gender-option ${
                  gender === "male" ? "selected" : ""
                }`}
                onClick={() => setGender("male")}
              >
                <Icon icon="fa-solid:circle" />
                <span>Male</span>
              </div>
              <div
                className={`gender-option ${
                  gender === "female" ? "selected" : ""
                }`}
                onClick={() => setGender("female")}
              >
                <Icon icon="fa-solid:circle" />
                <span>Female</span>
              </div>
              <div
                className={`gender-option ${
                  gender === "other" ? "selected" : ""
                }`}
                onClick={() => setGender("other")}
              >
                <Icon icon="fa-solid:circle" />
                <span>Other</span>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="uploadafile">Upload a File</label>
            <input
              className="form-input"
              type="file"
              name="uploadafile"
              accept=".jpg, .png, .pdf"
              onChange={(event) =>
                setuploadafile(event.currentTarget.files[0].name)
              }
            />
          </div>
<Link to="/Home"></Link>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Studentt;
