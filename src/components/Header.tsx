import { useLocation } from "react-router-dom";
import "./Header.css";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import Logo from "../assets/images/logoup.png";

function Header() {
  const location = useLocation();

  return (
    <Container className="nav-container">
      <Navbar className="nav">
        <Navbar.Brand href="/" className="logo">
          <Image src={Logo} alt="Logo" height={60} />
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
          <Nav.Link href="/my-project" className={`nav-link ${location.pathname === "/my-project" ? "active" : ""}`}>
            My Projects
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
