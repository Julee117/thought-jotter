import React from 'react';

const NoteCard = ({note}) => 
  <div>
    <h2>{note.title}</h2>
    <p>{note.date.split("T")[0]}</p>
  </div>


export default NoteCard;
