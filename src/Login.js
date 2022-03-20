import { useState } from "react";
import "./Login.css";
import { auth } from "./firebase-config";
import {signInWithEmailAndPassword,} from "firebase/auth";
import { NavLink } from "react-router-dom";
const Login = ({authStatus}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = (e) => {
   e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
          console.log("user logged in:", cred.user);
          authStatus(true);
          setEmail("");
          setPassword("");
        })
        .catch((err) => {
          console.log(err.message);
        });
  }

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          margin: "1rem 0",
          fontWeight: "bolder",
          fontSize: "2rem",
        }}
      >
        Log in
      </h1>
      <form className="screen-1" onSubmit={formSubmit}>
        <div className="email">
          <label htmlFor="email">Email Address</label>
          <div className="sec-2">
            <ion-icon name="mail-outline"></ion-icon>
            <input
              type="email"
              name="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <div className="sec-2">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input
              className="pas"
              type="password"
              name="password"
              value={password}
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <button className="login">Login </button>
        <div className="footer">
          <span>
            Don't have an account?
            <NavLink to="/signup">Sign up</NavLink>
          </span>
        </div>
      </form>
    </>
  );
};

export default Login;
