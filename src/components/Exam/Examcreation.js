import { Icon } from "@iconify/react";
import "./Examcreation.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

function Exam() {
  const [type, setType] = useState("Automatically1");
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target.value);
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("button clicked");
    navigate(`/cssExam/${type}`);
  };

  const initialValues = {
    examname: "",
    subcategory: "",
    type: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      examname: Yup.string().required("Required"),
      subcategory: Yup.string().required("Required"),
      type: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      if (values.type === "Manually") {
        navigate("/manually"); // Change "/manually" to the desired path for manual question generation
      } else if (values.type === "Automatically1") {
        navigate("/Automatically1"); // Change "/automatically" to the desired path for automatic question generation
      }
    },
  });

  return (
    <form style={{ position: "fixed" }} onSubmit={formik.handleSubmit}>
      <div
        style={{
          marginTop: "3rem",
          color: "darkblue",
          fontFamily: "times new roman",
          fontWeight: "bold",
          fontSize: "2rem",
          marginLeft: "-30rem",
          position: "relative",
        }}
      >
        EXAM CREATION
      </div>
      <div
        style={{
          backgroundColor: "rgb(236,237,243)",
          height: "6.5rem",
          width: "100rem",
          marginTop: "2rem",
          position: "fixed",
          marginLeft: "-32rem",
        }}
      >
        <h1
          style={{
            fontSize: "1rem",
            marginLeft: "12rem",
            paddingTop: "1rem",
            color: "darkblue",
          }}
        >
          ADD EXAM NAME
        </h1>
        <div>
          <input
            style={{
              width: "20rem",
              height: "2rem",
              backgroundColor: "transparent",
              border: "1px solid black",
              fontSize: "1rem",
              marginLeft: "12rem",
              position: "absolute",
              color: "darkblue",
              boxShadow: "1px 3px 1px #9E9E9E",
            }}
            type="text"
            placeholder="Enter your examination name"
            name="examname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.examname}
          ></input>
          {formik.touched.examname && formik.errors.examname && (
            <div style={{ color: "red" }}>{formik.errors.examname}</div>
          )}
        </div>
      </div>

      {/* 2ND */}
      <div
        style={{
          backgroundColor: "rgb(236,237,243)",
          height: "6.5rem",
          width: "auto",
          marginLeft: "-32rem",
          height: "6.5rem",
          width: "100rem",
        }}
      >
        <h1
          style={{
            fontSize: "1rem",
            marginLeft: "12rem",
            paddingTop: "1rem",
            color: "darkblue",
            marginTop: "10rem",
          }}
        >
          ADD SUBJECT NAME
        </h1>
        <div className="option1">
          <select
            onChange={formik.handleChange}
            value={formik.values.subcategory}
            name="subcategory"
            className="custom-select"
            style={{
              width: "20rem",
              height: "2.5rem",
              marginLeft: "9rem",
              color: "darkblue",
              fontSize: "1.1rem",
              position: "absolute",
              boxShadow: "1px 3px 1px #9E9E9E",
            }}
          >
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            ></option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="computerscience"
            >
              COMPUTER SCIENCE
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="english"
            >
              ENGLISH
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="woodscience"
            >
              WOOD SCIENCE
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="history"
            >
              HISTORY
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="computerapplication"
            >
              COMPUTER APPLICATION
            </option>
          </select>
          {formik.touched.subcategory && formik.errors.subcategory && (
            <div style={{ color: "red" }}>{formik.errors.subcategory}</div>
          )}
        </div>
      </div>

      <div
        style={{
          backgroundColor: "rgb(236,237,243)",
          height: "6.5rem",
          width: "auto",
          marginTop: "1rem",
          marginLeft: "-32rem",
          height: "6.5rem",
          width: "100rem",
          position: "fixed",
        }}
      >
        <h1
          style={{
            fontSize: "1rem",
            marginLeft: "12rem",
            paddingTop: "1rem",
            color: "darkblue",
          }}
        >
          QUESTION GENERATING METHOD
        </h1>
        <div className="option1">
          <select
            value={formik.values.type}
            name="type"
            onChange={formik.handleChange}
            className="custom-select"
            style={{
              width: "20rem",
              height: "2.5rem",
              marginLeft: "9rem",
              color: "darkblue",
              fontSize: "1.1rem",
              position: "absolute",
              boxShadow: "1px 3px 1px #9E9E9E",
            }}
          >
            <option
              style={{ color: "darkblue", fontWeight: ".5rem" }}
              value="Automatically1"
            >
              AUTOMATICALLY
            </option>
            <option
              style={{ color: "darkblue", fontWeight: ".5rem" }}
              value="Manually"
            >
              MANUALLY
            </option>
          </select>
          {formik.touched.type && formik.errors.type && (
            <div style={{ color: "red" }}>{formik.errors.type}</div>
          )}
        </div>
      </div>

      <button
        type="submit"
        style={{
          width: "6rem",
          height: "2.5rem",
          marginTop: "14rem",
          marginLeft: "52rem",
          color: "darkblue",
          fontWeight: "bold",
          fontSize: "1rem",
          borderRadius: "0rem",
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default Exam;
