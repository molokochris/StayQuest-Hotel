import React, { useState } from "react";
import "../assets/stylesheets/modal1.css";
// import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function Modal({ openModal, setOpenModal }) {
  const [showPay, setShowPay] = useState(false);


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
          <div className="names">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Surname" />
          </div>
          <div className="contacts">
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Contact Numbers" />
          </div>
          <div className="submit">
            <button type="submit">Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
