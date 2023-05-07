import React, { useState } from "react";
import Invigilatorregistration from "./invigilatorregistration.css";
import { Icon } from "@iconify/react";
function RegistrationForm() {
  const [firstName, setFirstName] = useState("abhirami");
  const [lastName, setLastName] = useState("");
  const [examName, setExamName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [uploadafile, setuploadafile] = useState("");
  console.log(gender);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      firstName,
      lastName,
      examName,
      password,
      confirmPassword,
      dob,
      email,
      gender,
    });
  };

  return (
    <div style={{ backgroundcolor: "blue" }}>
      {" "}
      <div className="green">
        <Icon className="icon" icon="mdi:account-student" />
        STUDENT <br />
        REGISTRATION
      </div>
      <form onSubmit={handleSubmit} className="blue">
        <div className="inputcontainer">
          <div className="yellow">First Name</div>
          <input
            className="white"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <br />
        <br />
        <br />

        <div>
          <label>
            <div className="red">Last Name:</div>
            <input
              className="pot"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </div>

        <br />
        <br />
        <br />

        <div>
          <label>
            <div className="not">
              Examination <br />
              Name:
            </div>

            <input
              className="dot"
              type="text"
              value={examName}
              onChange={(e) => setExamName(e.target.value)}
            />
          </label>
        </div>

        <br />
        <br />
        <div>
          <label>
            <div className="sot"> Password:</div>

            <input
              className="fot"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        <br />
        <br />
        <br />

        <div>
          <label>
            <div className="cot">
              Confirm <br />
              Password:
            </div>

            <input
              className="lot"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
        </div>

        <br />
        <br />

        <div>
          <label>
            <div className="mot">
              Date of
              <br /> Birth:
            </div>

            <input
              className="qot"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </label>
        </div>

        <br />
        <div>
          {" "}
          <label>
            <div className="eot"> Email:</div>

            <input
              className="tot"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <br />
        <br />
        <br />
        <div>
          <label>
            <div className="jot">Gender:</div>
            <div>
              <div className="zot">Male</div>
              <input
                className="vot"
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <br />
            <br />
            <div>
              <div className="rot">Female</div>
              <input
                className="xot"
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div>
              <div className="othea">Other</div>
              <input
                className="mon"
                type="radio"
                name="gender"
                value="other"
                checked={gender === "other"}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
          </label>

          <div className="hoe">
            {" "}
            <label>Upload a file</label>
            <input type="file"></input>
          </div>
        </div>
        <br />
        <br />
        <br />

        <button className="utt" type="submit">
          <p className="sub">Submit</p>
        </button>
        <br />
        <br />
      </form>
    </div>
  );
}

export default RegistrationForm;
