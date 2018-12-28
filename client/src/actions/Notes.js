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
  const token = localStorage.getItem('token') || null;

  return dispatch => {
    return fetch(`${API_URL}notes`, {
      headers: {
        "Content-Type": "application/json",
        "authorization": token}
    })
      .then(response => response.json())
      .then(notes => dispatch(setNotes(notes)))
      .catch(error => console.log(error));
  }
}

export const createNote = note => {
  const token = localStorage.getItem('token') || null;

  return dispatch => {
    return fetch(`${API_URL}notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": token},
      body: JSON.stringify({
        title: note.title,
        content: note.content,
        })
    })
      .then(response => response.json())
      .then(note => dispatch(addNote(note)))
      .catch(error => console.log(error))
  }
}

export const deleteNote = note => {
  const token = localStorage.getItem('token') || null;

  return dispatch => {
    return fetch(`${API_URL}notes/${note._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "authorization": token}
  })
    .then((response) => dispatch(removeNote(note)))
    .catch(error => console.log(error))
  }
}
