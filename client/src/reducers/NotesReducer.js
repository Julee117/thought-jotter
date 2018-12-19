export default (state = [], action) => {
  switch(action.type) {
    case 'GET_NOTES':
      return action.notes;
    case 'CREATE_NOTE':
      return state.concat(action.note);
    default:
      return state;
  }
}
