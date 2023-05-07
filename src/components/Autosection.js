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
            marginLeft: "1rem",
            paddingTop: "1rem",
            color: "darkblue",
            position: "relative",
          }}
        >
          NO OF SECTIONS
        </h1>
        <div className="option1">
          <select
            className="custom-select"
            style={{
              width: "8rem",
              height: "2.5rem",
              marginLeft: "1rem",
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
            ></option>{" "}
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            ></option>
          </select>
        </div>

        <button
          style={{
            width: "6rem",
            height: "2.5rem",
            marginBottom: "25rem",
            marginLeft: "70rem",
            color: "darkblue",
            fontWeight: "bold",
            fontSize: "1rem",
            borderRadius: "0rem",
            backgroundColor: "lightgray",
          }}
        >
          NEXT
        </button>
      </div>
      <div
        style={{
          backgroundColor: "rgb(236,237,243",
          height: "6.5rem",
          width: "auto",
          marginTop: "1rem",
          position: "relative",
        }}
      >
        <h1
          style={{
            fontSize: "1rem",
            marginLeft: "1rem",
            paddingTop: "1rem",
            color: "darkblue",
            position: "relative",
          }}
        >
          SECTION 1
        </h1>
      </div>

      <div
        style={{
          marginTop: "-6.5rem",
          marginLeft: "12rem",
        }}
      >
        <h1
          style={{
            fontSize: "1rem",
            marginLeft: "1rem",
            paddingTop: "1rem",
            color: "darkblue",
            position: "relative",
          }}
        >
          SELECT SECTION
        </h1>
        <select
          className="custom-select"
          style={{
            width: "8rem",
            height: "2.5rem",
            marginLeft: "1rem",
            color: "darkblue",
            fontSize: ".7rem",
            position: "absolute",
          }}
        >
          <option style={{ color: "darkblue", fontWeight: "1.5rem" }} value="">
            FILL IN THE BLANKS
          </option>
          <option style={{ color: "darkblue", fontWeight: "1.5rem" }} value="">
            MULTIPLE CHOICE
          </option>{" "}
          <option style={{ color: "darkblue", fontWeight: "1.5rem" }} value="">
            MATCH THE FOLLOWING
          </option>{" "}
          <option style={{ color: "darkblue", fontWeight: "1.5rem" }} value="">
            DESCRIPTIVE
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
        <div
          style={{
            marginTop: "-2.9rem",
            marginLeft: "12rem",
          }}
        >
          <h1
            style={{
              fontSize: "1rem",
              marginLeft: "1rem",
              paddingTop: "1.2rem",
              color: "darkblue",
              position: "relative",
            }}
          >
            NUMBER OF QUESTIONS
          </h1>
          <select
            className="custom-select"
            style={{
              width: "8rem",
              height: "2.5rem",
              marginLeft: "1rem",
              color: "darkblue",
              fontSize: ".7rem",
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
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              9
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              10
            </option>
          </select>
          <div
            style={{
              marginTop: "-2.9rem",
              marginLeft: "12rem",
            }}
          >
            <h1
              style={{
                fontSize: "1rem",
                marginLeft: "2rem",
                paddingTop: "1.15rem",
                color: "darkblue",
                position: "relative",
              }}
            >
              SELECT WEIGHTAGE
            </h1>
            <select
              className="custom-select"
              style={{
                width: "8rem",
                height: "2.5rem",
                marginLeft: "2rem",
                color: "darkblue",
                fontSize: ".7rem",
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
              </option>
              <option
                style={{ color: "darkblue", fontWeight: "1.5rem" }}
                value=""
              >
                9
              </option>
              <option
                style={{ color: "darkblue", fontWeight: "1.5rem" }}
                value=""
              >
                10
              </option>
            </select>
          </div>
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
            marginLeft: "1rem",
            paddingTop: "1rem",
            color: "darkblue",
            position: "relative",
          }}
        >
          SECTION 2
        </h1>
      </div>

      <div
        style={{
          marginTop: "-6.5rem",
          marginLeft: "12rem",
        }}
      >
        <h1
          style={{
            fontSize: "1rem",
            marginLeft: "1rem",
            paddingTop: "1rem",
            color: "darkblue",
            position: "relative",
          }}
        >
          SELECT SECTION
        </h1>
        <select
          className="custom-select"
          style={{
            width: "8rem",
            height: "2.5rem",
            marginLeft: "1rem",
            color: "darkblue",
            fontSize: ".7rem",
            position: "absolute",
          }}
        >
          <option style={{ color: "darkblue", fontWeight: "1.5rem" }} value="">
            FILL IN THE BLANKS
          </option>
          <option style={{ color: "darkblue", fontWeight: "1.5rem" }} value="">
            MULTIPLE CHOICE
          </option>{" "}
          <option style={{ color: "darkblue", fontWeight: "1.5rem" }} value="">
            MATCH THE FOLLOWING
          </option>{" "}
          <option style={{ color: "darkblue", fontWeight: "1.5rem" }} value="">
            DESCRIPTIVE
          </option>{" "}
          <option style={{ color: "darkblue", fontWeight: "1.5rem" }} value="">
            ALL
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
        <div
          style={{
            marginTop: "-2.9rem",
            marginLeft: "12rem",
          }}
        >
          <h1
            style={{
              fontSize: "1rem",
              marginLeft: "1rem",
              paddingTop: "1.2rem",
              color: "darkblue",
              position: "relative",
            }}
          >
            NUMBER OF QUESTIONS
          </h1>
          <select
            className="custom-select"
            style={{
              width: "8rem",
              height: "2.5rem",
              marginLeft: "1rem",
              color: "darkblue",
              fontSize: ".7rem",
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
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              9
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              10
            </option>
          </select>
          <div
            style={{
              marginTop: "-2.9rem",
              marginLeft: "12rem",
            }}
          >
            <h1
              style={{
                fontSize: "1rem",
                marginLeft: "2rem",
                paddingTop: "1.15rem",
                color: "darkblue",
                position: "relative",
              }}
            >
              SELECT WEIGHTAGE
            </h1>
            <select
              className="custom-select"
              style={{
                width: "8rem",
                height: "2.5rem",
                marginLeft: "2rem",
                color: "darkblue",
                fontSize: ".7rem",
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
              </option>
              <option
                style={{ color: "darkblue", fontWeight: "1.5rem" }}
                value=""
              >
                9
              </option>
              <option
                style={{ color: "darkblue", fontWeight: "1.5rem" }}
                value=""
              >
                10
              </option>
            </select>
          </div>
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
            marginLeft: "1rem",
            paddingTop: "1rem",
            color: "darkblue",
            position: "relative",
          }}
        >
          SECTION 3
        </h1>
      </div>

      <div
        style={{
          marginTop: "-6.5rem",
          marginLeft: "12rem",
        }}
      >
        <h1
          style={{
            fontSize: "1rem",
            marginLeft: "1rem",
            paddingTop: "1rem",
            color: "darkblue",
            position: "relative",
          }}
        >
          SELECT SECTION
        </h1>
        <select
          className="custom-select"
          style={{
            width: "8rem",
            height: "2.5rem",
            marginLeft: "1rem",
            color: "darkblue",
            fontSize: ".7rem",
            position: "absolute",
          }}
        >
          <option style={{ color: "darkblue", fontWeight: "1.5rem" }} value="">
            FILL IN THE BLANKS
          </option>
          <option style={{ color: "darkblue", fontWeight: "1.5rem" }} value="">
            MULTIPLE CHOICE
          </option>{" "}
          <option style={{ color: "darkblue", fontWeight: "1.5rem" }} value="">
            MATCH THE FOLLOWING
          </option>{" "}
          <option style={{ color: "darkblue", fontWeight: "1.5rem" }} value="">
            DESCRIPTIVE
          </option>{" "}
          <option style={{ color: "darkblue", fontWeight: "1.5rem" }} value="">
            ALL
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
        <div
          style={{
            marginTop: "-2.9rem",
            marginLeft: "12rem",
          }}
        >
          <h1
            style={{
              fontSize: "1rem",
              marginLeft: "1rem",
              paddingTop: "1.2rem",
              color: "darkblue",
              position: "relative",
            }}
          >
            NUMBER OF QUESTIONS
          </h1>
          <select
            className="custom-select"
            style={{
              width: "8rem",
              height: "2.5rem",
              marginLeft: "1rem",
              color: "darkblue",
              fontSize: ".7rem",
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
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              9
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              10
            </option>
          </select>
          <div
            style={{
              marginTop: "-2.9rem",
              marginLeft: "12rem",
            }}
          >
            <h1
              style={{
                fontSize: "1rem",
                marginLeft: "2rem",
                paddingTop: "1.15rem",
                color: "darkblue",
                position: "relative",
              }}
            >
              SELECT WEIGHTAGE
            </h1>
            <select
              className="custom-select"
              style={{
                width: "8rem",
                height: "2.5rem",
                marginLeft: "2rem",
                color: "darkblue",
                fontSize: ".7rem",
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
              </option>
              <option
                style={{ color: "darkblue", fontWeight: "1.5rem" }}
                value=""
              >
                9
              </option>
              <option
                style={{ color: "darkblue", fontWeight: "1.5rem" }}
                value=""
              >
                10
              </option>
            </select>
          </div>
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
            marginLeft: "1rem",
            paddingTop: "1rem",
            color: "darkblue",
            position: "relative",
          }}
        >
          SECTION 4
        </h1>
      </div>

      <div
        style={{
          marginTop: "-6.5rem",
          marginLeft: "12rem",
        }}
      >
        <h1
          style={{
            fontSize: "1rem",
            marginLeft: "1rem",
            paddingTop: "1rem",
            color: "darkblue",
            position: "relative",
          }}
        >
          SELECT SECTION
        </h1>
        <select
          className="custom-select"
          style={{
            width: "8rem",
            height: "2.5rem",
            marginLeft: "1rem",
            color: "darkblue",
            fontSize: ".7rem",
            position: "absolute",
          }}
        >
          <option style={{ color: "darkblue", fontWeight: "1.5rem" }} value="">
            FILL IN THE BLANKS
          </option>
          <option style={{ color: "darkblue", fontWeight: "1.5rem" }} value="">
            MULTIPLE CHOICE
          </option>{" "}
          <option style={{ color: "darkblue", fontWeight: "1.5rem" }} value="">
            MATCH THE FOLLOWING
          </option>{" "}
          <option style={{ color: "darkblue", fontWeight: "1.5rem" }} value="">
            DESCRIPTIVE
          </option>{" "}
          <option style={{ color: "darkblue", fontWeight: "1.5rem" }} value="">
            ALL
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
        <div
          style={{
            marginTop: "-2.9rem",
            marginLeft: "12rem",
          }}
        >
          <h1
            style={{
              fontSize: "1rem",
              marginLeft: "1rem",
              paddingTop: "1.2rem",
              color: "darkblue",
              position: "relative",
            }}
          >
            NUMBER OF QUESTIONS
          </h1>
          <select
            className="custom-select"
            style={{
              width: "8rem",
              height: "2.5rem",
              marginLeft: "1rem",
              color: "darkblue",
              fontSize: ".7rem",
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
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              9
            </option>
            <option
              style={{ color: "darkblue", fontWeight: "1.5rem" }}
              value=""
            >
              10
            </option>
          </select>
          <div
            style={{
              marginTop: "-2.9rem",
              marginLeft: "12rem",
            }}
          >
            <h1
              style={{
                fontSize: "1rem",
                marginLeft: "2rem",
                paddingTop: "1.15rem",
                color: "darkblue",
                position: "relative",
              }}
            >
              SELECT WEIGHTAGE
            </h1>
            <select
              className="custom-select"
              style={{
                width: "8rem",
                height: "2.5rem",
                marginLeft: "2rem",
                color: "darkblue",
                fontSize: ".7rem",
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
              </option>
              <option
                style={{ color: "darkblue", fontWeight: "1.5rem" }}
                value=""
              >
                9
              </option>
              <option
                style={{ color: "darkblue", fontWeight: "1.5rem" }}
                value=""
              >
                10
              </option>
            </select>
          </div>
        </div>
      </div>
      <button
        style={{
          width: "10rem",
          height: "2.5rem",
          marginTop: "5rem",
          marginLeft: "80rem",

          color: "darkblue",
          fontWeight: "bold",
          fontSize: "1rem",
          borderRadius: "0rem",
          backgroundColor: "dark green",
        }}
      >
        NEXT
      </button>
    </div>
  );
}
export default exam;
