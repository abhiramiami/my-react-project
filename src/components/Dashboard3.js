import { Link } from "react-router-dom";
import { Component } from "react";
import { Icon } from "@iconify/react";
import "./Dashboard3.css";

class AboutUs extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <div className="dashboard-title3">ADMIN DASHBOARD</div>
        <div className="button-container3">
          <Link to="/Admin1">
            <button className="dashboard-button3">STUDENT</button>
          </Link>
          <Link to="/Admin2">
            <button className="dashboard-button3">INVIGILATOR</button>
          </Link>
        </div>
      </>
    );
  }
}

export default AboutUs;
