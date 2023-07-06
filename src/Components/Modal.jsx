import React, { useState } from "react";
import "../assets/stylesheets/modal1.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

export default function Modal({ openModal, setOpenModal }) {
  const [showPay, setShowPay] = useState(false);

  const navigation = useNavigate();

  const goBack = () => {
    navigation("/");
  };
  return (
    <div className="modal1-container">
      <div className="modal-content">
        <div className="top">
          <Link
            className="close-btn"
            to="\"
            onClick={() => setOpenModal(!openModal)}
          >
            X
          </Link>
        </div>
        <div className="modal-head">
          <h4>
            Please note that you have to create an account in in order to book a
            room from us
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
