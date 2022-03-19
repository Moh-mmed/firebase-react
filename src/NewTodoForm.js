import React, { Component } from 'react'
import './NewTodoForm.css'
class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {task: ""}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
          task: "",
        });
    }
    render() {
        return (
          <div className="NewTodoForm">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="todo">New Todo</label>
              <div className="inputs">
                <input
                  type="text"
                  name="task"
                  value={this.state.task}
                  autoComplete="off"
                  onChange={this.handleChange}
                />
                <button className="submit">Add Todo</button>
              </div>
            </form>
          </div>
        );
    }
}

export default NewTodoForm