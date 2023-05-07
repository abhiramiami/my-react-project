import "../App.css";
import { Icon } from "@iconify/react";
import "./Forgot.css";
import { Link } from "react-router-dom";
function Invigilator() {
  return (
    <div className="main">
      <div className="align-center">
        <div
          className="align-center"
          style={{
            backgroundColor: "rgb(236,237,243)",
            borderRadius: "10%",
            marginTop: "-11rem",
            paddingTop: "2rem",
            marginLeft: "90rem",
            height: "30rem",
            position: "fixed",
          }}
        >
          {" "}
          <div className="">
            <div className="ICON">
              <Icon icon="mdi:user-supervisor" width={500} height={200} />
              {/*<img src={profile} alt='profile' className='profile'/>*/}
            </div>
          </div>
          <div style={{ marginTop: "-2em" }}>
            <h1>Forgot Password</h1>
            <div></div>
            <div style={{ marginLeft: "1rem" }} className="usern name">
              <input
                STYLE={{}}
                type="text"
                placeholder="email"
                className="Email"
              />
            </div>
            <div>
              <Link to="/resend">
                <button
                  style={{ marginTop: "2rem", marginLeft: "8rem" }}
                  className="login-button"
                >
                  submit
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invigilator;
