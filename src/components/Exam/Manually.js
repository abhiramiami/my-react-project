import "../../App.css";
import { Icon } from "@iconify/react";

import { Link } from "react-router-dom";

function exam2() {
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
          SELECT TOPIC
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
          SELECT SUBTOPIC
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
              10
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              20
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              30
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              40
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              50
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              60
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              70
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              80
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              90
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              100
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              150
            </option>
          </select>
        </div>
      </div>

      {/* FOURTH */}

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
          SET DURATION
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
            type="time"
            placeholder=""
          ></input>
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
          CHOOSE PASSMARK
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
              10
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              20
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              30
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              40
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              50
            </option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              60
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              70
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              80
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              90
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              100
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              150
            </option>
          </select>
        </div>
      </div>

      {/*  */}

      {/*  */}
      <div>
        <Link to="/cssExam/Manually2">
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
export default exam2;
