// src/ContactForm.js
import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { Fade, Slide } from 'react-awesome-reveal'; // Import animations
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Contact() {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="container my-0 mb-0">
      {/* Header Section */}
      <Fade direction="down" triggerOnce>
        <h1 className="text-left mb-0 mt-8">Contact Information</h1>
        <div className="about-lines"></div>
        <p className="text-left mb-0">
          "I’d love to hear from you! Whether you have a question, collaboration idea, or just want to say hi, feel free to reach out."
        </p>
      </Fade>

      <Row>
        {/* Contact Information (Left Column) */}
        <Col md={6} className="mt-5">
          <Slide direction="left" triggerOnce>
            <p className="text-start d-block"><strong>Name:</strong> Yoshita Jain</p>
            <p className="text-start d-block"><strong>Phone Number:</strong> 8962746373</p>
            <p className="text-start d-block"><strong>Address:</strong> Satellite Junction Dewas Naka, Indore Madhya Pradesh</p>
          </Slide>
        </Col>

        {/* Contact Form (Right Column) */}
        <Col md={6} className="mt-5 p-5 bg-gray-50">
          <Slide direction="right" triggerOnce>
            <Form onSubmit={handleSubmit}>
              {/* Name field */}
              <Form.Group controlId="formName">
                <Form.Label className="text-start d-block">Enter your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Email field */}
              <Form.Group controlId="formEmail">
                <Form.Label className="text-start d-block">Enter your Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Subject field */}
              <Form.Group controlId="formSubject">
                <Form.Label className="text-start d-block">Subject</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Message field */}
              <Form.Group controlId="formMessage">
                <Form.Label className="text-start d-block">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Write your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Submit button */}
              <Button variant="primary" type="submit" className="mt-3">
                Send Message
              </Button>
            </Form>
          </Slide>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
