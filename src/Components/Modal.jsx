import React, { useState } from "react";
import "../assets/stylesheets/modalStyle.css";
import { Link, useNavigate } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

export default function Modal({ openModal, setOpenModal }) {
  const history = useNavigate();

  const [registerOpt, setRegisterOpt] = useState(false);

  // login logic

  const [isLogged, setIsLogged] = useState(null);
  console.log("login is:", isLogged);

  return (
    <div className="m-container">
      <div className="m-content">
        <button className="top close-btn" onClick={() => setOpenModal(false)}>
          X
        </button>
        {isLogged ? (
          <>
            <Login isLogged={isLogged} registerOpt={registerOpt} />
          </>
        ) : (
          <>
            <div className="m-banner">
              <h4>
                You have to have an account with us in order to book a room
              </h4>
            </div>
            <div className="modal-main">
              <button
                to="/login"
                className="login-btn"
                onClick={() => setIsLogged(true)}
              >
                Login
              </button>
              {/* <button
                to="/register"
                className="register-btn"
                onClick={() => setIsLogged(false)}
              >
                Register
              </button> */}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
