import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="display-1">404</h1>
          <h2>Oops! Pagina non trovata</h2>
          <Button variant="primary" onClick={() => navigate("/")}>
            Torna in Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
