/* jshint esversion: 6 */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
state = {counter: 0};

incrementCounter = () => {
  return this.state.counter + 1
}
  render() {
    return (
      <Button functionCounter={this.incrementCounter}/>
      <Result/>
    );
  }
}

class Button extends Component {
  render() {
    return (
      <button onClick="this.functionCounter">
      +1
      </button>
    );
  }
}

const Result = () => {

};

export default App;
