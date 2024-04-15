import React from 'react';
import '../assets/styles/Quisommes.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import smallImage1 from '../assets/images/t11.jpg'; // Importez vos petites images
import smallImage2 from '../assets/images/t11.jpg';
import smallImage3 from '../assets/images/t11.jpg';
import smallImage4 from '../assets/images/t11.jpg';
import smallImage5 from '../assets/images/t11.jpg';
import smallImage6 from '../assets/images/t11.jpg';
import pinimage from '../assets/images/pinceauuz.jpg'; 

export default function Quisommes() {
  return (
    <div>
        <div style={{ textAlign: 'center' }}>
        <br></br>
        <br></br>
        <br></br>
        <h1 style={{ fontFamily: 'serif' }}>Nos Membres  </h1>
        <br></br>
        <br></br>
        </div>
        <img src={pinimage} alt="MuséePinceau" style={{ width: '100%' ,height:'10%',}} />
          <br></br>
          <br></br>
    <Container fluid  style={{ marginLeft: '140px' }}>
      <Row>
        <Col xs={4}>
          <div className="member">
            <Image src={smallImage1} roundedCircle className="small-image" />
            <p className="caption">Member 1</p>
          </div>
        </Col>
        <Col xs={4}>
          <div className="member">
            <Image src={smallImage2} roundedCircle className="small-image" />
            <p className="caption">Member 2</p>
          </div>
        </Col>
        <Col xs={4}>
          <div className="member">
            <Image src={smallImage3} roundedCircle className="small-image" />
            <p className="caption">Member 3</p>
          </div>
        </Col>
        <Col xs={4}>
          <div className="member">
            <Image src={smallImage4} roundedCircle className="small-image" />
            <p className="caption">Member 4</p>
          </div>
        </Col>
        <Col xs={4}>
          <div className="member">
            <Image src={smallImage5} roundedCircle className="small-image" />
            <p className="caption">Member 5</p>
          </div>
        </Col>
        <Col xs={4}>
          <div className="member">
            <Image src={smallImage6} roundedCircle className="small-image" />
            <p className="caption">Member 6</p>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}


