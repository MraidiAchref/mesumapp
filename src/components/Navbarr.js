import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import "./NavbarStyle.css"
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/images/Capture d’écran 2024-04-13 154756.jpg'; // Chemin de votre ima
import GamePadIcon from './icons/GamePadIcon';
import HomeIcon from './icons/HomeIcon';
import AddIcon from './icons/AddIcon';

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

            <div className='button-container'>
              <HomeIcon/>
              <Nav.Link href="/home">Accueil</Nav.Link>
            </div>
            

            <div className='button-container'> 
              <GamePadIcon/>              
              <Nav.Link href="/Explorez" className="label-container"> Visitez</Nav.Link>            
            </div>
           
           
            <div className='button-container'> 
              <AddIcon/>
              <Nav.Link href="/ajout" className="label-container" >Ajoutez</Nav.Link>
            </div>

            
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