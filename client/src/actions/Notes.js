const API_URL = process.env.REACT_APP_API_URL;

const setNotes = notes => {
  return {
    type: 'GET_NOTES',
    notes
  }
}

const addNote = note => {
  return {
    type: 'CREATE_NOTE',
    note
  }
}

const removeNote = note => {
  return {
    type: 'DELETE_NOTE',
    note
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

export const createNote = note => {
  return dispatch => {
    return fetch(`${API_URL}notes`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        title: note.title,
        content: note.content}),
    })
      .then(response => response.json())
      .then(note => dispatch(addNote(note)))
      .catch(error => console.log(error))
  }
}

export const deleteNote = note => {
  return dispatch => {
    return fetch(`${API_URL}notes/${note._id}`, {
      method: "DELETE"
  })
    .then(() => dispatch(removeNote(note)))
    .catch(error => console.log(error))
  }
}
