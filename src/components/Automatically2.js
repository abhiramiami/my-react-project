import { Link, useNavigate } from "react-router-dom";
import { Component, useState } from "react";
import { Icon } from "@iconify/react";

class AboutUs extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const { clicked } = this.state;

    return (
      <>
        <div
          style={{
            marginLeft: "-25rem",
            fontWeight: "bold",
            fontSize: "2rem",
            color: "darkblue",
            marginTop: "3rem",
          }}
        >
          EXAM CREATION
        </div>
        <div>
          <Link to="/Automatically3">
            <button
              style={{
                marginLeft: "-22rem",
                width: "20rem",
                height: "3rem",
                color: "white",
                backgroundColor: "darkblue",
                marginTop: "5rem",
              }}
            >
              SET NOTIFICATION
            </button>
          </Link>
        </div>
        <div>
          <Link to="/Autosection">
            <button
              style={{
                marginLeft: "-22rem",
                width: "20rem",
                height: "3rem",
                color: "white",
                marginLeft: "-22rem",
                backgroundColor: "darkblue",
                marginTop: "5rem",
              }}
            >
              ADD SECTION
            </button>
          </Link>
        </div>
        <div>
          <Link to="/Result">
            <button
              style={{
                marginLeft: "-22rem",
                width: "20rem",
                height: "3rem",
                color: "white",
                marginLeft: "-22rem",
                backgroundColor: "darkblue",
                marginTop: "5rem",
              }}
            >
              RESULT PUBLISHING
            </button>
          </Link>
        </div>
        <div>
          <button
            style={{
              marginLeft: "38rem",
              width: "6rem",
              height: "3rem",
              color: "white",
              backgroundColor: "darkblue",
              marginTop: "4rem",
              borderRadius: "2rem",
            }}
            onClick={this.handleClick}
          >
            SUBMIT
          </button>
          {clicked && (
            <div
              style={{
                position: "absolute",
                top: "40%",
                left: "45%",
                backgroundColor: "white",
                width: "20rem",
                height: "10rem",
                borderRadius: "0.5rem",
                textAlign: "center",
              }}
            >
              <div style={{ marginTop: "3rem", fontSize: "1.2rem" }}>
                SUCCESSFULLY CREATED YOUR EXAM!
              </div>
              <Link to="/Dashboard">
                <button
                  style={{
                    backgroundColor: "rgb(40, 100, 240)",
                    height: "2.5rem",
                    width: "8rem",
                    marginLeft: "3rem",
                    marginTop: "2rem",
                    color: "white",
                    borderRadius: ".3rem",
                    fontSize: ".7rem",
                  }}
                >
                  OK
                  {/* <Icon
                    icon="bi:arrow-right-circle-fill"
                    style={{ marginLeft: "0.5rem", fontSize: "1rem" }}
                  /> */}
                </button>
              </Link>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default AboutUs;
