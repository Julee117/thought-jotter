import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage';
import NotesPage from './containers/NotesPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/notes" component={NotesPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
