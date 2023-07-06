import React, { useState } from "react";
import "../assets/stylesheets/modal1.css";
// import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function Modal({ openModal, setOpenModal }) {
  const [showPay, setShowPay] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [surname, setSurname] = useState("");
  // const [contactNum, setContactNum] = useState("");

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      alert("registered successfully");
    }).catch((error) => console.log("something went wrong: ", error))
  };

  return (
    <div className="modal1-container">
      <div className="modal-content">
        <div className="top">
          <div className="close-btn" onClick={() => setOpenModal(!openModal)}>
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
          {/* <div className="names">
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Surname"
              onChange={(e) => setSurname(e.target.value)}
            />
          </div> */}
          <div className="contacts">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <input
              type="number"
              placeholder="Contact Numbers"
              onChange={(e) => setContactNum(e.target.value)}
            /> */}
          </div>
          <div className="password-div">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="submit">
            <button onClick={register}>Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
