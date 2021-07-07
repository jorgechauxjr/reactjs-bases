import React from 'react';

class Tasks extends React.Component {

  // props.tasksPr comes from App.js inside render
  // <Tasks tasksPr={this.state.tasksSt}/>
  
  render() {
    return this.props.tasksPr.map(e => <p key={ e.id }>
      { e.title } - { e.descripcion } - { e.done } - { e.id }
      </p>)
  }
}
export default Tasks;
