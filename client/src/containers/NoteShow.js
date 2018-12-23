import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteNote } from '../actions/Notes';

class NoteShow extends Component {
  handleOnClick = () => {
    this.props.deleteNote(this.props.note)
    this.props.history.push('/notes')
  }

  render() {
    const {note} = this.props;

    return(
      <div>
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        <button onClick={this.handleOnClick}>Delete</button>
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteNote
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteShow);
