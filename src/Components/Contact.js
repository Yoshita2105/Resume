// src/ContactForm.js
import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
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
    // You can handle the form submission logic here, such as sending an email
    console.log('Form Data:', formData);
  };

  return (
    <div className="container my-5">
      <h1 className="text-left mb-4">Contact  Information</h1>
      <p className="text-left mb-4">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>

      <Row>
        {/* Contact Information (Left Column) */}
        <Col md={6} className="mt-5">
         
          <p className="text-start d-block"><strong>Name:</strong> Yoshita Jain</p>
          <p className="text-start d-block"><strong>Phone Number:</strong> 626-527-6089</p>
          <p className="text-start d-block"><strong>Address:</strong> satellite Junction Dewas Naka, Indore Madhya pradesh</p>
        </Col>

        {/* Contact Form (Right Column) */}
      {/* Contact Form (Right Column) */}
<Col md={6} className="mt-5 p-5 bg-gray-50">
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
</Col>
     </Row>
    </div>
  );
}

export default Contact;
