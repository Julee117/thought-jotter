import React from 'react';
import NoteCard from './NoteCard';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const NotesList = ({notes}) => {
  const noteCards = notes.map(note =>
    <Col key={note._id} md="4">
      <Col md="12" className="noteCard">
        <Link  to={`/notes/${note._id}`} style={{textDecoration: 'none'}}>
          <NoteCard note={note} />
        </Link>
      </Col>
    </Col>
  );

  return(
    <div>
      <Container>
        <Row className="justify-content-around">
          {noteCards}
        </Row>
      </Container>
    </div>
  )
}

export default NotesList;
