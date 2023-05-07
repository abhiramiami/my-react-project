import "../App.css";
import { Icon } from "@iconify/react";

import { Link } from "react-router-dom";

function exam() {
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
        Choosing Section
      </div>
      <div
        style={{
          fontWeight: "bold",
          color: "darkblue",
          marginLeft: "8rem",
          marginTop: ".5rem",
        }}
      >
        SECTION A
      </div>
      <div
        style={{
          backgroundColor: "rgb(236,237,243",
          height: "30.5rem",
          width: "auto",
          marginTop: "1rem",
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
          NO OF QUESTIONS
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
              value=""
            >
              1
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              2
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              3
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              4
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              5
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              6
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              7
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              8
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              9
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              10
            </option>{" "}
          </select>
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
            QUESTIONS TO ATTEND
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
              paddingTop: "-10rem",
              color: "darkblue",
              position: "relative",
            }}
          >
            ENTER DESCRIPTION
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
      </div>

      <Link to="/Autosection2">
        <button
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
          NEXT
        </button>
      </Link>
    </div>
  );
}
export default exam;
