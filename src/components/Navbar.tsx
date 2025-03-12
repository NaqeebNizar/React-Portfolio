import "../css/Navbar.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const MyNavbar = () => {
  const scrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Navbar expand="lg" sticky="top" variant="dark" className="py-1">
      <Container fluid>
        <div className="d-flex align-items-center ms-3">
          <Navbar.Brand
            className="me-3 cursor-pointer"
            onClick={() => scrollToSection("home")}
            href="#home"
          >
            MyPortfolio
          </Navbar.Brand>
        </div>

        <Navbar.Collapse id="mobile-nav" className="custom-nav d-lg-none">
          <Nav className="ms-3 align-items-center d-lg-none">
            <Nav.Link onClick={() => scrollToSection("home")}>Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("experience")}>
              Experience
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("contact")}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="d-flex align-items-center ms-auto">
          <Nav className="d-none d-lg-flex me-3">
            <Nav.Link onClick={() => scrollToSection("home")}>Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("experience")}>
              Experience
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("contact-form")}>
              Contact
            </Nav.Link>
          </Nav>

          <Navbar.Toggle
            aria-controls="mobile-nav"
            className="d-lg-none border-0"
          />
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
