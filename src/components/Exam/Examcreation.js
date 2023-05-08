import "../../App.css";
import "./Examcreation.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  return (
    <div>
      <div
        style={{
          marginTop: "5rem",
          color: "darkblue",
          fontFamily: "times new roman",
          fontWeight: "bold",
          fontSize: "3rem",
          marginLeft: "4rem",
          position: "relative",
        }}
      >
        {" "}
        EXAM CREATION
      </div>
      <div
        style={{
          backgroundColor: "rgb(236,237,243",
          height: "6.5rem",
          width: "auto",
          marginTop: "2rem",
          position: "relative",
        }}
      >
        <h1
          style={{
            fontSize: "1rem",
            marginLeft: "12rem",
            paddingTop: "1rem",
            color: "darkblue",
            position: "relative",
          }}
        >
          ADD EXAM NAME
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
            }}
            type="text"
            placeholder="enter your examination name"
          ></input>
        </div>
      </div>

      {/* 2ND */}
      <div
        style={{
          backgroundColor: "rgb(236,237,243",
          height: "6.5rem",
          width: "auto",
          marginTop: ".3rem",
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
          ADD SUBJECT NAME
        </h1>
        <div className="option1">
          <select
            className="custom-select"
            style={{
              width: "20rem",
              height: "2.5rem",
              marginLeft: "12rem",
              color: "darkblue",
              fontSize: "1.1rem",
              position: "absolute",
            }}
          >
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value="{}"
            >
              {" "}
              COMPUTER SCIENCE
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              {" "}
              BIOLOGY SCIENCE
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              {" "}
              WOOD SCIENCE
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              {" "}
              HISTORY
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            ></option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            ></option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            ></option>
          </select>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgb(236,237,243",
          height: "6.5rem",
          width: "auto",
          marginTop: ".3rem",
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
          QUESTION GENERATING METHOD
        </h1>
        <div className="option1">
          <select
            onChange={handleChange}
            className="custom-select"
            style={{
              width: "20rem",
              height: "2.5rem",
              marginLeft: "12rem",
              color: "darkblue",
              fontSize: "1.1rem",
              position: "absolute",
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
            </option>{" "}
          </select>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        style={{
          width: "6rem",
          height: "2.5rem",
          marginTop: "5rem",
          marginLeft: "70rem",
          color: "darkblue",
          fontWeight: "bold",
          fontSize: "1rem",
          borderRadius: "0rem",
        }}
      >
        Submit
      </button>
    </div>
  );
}
export default Exam;
