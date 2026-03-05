import React from "react";
import { Alert, Container } from "react-bootstrap";

function Welcome() {
  return (
    <Container className="my-3">
      <h1>Benvenuti in Epibooks!</h1>
      <Alert variant="info">Esplora la nostra vasta selezione di libri.</Alert>
    </Container>
  );
}

export default Welcome;
