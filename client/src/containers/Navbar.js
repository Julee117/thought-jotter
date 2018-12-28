import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/Users';
import { bindActionCreators } from 'redux';

class Navbar extends Component {

  handleOnClick = event => {
    event.preventDefault();
    this.props.logout();
    this.props.history.push('/')
  }

  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div>
          <button><NavLink to="/notes">Home</NavLink></button>
          <button><NavLink to="/notes/new">New Note</NavLink></button>
          <button onClick={this.handleOnClick}>Log out</button>
        </div>
      )
    } else {
      return (
        <div>
          <button><NavLink to="/login">Log in</NavLink></button>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <span>Thought Jotter</span>
        {this.renderLinks()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.users.authenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logout
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
