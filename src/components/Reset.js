import React, { Component } from "react";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
export class Reset extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <>
        <div>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
                backgroundColor: "rgb(236,237,243)",
                borderRadius: "10%",
                padding: "4rem 4rem",
                marginTop: "16%",
                marginLeft: "30rem",
                width: "28rem",
                height: "18rem",
              }}
            >
              <div>
                <div>
                  {/* <img src={email} alt='email' className='email'/> */}
                  <Icon icon="mdi:password-remove" className="email" />
                  <input
                    style={{ borderRadius: "1rem" }}
                    type="password"
                    placeholder="New Password"
                    className="name"
                    onChange={(e) => (this.password = e.target.value)}
                  />
                </div>
                <div style={{ marginTop: "2rem" }}>
                  {/* <img src={email} alt='email' className='email'/> */}
                  <Icon icon="mdi:password-check" className="email" />
                  <input
                    style={{ borderRadius: "1rem" }}
                    type="password"
                    placeholder="Confirm Password"
                    className="name"
                    onChange={(e) => (this.password_confirm = e.target.value)}
                  />
                </div>

                <div style={{ marginTop: "1rem", marginLeft: "4rem" }}>
                  <button style={{ color: "darkblue" }}>RESET PASSWORD</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Reset;
