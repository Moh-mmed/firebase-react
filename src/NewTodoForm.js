import {useState } from 'react'
import './NewTodoForm.css'

const NewTodoForm = ({addTodo}) => {
  const [task, setTask] = useState("")

  const handleChange= (evt)=> {
    setTask(evt.target.value)
    }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    task !== "" && addTodo(task);
    setTask("");
    }
 
    return (
      <div className="NewTodoForm">
        <form onSubmit={handleSubmit}>
          <label htmlFor="todo">New Todo</label>
          <div className="inputs">
            <input
              type="text"
              name="task"
              value={task}
              autoComplete="off"
              onChange={handleChange}
            />
            <button className="submit">Add Todo</button>
          </div>
        </form>
      </div>
    );
    
}

export default NewTodoForm