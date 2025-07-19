import { Card, Container, Row, Col } from "react-bootstrap";
import {
  FaBuilding,
  FaUserTie,
} from "react-icons/fa";
import "../css/Experience.css";
import { ExperienceType } from "../types/Types";


const experiences: ExperienceType[] = [
  {
    id: 1,
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
  {
    id: 2,
    companyName: "11th Agency PK.",
    jobTitle: "Junior Software Developer",
    startDate: "Dec 2024",
    endDate: "June 2025",
    description: [
      "Worked with Node.js, NestJS (with TypeScript), Prisma, GraphQL, and React (with TypeScript).",
      "Created and added new features in an existing project/product.",
      "Contributed to the enhancement and optimization of existing features.",
    ],
  },
  {
    id: 3,
    companyName: "Attobility PVT LTD.",
    jobTitle: "Software Engineer",
    startDate: "July 2025",
    endDate: "Present",
    description: [
      "Specialized in frontend development using React and Next.js.",
      "Built and maintained responsive, high-performance web interfaces with JavaScript and TypeScript.",
      "Collaborated with designers and backend developers to deliver seamless user experiences.",
      "Implemented reusable UI components and optimized rendering performance.",
    ],
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
          {[...experiences].reverse().map((experience) => (
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

      </Container>
    </section>
  );
};

export default Experience;
