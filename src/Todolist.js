// import React from "react";
// import Edit from "./Edit";
// class Todolist extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: []
//     };

//     this.AddTodo = this.AddTodo.bind(this);
//   }

//   AddTodo(e) {
//     if (this_inputElement.value !== "") {
//       var NewTodo = {
//         text: this.inputElement.value,
//         key: Date.now()
//       };
//       this.setState(prevState => {
//         return {
//           items: prevState.items.concat(NewTodo)
//         };
//       });
//     }
//     this, (_inputElement.value = "");
//     console.log(this.items);
//   }

//   render() {
//     return (
//       <div className="Todolist">
//         <div className="header">
//           <form onSubmit={this.addTodo}>
//             <input
//               ref={a => (this._inputElement = a)}
//               placeholder="Add Todo"
//             ></input>
//             <button onClick="Edit">add</button>
//           </form>
//         </div>
//         <Edit entries={(this, state.edit)} />
//       </div>
//     );
//   }
// }
// export default Todolist;
