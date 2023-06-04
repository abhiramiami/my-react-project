import { Link, useNavigate } from "react-router-dom";
import { Component } from "react";
import { Icon } from "@iconify/react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

class ContactUs extends Component {
  constructor() {
    super();
    this.initialvalues = {
      Username: "",
      Email: "",
      Message: "",
    };
    this.validationschema = Yup.object().shape({
      Username: Yup.string()

        // Format Validation

        // Required Field Validation
        .required("Username is required"),
      Email: Yup.string()
        .email("Invalid email address format")
        .required("email field is required"),

      //Minimum Character Validation
      Message: Yup.string().required("message field is required"),
    });
  }
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div className="main">
        <Formik
          className=""
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
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
                marginTop: "3%",
                // backgroundColor: "white",

                marginTop: "4%",
                width: "100%",
              }}
            >
              <div
                style={{
                  width: "auto",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "rgb(236,237,243)",
                  padding: "4rem 5rem",
                  borderRadius: "10%",
                  marginTop: "5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "5%",
                    color: "darkblue",
                  }}
                >
                  <h1 className="font-linkk">CONTACT US</h1>
                </div>
                <div className="input-container">
                  <div className="input-boxes">
                    {/* <img src={email} alt='email' className='email'/> */}
                    <Icon icon="mdi:user" className="email" />
                    <input
                      style={{ borderRadius: "3rem", marginLeft: "1rem" }}
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
                    style={{ color: "red" }}
                  />

                  <div className="input-boxes">
                    {/* <img src={email} alt='email' className='email'/> */}
                    <Icon
                      icon="material-symbols:mark-email-unread-outline"
                      className="email"
                    />
                    <input
                      style={{
                        borderRadius: "3rem",
                        marginTop: "2rem",
                        marginLeft: "1rem",
                      }}
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

                  <div className="input-boxes">
                    {/* <img src={phoneno} alt='phoneno' className='phoneno'/> */}
                    {/* <Icon icon="ic:baseline-send-to-mobile" /> */}
                    <textarea
                      style={{
                        resize: "none",
                        borderRadius: "3rem",
                        marginTop: "2rem",
                        marginLeft: ".5rem",
                        width: "15rem",
                        alignItems: "center",
                      }}
                      type="text"
                      rows={5}
                      placeholder="Message..."
                      className="name"
                      name="Message"
                      onChange={props.handleChange}
                      value={props.values.Message}
                      onBlur={props.handleBlur}
                    />
                  </div>
                  <ErrorMessage
                    component="div"
                    name="Message"
                    style={{ color: "red" }}
                  />
                  <div
                    style={{
                      marginLeft: "5rem",
                      marginTop: "2rem",
                    }}
                  >
                    <button
                      style={{
                        width: "6rem",
                        height: "3rem",
                        borderRadius: "2rem",
                        color: "darkblue",
                        backgroundColor: "lightblue",
                      }}
                      type="submit"
                      className="submit signup-button"
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>

                {/* <div className="submit-button">
                <button className="submit">SUBMIT</button>
              </div> */}
                {/* <Link to="/">
                <Icon icon="streamline:interface-arrows-turn-backward-arrow-bend-curve-change-direction-return-left-back-backward" />
                </Link> */}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default ContactUs;
