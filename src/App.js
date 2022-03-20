import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import Navbar from './Navbar';
import { db, auth } from "./firebase-config";
import {getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  serverTimestamp,
  deleteDoc,
} from "firebase/firestore";
import Login from './Login';
import { AuthProvider } from './AuthProvider';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Signup from './Signup';
function App() {
//   const user = auth.currentUser ? true : false;
//   console.log(user)
//   const [isAuthenticated, setIsAuthenticated] = useState(user);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // const unsubAuth = onAuthStateChanged(auth, (user) => {
//   //   console.log("user status changes: ", user);
//   // });
//   const formSubmit = (e) => {
//     e.preventDefault();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((cred) => {
//         // cred: user's credentials who just signed up
//         // console.log(cred.user)
//         setIsAuthenticated(true)
//         setEmail('')
//         setPassword('')
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//  }
//   const handleAuth = (status) => {
//    setIsAuthenticated(status)
//   }
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
