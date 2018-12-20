import React from 'react';
import NoteCard from './NoteCard';
import { Link } from 'react-router-dom';

const NotesList = ({notes}) => {
  const noteCards = notes.map(note =>
    <Link key={note._id} to={`/notes/${note._id}`}>
      <NoteCard note={note} />
    </Link>
  );

  return(
    <div>
      <h1>Notes</h1>
      {noteCards}
    </div>
  )
}

export default NotesList;
