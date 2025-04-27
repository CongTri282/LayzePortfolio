import { Container, Row, Card, CardBody } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./Experience.css";

function Experience() {
  const [isBottomCardVisible, setBottomCardVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBottomCardVisible(true), 500); // Delay matches animation-delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container className="experience-container">
      <h1 className="experience-title">Experience</h1>
      <p className="experience-description">Here is a brief overview of my work experience.</p>
      <Container className="experience-content">
        <Row className="experience-row-top line-animation">
          <Card className="experience-card-top fade-up">
            <CardBody>
              <Card.Title className="experience-card-title">University Student</Card.Title>
              <Card.Subtitle className="experience-card-subtitle">2022 - 2025</Card.Subtitle>
              <Card.Text className="experience-card-text">Studying Software Engineering at FPT University.</Card.Text>
            </CardBody>
          </Card>
          <Card className="experience-card-hidden"></Card>
        </Row>
        <Row className="experience-row-bottom line-animation">
          <Card className="experience-card-hidden"></Card>
          <Card
            className={`experience-card-bottom fade-down ${
              isBottomCardVisible ? "" : "hidden"
            }`}
          >
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
