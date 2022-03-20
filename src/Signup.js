import { useState } from "react";
import { auth } from "./firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import './Signup.css'

const Signup = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
     const formSubmit = (e) => {
       e.preventDefault();
       createUserWithEmailAndPassword(auth, email, password)
         .then((cred) => {
           setIsAuthenticated(true);
           setEmail("");
           setPassword("");
           navigate("/", {replace: true})
         })
         .catch((err) => {
           console.log(err.message);
         });
     };
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          margin: "1rem 0",
          fontWeight: "bolder",
          fontSize: "2rem",
        }}
      >
        Sign up
      </h1>
      <form className="screen-1" onSubmit={formSubmit}>
        <div className="field">
          <label htmlFor="first-name">First Name</label>
          <div className="sec-2">
            <input
              type="text"
              name="first-name"
              value={firstName}
              placeholder="first name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="last-name">Last Name</label>
          <div className="sec-2">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input
              type="text"
              name="last-name"
              value={lastName}
              placeholder="last name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="field">
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
        <div className="field">
          <label htmlFor="password">Password</label>
          <div className="sec-2">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input
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
        <button className="login">Sign up </button>
      </form>
    </div>
  );
}

export default Signup