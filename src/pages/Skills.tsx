import { Container, Col } from "react-bootstrap";
import { FaJs, FaReact, FaNodeJs, FaGit, FaFigma, FaJava, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiTypescript, SiSharp, SiVite, SiFirebase, SiMysql, SiVercel, SiC } from "react-icons/si";
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
  skills: { icon: React.ElementType; name: string; }[];
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
    { icon: FaJs, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiSharp, name: "C#" },
    { icon: FaJava, name: "Java" },
    { icon: FaHtml5, name: "HTML" },
    { icon: FaCss3Alt, name: "CSS" },
    { icon: SiC, name: "C" },
  ];

  const frameworks = [
    { icon: FaReact, name: "React" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: FaReact, name: "React Native" },
    { icon: SiVite, name: "Vite" },
  ];

  const tools = [
    { icon: FaGit, name: "Git" },
    { icon: FaGithub, name: "GitHub" },
    { icon: FaFigma, name: "Figma" },
    { icon: SiFirebase, name: "Firebase" },
    { icon: SiMysql, name: "SQL Server" },
    { icon: SiVercel, name: "Vercel" },
  ];

  return (
    <Container className="skills-container">
      <h1 className="skills-title">Skills</h1>
      <p className="skills-description">These are my skills</p>
      <Container className="skills-list-container">
        <SkillSection title="Programming Languages" skills={programmingLanguages} />
        <SkillSection title="Libraries & Frameworks" skills={frameworks} />
        <SkillSection title="Tools & Platforms" skills={tools} />
      </Container>
    </Container>
  );
}

export default Skills;
