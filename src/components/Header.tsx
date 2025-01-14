import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="nav-container">
        <a href="/" className="logo">
          Layze
        </a>
        <nav className="nav">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/skills" className="nav-link">
            Skills
          </a>
          <a href="/experience" className="nav-link">
            Experience
          </a>
          <a href="/education" className="nav-link">
            Education
          </a>
          <a href="/contact" className="nav-link contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
