import { Card, Container } from "react-bootstrap";
import "./MyProject.css";
import Button from "../components/Button";

interface ProjectCardProps {
  img: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
}

const ProjectCard = ({ img, title, subtitle, description, link }: ProjectCardProps) => (
  <Card className="my-project-card">
    <Card.Img variant="top" src={img} alt={title} className="my-project-card-image" />
    <Card.Body>
      <Card.Title className="my-project-card-title">{title}</Card.Title>
      <Card.Subtitle className="my-project-card-subtitle">Techs: {subtitle}</Card.Subtitle>
      <Card.Text className="my-project-card-text">{description}</Card.Text>
      <Button content="View Project" href={link} />
    </Card.Body>
  </Card>
);

function MyProject() {
  const projects = [
    {
      img: "placehoder",
      title: "Project 1",
      subtitle: "React, Vite",
      description: "This is description",
      link: "projectLink",
    },
    {
      img: "placehoder",
      title: "Project 2",
      subtitle: "React, Vite",
      description: "This is description",
      link: "projectLink",
    },
    {
      img: "placehoder",
      title: "Project 3",
      subtitle: "React, Vite",
      description: "This is description",
      link: "projectLink",
    },
    {
      img: "placehoder",
      title: "Project 4",
      subtitle: "React, Vite",
      description: "This is description",
      link: "projectLink",
    },
  ];

  return (
    <Container className="my-project-container">
      <h2 className="my-project-title">My Projects</h2>
      <p className="my-project-description">Here are some of the projects I have worked on.</p>
      <Container className="my-project-content">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Container>
    </Container>
  );
}

export default MyProject;
