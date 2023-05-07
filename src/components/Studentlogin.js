import { Link, useNavigate } from "react-router-dom";
import { Component } from "react";
import { Icon } from "@iconify/react";

import Swal from "sweetalert";

class Login extends Component {
  showAlert = () => {
    // Swal({
    //     title: "Success",
    //     text: "Successfully Login",
    //     icon: "success",
    //     confirmButtonText: "OK",
    //   });
    Swal({
      position: "top-end",
      icon: "success",
      title: "Successfully Login",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <div className="main" style={{ paddingTop: "3rem" }}>
          <div className="align-centerr">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
                backgroundColor: "rgb(236,237,243",
                padding: "1rem 4rem",
                borderRadius: "10%",
                marginTop: "3%",
                height: "34rem",
                width: "32rem",
                position: "fixed",
                marginLeft: "25rem",
              }}
            >
              <div className="">
                <div className="container-image">
                  <Icon
                    style={{ marginTop: "12%" }}
                    icon="mdi:user-supervisor"
                    width={160}
                  />
                </div>
              </div>

              <h1
                style={{
                  marginTop: "0rem",
                  color: "darkblue",
                }}
                className="font-linkk"
              >
                STUDENT
              </h1>
              <div className="input-container">
                <div className="input-box">
                  {/* <img src={email} alt='email' className='email'/> */}
                  <Icon icon="mdi:user" className="email" />
                  <input type="text" placeholder="Username" className="name" />
                </div>
                <div className="input-box">
                  {/* <img src={email} alt='email' className='email'/> */}

                  <Icon icon="mdi:password-remove" className="email" />

                  <input
                    style={{
                      backgroundColor: "",
                      marginTop: "1.5rem",
                    }}
                    type="password"
                    placeholder="Password"
                    className="name"
                  />
                </div>
                {/* <Link to="/forgot">
                  <p>Forgot Password?</p>
                </Link> */}
                <Link
                  style={{
                    color: "darkblue",
                    marginLeft: "3rem",
                  }}
                  to="/forgot"
                >
                  Forgot password?
                </Link>
                <div style={{ marginLeft: "3rem" }}>
                  <Link to="/Dashboard1">
                    <button
                      style={{
                        color: "darkblue",
                        fontweight: "bold",
                        backgroundColor: "lightgrey",
                        width: "7rem",
                        height: "1.75rem",
                        borderRadius: "2rem",
                      }}
                      onClick={this.showAlert}
                    >
                      LOGIN
                    </button>
                  </Link>
                </div>
                <p style={{}}>
                  Don't have an account yet?{" "}
                  <Link style={{ color: "darkblue" }} to="/Studentreg">
                    REGISTER
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
