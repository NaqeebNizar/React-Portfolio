import "../css/Navbar.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import CV from "../assets/CV/Resume.pdf";
const MyNavbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Add section detection logic here if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      sticky="top"
      variant="dark"
      className={`navbar-glass ${isScrolled ? "scrolled" : ""}`}
    >
      <Container fluid="xxl">
        <div className="d-flex align-items-center">
          <Navbar.Brand
            className="brand-hover cursor-pointer d-flex align-items-center"
            onClick={() => scrollToSection("home")}
          >
            <div className="gradient-logo me-2">{"</>"}</div>
            <span className="brand-text gradient-text">Naqeeb Nizar Ali</span>
          </Navbar.Brand>
        </div>

        <Navbar.Toggle
          aria-controls="mobile-nav"
          className="d-lg-none border-0 custom-toggler"
        />

        <Navbar.Collapse id="mobile-nav" className="justify-content-end">
          <Nav className="align-items-center nav-links">
            <Nav.Link
              onClick={() => scrollToSection("home")}
              className={`nav-link-hover ${
                activeSection === "home" ? "active" : ""
              }`}
            >
              <i className="fas fa-home nav-icon me-2"></i>
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("experience")}
              className={`nav-link-hover ${
                activeSection === "experience" ? "active" : ""
              }`}
            >
              <i className="fas fa-briefcase nav-icon me-2"></i>
              Experience
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("contact")}
              className={`nav-link-hover ${
                activeSection === "contact" ? "active" : ""
              }`}
            >
              <i className="fas fa-envelope nav-icon me-2"></i>
              Contact
            </Nav.Link>
            <Nav.Link
              href={CV}
              target="_blank"
              className="resume-button ms-lg-3"
            >
              Resume <i className="fas fa-arrow-up-right-from-square ms-2"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
