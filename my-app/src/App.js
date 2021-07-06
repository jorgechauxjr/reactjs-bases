import React from 'react';
import './App.css';

// this is not html but is similar it is JSX

function Hello() {
  return (
    <div id="hi">HELLO WORLD!!</div>
  );
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


function App() {
  return (
  <div>This is my component: <Hello/></div>
  );
}

export default App;
