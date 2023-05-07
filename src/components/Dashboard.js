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
        <div className="stdr">INVIGILATOR DASHBOARD</div>
        <div className="stf">
          <Link to="/Examcreation">
            <button className="bOT">EXAM CREATION</button>
          </Link>
        </div>
        <div className="stf">
          <button className="bOT">EVALUATION</button>
        </div>
      </>
    );
  }
}

export default AboutUs;
