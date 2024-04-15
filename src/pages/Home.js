import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import museumImage from '../assets/images/carte.jpg'; // Chemin de votre image
import image1 from '../assets/images/t12.jpg';
import '../assets/styles/Home.css';
import Even from '../components/Even'; 
import Quisommes from '../components/Quisommes';
import Feedback from '../components/Feedback';
import Visite from '../components/Visite';


function Home() {
  return (
    <div className="App" style={{ margin: 0, padding: 0,backgroundImage:'' }}>
      
      
      <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'black', margin: 0 }}>
        <div style={{ backgroundColor: 'black', /*position: 'relative'*/  marginLeft: 0 , height:'80%'}}>
          <video
            src="/Journée de la santé mentale en entreprise ‐ Réalisée avec Clipchamp.mp4"
            height="40%" 
            width="110%" 
            autoPlay
            loop
            muted
          />
        </div>
        <div style={{ backgroundColor: 'black', height: '150px' }}></div>
     </div> 
    <div style={{ backgroundColor: 'black', height: '40px' }}></div>
      
      <div className="background-container" style={{ background: `url(${image1})`, backgroundSize: 'cover', borderRadius: '10px', margin: 0 }}>
        <img src={museumImage} alt="Musée Le Pinceau" className="right-image" />
      </div>
      <br></br>
      <br></br>
      <br></br>
    
    


  

  <div style={{ textAlign: 'center' }}>
    <br></br>
      <br></br>
  <h1 style={{ fontFamily: 'serif' }}>Nos Evènnements </h1>

<br></br>

      </div>
 <Even/>
 <br></br>
 <br></br>
  <Quisommes/> 
  <br></br>
  <br></br>
  <br></br>
   <div style={{ textAlign: 'center' }}>
   <h1 style={{ fontFamily: 'serif' }}>Votre avis est nécessaire ! </h1> 
   </div>
  <br></br>
  <br></br>
  <Feedback/>
  <br></br>
  
  
 
    </div>
  );
}

export default Home;



