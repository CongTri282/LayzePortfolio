import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Layze. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
