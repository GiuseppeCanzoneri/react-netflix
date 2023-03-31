import { Component } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

class MyFooter extends Component {
  render() {
    return (
      <>
        <footer className="bg-dark text-secondary mt-5">
          <Container className="py-4">
            <Row>
              <Col lg={4} className="mb-4 mb-lg-0">
                <ListGroup horizontal className="justify-content-start">
                  <ListGroup.Item className="border-0 me-3">
                    <a href="#" className="text-secondary text-decoration-none">
                      Youtube
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 me-3">
                    <a href="#" className="text-secondary text-decoration-none">
                      Instagram
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 me-3">
                    <a href="#" className="text-secondary text-decoration-none">
                      Twitter
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 me-3">
                    <a href="#" className="text-secondary text-decoration-none">
                      Facebook
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col lg={8}>
                <Row>
                  <Col md={4}>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="border-0 bg-dark text-secondary">
                        <a href="#" className="text-reset text-decoration-none">
                          Audio and Subtitles
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-dark text-secondary">
                        <a href="#" className="text-reset text-decoration-none">
                          Media Center
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-dark text-secondary">
                        <a href="#" className="text-reset text-decoration-none">
                          Privacy
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-dark text-secondary">
                        <a href="#" className="text-reset text-decoration-none">
                          Contact Us
                        </a>
                      </ListGroup.Item>
                    </ListGroup>
                    <button type="button" className="btn btn-outline-secondary btn-square mt-3" disabled>
                      Service Code
                    </button>
                  </Col>
                  <Col md={4}>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="border-0 bg-dark text-secondary">
                        <a href="#" className="text-reset text-decoration-none">
                          Audio Description
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-dark text-secondary">
                        <a href="#" className="text-reset text-decoration-none">
                          Investor Relations
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-dark text-secondary">
                        <a href="#" className="text-reset text-decoration-none">
                          Legal Noticies
                        </a>
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col md={4}>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="border-0 bg-dark text-secondary">
                        <a href="#" className="text-reset text-decoration-none">
                          Help Center
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-dark text-secondary">
                        <a href="#" className="text-reset text-decoration-none">
                          Jobs
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-dark text-secondary">
                        <a href="#" className="text-reset text-decoration-none">
                          Cookie Preferences
                        </a>
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
                <hr className="bg-secondary my-4" />
                <Row>
                  <Col>
                    <p>Netflix, Inc. &#169; 2023</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default MyFooter;
