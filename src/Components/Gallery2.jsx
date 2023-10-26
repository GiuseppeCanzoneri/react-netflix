import { useEffect, useState } from "react";
import { Alert, Card, Col, Container, Spinner } from "react-bootstrap";

const Gallery2 = props => {
  const [film, SetFilm] = useState([]);
  const [error, SetError] = useState(false);
  const [isLoading, SetIsLoading] = useState(true);

  const fetchFilm = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=650ba364&s=avengers");

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
    <>
      <h3 className="fw-bold fs-5 text-white ms-3 mt-3 mb-3 fluid">Watch it Again</h3>
      <Container fluid className="horizontal-scroll-container">
        {isLoading && !error && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Wait..</span>
          </Spinner>
        )}

        {error && !isLoading && <Alert variant="danger">{error ? error : "Errore nel trovare i film"}</Alert>}
        {film.map(movie => (
          <Col key={movie.imdbID} xs={6} md={2} className="mb-4">
            <Card className="netflix-card">
              <Card.Img variant="top" src={movie.Poster} className="h-100" />
            </Card>
          </Col>
        ))}
      </Container>
    </>
  );
};

export default Gallery2;
