import React, { Component } from 'react';

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

  render() {
    return (
      <div>
        <h1>Create new note</h1>
        <form>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default NoteForm;
