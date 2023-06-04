// import "../App.css";
import { Icon } from "@iconify/react";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
function Xam1() {
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
    examdate: "",
    setnotification: "",
    setnotificationtime: "",
    notificationno: "",
    //   type: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      examdate: Yup.string().required("Required"),
      setnotification: Yup.string().required("Required"),
      setnotificationtime: Yup.string().required("Required"),
      notificationno: Yup.string().required("Required"),
      // type: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log("a", values);
      navigate(`/${type}`);
    },
  });
  console.log(formik.errors);
  return (
    <form
      style={{ position: "fixed", marginTop: "5rem" }}
      onSubmit={formik.handleSubmit}
    >
      {/*first */}
      <div
        style={{
          backgroundColor: "rgb(236,237,243",
          height: "6.5rem",
          width: "100rem",
          marginTop: "-3rem",
          marginLeft: "-31rem",
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
          {" "}
          SET EXAM DATE
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
            marginLeft: "-19rem",
            position: "fixed",
            color: "darkblue",
            marginTop: "-0.5rem",
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
      </div>{" "}
      <div
        style={{
          backgroundColor: "rgb(236,237,243",
          height: "6.5rem",
          width: "100rem",
          marginTop: "5rem",
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
          SET NOTIFICATION VIA
        </h1>

        <div className="option1">
          <select
            onChange={formik.handleChange}
            value={formik.values.setnotification}
            name="setnotification"
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
              value="email"
            >
              EMAIL
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="meassage"
            >
              MESSAGE
            </option>{" "}
          </select>
          {formik.errors.setnotification ? (
            <div style={{ color: "red" }}>{formik.errors.setnotification}</div>
          ) : null}
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgb(236,237,243",
          height: "6.5rem",
          width: "auto",
          marginTop: "1rem",
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
          SET NOTIFICATION TIME
        </h1>
        <div className="option1">
          <select
            onChange={formik.handleChange}
            value={formik.values.setnotificationtime}
            name="setnotificationtime"
            className="custom-select"
            style={{
              width: "20rem",
              height: "2.5rem",
              marginLeft: "9rem",
              color: "darkblue",
              fontSize: "1.1rem",
              position: "absolute",
              // marginLeft: "12rem",
            }}
          >
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="before3days"
            >
              BEFORE 3 DAYS
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="beforeaweek"
            >
              BEFORE A WEEK
            </option>{" "}
          </select>
          {formik.errors.setnotificationtime ? (
            <div style={{ color: "red" }}>
              {formik.errors.setnotificationtime}
            </div>
          ) : null}
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgb(236,237,243",
          height: "6.5rem",
          width: "auto",
          marginTop: "1rem",
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
          SELECT NOTIFICATION NUMBER
        </h1>
        <div className="option1">
          <select
            onChange={formik.handleChange}
            value={formik.values.notificationno}
            name="notificationno"
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
              value="0"
            >
              0
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="1"
            >
              1
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="2"
            >
              2
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="3"
            >
              3
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="4"
            >
              4
            </option>{" "}
          </select>
          {formik.errors.notificationno ? (
            <div style={{ color: "red" }}>{formik.errors.notificationno}</div>
          ) : null}
        </div>
      </div>
      <div>
        <button
          style={{
            width: "6rem",
            height: "2.5rem",
            marginTop: "4rem",
            marginBottom: "2rem",
            marginLeft: "50rem",
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
export default Xam1;
