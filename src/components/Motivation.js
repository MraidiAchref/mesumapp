import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Motivation() {
  return (
    <div style={{ 
        backgroundImage: `url(${require('../assets/images/f1.jpg')})`, // Ajoutez une virgule ici
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '580px',
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
  );
}

export default Motivation;
