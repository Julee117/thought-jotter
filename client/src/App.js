import React, { Component } from 'react';
import './App.css';

class App extends Component {

  handleOnClick = () => {
    this.props.history.push('/notes')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Welcome to Thought Jotter
          <button onClick={this.handleOnClick}>Click to start</button>
        </header>
      </div>
    );
  }
}

export default App;
