import { Link, useNavigate } from "react-router-dom";
import { Component } from "react";
import { Icon } from "@iconify/react";
import "../App.css";

class AboutUs extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <div className="main1">
          <div className="align-center">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginLeft: "100rem",
                marginBottom: "10rem",
                position: " fixed",
              }}
            >
              <div
                style={{
                  width: "30rem",
                  backgroundColor: "rgb(236,237,243",
                  padding: "5rem 3rem",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "10%",
                }}
              >
                <h1
                  style={{ marginTop: "0rem", marginLeft: "5rem" }}
                  className="font-link"
                >
                  ABOUT US
                </h1>
                <div className="input-container">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Neque egestas congue quisque egestas diam in arcu.
                    Sed arcu non odio euismod lacinia. In hac habitasse platea
                    dictumst. Sollicitudin aliquam ultrices sagittis orci.
                  </p>
                </div>

                <Link to="/">
                  <Icon
                    style={{
                      height: "2rem",
                      width: "2rem",
                      marginLeft: "10rem",
                    }}
                    icon="mdi:arrow-back-circle"
                  />{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutUs;
