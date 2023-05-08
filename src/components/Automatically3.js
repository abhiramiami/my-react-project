import "../App.css";
import { Icon } from "@iconify/react";

import { Link } from "react-router-dom";

function exam1() {
  return (
    <div>
      {/*first */}
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
            marginLeft: "12rem",
            position: "absolute",
            color: "darkblue",
            marginTop: "-3rem",
          }}
          type="date"
          placeholder=""
        ></input>
      </div>
      {/* second */}

      <div
        style={{
          backgroundColor: "rgb(236,237,243",
          height: "6.5rem",
          width: "auto",
          marginTop: "1rem",
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
            ></option>
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
            ></option>{" "}
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

      {/* THIRD */}

      <div
        style={{
          backgroundColor: "rgb(236,237,243",
          height: "6.5rem",
          width: "auto",
          marginTop: "1rem",
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
              marginTop: "1rem",
              marginLeft: "12rem",
            }}
            type="radio"
            placeholder="enter first name"
          />
          <p
            style={{
              color: "darkblue",
              marginTop: "1rem",

              fontSize: ".9rem",
            }}
          >
            BEFORE 5 DAYS
          </p>
        </div>
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
              fontSize: ".9rem",
              color: "darkblue",
              fontWeight: "bold",
              marginTop: "-2rem",
              marginLeft: "22.5rem",
            }}
            type="radio"
            placeholder="enter first name"
          />
          <p
            style={{
              color: "darkblue",
              marginTop: "-2rem",
              fontSize: ".9rem",
            }}
          >
            BEFORE 2DAYS
          </p>
        </div>
      </div>

      {/*  */}

      <div
        style={{
          backgroundColor: "rgb(236,237,243",
          height: "6.5rem",
          width: "auto",
          marginTop: "1rem",
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
              0
            </option>
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
          </select>
        </div>
      </div>

      {/*  */}
      <div>
        <Link to="/cssExam/Automatically2">
          <button
            style={{
              width: "6rem",
              height: "2.5rem",
              marginTop: "4rem",
              marginBottom: "2rem",
              marginLeft: "70rem",
              color: "darkblue",
              fontWeight: "bold",
              fontSize: "1rem",
              borderRadius: ".5rem",
            }}
          >
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
}
export default exam1;
