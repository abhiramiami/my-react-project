import React, { useState } from "react";

import { Icon } from "@iconify/react";
import { useNavigate } from "react-router";
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
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/success");
  };
  return (
    <div>
      {" "}
      <div className="std">
        <Icon className="icon" icon="mdi:account-student" />
        STUDENT <br />
        REGISTRATION
      </div>
      <form onSubmit={handleSubmit} className="first">
        <div className="ab">
          <div className="fn">First Name</div>
          <input
            className="one"
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
            <div className="ln">Last Name:</div>
            <input
              className="two"
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
            <div className="en">
              Examination <br />
              Name:
            </div>

            <input
              className="three"
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
            <div className="pd"> Password:</div>

            <input
              className="four"
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
            <div className="cp">
              Confirm <br />
              Password:
            </div>

            <input
              className="five"
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
            <div className="dob">
              Date of
              <br /> Birth:
            </div>

            <input
              className="six"
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
            <div className="email"> Email:</div>

            <input
              className="seven"
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
            <div className="gender">Gender:</div>
            <div>
              <div className="male">Male</div>
              <input
                className="nine"
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
              <div className="female">Female</div>
              <input
                className="ten"
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div>
              <div className="other">Other</div>
              <input
                className="eleven"
                type="radio"
                name="gender"
                value="other"
                checked={gender === "other"}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
          </label>

          <div className="file">
            {" "}
            <label>Upload a file</label>
            <input type="file"></input>
          </div>
        </div>
        <br />
        <br />
        <br />

        <button onClick={handleClick} className="but" type="submit">
          <p className="sub">Submit</p>
        </button>
        <br />
        <br />
      </form>
    </div>
  );
}

export default RegistrationForm;
