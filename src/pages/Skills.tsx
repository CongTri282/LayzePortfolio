import { Container, Col } from "react-bootstrap";
import { FaJs, FaReact, FaNodeJs, FaGit, FaFigma, FaJava, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiTypescript, SiSharp, SiVite, SiFirebase, SiVercel, SiC } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import "./Skills.css";

interface SkillCardProps {
  icon: React.ElementType;
  name: string;
}

const SkillCard = ({ icon: Icon, name }: SkillCardProps) => (
  <div className="skill-card">
    <div className="skill-icon">
      <Icon size={30} />
    </div>
    <div className="skill-name">{name}</div>
  </div>
);

interface SkillSectionProps {
  title: string;
  skills: { icon: React.ElementType; name: string }[];
}

const SkillSection = ({ title, skills }: SkillSectionProps) => (
  <Col className="skill-section">
    <h2 className="skills-subtitle">{title}</h2>
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <SkillCard key={index} icon={skill.icon} name={skill.name} />
      ))}
    </div>
  </Col>
);

function Skills() {
  const programmingLanguages = [
    { icon: FaHtml5, name: "HTML" },
    { icon: FaCss3Alt, name: "CSS" },
    { icon: FaJs, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: FaJava, name: "Java" },
    { icon: SiC, name: "C" },
    { icon: SiSharp, name: "C#" },
  ];

  const frameworks = [
    { icon: FaNodeJs, name: "Node.js" },
    { icon: FaReact, name: "React" },
    { icon: FaReact, name: "React Native" },
    { icon: SiVite, name: "Vite" },
  ];

  const tools = [
    { icon: FaGit, name: "Git" },
    { icon: FaGithub, name: "GitHub" },
    { icon: FaFigma, name: "Figma" },
    { icon: SiFirebase, name: "Firebase" },
    { icon: DiMsqlServer, name: "SQL Server" },
    { icon: SiVercel, name: "Vercel" },
  ];

  return (
    <Container className="skills-container">
      <h1 className="skills-title">Skills</h1>
      <p className="skills-description">
        Here are my technical skills and development tools. I'm always excited to learn new technologies.
      </p>
      <Container className="skills-list-container">
        <SkillSection title="Programming Languages" skills={programmingLanguages} />
        <SkillSection title="Libraries & Frameworks" skills={frameworks} />
        <SkillSection title="Tools & Platforms" skills={tools} />
      </Container>
    </Container>
  );
}

export default Skills;
