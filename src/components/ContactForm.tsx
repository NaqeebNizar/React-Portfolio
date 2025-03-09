import { useState } from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import { FaUser, FaEnvelope, FaComment, FaPaperPlane } from "react-icons/fa";
import "../css/ContactForm.css";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { FiSend } from "react-icons/fi";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (): boolean => {
    let valid = true;
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData);
      // setSubmitted(true);
      // setFormData({ name: "", email: "", subject: "", message: "" });
      // setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="contact-form">
      <Container className="py-5" style={{ maxWidth: "800px" }}>
        <h2 className="section-title text-center mb-5">
          <span className="title-text">Contact Us</span>
        </h2>

        {/* <h2 className="title-text text-center mb-5 text-white"></h2> */}

        {submitted && (
          <Alert variant="success" className="text-center">
            Your message has been sent successfully!
          </Alert>
        )}

        <Form onSubmit={handleSubmit} className="p-4 rounded-4 form-container">
          <Row className="g-4">
            <Col md={6}>
              <Form.Group controlId="name">
                <Form.Label className="d-flex align-items-center text-white mb-3">
                  <FaUser className="me-2" style={{ color: "#2196F3" }} />
                  Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                  placeholder="Enter your name"
                  className="form-control-custom"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="email">
                <Form.Label className="d-flex align-items-center text-white mb-3">
                  <FaEnvelope className="me-2" style={{ color: "#2196F3" }} />
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                  placeholder="Enter your email"
                  className="form-control-custom"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group controlId="subject">
                <Form.Label className="d-flex align-items-center text-white mb-3">
                  <FaComment className="me-2" style={{ color: "#2196F3" }} />
                  Subject
                </Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter message subject"
                  className="form-control-custom"
                />
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group controlId="message">
                <Form.Label className="d-flex align-items-center text-white mb-3">
                  <FaPaperPlane className="me-2" style={{ color: "#2196F3" }} />
                  Message
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  isInvalid={!!errors.message}
                  placeholder="Enter your message"
                  className="form-control-custom"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={12} className="text-end mt-4">
              <Button
                variant="primary"
                type="submit"
                className="submit-btn rounded-4"
              >
                <FiSend className="send-icon" />
                Send Message
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  );
};

export default ContactForm;
