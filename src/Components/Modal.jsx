import React, { useState } from "react";
import "../assets/stylesheets/modalStyle.css";
import bannerImg from '../assets/images/sign-up-alt0.jpg';
// import { Link, Route, Routes, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="m-container">
      <div className="m-content">
        {/* <div className="top"> */}
          <button className="top close-btn" onClick={() => setOpenModal(false)}>
            X
          </button>
        {/* </div> */}
        <div className="m-banner">
          <img alt="" src={bannerImg}></img>
          <h4>You have to have an account with us in order to book a room</h4>
        </div>
        <div className="modal-main">
          <button className="login-btn">Login</button>
          <button className="register-btn">Register</button>
        </div>
        {/* <div className="">
          <p></p>
        </div> */}
      </div>
    </div>
  );
}
