import { Link, useNavigate } from "react-router-dom";
import { Component } from "react";
import { Icon } from "@iconify/react";

class AboutUs extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
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
          STUDENT DASHBOARD
        </div>
        <div>
          <Link to="/Activeexam">
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
              ACTIVE EXAMS
            </button>
          </Link>
        </div>
        <div>
          <Link to="/Result12">
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
              RESULT
            </button>
          </Link>
        </div>
      </>
    );
  }
}

export default AboutUs;
