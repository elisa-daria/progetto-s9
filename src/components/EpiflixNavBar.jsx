import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const EpiflixNavBar = (props) => {
  return (
    <Navbar expand="md" bg="black" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home" className="fs-2 fw-bold">
          <img
            alt={props.logoAlt}
            src={props.logo}
            width="90"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link active href="#" className="fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              My List
            </Nav.Link>
          </Nav>
          <div className="flex-column flex-md-row d-flex align-items-start align-items-md-center text-white">
            <i className="bi bi-search icons mb-2 me-2"></i>
            <div id="kids" className="fw-bold mb-2 me-2">
              KIDS
            </div>
            <i className="bi bi-bell icons mb-2 me-2"></i>
            <i className="bi bi-person-circle icons mb-2 me-2"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default EpiflixNavBar;
