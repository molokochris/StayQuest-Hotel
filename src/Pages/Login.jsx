import React from "react";
import "../assets/stylesheets/login.css";

export default function Login() {
  return (
    <div className="login-page">
      <div className="l-banner">StayQuest</div>
      <div className="login-container">
        <form>
          <div className="email">
            <input type="text" name="Email" placeholder="Email" />
          </div>
          <div className="password">
            <input type="password" name="password" placeholder="Password" />
          </div>
        </form>
        <div className="button">
          <button>Login</button>
        </div>
          <p>
            Already have an account? <span>Login</span>
          </p>
        <div className="other-opts">
          <span>use google account to login</span>
          <button>Google</button>
        </div>
      </div>
    </div>
  );
}
