import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote } from '../actions/Notes';
import { bindActionCreators } from 'redux';
import { Container, Col, Form, FormGroup, Formcontrol, Label, Input, Button } from 'reactstrap';

class NoteForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: ""
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
    this.props.createNote(this.state);
    this.props.history.push('/notes')
    this.setState({
      title: "",
      content: ""
    })
  }

  render() {
    return (
      <Container className="login">
        <div className="forms">
          <h2 className="title">Create new note</h2>
          <Form onSubmit={this.handleOnSubmit}>
            <Col>
              <FormGroup>
                <Label htmlFor="title">Title:</Label>
                <Input
                  type="text"
                  onChange={this.handleChange}
                  name="title"
                  value={this.state.title}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label htmlFor="content">Content:</Label>
                <Input type="textarea"
                  onChange={this.handleChange}
                  name="content"
                  value={this.state.content}
                />
              </FormGroup>
            </Col>
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createNote
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(NoteForm);
