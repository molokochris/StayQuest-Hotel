import React, { useState } from "react";
import "../assets/stylesheets/login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup";
import View from "../Components/View";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(props.isLogged);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [registerOpt, setRegisterOpt] = useState(props.registerOpt);

  const history = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        alert("logged in!", userCredentials.user);
        console.log("success!!!");
        setLoginSuccess(true)
        if (loginSuccess) {
          <View loginSuccess={loginSuccess}/>
        }
        // history("/rooms");
        
      })
      .catch((error) => {
        if (error.message === 'Firebase: Error (auth/wrong-password).') {
          alert('your password is wrong, try another one or click on forgot password');
        } else {
          alert('Email was not found, try another one or register.');
        }
        console.log(error.message);
      });
  };

  return isLogged ? (
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
          <button onClick={handleLogin}>Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <span onClick={() => setIsLogged(false)}>Register</span>
        </p>
        <div className="other-opts">
          <span>use google account to login</span>
          <button>Google</button>
        </div>
      </div>
    </div>
  ) : (
    <Signup isLogged={isLogged} setIsLogged={setIsLogged} />
  );
}
