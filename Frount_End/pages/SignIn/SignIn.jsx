import React, { useState } from "react";
import "./SignIn.css";
import axios from "axios";

import { useApp } from "../../src/AppContext";

function SignIn({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn, IsLoggedIn } = useApp();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", { email, password });
      if (response.status === 200) {
        setIsLoggedIn(true);
        alert("Login successful");

        // onLogin();
      }
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <div className="top-color-bar"></div>
        <h2 className="login-form-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" className="login-input" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" className="login-input" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="login-button">Sign in</button>
        </form>
        <p className="login-footer">
          Don't have an account? <a href="/SignUp">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;