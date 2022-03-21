import {useContext } from "react";
import "./App.css";
import TodoList from "./TodoList";
import { AuthContext } from "./AuthProvider";
import Login from "./Login";

const Home = () => {
  const {currentUser} = useContext(AuthContext)
  return <>{!!currentUser ? <TodoList user={currentUser} /> : <Login />}</>;
};

export default Home;
