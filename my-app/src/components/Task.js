import React from 'react';

// 3)
// Receive every unique task from ./components/Tasks take each data and show it in a <div>
// This will return a component for each task

class Task extends React.Component {
  render() {
    return  <div>
      {/* this.props.taskPr.title comes from ./components/Tasks */}
      { this.props.taskPr.title } -
      { this.props.taskPr.descripcion } -
      { this.props.taskPr.done } -
      { this.props.taskPr.id }
    <input type="checkbox" />
    <button>
      x
    </button>
    </div>
  }
}
export default Task;

// ANOTHER WAY O DOIN USING DESTRUCTURING JS
// class Task extends React.Component {
//   render() {
//     const {taskPr} = this.props;
//     return  <div>
//       {/* this.props.taskPr.title comes from ./components/Tasks */}
//       { taskPr.title } -
//       { taskPr.descripcion } -
//       { taskPr.done } -
//       { taskPr.id }
//     <input type="checkbox" />
//     <button>
//       x
//     </button>
//     </div>
//   }
// }
