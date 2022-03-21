import { useState, useEffect} from "react";
import {db} from './firebase-config';
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  serverTimestamp,
  deleteDoc,
  onSnapshot,
  orderBy,
  query,
  where
} from "firebase/firestore";
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'
import './TodoList.css'

const TodoList = ({ user }) => {
  const [todos, setTodos] = useState([]);
  // Collection reference
  const todosCollRef = collection(db, "todos");

  // Query
  const q = query(todosCollRef,where('userId',"==",user.uid), orderBy("createdAt"));
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      let todos = [];
      snapshot.docs.forEach((todo) => {
        todos.push({ ...todo.data(), id: todo.id });
      });
      console.log(todos);
      setTodos(todos);
    });

  }, []);

  // add new todo
  const add = (task) => {
    let newTodo = {
      task: task,
      createdAt: serverTimestamp(),
      userId: user.uid,
    };
    let updatedTodos = [...todos, newTodo];
    setTodos([...updatedTodos]);
    addDoc(todosCollRef, newTodo);
  };

  // Update todo
  const update = (id, updatedTask) => {
    const docRef = doc(db, "todos", id);
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    setTodos([...updatedTodos]);
    
    updateDoc(docRef, {
      task: updatedTask,
      createdAt: serverTimestamp(),
    });
  };

  // Remove todo
  const remove = (id) => {
    const docRef = doc(db, "todos", id);
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos([...updatedTodos]);
    deleteDoc(docRef)
  };

  const makeTodos = () => {
    return todos && todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          removeTodo={remove}
          updateTodo={update}
        />
      );
    });
  };
  return (
    <div className="TodoList">
      <div className="TodoList-header">
        <h1> Todo List</h1>
      </div>
      <div className="TodoList-body">{makeTodos()}</div>
      <div className="TodoList-NewTodoForm">
        <NewTodoForm addTodo={add} />
      </div>
    </div>
  );
}

export default TodoList