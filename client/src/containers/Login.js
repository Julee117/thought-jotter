import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/Users';
import { bindActionCreators } from 'redux';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.login(this.state, () => {
      this.props.history.push("/notes")
    })
  }

  render() {
    return (
      <div>
        <h1>Log in</h1>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="Username"
              onChange={this.handleChange}
              name="username"
              value={this.state.username}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
              name="password"
              value={this.state.password}
            />
          </div>
          <div>{this.props.errorMessage}</div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.users.errorMessage };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
