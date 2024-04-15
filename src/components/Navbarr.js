import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/images/Capture d’écran 2024-04-13 154756.jpg'; // Chemin de votre ima

function Navbarr() {
  return (
<Navbar collapseOnSelect expand="lg" className="navbar-dark bg-black fixed-top">
      <Container>
      <Navbar.Brand href="#home">
      <img
            src={logo} // Utilisez le chemin de votre image ici
            height="100"
            width="100"
            className="d-inline-block align-top rounded-circle" // Ajoutez la classe rounded-circle pour rendre le logo arrondi
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Accueil</Nav.Link>
            <Nav.Link href="/Explorez">explorez</Nav.Link>
            <Nav.Link href="/ajout">Ajoutez</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">voir plus</Nav.Link>
            <Nav.Link eventKey={2} href="#conn">
              se connecter
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;