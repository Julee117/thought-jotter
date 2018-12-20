import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteShow extends Component {

  render() {
    const {note} = this.props;

    return(
      <div>
        <h3>{note.title}</h3>
        <p>{note.content}</p>
      </div>
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

export default connect(mapStateToProps)(NoteShow);
