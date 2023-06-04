import { Link, useNavigate } from "react-router-dom";
import { Component } from "react";
import { Icon } from "@iconify/react";
import Swal from "sweetalert2";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Studentlogin.css";

class Login extends Component {
  constructor() {
    super();
    this.initialValues = {
      Username: "",
      Password: "",
    };
    this.validationSchema = Yup.object().shape({
      Username: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
      Password: Yup.string()
        .min(3, "Password must be 3 characters at minimum")
        .required("Password is required"),
    });
  }

  showAlert = (navigate) => {
    Swal.fire({
      icon: "success",
      title: "Successfully Logged In",
      showConfirmButton: true,
      confirmButtonText: "OK",
    }).then(() => {
      navigate("/Dashboard"); // Replace "/Dashboard1" with the desired URL
    });
  };

  render() {
    return (
      <>
        <Formik
          className="main4"
          style={{ paddingTop: "3rem" }}
          initialValues={this.initialValues}
          onSubmit={(values) => {
            console.log(values);
            this.showAlert(this.props.navigate);
          }}
          validationSchema={this.validationSchema}
        >
          {(props) => (
            <div className="container4">
              <Form className="card4" onSubmit={props.handleSubmit}>
                <div className="container-image4">
                  <Icon
                    style={{ marginTop: "12%" }}
                    icon="mdi:user-supervisor"
                    width={160}
                  />
                </div>
                <h1 style={{ fontSize: "2rem" }} className="font-linkk4">
                  INVIGILATOR LOGIN
                </h1>
                <div className="input-container4">
                  <div className="input-box4">
                    <Icon icon="mdi:user" className="email4" />
                    <input
                      type="text"
                      placeholder="Username"
                      className="name"
                      name="Username"
                      onChange={props.handleChange}
                      value={props.values.Username}
                      onBlur={props.handleBlur}
                    />
                  </div>
                  <ErrorMessage
                    component="div"
                    name="Username"
                    className="error-message4"
                  />
                  <div className="input-box4">
                    <Icon icon="mdi:password-remove" className="email4" />
                    <input
                      type="password"
                      placeholder="Password"
                      className="name"
                      name="Password"
                      onChange={props.handleChange}
                      value={props.values.Password}
                      onBlur={props.handleBlur}
                    />
                  </div>
                  <ErrorMessage
                    component="div"
                    name="Password"
                    className="error-message4"
                  />
                  <Link className="forgot-password4" to="/forgot">
                    Forgot password?
                  </Link>
                  <div className="button-container4">
                    <button
                      type="submit"
                      className="login-button4"
                      onClick={() => {
                        if (props.isValid) {
                          props.handleSubmit();
                        } else {
                          Swal.fire({
                            icon: "error",
                            title: "All fields are required",
                          });
                        }
                      }}
                    >
                      LOGIN
                    </button>
                  </div>
                  <p style={{ marginTop: "-3rem", marginLeft: "5rem" }}>
                    Don't have an account yet?{" "}
                    <Link style={{ color: "darkblue" }} to="/Studentreg">
                      Sign up
                    </Link>
                  </p>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </>
    );
  }
}

export default function LoginWrapper() {
  const navigate = useNavigate();

  return <Login navigate={navigate} />;
}

