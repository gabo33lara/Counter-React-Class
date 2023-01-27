import React from 'react';
import Counter from './components/Counter';
import Button from './components/Button';
import './App.css';
import freeCodeCampLogo from './img/FreeCodeCamp-logo.png';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClicks: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.decreaseClick = this.decreaseClick.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }

  handleClick() {
    this.setState(({numClicks}) => ({numClicks: numClicks + 1}));
  }

  decreaseClick() {
    this.setState(({numClicks}) => ({numClicks: numClicks - 1}));
  }

  resetCounter() {
    this.setState({numClicks: 0});
  }

  render() {
    return(
      <div className="App">
        <div className="freecodecamp-logo-container">
          <img className="freecodecamp-logo" alt="FreeCodeCamp Logo" src={freeCodeCampLogo} />
        </div>
        <div className="main-container">
          <Counter numClicks={this.state.numClicks} />
          <Button text="Increase" isButtonClass={true} handleClick={this.handleClick} />
          <Button text="Decrease" isButtonClass={true} handleClick={this.decreaseClick} />
          <Button text="Reset" isButtonClass={false} handleClick={this.resetCounter} />
        </div>
      </div>
    );
  }
}

export default App;