import { Container, Row, Col, Nav } from "react-bootstrap";
import {
  Linkedin,
  Github,
  Envelope,
  Instagram,
  Facebook,
} from "react-bootstrap-icons";
import "../css/Footer.css";
const Footer = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #0a192f 0%, rgb(30, 67, 123) 100%)",
        color: "#f0f4f8",
        padding: "2rem 0",
        marginTop: "auto",
      }}
    >
      <Container>
        {/* Add text-center and justify-content-center to main row */}
        <Row className="g-4 text-center text-md-start">
          {/* Add mx-auto for mobile centering */}
          <Col md={4} className="mx-auto mx-md-0">
            <h5 style={{ color: "#a9d6e5" }}>Naqeeb Nizar Ali</h5>
            <p className="mt-3" style={{ fontSize: "0.9rem" }}>
              Building innovative software solutions with cutting-edge
              technology.
            </p>
          </Col>

          <Col md={4} className="mx-auto mx-md-0">
            <h5 style={{ color: "#a9d6e5" }}>Quick Links</h5>
            {/* Add justify-content-center for mobile */}
            <Nav className="flex-column mt-3 justify-content-center justify-content-md-start">
              <Nav.Link href="#about" style={{ color: "#f0f4f8" }}>
                About Us
              </Nav.Link>
              <Nav.Link href="#services" style={{ color: "#f0f4f8" }}>
                Services
              </Nav.Link>
              <Nav.Link href="#careers" style={{ color: "#f0f4f8" }}>
                Careers
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={4} className="mx-auto mx-md-0">
            <h5 style={{ color: "#a9d6e5" }}>Connect With Us</h5>
            <div className="mt-3">
              {/* Add justify-content-center for email */}
              <div
                className="d-flex justify-content-center justify-content-md-start"
                style={{ fontSize: "0.9rem", whiteSpace: "nowrap" }}
              >
                <Envelope className="me-2" />
                <a
                  href="https://mail.google.com/mail/?view=cm&to=naqeebmaknojia895@gmail.com"
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  naqeebmaknojia895@gmail.com
                </a>
              </div>
              {/* Add justify-content-center for social icons */}
              <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-3">
                <a
                  href="https://www.linkedin.com/in/naqeebnizarali"
                  className="social-icon linkedin-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/NaqeebNizar/Full-Stack-Development"
                  className="social-icon github-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.instagram.com/maknojianaqeeb?igsh=MXF5a2J1bnk5ZXZmZQ=="
                  className="social-icon instagram-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.facebook.com/share/1BRVxbYqiT/"
                  className="social-icon facebook-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Copyright Row remains centered */}
        <Row className="mt-4">
          <Col>
            <p
              className="text-center mb-0"
              style={{
                fontSize: "0.8rem",
                color: "#89c2d9",
                borderTop: "1px solid #1a4b6d",
                paddingTop: "1rem",
              }}
            >
              © {new Date().getFullYear()} Naqeeb. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
