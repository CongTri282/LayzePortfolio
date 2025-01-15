import { Col, Container, Row } from "react-bootstrap";
import Button from "../components/Button";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Home.css";

import Layze from "../assets/images/avatar.png";

function Home() {
  return (
    <Container className="home-container">
      <Col className="home-col-image">
        <img src={Layze} alt="Avatar" />
      </Col>

      <Col className="home-col-content">
        <Row className="home-heading">
          <p>Hi, It's </p>
          <p style={{ marginLeft: "10px", color: "blueviolet" }}>Layze</p>
        </Row>
        <Row className="home-subheading">
          <p>I'm a</p>
          <p style={{ marginLeft: "7px", color: "blueviolet" }}>Web Developer</p>
          <p style={{ marginLeft: "7px" }}>on my way to become</p>
          <p style={{ marginLeft: "7px", color: "blueviolet" }}>Full Stack Developer</p>
        </Row>
        <Row className="home-content">
          <p>
            This is my portfolio website. I have experience in building web applications using React, Node.js, Vite and
            MySQL.
          </p>
          <p>I am passionate about learning new technologies and building projects that solve real-world problems.</p>
        </Row>
        <Row className="home-icons">
          <a href="https://www.facebook.com/vohoangcongtri" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={35} />
          </a>
          <a href="https://www.instagram.com/vh.congtri/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={35} />
          </a>
          <a
            href="https://www.linkedin.com/in/ho%C3%A0ng-c%C3%B4ng-tr%C3%AD-v%C3%B5-a6b7b3346/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={35} />
          </a>
          <a href="https://github.com/CongTri282" target="_blank" rel="noopener noreferrer">
            <FaGithub size={35} />
          </a>
          <a href="mailto:layzegot@example.com">
            <FaEnvelope size={35} />
          </a>
        </Row>
        <Button content="Contact Me" href="/contact" />
      </Col>
    </Container>
  );
}

export default Home;
