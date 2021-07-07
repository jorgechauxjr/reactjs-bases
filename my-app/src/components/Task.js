import React from 'react';

// 3)
// Receive every unique task from ./components/Tasks take each data and show it in a <div>
// This will return a component for each task

class Task extends React.Component {
  
  StyleCompleted() {
    return {
      fontSize: '20px',
      color: this.props.taskPr.done ? 'gray' : 'blue',
      textDecoration: this.props.taskPr.done ? 'line-through' : 'none'
    }
  }
  
  render() {
    const {taskPr} = this.props;
    return  <p style={this.StyleCompleted()}>
      { taskPr.title } -
      { taskPr.descripcion } -
      { taskPr.done } -
      { taskPr.id }
      <input type="checkbox" />
      <button style={btnDelete}>
        x
      </button>
  </p>
 }
}

// this is not css, it's JavaScript objects to give style
const btnDelete = {
  fontSize: '18px',
  background: '#ea2027',
  color: '#fff',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '50%',
  cursor: 'pointer'
}

export default Task;

// ANOTHER WAY OF DOING without destructuring

// class Task extends React.Component {
//   render() {
//     return  <div>
//       {/* this.props.taskPr.title comes from ./components/Tasks */}
//       { this.props.taskPr.title } -
//       { this.props.taskPr.descripcion } -
//       { this.props.taskPr.done } -
//       { this.props.taskPr.id }
//     <input type="checkbox" />
//     <button>
//       x
//     </button>
//     </div>
//   }
// }
