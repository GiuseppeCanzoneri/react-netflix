import React from "react";
import { Navbar, Container, Nav, NavDropdown, Row, Col, Button } from "react-bootstrap";
import logo from "../netflix_logo.png";
import kidsIcon from "../kids_icon.png";

class MyNav extends React.Component {
  render() {
    return (
      <>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={logo} alt="logo" className="navbar-logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
              <Nav className="me-auto mb-2 mb-lg-0">
                <Nav.Link href="#" className="nav-link active text-white" aria-current="page">
                  Home
                </Nav.Link>
                <Nav.Link href="#" className="nav-link active fw-bold text-white">
                  TV Show
                </Nav.Link>
                <Nav.Link href="#" className="nav-link active text-white">
                  Movies
                </Nav.Link>
                <Nav.Link href="#" className="nav-link active text-white">
                  Recently Added
                </Nav.Link>
                <Nav.Link href="#" className="nav-link active text-white">
                  My List
                </Nav.Link>
              </Nav>
              <div className="d-flex">
                <Nav.Link href="#" className="nav-link active text-white me-2 mt-3"></Nav.Link>
                <Nav.Link href="#" className="nav-link active text-white fw-bold me-2 mt-3">
                  KIDS
                </Nav.Link>
                <Nav.Link href="#" className="nav-link active text-white me-2 mt-3"></Nav.Link>
                <NavDropdown
                  title={<img src={kidsIcon} alt="logo" className="navbar-logo" />}
                  id="navbarScrollingDropdown"
                  className="text-white"
                >
                  <NavDropdown.Item href="#">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
                </NavDropdown>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container fluid className="bg-dark">
          <Row className="align-items-center">
            <Col md={6} className="d-flex justify-content-start">
              <h2 className="fw-bold  me-2 mt-3 text-white fw-bold fs-5">TV Shows</h2>
              <div className="dropdown">
                <Button
                  variant="outline-light"
                  className="btn-square dropdown-toggle ms-2 mt-2 fw-bold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Genres
                </Button>
              </div>
            </Col>
            <Col md={6} className="d-flex justify-content-end mt-3">
              <div className="me-3">
                <Button variant="outline-light" className="btn-square"></Button>
                <Button variant="outline-light" className="btn-square"></Button>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default MyNav;
