import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <Container className="not-found">
      <h1 className="not-found-title">404 - Not Found</h1>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <Link to="/">Go to Home</Link>
    </Container>
  );
};

export default NotFound;
