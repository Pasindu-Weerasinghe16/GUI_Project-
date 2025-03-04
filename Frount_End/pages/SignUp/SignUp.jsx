import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";

function SignUp({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // onLogin();
    if (password != confirmPassword) {
      alert("password dont match");
      return;
    }
    axios.post("http://localhost:3000/register", { "username": fullName, "email": email, "password": password }).then(res => {
      if (res.status == 200) {
        alert("SignUp successful ");
      } else {
        alert("SignUp failed");
      }
    });

  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");

  return (
    <div className="signup-page">
      <div className="signup-form-container">
        <div className="top-color-bar"></div>
        <h2 className="signup-form-title">Sign Up</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" className="signup-input" required value={fullName} onChange={(e) => { setFullName(e.currentTarget.value) }} />
          <input type="email" placeholder="Email" className="signup-input" required value={email} onChange={(e) => { setEmail(e.currentTarget.value) }} />
          <input type="password" placeholder="Password" className="signup-input" required value={password} onChange={(e) => { setPassword(e.currentTarget.value) }} />
          <input type="password" placeholder="Confirm Password" className="signup-input" required value={confirmPassword} onChange={(e) => { setConfirmPassword(e.currentTarget.value) }} />
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p className="signup-footer">
          Already have an account?{" "}
          <a href="/SignIn" >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
