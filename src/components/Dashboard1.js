import { Link, useNavigate } from "react-router-dom";
import { Component } from "react";
import { Icon } from "@iconify/react";
import "../App.css";
import "./Dashboard.css";

class AboutUs extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <div className="stdr">STUDENT DASHBOARD</div>
        <div className="stf">
          <button className="bOT">ACTIVE EXAMS</button>
        </div>
        <div className="stf">
          <button className="bOT">RESULTS</button>
        </div>
      </>
    );
  }
}

export default AboutUs;
