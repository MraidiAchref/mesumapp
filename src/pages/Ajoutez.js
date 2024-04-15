import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import '../assets/styles/Ajoutez.css';
import mesumm from'../assets/images/La-melodie-du-Covid-long.jpg';
import Motivation from '../components/Motivation';
function Ajoutez() {
  const [formData, setFormData] = useState({
    artistName: '',
    artworkTitle: '',
    artworkImage: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      artistName: '',
      artworkTitle: '',
      artworkImage: null
    });
  };

  return (
    <div >
     

      <br></br>
      <hr></hr>
      <br></br>
   <Motivation/>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <hr></hr>
      <div style={{ backgroundImage: `url(${require('../assets/images/t12.jpg')})` }}>
        <br></br>
        <br></br>
   <br></br>
   <br></br>
    <Form onSubmit={handleSubmit} className="artwork-form">
      <Form.Group as={Col} controlId="artistName">
        <Form.Label className="form-label">Nom de l'artiste</Form.Label>
        <Form.Control
          type="text"
          name="artistName"
          value={formData.artistName}
          onChange={handleChange}
          placeholder="Entrez le nom de l'artiste"
          required
          className="form-input"
        />
      </Form.Group>

      <Form.Group as={Col} controlId="artworkTitle">
        <Form.Label className="form-label">Titre du tableau</Form.Label>
        <Form.Control
          type="text"
          name="artworkTitle"
          value={formData.artworkTitle}
          onChange={handleChange}
          placeholder="Entrez le titre du tableau"
          required
          className="form-input"
        />
      </Form.Group>

      <Form.Group as={Col} controlId="artworkImage">
        <Form.Label className="form-label">Photo du tableau</Form.Label>
        <Form.Control
          type="file"
          name="artworkImage"
          onChange={handleChange}
          accept="image/*"
          required
          className="form-input"
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="submit-btn">
        Soumettre
      </Button>
    </Form>
    <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <hr></hr>
    </div>
    <br></br>
   
   <br></br>
   <br>
</br>

<br></br>
   <div style={{ 
        backgroundImage: `url(${require('../assets/images/f2.jpg')})`, // Ajoutez une virgule ici
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
         width:'100%',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize: '18px',
        // Applique un flou de 5 pixels à l'image de fond
      }}>
      
    </div>
    <br></br>
    <hr>
    </hr>
    <br></br>
    </div>
  );
}

export default Ajoutez;
