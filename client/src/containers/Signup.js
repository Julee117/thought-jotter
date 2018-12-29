import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/Users';
import { bindActionCreators } from 'redux';
import { Container, Col, Form, FormGroup, Input, Button } from 'reactstrap';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
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
    this.props.signup(this.state, () => {
      this.props.history.push("/notes")
    })
  }

  render() {
    return (
      <Container>
        <div className="forms">
          <h2 className="title">Sign Up</h2>
          <Form onSubmit={this.handleOnSubmit} classname="form">
            <Col>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Username"
                  onChange={this.handleChange}
                  name="username"
                  value={this.state.username}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input
                  type="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                  name="email"
                  value={this.state.email}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input
                  type="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                  name="password"
                  value={this.state.password}
                />
              </FormGroup>
            </Col>
            <div className="error">{this.props.errorMessage}</div>
            <Col>
              <FormGroup>
                <Button color="primary" type="submit" className="btn-block">Submit</Button>
              </FormGroup>
            </Col>
          </Form>
        </div>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.users.errorMessage };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    signup
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
