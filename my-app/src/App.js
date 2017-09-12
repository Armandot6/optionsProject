/* esversion: 6 */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {counter: 0};

  incrementCounter = (value) => {
      this.setState((prevState) => {
        return {
           counter: prevState.counter + value
        };
      });
    };
  render() {
    return (
      <div>
        <Button incrementValue={1} onClickFunc={this.incrementCounter}/>
        <Button incrementValue={5} onClickFunc={this.incrementCounter}/>
        <Button incrementValue={10} onClickFunc={this.incrementCounter}/>
        <Button incrementValue={25} onClickFunc={this.incrementCounter}/>
        <Result counter={this.state.counter}/>
      </div>
    );
  }
}


class Button extends Component {
  handleEvent = () => {
  this.props.onClickFunc(this.props.incrementValue)
  };

  render() {
    return (
      <button onClick={this.handleEvent}>
        +{this.props.incrementValue}
      </button>
    );
  }
}

const Result = (props) => {
  return (
    <div>{props.counter}</div>
  );
};



export default App;
