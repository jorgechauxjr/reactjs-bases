import React, { Component } from 'react';

class TaskForm extends Component {

  state = {
    titleSt: '',
    descriptionSt: ''
  }
  
  submitAnswer = (event) => {
    console.log(this.state)
    event.preventDefault();
  }

  infoTyped = (event) => {
    console.log(event.target.name, event.target.vaue)
    
    /* event.target.name es para saber desde que input se esta escribiendo. title o desciption
      si usuario escribe en campo title,l evento devuelve en  name = title, si usuario escribe en la descripcion el evento devuelve en name= description */
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  render() {
    return (
      <form onSubmit={this.submitAnswer}>
        <input
          type="text"
          name="titleSt"
          placeholder="Write a task"
          onChange={this.infoTyped}
          value={this.state.titleSt} />
        <br/>
        <br/>
        <textarea
          name="descriptionSt"
          placeholder="Write a task description"
          onChange={this.infoTyped}
          value={this.state.descriptionSt}> 
        </textarea>
        <br/>
        <input type="submit"/>
      </form>
    )
  }
}

export default TaskForm;
