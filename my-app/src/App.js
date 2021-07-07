import React from 'react';
import './App.css';
import tasks from './sample/tasksData.json'

console.log(tasks)

class App extends React.Component {
  
  state = {
    tasksSt: tasks
  }
  
  render() {
    return <div>
      { this.state.tasksSt.map(e => <p key={ e.id }>
        { e.title } - { e.descripcion } - { e.done } - { e.id }
        </p>) }
    </div>
  }
}

export default App;
