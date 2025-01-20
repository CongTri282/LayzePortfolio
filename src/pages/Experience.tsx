import { Container, Row, Col, Card, CardBody } from "react-bootstrap";
import "./Experience.css";

function Experience() {
  return (
    <Container className="experience-container">
      <h1 className="experience-title">Experience</h1>
      <p className="experience-description">Here is a brief overview of my work experience.</p>
      <Container className="experience-content">
        <Row className="experience-row-top">
          <Card className="experience-card-top">
            <CardBody>
              <Card.Title className="experience-card-title">University Student</Card.Title>
              <Card.Subtitle className="experience-card-subtitle">2022 - 2025</Card.Subtitle>
              <Card.Text className="experience-card-text">Studying Software Engineering at FPT University.</Card.Text>
            </CardBody>
          </Card>
          <Card className="experience-card-hidden"></Card>
        </Row>
        <Row className="experience-row-bottom">
          <Card className="experience-card-hidden"></Card>
          <Card className="experience-card-bottom">
            <CardBody>
              <Card.Title className="experience-card-title">Web Developer</Card.Title>
              <Card.Subtitle className="experience-card-subtitle">2025 - Present</Card.Subtitle>
              <Card.Text className="experience-card-text">
                Doing freelance work and building projects. Looking for new opportunities.
              </Card.Text>
            </CardBody>
          </Card>
          <Card className="experience-card-hidden"></Card>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
