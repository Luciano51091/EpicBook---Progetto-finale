import { Card } from "react-bootstrap";

function SingleBook({ book, selectedAsin, setSelectedAsin }) {
  const isSelected = selectedAsin === book.asin;

  return (
    <>
      <Card onClick={() => setSelectedAsin(book.asin)} style={{ border: isSelected ? "3px solid red" : "1px solid #dee2e6" }}>
        <Card.Img src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleBook;
