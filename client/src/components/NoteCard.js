import React from 'react';

const NoteCard = ({note}) =>
  <div>
    <h4>{note.title}</h4>
    <p>{note.date.split("T")[0]}</p>
  </div>


export default NoteCard;
