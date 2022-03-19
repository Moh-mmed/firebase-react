import { useState, useEffect } from "react";
import db from './firebase-config';
import { collection, getDocs,serverTimestamp } from 'firebase/firestore';
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'
import './TodoList.css'

const TodoList = (props) => {
  const [todos, setTodos] = useState();
  const todosCollRef = collection(db, "todos");
  useEffect(() => {
    const getTodos = async () => {
      const data = await getDocs(todosCollRef);
      const todos = data.docs.map((todo) => ({ ...todo.data(), id: todo.id }));
      setTodos(todos);
    };
    getTodos();
  }, []);

  const add = (todo)=>{
    let { task } = todo;
    let newTodo = { task: task, createdAt: serverTimestamp() };
    let updatedTodos = [...todos, newTodo]
    setTodos([...updatedTodos]);
  }
  const update = (id, updatedTask)=> {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    setTodos([...updatedTodos]);
  }
  const remove = (id)=> {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos([...updatedTodos]);
  }
  const makeTodos = () => {
    return todos.map((todo) => {
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