import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteNote } from '../actions/Notes';
import { Container, Button } from 'reactstrap';

class NoteShow extends Component {

  handleOnClick = () => {
    this.props.deleteNote(this.props.note)
    this.props.history.push('/notes')
  }

  handleEditClick = () => {
    this.props.history.push(`/notes/${this.props.note._id}/edit`)
  }

  render() {
    const {note} = this.props;
    const newLines = () => {
      const match = /\r|\n/.exec(note.content);
      if (match) {
        return note.content.split("\n").map((item, key) => {
          return <span key={key}>{item}<br/></span>
        })
      } else {
        return <p>{note.content}</p>
      }
    }

    return(
      <Container>
        <div className="note col-lg-6">
          <h3 className="title">{note.title}</h3>
          {newLines()}
          <Button onClick={this.handleEditClick} outline color="success" size="sm">Edit</Button>
          <Button onClick={this.handleOnClick} outline color="danger" size="sm" className="deleteButton">Delete</Button>
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
    deleteNote
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteShow);
