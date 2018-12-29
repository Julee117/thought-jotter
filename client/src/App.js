import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import Headers from './containers/Headers';

class App extends Component {
  render(){
    return (
      <div>
        <Headers history={this.props.history}/>
        {this.props.children}
      </div>
    )
  }
}

export default withRouter(App);
