import { Card, Container, Row, Col, Button } from "react-bootstrap";
import {
  FaBuilding,
  FaExternalLinkAlt,
  FaTools,
  FaUserTie,
} from "react-icons/fa";
import "../css/Experience.css";
import { ExperienceType, ProjectType } from "../types/Types";
import Recruitica from "../assets/Images/Recruitica.png";
import MarketingTools from "../assets/Images/MarketingTools.png";

const experiences: ExperienceType[] = [
  /* keep your existing data */
  {
    id: 1,
    companyName: "11th Agency PK.",
    jobTitle: "Junior Software Developer",
    startDate: "Dec 2024",
    endDate: "Present",
    description: [
      "Worked with Node.js, NestJS (with TypeScript), Prisma, GraphQL, and React (with TypeScript).",
      "Created and added new features in an existing project/product.",
      "Contributed to the enhancement and optimization of existing features.",
    ],
  },
  {
    id: 2,
    companyName: "BRB Group.",
    jobTitle: "Full Stack Developer",
    startDate: "Aug 2024",
    endDate: "Oct 2024",
    description: [
      "Worked with React and Python (Django) in full-stack development.",
      "Developed and optimized web applications.",
      "Collaborated with cross-functional teams on product development.",
    ],
  },
];

const projects: ProjectType[] = [
  {
    id: 1,
    title: "Recruitica Recruitment",
    description:
      "As part of the Recruitica Recruitment project, I developed new features to enhance communication between candidates and clients through email, messaging, and other channels. I also created new frontend pages using React, integrated GraphQL APIs, and implemented backend logic with NestJS, ensuring a seamless experience for both candidates and clients. These improvements helped streamline communication and make the platform more efficient and user-friendly.",
    technologies: [
      "React",
      "NodeJS",
      "NestJS",
      "PostgreSQL",
      "Javascript",
      "Typescript",
    ],
    demoUrl: "https://recruitica.io/",
    codeUrl: "#",
    image: `${Recruitica}`,
  },
];

const Experience = () => {
  return (
    <section className="experience-section py-5">
      <Container className="mb-5">
        <h2 className="section-title text-center mb-5 text-white">
          <span className="title-text">Professional Journey</span>
        </h2>

        <Row className="g-4 justify-content-center">
          {experiences.map((experience) => (
            <Col key={experience.id} xs={12} md={6} lg={6} xl={4}>
              <Card className="h-100 experience-card bg-dark">
                <Card.Body className="position-relative">
                  <div className="card-header mb-4">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <FaBuilding className="company-icon" />
                        <Card.Title className="company-name mt-3">
                          {experience.companyName}
                        </Card.Title>
                      </div>
                      <div className="timeline-badge">
                        {experience.startDate} - {experience.endDate}
                      </div>
                    </div>
                    <Card.Subtitle className="position-title mt-2">
                      <FaUserTie className="me-2" />
                      {experience.jobTitle}
                    </Card.Subtitle>
                  </div>

                  <ul className="responsibilities-list">
                    {experience.description.map((item, index) => (
                      <li key={index} className="d-flex align-items-start">
                        <span className="bullet-point me-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="g-4 justify-content-center mt-4">
          {projects.map((project) => (
            <Col key={project.id} xs={12} md={6} lg={6}>
              <Card className="h-100 project-card bg-dark">
                <Card.Body className="position-relative">
                  <div className="project-header mb-4">
                    <Card.Title className="project-title">
                      {project.title}
                    </Card.Title>
                    <div className="tech-stack">
                      <FaTools className="me-2" />
                      {project.technologies.join(" • ")}
                    </div>
                  </div>

                  {project.image && (
                    <div className="project-image mb-3">
                      <Card.Img
                        variant="top"
                        src={project.image}
                        alt={project.title}
                        className="img-fluid rounded"
                      />
                    </div>
                  )}

                  <Card.Text className="project-description">
                    {project.description}
                  </Card.Text>

                  <br />

                  <div className="project-links mt-auto justify-content-center">
                    {project.demoUrl && (
                      <Button
                        variant="outline-primary"
                        href={project.demoUrl}
                        className="me-3 mb-4"
                        target="_blank"
                      >
                        <FaExternalLinkAlt className="me-2" />
                        Live Demo
                      </Button>
                    )}
                    {/* <Button variant="outline-info" href={project.codeUrl}>
                      <FaGithub className="me-2" />
                      View Code
                    </Button> */}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
