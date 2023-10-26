import { useEffect, useState } from "react";
import { Alert, Card, Container, Spinner } from "react-bootstrap";

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
    fetchFilm();
  }, []);

  return (
    <>
      <h3 className="fw-bold fs-5 text-white ms-3 mt-3 mb-3 fluid">Trending Now</h3>
      <Container fluid className="horizontal-scroll-container">
        {isLoading && !error && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Wait..</span>
          </Spinner>
        )}
        {error && !isLoading && <Alert variant="danger">{error ? error : "Errore nel trovare i film"}</Alert>}
        <div className="d-flex">
          {film.map(movie => (
            <Card key={movie.imdbID} className="netflix-card">
              <Card.Img src={movie.Poster} className="h-100" />
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Gallery;
