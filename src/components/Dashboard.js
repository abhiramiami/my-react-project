import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./AboutUsStyles.css";

class AboutUs extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <div className="dashboard-title">INVIGILATOR DASHBOARD</div>
        <div>
          <Link to="/Examcreation">
            <button className="dashboard-button">EXAM CREATION</button>
          </Link>
        </div>
        <div>
          <Link to="/Evaluation">
            <button className="dashboard-button">EVALUATION</button>
          </Link>
        </div>
      </>
    );
  }
}

export default AboutUs;
