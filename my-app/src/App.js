import React from 'react';
import './App.css';

import tasks from './sample/tasksData.json'
import Tasks from './components/Tasks'

console.log(tasks)
// 1)
// App have in the state different tasks
// Send the data to the component Tasks
//./components/Tasks

class App extends React.Component {
  
  state = {
    tasksSt: tasks
  }
  // I call the component Tasks and pass it a property called tasksPr
  // and give ti the property the value of the state tastSt

  // The property tasksPr is invoked in the /component/Tasks.js
  // this.props.tasksPr
  render() {
    return <div>
      <Tasks tasksPr={this.state.tasksSt}/>
    </div>
  }
}

export default App;
