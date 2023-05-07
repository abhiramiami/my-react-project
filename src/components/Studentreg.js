import React, { useState } from "react";
import { Formik, useFormik } from "formik";

import { Icon } from "@iconify/react";
import { useNavigate } from "react-router";
import * as Yup from "yup";
function Studentt() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [examName, setExamName] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [dob, setDob] = useState("");
  // const [email, setEmail] = useState("");
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
    },
  });
  const [gender, setGender] = useState("");
  const [uploadafile, setuploadafile] = useState("");
  const [phoneno, setphoneno] = useState("");
  console.log("touched", formik.touched);
  // // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/success");
  };
  return (
    <div className="main" style={{}}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "80% 20%",

          marginTop: "8rem",
          padding: "2rem 2rem",
        }}
      >
        <form
          style={{
            // backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
          onSubmit={formik.handleSubmit}
        >
          {" "}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                gap: "2rem",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: ".5rem",
                  marginLeft: "-2.7rem",
                }}
              >
                <p style={{ color: "darkblue", fontWeight: "bold" }}>
                  {" "}
                  First Name
                </p>
                <input
                  style={{
                    width: "15rem",
                    height: "1.75rem",
                    backgroundColor: "transparent",
                    border: "1px solid black",
                    // fontSize: "1.5rem",

                    fontSize: "1rem",
                  }}
                  type="text"
                  placeholder="enter first name"
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {formik.errors.firstName && formik.touched.firstName ? (
                  <div style={{ color: "red", fontSize: "1rem" }}>
                    {formik.errors.firstName}
                  </div>
                ) : null}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: ".5rem",
                }}
              >
                <p style={{ color: "darkblue", fontWeight: "bold" }}>
                  Last Name
                </p>
                <input
                  style={{
                    width: "15rem",
                    height: "1.75rem",
                    backgroundColor: "transparent",
                    border: "1px solid black",
                    fontSize: "1rem",
                  }}
                  type="text"
                  placeholder="enter last name"
                  name="lastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
                {formik.errors.lastName && formik.touched.lastName ? (
                  <div style={{ color: "red" }}>{formik.errors.lastName}</div>
                ) : null}
              </div>
            </div>
            {/* <div>section2</div> */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                gap: "2rem",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: ".5rem",
                  marginLeft: "-2.7rem",
                }}
              >
                <p style={{ color: "darkblue", fontWeight: "bold" }}>
                  PASSWORD
                </p>
                <input
                  style={{
                    width: "15rem",
                    height: "1.75rem",
                    backgroundColor: "transparent",
                    border: "1px solid black",
                    fontSize: "1rem",
                    marginLeft: ".1rem",
                  }}
                  type="password"
                  placeholder="enter password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  values={formik.values.password}
                />
                {formik.errors.password && formik.touched.password ? (
                  <div style={{ color: "red" }}>{formik.errors.password}</div>
                ) : null}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: ".5rem",
                  fontSize: "1rem",
                }}
              >
                <p style={{ color: "darkblue", fontWeight: "bold" }}>
                  Confirm Password
                </p>
                <input
                  style={{
                    width: "15rem",
                    height: "1.75rem",
                    backgroundColor: "transparent",
                    border: "1px solid black",
                    fontSize: "1rem",
                  }}
                  type="password"
                  placeholder="enter confirm password"
                  name="confirmPassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  values={formik.values.confirmPassword}
                />{" "}
                {formik.errors.confirmPassword &&
                formik.touched.confirmPassword ? (
                  <div style={{ color: "red" }}>
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
              </div>
            </div>
            {/* <div>section3</div> */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "2rem",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: ".5rem",
                  marginLeft: "-2.5rem",

                  width: "100%",
                }}
              >
                <p style={{ color: "darkblue", fontWeight: "bold" }}>
                  Exam Name
                </p>
                <input
                  style={{
                    width: "25rem",
                    height: "1.75rem",
                    backgroundColor: "transparent",
                    border: "1px solid black",
                    fontSize: "1rem",
                  }}
                  type="text"
                  placeholder="enter examination name"
                  name="examName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  values={formik.values.examName}
                />
                {formik.errors.examName && formik.touched.examName ? (
                  <div style={{ color: "red" }}>{formik.errors.examName}</div>
                ) : null}
              </div>
            </div>
            {/* <div>section4</div> */}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "2rem",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: ".5rem",
                  marginLeft: "-2.5rem",
                  width: "100%",
                }}
              >
                <p style={{ color: "darkblue", fontWeight: "bold" }}>Email</p>
                <input
                  style={{
                    width: "25rem",
                    height: "1.75rem",
                    backgroundColor: "transparent",
                    border: "1px solid black",
                    fontSize: "1rem",
                  }}
                  type="text"
                  placeholder="enter your"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  values={formik.values.email}
                />
                {formik.errors.email && formik.touched.email ? (
                  <div style={{ color: "red" }}>{formik.errors.email}</div>
                ) : null}
              </div>
            </div>
            {/* <div>section4</div> */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "2rem",
                width: "100%",
                marginLeft: "-2.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: ".5rem",

                  width: "100%",
                }}
              >
                <p style={{ color: "darkblue", fontWeight: "bold" }}>
                  Date OF Birth
                </p>
                <input
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid black",
                    fontSize: "1rem",
                    width: "25rem",
                    height: "1.75rem",
                  }}
                  type="date"
                  placeholder="enter your dob"
                  name="dateOfBirth"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  values={formik.values.dateOfBirth}
                />
                {formik.errors.dateoOBirth && formik.touched.dateOfBirth ? (
                  <div style={{ color: "red" }}>
                    {formik.errors.dateOfBirth}
                  </div>
                ) : null}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "2rem",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: ".5rem",

                  width: "100%",
                  marginLeft: "-2.5rem",
                }}
              >
                <p style={{ color: "darkblue", fontWeight: "bold" }}>
                  Phone No
                </p>
                <input
                  style={{
                    width: "25rem",
                    height: "1.75rem",
                    backgroundColor: "transparent",
                    border: "1px solid black",
                    fontSize: "1rem",
                  }}
                  type="text"
                  placeholder="enter yourn phone no"
                  name="phoneno"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  values={formik.values.examName}
                />
                {formik.errors.firstName && formik.touched.firstName ? (
                  <div style={{ color: "red" }}>{formik.errors.firstName}</div>
                ) : null}
              </div>
            </div>
            {/* <div>secrtion5</div> */}
            <p
              style={{
                color: "darkblue",
                fontWeight: "bold",
                marginLeft: "-2.5rem",
              }}
            >
              Gender{" "}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "2rem",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: ".5rem",
                  alignItems: "center",
                }}
              >
                <input
                  style={{
                    width: "1rem",
                    height: "1rem",
                    backgroundColor: "transparent",
                    border: "0px solid black",
                    fontSize: "1.5rem",
                    color: "darkblue",
                    fontWeight: "bold",
                    marginLeft: "-2.5rem",
                  }}
                  type="radio"
                  placeholder="enter first name"
                />
                <p style={{ color: "darkblue", fontWeight: "bold" }}>Female</p>
              </div>
              {/* male gender */}

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: ".5rem",
                  alignItems: "center",
                }}
              >
                <input
                  style={{
                    width: "1rem",
                    height: "1rem",
                    backgroundColor: "transparent",
                    border: "1px solid black",
                    fontSize: "1.5rem",
                  }}
                  type="radio"
                  placeholder="enter first name"
                />
                <p style={{ color: "darkblue", fontWeight: "bold" }}>Male</p>
              </div>

              {/* gendr */}

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: ".5rem",
                  alignItems: "center",
                }}
              >
                <input
                  style={{
                    width: "1rem",
                    height: "1rem",
                    backgroundColor: "transparent",
                    border: "1px solid black",
                    fontSize: "1.5rem",
                  }}
                  type="radio"
                  placeholder="enter first name"
                />
                <p style={{ color: "darkblue", fontWeight: "bold" }}>Other</p>
              </div>
            </div>
            {/* <div>section6</div> */}

            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                gap: "3rem",
                alignItems: "center",
                justifyContent: "flex-start",
                marginLeft: "-2.5rem",
              }}
            >
              {" "}
              <label style={{ color: "darkblue", fontWeight: "bold" }}>
                Upload a File
              </label>
              <input
                style={{ marginLeft: "-1rem", marginTop: "1rem" }}
                className="fil"
                type="file"
              ></input>
            </div>
            {/* <div>section7</div> */}
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                gap: "3rem",
                marginLeft: "-5rem",
              }}
            >
              {" "}
            </div>
          </div>
          <div
            style={{
              width: "100%",

              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                padding: "1rem 2rem",
                borderRadius: "6rem",
                backgroundColor: "lightgray",
                color: "darkblue",
                fontWeight: "bold",
                marginTop: "-5rem",
              }}
              type="submit"
            >
              submit
            </button>
          </div>
        </form>

        <div
          style={{
            fontSize: "2rem",
            marginLeft: "-14rem",
            color: "darkblue",
            marginTop: "-4rem",
          }}
        >
          STUDENT REGISTRATION
          <Icon
            style={{
              color: "darkblue",
              fontWeight: "bold",
              width: "20rem",
              height: "8rem",
            }}
            icon="mdi:account-student"
          />
        </div>
      </div>
    </div>
  );
}

export default Studentt;
