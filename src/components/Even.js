import React from 'react';
import Card from 'react-bootstrap/Card';
import cat1 from '../assets/images/lab.jpg'; // Importez vos image
import cat2 from '../assets/images/med.png';
import cat3 from '../assets/images/conf.jpg';
function Even() {
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={cat1} />
        <Card.Body>
          <Card.Title>Ateliers interactifs </Card.Title>
          <Card.Text>
          Des ateliers interactifs peuvent être proposés, où les visiteurs peuvent participer à des activités pratiques liées à la santé, comme des démonstrations de premiers secours, des simulations médicales ou des expériences scientifiques
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={cat2} />
        <Card.Body>
          <Card.Title>Ateliers de méditation guidée</Card.Title>
          <Card.Text>
          Des séances d'initiation à la méditation peuvent être proposées, guidées par des instructeurs qualifiés. Ces ateliers peuvent inclure différentes techniques de méditation, telles que la pleine conscience, la méditation sur la respiration et la méditation guidée.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={cat3} />
        <Card.Body>
          <Card.Title>Conférences et présentations</Card.Title>
          <Card.Text>
          Des conférences et des présentations animées par des experts en santé peuvent être organisées pour approfondir les connaissances des visiteurs sur des sujets spécifiques liés à la santé, à la médecine et à la recherche médicale.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Even;
