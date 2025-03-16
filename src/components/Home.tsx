import { Container, Row, Col, Button, ButtonProps } from "react-bootstrap";
import { motion, MotionProps } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaReact,
  FaNodeJs,
  FaArrowRight,
  FaPaperPlane,
  FaJs,
  FaPython,
} from "react-icons/fa";
import { SiNestjs, SiPostgresql, SiTypescript } from "react-icons/si";
// import Coding from "../assets/Images/coding2.jpeg";
import { IconType } from "react-icons";
import { TechStackItemType } from "../types/Types";
import "../css/Home.css";
import CV from "../assets/CV/Resume.pdf";
import { FaDownload } from "react-icons/fa6";

type MotionButtonProps = ButtonProps &
  MotionProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: "a"; // Force anchor type for these buttons
  };

// Create motion-enhanced button with proper typing
const MotionButton = motion(Button as React.ComponentType<MotionButtonProps>);

const Home = () => {
  const techStack: TechStackItemType[] = [
    [FaReact as IconType, "#90CAF9", "React"],
    [FaJs as IconType, "#F0DB4F", "JavaScript"],
    [SiTypescript as IconType, "#3178C6", "TypeScript"],
    [FaNodeJs as IconType, "#339933", "NodeJS"],
    [SiNestjs as IconType, "#E0234E", "NestJS"],
    [FaPython as IconType, "#4B8BBE", "Python"],
    [SiPostgresql as IconType, "#2979B5", "PostgreSQL"],
  ];

  return (
    <section id="home" className="portfolio-section">
      <div className="background-particles" />
      <Container fluid className="h-100">
        <Row className="align-items-center justify-content-center g-md-5 h-100">
          <Col
            xs={12}
            md={8}
            lg={6}
            className="content-column order-md-1 text-col text-center"
          >
            <div className="hero-content">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
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
                  className="text-light-blue mb-3 mb-md-4 h4 type-animation"
                  repeat={Infinity}
                  speed={50}
                  deletionSpeed={70}
                  cursor={false}
                />

                <motion.p
                  className="lead mb-3 mb-md-4 text-light-blue opacity-75"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.75 }}
                  transition={{ delay: 0.5 }}
                >
                  Crafting digital excellence through
                  <motion.div
                    className="tech-stack d-flex justify-content-center flex-wrap"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.3,
                        },
                      },
                    }}
                  >
                    {techStack.map(([Icon, color, text], index) => (
                      <motion.div
                        key={index}
                        className="tech-item"
                        variants={{
                          hidden: { y: 20, opacity: 0 },
                          visible: { y: 0, opacity: 1 },
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="pulse" size={20} color={color} />
                        <span className="tech-text">{text}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.p>

                <motion.div
                  className="button-group d-flex flex-column flex-lg-row flex-md-row gap-3 justify-content-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <MotionButton
                    variant="primary"
                    href="#experience"
                    size="lg"
                    className="btn-gradient text-nowrap"
                    as="a"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View My Work <FaArrowRight className="ms-2" />
                  </MotionButton>

                  {/* Download CV Button */}
                  <MotionButton
                    variant="outline-primary"
                    href={CV}
                    download
                    size="lg"
                    className="btn-outline-cv text-nowrap"
                    as="a" // Makes it download as a file
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Download CV <FaDownload className="ms-2" />
                  </MotionButton>

                  {/* Contact Button */}
                  <MotionButton
                    variant="outline-light"
                    href="#contact"
                    size="lg"
                    as="a" // Makes it behave like a link
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Me <FaPaperPlane className="ms-2" />
                  </MotionButton>
                </motion.div>
              </motion.div>
            </div>
          </Col>

          {/* <Col lg={6} className="order-md-2 d-none d-lg-block image-col">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src={Coding}
                alt="Naqeeb Nizar Ali"
                fluid
                className="profile-image img-fluid"
              />
            </motion.div>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Home;
