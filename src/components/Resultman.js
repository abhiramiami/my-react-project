// import "../App.css";
import { Icon } from "@iconify/react";
import "./Examcreation.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

function Exam() {
  const [type, setType] = useState("Manually2");
  const navigate = useNavigate();
  const handleChange = (e) => {
    console.log(e.target.value);
    setType(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log("button clicked");
    navigate(`/${type}`);
  };
  const initialValues = {
    immediate: "",
    datetime: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      immediate: Yup.string().required("Required"),
      datetime: Yup.string().required("Required"),

      // type: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log("a", values);
      navigate(`/${type}`);
    },
  });

  console.log(formik.errors);
  return (
    <form style={{ position: "fixed" }} onSubmit={formik.handleSubmit}>
      <div
        style={{
          marginTop: "5rem",
          color: "darkblue",
          fontFamily: "times new roman",
          fontWeight: "bold",
          fontSize: "3rem",
          marginLeft: "-21rem",
          position: "relative",
        }}
      >
        {" "}
        EXAM CREATION
      </div>
      {/* 2ND */}
      <div
        style={{
          backgroundColor: "rgb(236,237,243",
          height: "6.5rem",
          width: "100rem",
          marginTop: ".3rem",
          marginLeft: "-31rem",
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
          {" "}
          PUBLISHING MODE
        </h1>
        <div className="option1">
          <select
            onChange={formik.handleChange}
            value={formik.values.immediate}
            name="immediate"
            className="custom-select"
            style={{
              width: "20rem",
              height: "2.5rem",
              marginLeft: "9rem",
              color: "darkblue",
              fontSize: "1.1rem",
              position: "absolute",
            }}
          >
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="{immediate}"
            >
              IMMEDIATE
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="date"
            >
              DATE
            </option>{" "}
          </select>
          {formik.errors.immediate ? (
            <div style={{ color: "red" }}>{formik.errors.immediate}</div>
          ) : null}
        </div>

        <div
          style={{
            backgroundColor: "rgb(236,237,243",
            height: "6.5rem",
            width: "auto",
            marginTop: "6rem",
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
            {" "}
            SET EXAM DATE AND TIME
          </h1>
        </div>
        <div>
          <input
            style={{
              width: "20rem",
              height: "rem",
              backgroundColor: "transparent",
              border: "1px solid black",
              fontSize: "1rem",
              marginLeft: "12rem",
              position: "absolute",
              color: "darkblue",
              marginTop: "-3rem",
            }}
            type="date"
            placeholder=""
          ></input>
          {formik.errors.datetime ? (
            <div style={{ color: "red", marginLeft: "12rem" }}>
              {formik.errors.datetime}
            </div>
          ) : null}
        </div>
        <div>
          <input
            onChange={formik.handleChange}
            value={formik.values.datetime}
            name="datetime"
            style={{
              width: "20rem",
              height: "rem",
              backgroundColor: "transparent",
              border: "1px solid black",
              fontSize: "1rem",
              marginLeft: "35rem",
              position: "absolute",
              color: "darkblue",
              marginTop: "-3rem",
            }}
            type="time"
            placeholder="time"
          ></input>
          {formik.errors.datetime ? (
            <div style={{ color: "red", marginLeft: "42rem" }}>
              {formik.errors.datetime}
            </div>
          ) : null}
        </div>
      </div>{" "}
      <button
        style={{
          width: "6rem",
          height: "2.5rem",
          marginTop: "15rem",
          marginLeft: "70rem",
          color: "darkblue",
          fontWeight: "bold",
          fontSize: "1rem",
          borderRadius: "0rem",
          marginLeft: "39rem",
        }}
      >
        Submit
      </button>
    </form>
  );
}
export default Exam;
