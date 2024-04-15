import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import backgroundImage from '../assets/images/La-melodie-du-Covid-long.jpg';

function Feedback() {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer le feedback à votre backend ou effectuer d'autres actions
    console.log(feedback);
  };

  return (
    <Container style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={feedback.name}
            onChange={handleChange}
            placeholder="Entrez votre nom"
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={feedback.email}
            onChange={handleChange}
            placeholder="Entrez votre email"
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={feedback.message}
            onChange={handleChange}
            placeholder="Entrez votre message"
            rows={4}
          />
        </Form.Group>
         <br></br>
        <Button variant="primary" type="submit">
          Envoyer
        </Button>
      </Form>
    </Container>
  );
}

export default Feedback;
