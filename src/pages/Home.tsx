import { Col, Container, Row } from "react-bootstrap";
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
      </Col>
    </Container>
  );
}

export default Home;
