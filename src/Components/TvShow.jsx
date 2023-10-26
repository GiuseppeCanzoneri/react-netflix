import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const TvShow = props => {
  const [film, setFilm] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFilm = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=650ba364&s=hulk");

      if (response.ok) {
        const data = await response.json();
        setFilm(data.Search);
        setIsLoading(false);
      } else {
        setError(true);
        setIsLoading(false);
      }
    } catch (error) {
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("DidMount()");
    fetchFilm();
  }, []);

  return (
    <Container fluid className="mt-3">
      <h3 className="fw-bold fs-5 text-white">HULK</h3>
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
              <Link to={`/MovieDetails/${movie.imdbID}`}>
                <Button variant="success" className="w-100">
                  More Details
                </Button>{" "}
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TvShow;
