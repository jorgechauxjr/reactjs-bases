import React from 'react';
import './App.css';

// this is not html but is similar it is JSX

function Hello(props) {
  console.log(props);
  return (
    <div id="hi">
      <h3>{ props.subtitle }</h3>
      { props.mytext }
      </div>
  );
  // I use . because props is received as an object
  //ex: 
  /*
    {
      mytext: "Hello Jhon"
    }
  */
}

// I can write the component App in 3 different ways
// 1. as  class inheriting from React.component 2. as arrow function 3. as a normal function

/* 1 as  class inheriting from React.component
class App extends React.Component{
  render() {
    return <div>This is my component: <Hello/></div>
  }
}
*/

// 2 as arrow function
// const App = () => <div>This is my component: <Hello/></div>

//3 as a normal function
// Props
// In App I call the component Hello and I pass a prop call mytext with value "Hello Jhon. Another props is subtitle with value lorem ipsum"
function App() {
  return (
  <div>
    This is my component:
    <Hello mytext="Hello Jhon" subtitle="lorem ipsum"/>
    <Hello mytext="Hola mundo" subtitle="Component 2"/>
    <Hello mytext="Hello!" subtitle="Comp3"/>
  </div>
  );
}
export default App;
