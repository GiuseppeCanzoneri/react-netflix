import { useEffect, useState } from "react";
import { Alert, Card, Col, Container, Row, Spinner } from "react-bootstrap";

const Gallery = props => {
  const [film, SetFilm] = useState([]);
  const [error, SetError] = useState(false);
  const [isLoading, SetIsLoading] = useState(true);

  const fetchFilm = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=650ba364&s=the+conjuring");

      if (response.ok) {
        const data = await response.json();
        SetFilm(data.Search);
        SetIsLoading(false);
      } else {
        SetError(true);
        SetIsLoading(false);
      }
    } catch (error) {
      SetError(true);
      SetIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("DidMount()");
    fetchFilm();
  }, []);

  return (
    <Container fluid className="mt-3">
      <h3 className="fw-bold fs-5 text-white">Trending Now</h3>
      {isLoading && !error && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Wait..</span>
        </Spinner>
      )}
      <Row className="mt-3">
        {error && !isLoading && <Alert variant="danger">{error ? error : "Errore nel trovare i film"}</Alert>}
        {film.map(movie => (
          <Col key={movie.imdbID} xs={6} md={2} className="mb-4">
            <Card className="border-0 h-100">
              <Card.Img variant="top" src={movie.Poster} className="h-100" />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
