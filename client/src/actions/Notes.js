const API_URL = process.env.REACT_APP_API_URL;

const setNotes = notes => {
  return {
    type: 'GET_NOTES',
    notes
  }
}

export const getNotes = () => {
  return dispatch => {
    return fetch(`${API_URL}notes`)
      .then(response => response.json())
      .then(notes => dispatch(setNotes(notes)))
      .catch(error => console.log(error));
  }
}
