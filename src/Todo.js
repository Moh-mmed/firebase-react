import {useState } from 'react'
import './Todo.css'

const Todo = (props) => {
  const { id, task, removeTodo, updateTodo } = props
  const [updatedTask, setUpdatedTask] = useState(task)
  const [isEditing, setIsEditing] = useState(false)

  const handleRemove = () => {
    removeTodo(id);
  };

  const toggleForm = () => {
    setIsEditing((prevState)=>(!prevState))
  };

  const handleUpdate = (evt) => {
    evt.preventDefault();
    updateTodo(id, updatedTask);
    setIsEditing(false);
  };
  const handleChange = (evt) => {
    setUpdatedTask(evt.target.value);
  };

  let result;
  if (isEditing) {
      result = (
        <div className="Todo" key={id}>
          <form className="Todo-edit-form" onSubmit={handleUpdate}>
            <input
              type="text"
              value={updatedTask}
              autoComplete="off"
              onChange={handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
  } else {
        result = (
          <div className="Todo">
            <span className="Todo-text">{updatedTask}</span>
            <i
              className="fas fa-pen"
              aria-hidden="true"
              onClick={toggleForm}
            ></i>
            <i
              className="fas fa-trash"
              aria-hidden="true"
              onClick={handleRemove}
            ></i>
          </div>
        );
      }
 
    return result
}
export default Todo