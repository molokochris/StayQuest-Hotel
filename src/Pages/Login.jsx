// import React, { useState } from "react";
// import "../assets/stylesheets/login.css";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../config/firebase";
// import { useNavigate } from "react-router-dom";
// import Signup from "./Signup";
// import View from "../Components/View";

// export default function Login(props) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLogged, setIsLogged] = useState(props.isLogged);
//   const [loginSuccess, setLoginSuccess] = useState(false);
//   const [registerOpt, setRegisterOpt] = useState(props.registerOpt);

//   const history = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredentials) => {
//         alert("logged in!", userCredentials.user);
//         console.log("success!!!");
//         setLoginSuccess(true)
//         if (loginSuccess) {
//           <View loginSuccess={loginSuccess}/>
//         }
//         // history("/rooms");

//       })
//       .catch((error) => {
//         if (error.message === 'Firebase: Error (auth/wrong-password).') {
//           alert('your password is wrong, try another one or click on forgot password');
//         } else {
//           alert('Email was not found, try another one or register.');
//         }
//         console.log(error.message);
//       });
//   };

//   return isLogged ? (
//     <div className="login-page">
//       <div className="l-banner">StayQuest</div>
//       <div className="login-container">
//         <form>
//           <div className="email">
//             <input
//               type="text"
//               name="Email"
//               placeholder="Email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="password">
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button onClick={handleLogin}>Login</button>
//         </form>
//         <p>
//           Don't have an account?{" "}
//           <span onClick={() => setIsLogged(false)}>Register</span>
//         </p>
//         <div className="other-opts">
//           <span>use google account to login</span>
//           <button>Google</button>
//         </div>
//       </div>
//     </div>
//   ) : (
//     <Signup isLogged={isLogged} setIsLogged={setIsLogged} />
//   );
// }

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [isUser, setIsUser] = useState(true);
  return isUser ? (
    <div
      className="container"
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "40%",
          background: "whitesmoke",
          height: 400,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: 4,
        }}
      >
        <input
          title="email"
          placeholder="Email Address"
          style={{
            marginBottom: 10,
            paddingInline: 10,
            paddingBlock: 4,
            outlineColor: "gray",
          }}
        />
        <input
          title="password"
          placeholder="Password"
          style={{
            marginBottom: 10,
            paddingInline: 10,
            paddingBlock: 4,
            outlineColor: "gray",
          }}
        />
        <Link to="/home">
          <span
            style={{
              width: 100,
              background: isUser ? "rgb(61, 98, 20)" : "#ccc",
              padding: 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // background: "#ccc",
              borderRadius: 4,
              color: "whitesmoke",
              marginBottom: 10,
            }}
          >
            Login
          </span>
        </Link>
        {isUser && (
          <span style={{ marginBottom: 15 }}>
            Don't have an account, <Link to="/register">create account</Link>
          </span>
        )}{" "}
        <span style={{ color: "#333333" }} onClick={() => setIsUser(!isUser)}>
          {isUser ? "login as admin" : "login as user"}
        </span>
      </div>
    </div>
  ) : (
    <Admin isUser={isUser} setIsUser={setIsUser} />
  );
}

function Admin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redText, setRedText] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    console.log(props);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log("user loggedin successfully", userCredentials.user);
        navigate("/admin/Dashboard");
      })
      .catch((error) => {
        console.error(error);
        // setRedText(
        //   "Contact Sytem Support if you're experiencing problems."
        // );
        setRedText(error.message);
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
              <span
                className="redText"
                style={{ fontSize: "small", color: "tomato" }}
              >
                <i>{redText}</i>
              </span>
            ) : (
              ""
            )}
            <button onClick={handleSubmit}>Sign In</button>

            <span
              style={{ color: "#333333", marginTop: 10 }}
              onClick={() => props.setIsUser(!props.isUser)}
            >
              login as user
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
