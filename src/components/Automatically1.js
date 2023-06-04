// import "../App.css";
import { Icon } from "@iconify/react";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

function Exam1() {
  const [type, setType] = useState("Automatically2");
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
    selecttopic: "",
    selectsubtopic: "",
    selectweightage: "",
    examdate: "",
    startingtime: "",
    endingtime: "",
    choosepassmark: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      selecttopic: Yup.string().required("Required"),
      selectsubtopic: Yup.string().required("Required"),
      selectweightage: Yup.string().required("Required"),
      examdate: Yup.string().required("Required"),
      startingtime: Yup.string().required("Required"),
      endingtime: Yup.string().required("Required"),
      choosepassmark: Yup.string().required("Required"),

      // type: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log("a", values);
      navigate(`/${type}`);
    },
  });

  console.log(formik.errors);
  return (
    <form style={{ position: "relative" }} onSubmit={formik.handleSubmit}>
      {/*first */}
      <div
        style={{
          backgroundColor: "rgb(236,237,243",
          height: "6.5rem",
          width: "100rem",
          marginTop: "2rem",

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
          SELECT TOPIC
        </h1>
        <div className="option1">
          <select
            onChange={formik.handleChange}
            value={formik.values.selecttopic}
            name="selecttopic"
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
              value="ms"
            >
              ms
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="ns"
            >
              ns
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="ps"
            >
              ps
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="ls"
            >
              ls
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="os"
            >
              os
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            ></option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            ></option>
          </select>
          {formik.errors.selecttopic ? (
            <div style={{ color: "red" }}>{formik.errors.selecttopic}</div>
          ) : null}
        </div>
      </div>

      {/* second */}

      <div
        style={{
          backgroundColor: "rgb(236,237,243",
          height: "6.5rem",
          width: "100rem",
          marginTop: "1rem",
          position: "absolute",
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
          SELECT SUBTOPIC
        </h1>
        <div className="option1">
          <select
            onChange={formik.handleChange}
            value={formik.values.selectsubtopic}
            name="selectsubtopic"
            className="custom-select"
            style={{
              width: "20rem",
              height: "2.5rem",
              marginLeft: "9rem",
              color: "darkblue",
              fontSize: "1.1rem",
              // position: "absolute",
              boxShadow: "1px 3px 1px #9E9E9E",
            }}
          >
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            ></option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="AE"
            >
              AE
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="EE"
            >
              EE
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="PP"
            >
              PP
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="DD"
            >
              DD
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            ></option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            ></option>
          </select>
          {formik.errors.selectsubtopic ? (
            <div style={{ color: "red" }}>{formik.errors.selectsubtopic}</div>
          ) : null}
        </div>
      </div>

      {/* THIRD */}

      <div
        style={{
          backgroundColor: "rgb(236,237,243",
          height: "6.5rem",
          width: "auto",
          marginTop: "8.5rem",
          height: "6.5rem",
          width: "100rem",
          // position: "fixed",
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
          SET WEIGHTGE
        </h1>
        <div className="option1">
          <select
            onChange={formik.handleChange}
            value={formik.values.selectweightage}
            name="selectweightage"
            className="custom-select"
            style={{
              width: "20rem",
              height: "2.5rem",
              marginLeft: "9rem",
              color: "darkblue",
              fontSize: "1.1rem",
              // position: "absolute",
              boxShadow: "1px 3px 1px #9E9E9E",
            }}
          >
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="0"
            >
              0
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="10"
            >
              10
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="20"
            >
              20
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="30"
            >
              30
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="40"
            >
              40
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="50"
            >
              50
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="60"
            >
              60
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="70"
            >
              70
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="80"
            >
              80
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="90"
            >
              90
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="100"
            >
              100
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="150"
            >
              150
            </option>
          </select>
          {formik.errors.selectweightage ? (
            <div style={{ color: "red" }}>{formik.errors.selectweightage}</div>
          ) : null}
        </div>
      </div>

      {/* FOURTH */}

      <div
        style={{
          backgroundColor: "rgb(236,237,243",
          height: "6.5rem",
          width: "auto",
          marginTop: "1rem",
          position: "relative",
          height: "6.5rem",
          width: "100rem",
          // position: "fixed",
          marginLeft: "-31rem",
        }}
      >
        <h1
          style={{
            fontSize: "1rem",
            marginLeft: "12rem",
            paddingTop: "1rem",
            color: "darkblue",
            // position: "relative",
          }}
        >
          EXAM DATE
        </h1>
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
              boxShadow: "1px 3px 1px #9E9E9E",
            }}
            type="date"
            placeholder=""
            name="examdate"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.examdate}
          ></input>
          {formik.touched.examdate && formik.errors.examdate ? (
            <div style={{ color: "red" }}>{formik.errors.examdate}</div>
          ) : null}
        </div>
      </div>

      <div
        style={{
          backgroundColor: "rgb(236,237,243",
          height: "6.5rem",
          width: "auto",
          marginTop: "1rem",
          position: "relative",
          height: "6.5rem",
          width: "100rem",
          // position: "fixed",
          marginLeft: "-31rem",
        }}
      >
        <h1
          style={{
            fontSize: "1rem",
            marginLeft: "12rem",
            paddingTop: "1rem",
            color: "darkblue",
            // position: "relative",
            boxShadow: "1px 3px 1px #9E9E9E",
          }}
        >
          STARTING TIME
        </h1>
        <div>
          <input
            style={{
              width: "20rem",
              height: "rem",
              backgroundColor: "transparent",
              border: "1px solid black",
              fontSize: "1rem",
              marginLeft: "12rem",
              // position: "absolute",
              color: "darkblue",
            }}
            type="time"
            placeholder=""
            name="startingtime"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.startingtime}
          ></input>
          {formik.touched.startingtime && formik.errors.startingtime ? (
            <div style={{ color: "red" }}>{formik.errors.startingtime}</div>
          ) : null}
        </div>
      </div>

      <div
        style={{
          backgroundColor: "rgb(236,237,243",
          height: "6.5rem",
          width: "auto",
          marginTop: "1rem",
          position: "relative",
          height: "6.5rem",
          width: "100rem",
          // position: "fixed",
          marginLeft: "-31rem",
        }}
      >
        <h1
          style={{
            fontSize: "1rem",
            marginLeft: "12rem",
            paddingTop: "1rem",
            color: "darkblue",
            // position: "relative",
            boxShadow: "1px 3px 1px #9E9E9E",
          }}
        >
          ENDING TIME
        </h1>
        <div>
          <input
            style={{
              width: "20rem",
              height: "rem",
              backgroundColor: "transparent",
              border: "1px solid black",
              fontSize: "1rem",
              marginLeft: "12rem",
              // position: "absolute",
              color: "darkblue",
            }}
            type="time"
            placeholder=""
            name="endingtime"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endingtime}
          ></input>
          {formik.touched.endingtime && formik.errors.endingtime ? (
            <div style={{ color: "red" }}>{formik.errors.endingtime}</div>
          ) : null}
        </div>
      </div>

      {/*  */}
      <div
        style={{
          backgroundColor: "rgb(236,237,243",
          height: "6.5rem",
          width: "auto",
          marginTop: "1rem",
          height: "6.5rem",
          width: "100rem",
          // position: "fixed",
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
          CHOOSE PASSMARK
        </h1>
        <div className="option1">
          <select
            onChange={formik.handleChange}
            value={formik.values.selectweightage}
            name="choosepassmark"
            className="custom-select"
            style={{
              marginLeft: "9rem",
              color: "darkblue",
              fontSize: "1.1rem",
              // position: "absolute",
              boxShadow: "1px 3px 1px #9E9E9E",
              width: "20rem",
              height: "rem",
            }}
          >
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="0"
            >
              0
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="10"
            >
              10
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="20"
            >
              20
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="30"
            >
              30
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="40"
            >
              40
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="50"
            >
              50
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="60"
            >
              60
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="70"
            >
              70
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="80"
            >
              80
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="90"
            >
              90
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="100"
            >
              100
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="150"
            >
              150
            </option>
          </select>
          {formik.touched.choosepassmark && formik.errors.choosepassmark ? (
            <div style={{ color: "red" }}>{formik.errors.choosepassmark}</div>
          ) : null}
        </div>
      </div>

      {/*  */}

      {/*  */}
      <div>
        <button
          type="submit"
          style={{
            height: "3rem",
            width: "8rem",
            marginTop: "4rem",
            marginBottom: "2rem",
            marginLeft: "45rem",
            color: "darkblue",
            fontWeight: "bold",
            fontSize: "1rem",
            borderRadius: ".5rem",
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
export default Exam1;
