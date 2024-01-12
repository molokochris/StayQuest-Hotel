// import { createUserWithEmailAndPassword } from "firebase/auth";
// import React, { useState } from "react";
// import { auth } from "../config/firebase";
// import "../assets/stylesheets/login.css";

// export default function Signup(props) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLogged, setIsLogged] = useState(props.isLogged);

//   const register = (e) => {
//     e.preventDefault();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then(() => {
//         alert("registered successfully");
//       })
//       .catch((error) => {
//         if (error.message === "Firebase: Error (auth/email-already-in-use).") {
//           alert("email is already in use. login instead!");
//           setIsLogged(true);
//         } else {
//           console.log(error.message);
//         }
//       });
//   };

//   return (
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
//           <button onClick={register}>Register</button>
//         </form>
//         {isLogged && (
//           <p style={{color: "tomato"}}>
//             Login instead. <span>click here</span>
//           </p>
//         )}
//         <div className="other-opts">
//           <span>Register using your google account?</span>
//           <button>Google</button>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
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
        <Link to="/">
          <span
            style={{
              width: 100,
              background: "rgb(61, 98, 20)",
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
            Register
          </span>
        </Link>
        Have an account,{" "}
        <Link to="/" style={{ color: "tomato" }}>
          login
        </Link>
      </div>
    </div>
  );
}
