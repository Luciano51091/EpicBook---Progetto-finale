import { Col, Container, Row } from "react-bootstrap";
import fantasyBooks from "../data/fantasy.json";
import SingleBook from "./SingleBook";
import { useState } from "react";
import CommentArea from "./CommentArea";

function AllTheBooks({ searchQuery }) {
  const filteredBooks = fantasyBooks.filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()));
  const [selectedAsin, setSelectedAsin] = useState(null);

  return (
    <>
      <Container className="my-5">
        {filteredBooks.length === 0 && <p className="text-center mt-3">Nessun libro trovato...</p>}
        <Row>
          <Col md={9}>
            <Row>
              {filteredBooks.map((book) => (
                <Col sm={6} md={4} lg={3} key={book.asin}>
                  <SingleBook book={book} selectedAsin={selectedAsin} setSelectedAsin={setSelectedAsin} />
                </Col>
              ))}
            </Row>
          </Col>

          <Col md={3}>
            <div className="sticky-top" style={{ top: "100px", zIndex: 1 }}>
              <CommentArea asin={selectedAsin} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AllTheBooks;
