import React, { useState } from "react";
import "../../assets/stylesheets/admin.css";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

export default function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redText, setRedText] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log("user loggedin successfully", userCredentials.user);
        navigate("/admin/Dash");
      })
      .catch((error) => {
        console.error(error);
        // setRedText(
        //   "Contact Sytem Support if you're experiencing problems."
        // );
        setRedText(error.message)
        alert("something went wrong:", error.message);
      });
  };
  return (
    <>
      <div className="container">
        <div className="s-container">
          <div className="head admin-ban">
            StayQuest
            <br />
            <span>Admin</span>
          </div>
          <div className="f-container">
            <form>
              <label>
                Email: <br />
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                Password: <br />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </form>
            {redText !== "" ? (
              <span className="redText" style={{ fontSize: "small", color: "tomato" }}>
                <i>{redText}</i>
              </span>
            ) : (
              ""
            )}
            <button onClick={handleSubmit}>Sign In</button>
          </div>
        </div>
      </div>
    </>
  );
}
