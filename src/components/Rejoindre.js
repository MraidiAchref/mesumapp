import React from 'react';
import {FaFacebook , FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa';

function Rejoindre() {
  return (
    <div>
          <a href="https://www.facebook.com/">
        <FaFacebook size={30} />
      </a>
      <a href="https://www.youtube.com/">
        <FaYoutube size={30} />
      </a>
      <a href="https://www.tiktok.com/">
        <FaTiktok size={30} />
      </a>
      <a href="https://www.instagram.com/">
        <FaInstagram size={30} />
      </a>
    </div>
  );
}

export default Rejoindre;
