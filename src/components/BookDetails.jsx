import React from "react";
import { useNavigate, useParams } from "react-router";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import fantasyBooks from "../data/fantasy.json";
import CommentArea from "./CommentArea";

function BookDetails() {
  const navigate = useNavigate();
  const { asin } = useParams();

  const book = fantasyBooks.find((b) => b.asin === asin);

  if (!book) return <h2 className="text-center mt-5">Libro non trovato!</h2>;

  return (
    <Container className="mt-5">
      <Button variant="outline-secondary" className="mb-3" onClick={() => navigate(-1)}>
        <i className="bi bi-arrow-left"></i> Torna alla Home
      </Button>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>Categoria: {book.category}</Card.Text>
              <Card.Text className="fw-bold">Prezzo: €{book.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          {/* Riutilizziamo la nostra mitica CommentArea! */}
          <CommentArea asin={asin} />
        </Col>
      </Row>
    </Container>
  );
}

export default BookDetails;
