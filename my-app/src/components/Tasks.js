import React from 'react';

// The puerpose of Tasks component is to list all the tasks

class Tasks extends React.Component {

  // props.tasksPr comes from App.js inside render
  // <Tasks tasksPr={this.state.tasksSt}/>
  
  render() {
    return this.props.tasksPr.map(e => <p key={ e.id }>
      { e.title } - { e.descripcion } - { e.done } - { e.id }
      <input type="checkbox" />
      <button>
        x
      </button>
      </p>)
  }
}
export default Tasks;
