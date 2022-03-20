import { useEffect, useState, useContext } from "react";
import "./App.css";
import TodoList from "./TodoList";
import { db, auth } from "./firebase-config";
import { AuthContext } from "./AuthProvider";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  serverTimestamp,
  deleteDoc,
} from "firebase/firestore";
import Login from "./Login";

const Home = () => {
    const currentUser = useContext(AuthContext)
    console.log(currentUser)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const unsubAuth = onAuthStateChanged(auth, (user) => {
  //   console.log("user status changes: ", user);
  // });
//   const formSubmit = (e) => {
//     e.preventDefault();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((cred) => {
//         // cred: user's credentials who just signed up
//         // console.log(cred.user)
//         setEmail("");
//         setPassword("");
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   };
  const handleAuth = (status) => {
    console.log(status)
  };
  return (
    <div style={{margin: "4rem 0"}}>
      {!!currentUser ? (
        <TodoList auth={true} />
      ) : (
        <Login authStatus={handleAuth} />
      )}
    </div>
  );
};

export default Home;
