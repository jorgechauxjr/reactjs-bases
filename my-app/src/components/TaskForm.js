import React, { Component } from 'react';

class TaskForm extends Component {
  
  submitAnswer = () => {
    console.log("enviando...")
  }
  
  render() {
    return (
      <form onSubmit={this.submitAnswer}>
        <input type="text" placeholder="Write a task" />
        <br/>
        <br/>
        <textarea placeholder="Write a task description"></textarea>
        <br/>
        <input type="submit"/>
      </form>
    )
  }
}

export default TaskForm;
