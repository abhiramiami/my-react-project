import React, { Component } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
export class Forgot extends Component {
  constructor() {
    super();
    this.initialvalues = {
      Email: "",
    };
    this.validationschema = Yup.object().shape({
      Email: Yup.string()
        .email("Invalid email address format")
        .required("email field is required"),
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <>
        <div className="main">
          <Formik
            className="align-centerr"
            initialValues={this.initialvalues}
            validationSchema={this.validationschema}
          >
            {(props) => (
              <Form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2rem",
                  marginTop: "15%",
                  // backgroundColor:"white",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "2rem",
                    borderRadius: "10%",
                    padding: "4rem 4rem",
                    backgroundColor: "rgb(236,237,243)",
                  }}
                >
                  {/* <div className="imgs">
                    <div className="container-image">
                      <Icon icon="mdi:user-supervisor" width={500} />
                    </div>
                  </div> */}

                  <h1
                    style={{ marginTop: "0rem", color: "darkblue" }}
                    className="font-linkk"
                  >
                    FORGOT PASSWORD
                  </h1>
                  <div className="input-container">
                    <div className="input-box">
                      {/* <img src={email} alt='email' className='email'/> */}
                      <Icon
                        icon="material-symbols:mark-email-unread-outline"
                        className="email"
                      />
                      <input
                        style={{ borderRadius: "2rem" }}
                        type="text"
                        placeholder="Email"
                        className="name"
                        name="Email"
                        onChange={props.handleChange}
                        value={props.values.Email}
                        onBlur={props.handleBlur}
                      />
                    </div>
                    <ErrorMessage
                      component="div"
                      name="Email"
                      style={{ color: "red" }}
                    />

                    <div>
                      <Link to="/Resend">
                      <button
                        style={{
                          marginTop: "2rem",
                          marginLeft: "3.5rem",
                          backgroundColor: "darkblue",
                          height: "2rem",
                          width: "6rem",
                          borderRadius: "2rem",
                          color: "white",
                        }}
                        type="submit"
                        className="send signup-button"
                      >
                        SEND
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </>
    );
  }
}
export default Forgot;
