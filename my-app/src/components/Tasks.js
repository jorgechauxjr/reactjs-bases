import React from 'react';

import Task from './Task';
import PropTypes from 'prop-types';

// 2)
// map each task received from App and for each "recorrido" generate a unique task and send it to ./component/Task

class Tasks extends React.Component {

  // props.tasksPr comes from App.js inside render
  // <Tasks tasksPr={this.state.tasksSt}/>

  // In Task Im sending a property called taskPr and can be invoked in ./components/Task
  
  // every time I map an ray I have to add the property "key"
  render() {
    return this.props.tasksPr.map(e => <Task taskPr={e} key={e.id}/>);
  }
}

Tasks.propTypes = {
  tasksPr: PropTypes.array.isRequired
}
export default Tasks;
