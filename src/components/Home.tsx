import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaReact,
  FaNodeJs,
  FaArrowRight,
  FaPaperPlane,
  FaJs,
  FaPython,
} from "react-icons/fa";
import { SiNestjs, SiTypescript } from "react-icons/si";
import HomeImage from "../assets/Images/Naqeeb.png";
import { IconType } from "react-icons";
import { TechStackItemType } from "../types/Types";
import "../css/Home.css";

const Home = () => {
  const techStack: TechStackItemType[] = [
    [FaReact as IconType, "#90CAF9", "React"],
    [FaJs as IconType, "#F0DB4F", "JavaScript"],
    [SiTypescript as IconType, "#3178C6", "TypeScript"],
    [FaNodeJs as IconType, "#339933", "NodeJS"],
    [SiNestjs as IconType, "#E0234E", "NestJS"],
    [FaPython as IconType, "#4B8BBE", "Python"],
  ];
  return (
    <section id="home" className="portfolio-section">
      <Container fluid className="h-100">
        <Row className="align-items-center justify-content-center g-md-5 h-100">
          <Col
            xs={12}
            md={8}
            lg={6}
            className="order-md-1 text-col text-center"
          >
            <div className="hero-content">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="display-4 fw-bold mb-3 mb-md-4 text-light">
                  Hi, I'm{" "}
                  <span className="text-gradient-blue">Naqeeb Nizar Ali</span>
                </h1>

                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    2000,
                    "Python Developer",
                    2000,
                  ]}
                  wrapper="h2"
                  className="text-light-blue mb-3 mb-md-4 h4"
                  repeat={Infinity}
                  speed={30}
                />

                <p className="lead mb-3 mb-md-4 text-light-blue opacity-75">
                  Crafting digital excellence through
                  <div className="tech-stack d-flex justify-content-center flex-wrap">
                    {techStack.map(([Icon, color, text], index) => (
                      <div key={index} className="tech-item">
                        <Icon className="pulse" color={color} />
                        <span className="tech-text">{text}</span>
                      </div>
                    ))}
                  </div>
                </p>

                <div className="d-flex flex-column flex-md-row gap-3 button-group justify-content-center">
                  <Button variant="primary" size="lg" className="btn-gradient">
                    View My Work <FaArrowRight className="ms-2" />
                  </Button>
                  <Button variant="outline-light" size="lg">
                    Contact Me <FaPaperPlane className="ms-2" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </Col>

          <Col lg={6} className="order-md-2 d-none d-lg-block image-col">
            <Image
              src={HomeImage}
              alt="Naqeeb Nizar Ali"
              fluid
              className="profile-image img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
