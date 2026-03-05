import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import fantasyBooks from "../data/fantasy.json";

function AllTheBooks() {
  return (
    <Container className="my-5">
      <Row className="g-5">
        {fantasyBooks.map((book) => (
          <Col xs={12} sm={6} md={4} lg={3} key={book.asin}>
            <Card className="h-100 shadow-sm book-card">
              <div className="img-container">
                <Card.Img variant="top" src={book.img} style={{ objectFit: "cover", height: "440px" }} />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{book.title}</Card.Title>
                <div className="d-flex justify-content-between align-items-center ">
                  <Card.Text className="fw-bold fs-6">€{book.price}</Card.Text>
                  <Button variant="outline-success" size="sm">
                    Dettagli
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;
