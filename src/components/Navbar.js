import { Component } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false, registerShow: false };
    this.handleShow = this.handleShow.bind(this);
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
      registerShow: this.registerShow,
    });
  };

  handleShow() {
    this.setState({
      registerShow: !this.state.registerShow,
      clicked: this.state.clicked,
    });
  }

  render() {
    return (
      <>
        <nav>
          <a href="index.html">
            <svg
              id="logo-35"
              width="50"
              height="39"
              viewBox="0 0 50 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                class="ccompli1"
                fill="#007AFF"
              ></path>
              <path
                d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                class="ccustom"
                fill="#312ECB"
              ></path>
            </svg>
          </a>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li className="nav-btn">
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/AboutUs">ABOUT US</Link>
              </li>
              <li>
                <div className="login" onClick={this.handleClick}>
                  LOGIN
                </div>
                <div
                  className={`nav-main ${
                    this.state.clicked ? "show" : "hidden"
                  } `}
                  style={{ position: "relative" }}
                >
                  <div
                    className="nav-btn navcolr"
                    style={{
                      position: "absolute",
                      top: ".5rem",
                      left: "-2rem",
                      display: "flex",
                      gap: "rem",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div onClick={this.handleClick}>
                      <Link to={"/Invigilatorlogin"} style={{ color: "white" }}>
                        <p>INVIGILATOR </p>
                      </Link>
                    </div>
                    <div onClick={this.handleClick}>
                      <Link to={"studentlogin"} style={{ color: "white" }}>
                        <p>STUDENT</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/ContactUs">CONTACT US</Link>
              </li>
              <li>
                <div className="ouy" onClick={this.handleShow}>
                  REGISTER
                </div>
                <div
                  className={`nav-main ${
                    this.state.registerShow ? "show" : "hidden"
                  } `}
                  style={{ position: "relative" }}
                >
                  <div
                    className="nav-btn navcolr"
                    style={{
                      position: "absolute",
                      top: ".5rem",
                      left: "-2rem",
                      display: "flex",
                      gap: "rem",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div onClick={this.handleClick}>
                      <Link to={"/Invreg"} style={{ color: "white" }}>
                        <p>INVIGILATOR </p>
                      </Link>
                    </div>
                    <div onClick={this.handleClick}>
                      <Link to={"/studentreg"} style={{ color: "white" }}>
                        <p>STUDENT</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
