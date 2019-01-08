import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateNote } from '../actions/Notes';
import { bindActionCreators } from 'redux';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class EditNoteForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      _id: props.note._id,
      title: props.note.title,
      content: props.note.content
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
    this.props.updateNote(this.state)
    this.props.history.push(`/notes/${this.props.note._id}`)
  }

  render() {
    return (
      <Container className="login">
        <div className="forms">
          <h2 className="title">Edit note</h2>
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

const mapStateToProps = (state, ownProps) => {
  const note = state.notes.find(note => note._id === ownProps.match.params.id)

  if (note) {
    return { note }
  } else {
    return { note: {} }
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateNote
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNoteForm);
