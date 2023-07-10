import React, { useState } from "react";
import "../assets/stylesheets/modal1.css";
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
    e.preventDefault
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log("logged in!", userCredentials.user);
        history("/rooms/standard-room")
      })
      .catch((e) => {
        console.log(e.error);
      });
  };

  return (
    <div className="modal1-container">
      <div className="modal-content">
        <div className="top">
          <div className="close-btn" onClick={() => setOpenModal(false)}>
            X
          </div>
        </div>
        <div className="modal-head">
          <h4>
            Please note that you have to create an account with us in order to
            book a room
          </h4>
        </div>
        <div className="form">
          {login == false ? (
            <>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </>
          ) : (
            <>
              <input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </>
          )}
          <div className="submit">
            {login ? (
              <div className="button">
                <button onClick={handleLogin}>login</button>
                <p>
                  Don't have an account?{" "}
                  <span onClick={() => setLogin(false)}>Register</span> instead.
                </p>
              </div>
            ) : (
              <div className="button">
                <button onClick={register}>Create Account</button>
                <p>
                  Already have an account?{" "}
                  <span onClick={() => setLogin(true)}>Login</span> instead.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}