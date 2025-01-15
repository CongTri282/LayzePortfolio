import { useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="nav-container">
        <a href="/" className="logo">
          Layze
        </a>
        <nav className="nav">
          <a href="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
            Home
          </a>
          <a href="/skills" className={`nav-link ${location.pathname === "/skills" ? "active" : ""}`}>
            Skills
          </a>
          <a href="/experience" className={`nav-link ${location.pathname === "/experience" ? "active" : ""}`}>
            Experience
          </a>
          <a href="/education" className={`nav-link ${location.pathname === "/education" ? "active" : ""}`}>
            Education
          </a>
          <a href="/contact" className={`nav-link contact ${location.pathname === "/contact" ? "active" : ""}`}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
