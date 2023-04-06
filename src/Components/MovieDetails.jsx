import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieComments, setMovieComments] = useState([]);
  const params = useParams();
  const location = useLocation();
  console.log(useParams());
  console.log(location);

  useEffect(() => {
    fetchDetails();
    fetchComments();
  }, []);
  const imdbID = params.imdbId;
  console.log(imdbID);

  const fetchDetails = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=650ba364&i=` + params.imdbID);
      if (response.ok) {
        const data = await response.json();
        setMovieDetails(data);
        console.log(data);
      } else {
        console.log("errore nel recupero  dei dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/` + params.imdbID, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkOWIxMGIxNGE1MTAwMTQ2NjNmZjQiLCJpYXQiOjE2ODA3MTA0MTYsImV4cCI6MTY4MTkyMDAxNn0.U6ZuNRkB7ifE_eL4_Kip99Mv3-9dwC5tWwvDxhOaQHM",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setMovieComments(data);
      } else {
        console.log("errore nel recupero dei dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="text-white">
      <Row>
        <Col md={6}>
          <img src={movieDetails.Poster} alt="" className="img-fluid rounded" />
        </Col>
        <Col md={6}>
          <h2 className="text-white">{movieDetails.Title}</h2>
          <p>Anno: {movieDetails.Year}</p>
          <p>Attori: {movieDetails.Actors}</p>
          <p>Genere: {movieDetails.Genre}</p>
          <p>Regista: {movieDetails.Director}</p>
          <p>Scrittrice: {movieDetails.Writer}</p>
          <p className="text-center">Trama:</p> <p className="fst-italic">{movieDetails.Plot}</p>
          {movieComments.map(comment => (
            <div className="text-white" key={comment._id}>
              <p>{comment.comment}</p>
              <p>{comment.rate}</p>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
