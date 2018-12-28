import {combineReducers} from 'redux';
import notesReducer from './NotesReducer';
import usersReducer from './UsersReducer';

const rootReducer = combineReducers({
  notes: notesReducer,
  users: usersReducer
})

export default rootReducer;
