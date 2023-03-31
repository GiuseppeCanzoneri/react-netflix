import { Component } from "react";
import { Alert, Card, Col, Container, Row, Spinner } from "react-bootstrap";

class Gallery extends Component {
  state = {
    film: [],
    error: false,
    isLoading: true,
  };

  fetchFilm = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=650ba364&s=the+conjuring");

      if (response.ok) {
        const data = await response.json();
        this.setState({ film: data.Search, isLoading: false });
      } else {
        this.setState({ error: true, isLoading: false });
      }
    } catch (error) {
      this.setState({ error: true, errorMsg: error.message, isLoading: false });
    }
  };

  componentDidMount = () => {
    this.fetchFilm();
  };

  render() {
    return (
      <Container fluid className="mt-3">
        <h3 className="fw-bold fs-5 text-white">Trending Now</h3>
        {this.state.isLoading && !this.state.error && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Wait..</span>
          </Spinner>
        )}
        <Row className="mt-3">
          {this.state.error && !this.state.isLoading && (
            <Alert variant="danger">{this.state.errorMsg ? this.state.errorMsg : "Errore nel trovare i film"}</Alert>
          )}
          {this.state.film.slice(0, 3).map(movie => (
            <Col key={movie.imdbID} xs={6} md={2} className="mb-4">
              <Card
                className="border-0"
                style={{
                  marginRight: "-23px",
                }}
              >
                <Card.Img variant="top" src={movie.Poster} />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Gallery;
