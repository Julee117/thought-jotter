import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote } from './actions/Notes';
import { bindActionCreators } from 'redux';

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
      <div>
        <h1>Create new note</h1>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              onChange={this.handleChange}
              name="title"
              value={this.state.title}
            />
          </div>
          <div>
            <label htmlFor="content">Content:</label>
            <textarea
              type="text"
              onChange={this.handleChange}
              name="content"
              value={this.state.content}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createNote
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(NoteForm);
