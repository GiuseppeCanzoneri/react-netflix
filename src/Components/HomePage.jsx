import { Col, Container, Row } from "react-bootstrap";
import Gallery from "./Gallery";
import Gallery2 from "./Gallery2";
import Gallery3 from "./Gallery3";

const HomePage = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Gallery />
          <Gallery2 />
          <Gallery3 />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
