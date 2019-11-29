// import React from "react";

// class List extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       task: ""
//     };

//     this.AddTodo = this.AddTodo.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event) {
//     event.preventDefault();
//     this.setState({ task: event.target.value });
//     console.log(this.state.task);
//   }

//   AddTodo(event) {
//     let data = this.state.items;
//     data.push(event.target.value);
//     this.state;
//   }

//   render() {
//     return (
//       <div>
//         <h2>Todo App</h2>
//         <h3>Todo List</h3>

//         <input type="text" name="task" onChange={this.handleChange} />
//         <button onClick={this.AddTodo}>New Task</button>

//         <ul>
//           <li>some Task</li>
//         </ul>
//       </div>
//     );
//   }
// }
// export default List;
