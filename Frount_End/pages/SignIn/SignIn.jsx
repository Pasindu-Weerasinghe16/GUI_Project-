import React from "react";
import "./SignIn.css";

function SignIn({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign-In form submitted");
    onLogin();
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <div className="top-color-bar"></div>
        <h2 className="login-form-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" className="login-input" required />
          <input type="password" placeholder="Password" className="login-input" required />
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
