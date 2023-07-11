import React from "react";
import "../assets/stylesheets/login.css";

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <form>
          <div className="email">
            <input type="text" name="Email" placeholder="Email" />
          </div>
          <div className="password">
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button className="button">Login</button>
          <p>
            Already have an account? <span>Login</span>
          </p>
        </form>
      </div>
    </div>
  );
}
