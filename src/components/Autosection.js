// import "../App.css";
import { Icon } from "@iconify/react";

import { Link } from "react-router-dom";
import { useState } from "react";

function Create() {
  const [no_of_section, set_section] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [formErrors, setFormErrors] = useState([]); // State variable for popup visibility
  const maparray = new Array(+no_of_section);

  const handleChange = (e) => {
    set_section(e.target.value);
    setFormErrors([]);
  };
  const validateForm = () => {
    let errors = [];
    for (let i = 0; i < no_of_section; i++) {
      const sectionErrors = {};

      // Perform validation for each section
      // Example: check if a section type is selected
      if (!maparray[i].type) {
        sectionErrors.type = "Please select a section type";
      }

      // Add section errors to the errors array
      errors.push(sectionErrors);
    }

    // Update the formErrors state with the validation errors
    setFormErrors(errors);

    // Return true if there are no errors, false otherwise
    return errors.every(
      (sectionErrors) => Object.keys(sectionErrors).length === 0
    );
  };

  const handleNextClick = () => {
    setShowPopup(true); // Show the popup when the button is clicked
  };

  console.log(maparray);

  return (
    <div>
      <div
        style={{
          height: "5.5rem",
          width: "96rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          marginLeft: "-31rem",
          position: "absolute",
        }}
      >
        <div>
          <div
            style={{ fontSize: "3rem", color: "darkblue", marginLeft: "3rem" }}
          >
            CHOOSING SECTION
          </div>
          <div
            style={{
              backgroundColor: "rgb(236,237,243",
              height: "6.5rem",
              width: "auto",
              marginTop: "2rem",
            }}
          >
            <h1
              style={{
                fontSize: "1rem",
                marginLeft: "3rem",
                paddingTop: "1rem",
                color: "darkblue",
                position: "relative",
              }}
            >
              NO OF SECTIONS
            </h1>
            <div className="option1">
              <select
                onChange={handleChange}
                className="custom-select"
                style={{
                  width: "15rem",
                  height: "2.5rem",
                  marginLeft: "3rem",
                  color: "darkblue",
                  fontSize: "1.1rem",
                  position: "absolute",
                }}
              >
                <option
                  style={{ color: "darkblue", fontWeight: "1.5rem" }}
                  value={1}
                >
                  1
                </option>
                <option
                  style={{ color: "darkblue", fontWeight: "1.5rem" }}
                  value={2}
                >
                  2
                </option>
                <option
                  style={{ color: "darkblue", fontWeight: "1.5rem" }}
                  value={3}
                >
                  3
                </option>
                <option
                  style={{ color: "darkblue", fontWeight: "1.5rem" }}
                  value={4}
                >
                  4
                </option>
              </select>
            </div>
          </div>
        </div>

        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {no_of_section &&
            maparray.fill("").map((item, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "2rem",
                    width: "100%",
                    height: "8rem",
                    justifyContent: "space-evenly",
                    backgroundColor: "rgb(236,237,243",
                    color: "darkblue",
                    fontWeight: "bold",
                  }}
                >
                  <div>
                    <p style={{ marginTop: "1.5rem" }}>Section {index + 1}</p>
                  </div>
                  <div>
                    <h1
                      style={{
                        fontSize: "1rem",
                        marginLeft: "1rem",
                        paddingTop: "1rem",
                        color: "darkblue",
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
                      }}
                    >
                      <option></option>
                      <option
                        style={{ color: "darkblue", fontWeight: "1.5rem" }}
                        value=""
                      >
                        FILL IN THE BLANKS
                      </option>
                      <option
                        style={{ color: "darkblue", fontWeight: "1.5rem" }}
                        value=""
                      >
                        MULTIPLE CHOICE
                      </option>
                      <option
                        style={{ color: "darkblue", fontWeight: "1.5rem" }}
                        value=""
                      >
                        MATCH THE FOLLOWING
                      </option>
                      <option
                        style={{ color: "darkblue", fontWeight: "1.5rem" }}
                        value=""
                      >
                        DESCRIPTIVE
                      </option>
                    </select>
                  </div>
                  <div style={{}}>
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
                      </option>
                      <option
                        style={{ color: "darkblue", fontWeight: "1.5rem" }}
                        value=""
                      >
                        3
                      </option>
                      <option
                        style={{ color: "darkblue", fontWeight: "1.5rem" }}
                        value=""
                      >
                        4
                      </option>
                      <option
                        style={{ color: "darkblue", fontWeight: "1.5rem" }}
                        value=""
                      >
                        5
                      </option>
                      <option
                        style={{ color: "darkblue", fontWeight: "1.5rem" }}
                        value=""
                      >
                        6
                      </option>
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
                  <div style={{}}>
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
                      </option>
                      <option
                        style={{ color: "darkblue", fontWeight: "1.5rem" }}
                        value=""
                      >
                        3
                      </option>
                      <option
                        style={{ color: "darkblue", fontWeight: "1.5rem" }}
                        value=""
                      >
                        4
                      </option>
                      <option
                        style={{ color: "darkblue", fontWeight: "1.5rem" }}
                        value=""
                      >
                        5
                      </option>
                      <option
                        style={{ color: "darkblue", fontWeight: "1.5rem" }}
                        value=""
                      >
                        6
                      </option>
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
              );
            })}
        </div>
        <Link to="/Automatically2">
          <button
            style={{
              width: "10rem",
              height: "2.5rem",
              marginTop: "23rem",
              marginLeft: "80rem",
              color: "darkblue",
              fontWeight: "bold",
              fontSize: "1rem",
              borderRadius: "0rem",
              backgroundColor: "dark green",
            }}
            onClick={() => alert("SUCCESSFULLY CREATED ")}
          >
            NEXT
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Create;
