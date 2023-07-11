import React, { useState } from "react";
import "../assets/stylesheets/modalStyle.css";
import bannerImg from "../assets/images/sign-up-alt0.jpg";
// import { Link, Route, Routes, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import Login from "../Pages/Login";

export default function Modal({ openModal, setOpenModal }) {
  const [showPay, setShowPay] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const history = useNavigate();

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("registered successfully");
        setLogin(true);
        history("/rooms/standard-room");
      })
      .catch((error) => {
        alert("email is already in use, please login");
        setLogin(true);
      });
  };
  const handleLogin = (e) => {
    e.preventDefault;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log("logged in!", userCredentials.user);
        history("/rooms");
      })
      .catch((e) => {
        console.log(e.error);
      });
  };
  // login logic

  const [isLogged, setIsLogged] = useState(false);
  console.log("login is:", isLogged);

  const loginOpt = () => {
    setIsLogged(true);
  };

  return (
    <div className="m-container">
      <div className="m-content">
        <button className="top close-btn" onClick={() => setOpenModal(false)}>
          X
        </button>
        {isLogged ? (
          <>
            {/* <div className="login-mod">
              <form>
                <div className="email">
                  <input type="text" name="Email" placeholder="Email" />
                </div>
                <div className="password">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <button className="button">Login</button>
              </form>
            </div> */}
            <Login />
          </>
        ) : (
          <>
            <div className="m-banner">
              <h4>
                You have to have an account with us in order to book a room
              </h4>
            </div>
            <div className="modal-main">
              <button to="/login" className="login-btn" onClick={loginOpt}>
                Login
              </button>
              <button to="/register" className="register-btn">
                Register
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
