import React from 'react';
import './Header.css';
import collatzImage from './assets/collatz_by_K.A.Rousan.webp'

const Header = () => {
  return (
    <div className='Header'>
      <img id="collatzImage" className="headerImg" src={collatzImage} alt="collatz_by_K.A.Rousan"/>
      
    </div>
  );
};

export default Header;