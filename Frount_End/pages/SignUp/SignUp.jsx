import React from "react";
import "./SignUp.css";

function SignUp({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign-Up form submitted");
    onLogin();
  };

  return (
    <div className="signup-page">
      <div className="signup-form-container">
        <div className="top-color-bar"></div>
        <h2 className="signup-form-title">Sign Up</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" className="signup-input" required />
          <input type="email" placeholder="Email" className="signup-input" required />
          <input type="password" placeholder="Password" className="signup-input" required />
          <input type="password" placeholder="Confirm Password" className="signup-input" required />
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
