import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions/Notes';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import NoteForm from './NoteForm';
import NotesList from '../components/NotesList';
import NoteShow from './NoteShow';

class NotesPage extends Component {

  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    const { match, notes } = this.props;
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div>
        </div>
        <div>
          <Switch>
            <Route path={`${match.url}/new`} component={NoteForm} />
            <Route path={`${match.url}/:id`} component={NoteShow} />
            <Route exact path={`${match.url}`} render={() => <NotesList notes={notes} />} />
          </Switch>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getNotes
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesPage);
