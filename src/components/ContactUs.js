import { Link, useNavigate } from "react-router-dom";
import { Component } from "react";
import { Icon } from "@iconify/react";
import "../App.css";

class ContactUs extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <div className="main">
          <div className="sub-main">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
                backgroundColor: "rgb(236,237,243)",
                marginTop: "5rem",
                height: "35rem",
                width: "32rem",
                marginLeft: "29rem",
                borderRadius: "4rem",
                position: "fixed",
              }}
            >
              <div className="imgs"></div>
              <div
                style={{
                  width: "auto",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h1
                  style={{ marginTop: "3rem", color: "darkblue" }}
                  className="font-link"
                >
                  CONTACT US
                </h1>
                <div
                  className="input-container"
                  style={{ marginTop: ".95rem" }}
                >
                  <div className="input-boxes">
                    {/* <img src={email} alt='email' className='email'/> */}
                    <Icon icon="mdi:user" className="email" />
                    <input
                      // style={{ marginTop: "1rem", paddingTop: "2rem" }}
                      type="text"
                      placeholder="Username"
                      className="name"
                    />
                  </div>
                  <div className="input-boxes">
                    {/* <img src={email} alt='email' className='email'/> */}
                    <Icon
                      icon="material-symbols:mark-email-unread-outline"
                      className="email"
                    />
                    <input
                      style={{
                        marginTop: "1rem",
                        // paddingTop: "2rem",
                        fontSize: "1rem",
                      }}
                      type="text"
                      placeholder="Email"
                      className="name"
                    />
                  </div>
                  <div style={{ marginTop: "1rem" }}>
                    {/* <img src={phoneno} alt='phoneno' className='phoneno'/> */}
                    <Icon icon="ic:baseline-send-to-mobile" className="email" />
                    <input
                      style={{ fontSize: "1rem" }}
                      type="text"
                      placeholder="Message..."
                      className="name"
                    />
                  </div>
                </div>

                <div style={{ height: "4rem", width: "5rem" }}>
                  <button
                    style={{
                      backgroundColor: "lightgray",
                      marginLeft: "5rem",
                      marginTop: "1.5rem",
                      color: "darkblue",
                      fontWeight: "bold",
                      borderRadius: "2rem",

                      height: "3rem",
                      width: "6rem",
                    }}
                    className="submit"
                  >
                    SUBMIT
                  </button>
                </div>
                <Link to="/">
                  <Icon
                    style={{ marginTop: "2rem", marginLeft: "7.5rem" }}
                    icon="streamline:interface-arrows-turn-backward-arrow-bend-curve-change-direction-return-left-back-backward"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ContactUs;
