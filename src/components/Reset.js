import React, { Component } from "react";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Reset.css";
export class Reset extends Component {
  constructor() {
    super();
    this.initialvalues = {
      NewPassword: "",
      ConfirmPassword: "",
    };
    this.validationschema = Yup.object().shape({
      NewPassword: Yup.string()

        //Minimum Character Validation
        .min(3, "Password must be 3 characters at minimum")
        .required("NewPassword is required"),

      ConfirmPassword: Yup.string().oneOf(
        [Yup.ref("Password"), null],
        "Passwords must match"
      ),
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <>
        <Formik
          initialValues={this.initialvalues}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={this.validationschema}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit} className="align-centerr6">
              {console.log(props.errors)}
              <div className="main6">
                <div className="align-centerr6">
                  <div
                    // style={{
                    //   display: "flex",
                    //   flexDirection: "column",
                    //   alignItems: "center",
                    //   gap: "2rem",

                    //   borderRadius: "10%",
                    //   padding: "4rem 5rem",
                    //   marginTop: "16%",
                    //   backgroundColor: "rgb(236,237,243)",
                    //   height: "22rem",
                    //   width: "26rem",
                    //   marginLeft: "32rem",
                    // }}
                  >
                    <div className="input-container6">
                      <ErrorMessage
                        component="div"
                        name="NewPassword"
                        style={{ color: "red" }}
                      />
                      <div className="input-box6">
                        {/* <img src={email} alt='email' className='email'/> */}
                        <Icon icon="mdi:password-remove" className="email6" />
                        <input
                          style={{ borderRadius: "2rem" }}
                          type="password"
                          placeholder="NewPassword"
                          className="name6"
                          // onChange={e => this.password = e.target.value}
                          name="NewPassword"
                          onChange={props.handleChange}
                          value={props.values.NewPassword}
                          onBlur={props.handleBlur}
                        />
                      </div>
                      <ErrorMessage
                        component="div"
                        name="ConfirmPassword"
                        style={{ color: "red" }}
                      />
                      <div className="input-box6">
                        {/* <img src={email} alt='email' className='email6'/> */}
                        <Icon icon="mdi:password-check" className="email6" />
                        <input
                          style={{ borderRadius: "2rem", marginTop: "2rem" }}
                          type="password"
                          placeholder="Confirm Password"
                          className="name6"
                          // onChange={e => this.password_confirm = e.target.value}
                          name="ConfirmPassword"
                          onChange={props.handleChange}
                          value={props.values.ConfirmPassword}
                          onBlur={props.handleBlur}
                        />
                      </div>

                      <div className="">
                        <button
                          style={{
                            borderRadius: "2rem",
                            marginTop: "2rem",
                            marginLeft: "-1rem",
                            height: "3rem",
                            width: "10rem",
                            backgroundColor: "darkblue",
                            color: "white",
                          }}
                        >
                          RESET PASSWORD
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}

export default Reset;
