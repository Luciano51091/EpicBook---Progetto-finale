import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import fantasyBooks from "../data/fantasy.json";
import SingleBook from "./SingleBook";

function AllTheBooks({ searchQuery }) {
  const filteredBooks = fantasyBooks.filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      <Container className="my-5">
        {filteredBooks.length === 0 && <p className="text-center mt-3">Nessun libro trovato...</p>}

        <Row className="g-5">
          {filteredBooks.map((book) => (
            <Col sm={6} md={4} lg={3} key={book.asin}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default AllTheBooks;
