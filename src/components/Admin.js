import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import "./Admin.css";

export default function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
    setError(""); // Reset the error message
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    // Submit the form or perform other actions
    alert("Login Successful!"); // Show alert popup

    // Redirect to another page
    navigate("/Dashboard3");
  };

  return (
    <div className="containera">
      <div className="titlea">ADMIN LOGIN</div>
      <form onSubmit={handleSubmit}>
        <div className="input-wrappera">
          <input
            className="input-fielda"
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={handleInputChange}
          />
        </div>
        <div className="input-wrappera">
          <input
            className="input-fielda"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleInputChange}
          />
        </div>
        {error && <div className="errora">{error}</div>}
        <div className="button-wrappera">
          <button className="login-buttona" type="submit">
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
}
