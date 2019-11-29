import React from "react";
// import { threadId } from "worker_threads";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    };

    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleRemove.bind(this);
  }
  handleRemove() {
    this.props.removeTodo(this.props.id);
  }
  toggleForm() {
    this.setState(() => ({
      isEditing: !this.state.isEditing
    }));
  }
  handleChange(event) {
    event.persist();
    this.setState(() => ({
      [event.target.name]: event.target.value
    }));
  }
  handleUpdate(event) {
    event.preventDefault();
    //take new task data and pass up to parent
    this.props.handleUpdatedTodo(this.props.id, this.state.task);
    this.setState(() => ({ isEditing: false }));
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
          <li>{this.props.task}</li>
        </div>
      );
    }
    return result;
  }
}
