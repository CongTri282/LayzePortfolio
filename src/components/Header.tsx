import { useLocation } from "react-router-dom";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  const location = useLocation();

  return (
    <Container className="nav-container">
      <Navbar className="nav">
        <Navbar.Brand href="/" className="logo">
          Layze
        </Navbar.Brand>
        <Nav className="nav-link-container">
          <Nav.Link href="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
            Home
          </Nav.Link>
          <Nav.Link href="/skills" className={`nav-link ${location.pathname === "/skills" ? "active" : ""}`}>
            Skills
          </Nav.Link>
          <Nav.Link href="/experience" className={`nav-link ${location.pathname === "/experience" ? "active" : ""}`}>
            Experience
          </Nav.Link>
          <Nav.Link href="/education" className={`nav-link ${location.pathname === "/education" ? "active" : ""}`}>
            Education
          </Nav.Link>
          <Nav.Link href="/contact" className={`nav-link contact ${location.pathname === "/contact" ? "active" : ""}`}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default Header;
