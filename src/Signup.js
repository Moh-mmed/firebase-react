import { useState, useContext } from "react";
import {useNavigate, NavLink} from 'react-router-dom'
import { auth } from "./firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import './Form.css'
import { AuthContext } from "./AuthProvider";

const Signup = () => {
  const { setUsername } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const [error, setError] = useState({ state: false, errMessage: "" });

  const navigate = useNavigate()
     const formSubmit = (e) => {
       e.preventDefault();
       createUserWithEmailAndPassword(auth, email, password)
         .then((cred) => {
           updateProfile(cred.user, { displayName: name })
           setUsername(name)
           setName("");
           setEmail("");
           setPassword(""); 
           navigate("/", { replace: true })
         })
         .catch((err) => {
            setError({state: true, errMessage: "please verify you email and password"})
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
        <span className={`error ${error.state ? "show" : ""}`}>
          {error.errMessage}
        </span>
        <div className="field">
          <label htmlFor="name">First Name</label>
          <div className="sec-2">
            <input
              type="text"
              name="name"
              value={name}
              placeholder="name"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="email">Email Address</label>
          <div className="sec-2">
            <input
              type="email"
              name="email"
              placeholder="name@example.com"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <div className="sec-2">
            <input
              type="password"
              name="password"
              value={password}
              placeholder="password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <button className="login">Sign up </button>
        <div className="footer">
          <span>
            Already have an account?
            <NavLink to="/">Log in</NavLink>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Signup