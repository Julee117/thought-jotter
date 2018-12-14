import React, { Component } from 'react';

class NoteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: ""
    }
  }

  render() {
    return (
      <div>
        <h1>Create new note</h1>
        <form>
        </form>
      </div>
    )
  }
}

export default NoteForm;
