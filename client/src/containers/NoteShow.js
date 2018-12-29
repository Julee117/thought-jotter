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

  render() {
    const {note} = this.props;
    const newLines = (note.content).split("\n").map((item, key) => {
      return <span key={key}>{item}<br/></span>
    })

    return(
      <Container>
        <div className="note col-lg-6">
          <h3 className="title">{note.title}</h3>
          {newLines}
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
