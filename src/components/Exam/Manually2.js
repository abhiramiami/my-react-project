import { Link, useNavigate } from "react-router-dom";
import { Component } from "react";
import { Icon } from "@iconify/react";
import "../../App.css";
import "../Dashboard.css";

class AboutUs extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <div style={{ marginTop: "5rem" }} className="stdr">
          MANUALLY CREATION
        </div>
        <div className="stf">
          <Link to="/cssExam/Manually3">
            <button className="bOT">SET NOTIFICATION</button>
          </Link>
        </div>
        <div className="stf">
          <Link to="/cssExam/Manuallysec">
            <button className="bOT">ADD SECTION</button>
          </Link>
        </div>
        <div className="stf">
          <button className="bOT">RESULT PUBLISHING</button>
        </div>
        <div>
          <button
            style={{
              width: "6rem",
              height: "2.5rem",
              marginTop: "2rem",
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
        </div>
      </>
    );
  }
}

export default AboutUs;
