import React, { Component } from 'react'
import './Todo.css'
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleRemove() {
    this.props.removeTodo(this.props.id);
  }
  toggleForm() {
    this.setState((prevState)=>({ isEditing: !prevState.isEditing}));
  }
  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
    render() {
      let result;
      if (this.state.isEditing) {
          result = (
            <div className="Todo">
              <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                <input
                  type="text"
                  value={this.state.task}
                  name="task"
                  autoComplete="off"
                  onChange={this.handleChange}
                />
                <button>Save</button>
              </form>
            </div>
          );
      } else {
        result = (
          <div className="Todo">
            <span className="Todo-text">{this.props.task}</span>
            <i
              className="fas fa-pen"
              aria-hidden="true"
              onClick={this.toggleForm}
            ></i>
            <i
              className="fas fa-trash"
              aria-hidden="true"
              onClick={this.handleRemove}
            ></i>
          </div>
        );
      }
 
    return result
  }
}
export default Todo