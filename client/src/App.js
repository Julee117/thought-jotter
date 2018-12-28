import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

class App extends Component {
  render(){
    return (
      <div>
        <Navbar history={this.props.history}/>
        {this.props.children}
      </div>
    )
  }
}

export default withRouter(App);
