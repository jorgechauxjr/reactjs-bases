import React, { Component } from 'react';

class TaskForm extends Component {
  
  submitAnswer = (event) => {
    
    event.preventDefault();
  }

  infoTyped = (event) => {
    console.log(event.target.value)
  }
  
  render() {
    return (
      <form onSubmit={this.submitAnswer}>
        <input type="text" placeholder="Write a task" onChange={this.infoTyped} />
        <br/>
        <br/>
        <textarea placeholder="Write a task description" onChange={this.infoTyped}></textarea>
        <br/>
        <input type="submit"/>
      </form>
    )
  }
}

export default TaskForm;
