import { Link, useNavigate } from "react-router-dom";
import { Component } from "react";
import { Icon } from "@iconify/react";
import "./Aboutus.css"; // Create a separate CSS file for AboutUs component

class AboutUs extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <div className="main10">
          <div className="align-center10">
            <div className="container10">
              <div className="card10">
                <h1 className="font-link10">ABOUT US</h1>
                <div className="input-container10">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Neque egestas congue quisque egestas diam in arcu.
                    Sed arcu non odio euismod lacinia. In hac habitasse platea
                    dictumst. Sollicitudin aliquam ultrices sagittis orci.
                  </p>
                </div>
                <Link to="/">
                  <Icon className="back-icon" icon="mdi:arrow-back-circle" />
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
