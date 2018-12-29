import React, { Component } from 'react';
import Signup from './Signup';

class HomePage extends Component {

  render() {
    return (
      <div>
        <h1 className="homeTitle">
          Welcome to Thought Jotter
        </h1>
        <div>
          <Signup history={this.props.history}/>
        </div>
      </div>
    )
  }
}

export default HomePage;
