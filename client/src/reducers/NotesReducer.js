export default (state = [], action) => {
  switch(action.type) {
    case 'GET_NOTES':
      return action.notes;
    case 'CREATE_NOTE':
      return state.concat(action.note);
    case 'UPDATE_NOTE':
      const index = state.findIndex(item => item._id === action.note._id)
      return [...state.slice(0, index), action.note, ...state.slice(index + 1)]
    case 'DELETE_NOTE':
      const notes = state.filter(note => note._id !== action.note._id);
      return notes;
    default:
      return state;
  }
}
