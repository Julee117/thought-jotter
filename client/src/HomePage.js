import React, { Component } from 'react';

class HomePage extends Component {

  handleOnClick = () => {
    this.props.history.push('/notes')
  }

  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          Welcome to Thought Jotter
          <button onClick={this.handleOnClick}>Click to start</button>
        </header>
      </div>
    )
  }
}

export default HomePage;
