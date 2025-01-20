import { FaLinkedin, FaEnvelope, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import "./Contact.css";
import { Container } from "react-bootstrap";

function Contact() {
  return (
    <Container className="contact-container">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-text">Want to get in touch? I'd love to hear from you. Here's how you can reach me...</p>
      <ul className="contact-list">
        <li className="contact-list-item">
          <a href="mailto:layzegot@gmail.com" className="contact-link">
            <FaEnvelope size={35} /> Email: layzegot@gmail.com
          </a>
        </li>
        <li className="contact-list-item">
          <a
            href="https://www.linkedin.com/in/hoang-cong-tri-vo-a6b7b3346/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaLinkedin size={35} /> LinkedIn: Hoang Cong Tri (Layze) Vo
          </a>
        </li>
        <li className="contact-list-item">
          <a
            href="https://www.facebook.com/vohoangcongtri"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaFacebook size={35} /> Facebook: Công Trí (Layze)
          </a>
        </li>
        <li className="contact-list-item">
          <a
            href="https://www.instagram.com/vh.congtri/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaInstagram size={35} /> Instagram: vh.congtri (Layze)
          </a>
        </li>
        <li className="contact-list-item">
          <a href="https://github.com/CongTri282" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaGithub size={35} /> GitHub: CongTri282 (Layze)
          </a>
        </li>
      </ul>
    </Container>
  );
}

export default Contact;
