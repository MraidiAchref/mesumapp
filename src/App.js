// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Ajoutez from './pages/Ajoutez';
import Apropos from './pages/Apropos'
import Navbarr from './components/Navbarr';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rejoindrefinal from './components/Rejoindrefinal';
import './pages/Explorez';
import Explorez from './pages/Explorez';

function App() {
  return (
    <div className="App">
      <Navbarr />
      
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="" element={<Home />} />
          <Route path="/ajout" element={<Ajoutez />} />
          <Route path="/Explorez" element={<Explorez />} />
          <Route path="/apropos" element={<Apropos />} />
        </Routes>
      </BrowserRouter>
      <Rejoindrefinal className="fixed-top" />
    </div>
  );
}

export default App;
