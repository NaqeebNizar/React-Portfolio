import "../css/Navbar.css";
import {
  Navbar,
  Nav,
  Button,
  Container,
  Form,
  InputGroup,
  Dropdown,
} from "react-bootstrap";
import { FaSearch, FaUserCircle } from "react-icons/fa";

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
            <Nav.Link onClick={() => scrollToSection("contact-form")}>
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
          {/* <Form className="me-3">
            <InputGroup>
              <Form.Control
                placeholder="Search..."
                aria-label="Search"
                className="border-end-0"
              />
              <Button variant="outline-light">
                <FaSearch />
              </Button>
            </InputGroup>
          </Form> */}

          <Dropdown className="me-3 dropdown-profile">
            <Dropdown.Toggle variant="link" className="p-0">
              <FaUserCircle size={40} />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-end">
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

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
