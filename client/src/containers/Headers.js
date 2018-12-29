import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/Users';
import { bindActionCreators } from 'redux';
import { Navbar, Nav, NavbarBrand, NavItem, Button } from 'reactstrap';

class Headers extends Component {

  handleOnClick = event => {
    event.preventDefault();
    this.props.logout();
    this.props.history.push('/')
  }

  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div className="header">
          <Navbar>
            <NavbarBrand><strong className="brand">Thought Jotter</strong></NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button color="link"><NavLink to="/notes" style={{color: 'white'}}>Home</NavLink></Button>
                <Button color="link"><NavLink to="/notes/new" style={{color: 'white'}}>New Note</NavLink></Button>
                <Button onClick={this.handleOnClick} color="link" style={{color: 'white'}}>Log out</Button>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
      )
    } else {
      return (
        <div className="header">
          <Navbar>
            <NavbarBrand><strong className="brand">Thought Jotter</strong></NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button color="link" id="btn"><NavLink className="nav" to="/login" style={{textDecoration: 'none', color: 'white'}}>Log in</NavLink></Button>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Headers);
