import React, { Component } from 'react';
import Signup from './Signup';

class HomePage extends Component {

  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          Welcome to Thought Jotter
          <div>
            <Signup history={this.props.history}/>
          </div>
        </header>
      </div>
    )
  }
}

export default HomePage;
