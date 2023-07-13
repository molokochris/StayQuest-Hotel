import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../config/firebase";
import "../assets/stylesheets/login.css";

export default function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(props.isLogged);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("registered successfully");
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          alert("email is already in use. login instead!");
          setIsLogged(true);
        } else {
          console.log(error.message);
        }
      });
  };

  return (
    <div className="login-page">
      <div className="l-banner">StayQuest</div>
      <div className="login-container">
        <form>
          <div className="email">
            <input
              type="text"
              name="Email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={register}>Register</button>
        </form>
        {isLogged && (
          <p style={{color: "tomato"}}>
            Login instead. <span>click here</span>
          </p>
        )}
        <div className="other-opts">
          <span>Register using your google account?</span>
          <button>Google</button>
        </div>
      </div>
    </div>
  );
}
