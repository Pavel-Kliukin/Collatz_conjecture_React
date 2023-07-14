import React from 'react';
import style from './Header.module.css';
import collatzImage from './assets/collatz_by_K.A.Rousan.webp'

const Header = () => {
  return (
    <div className={style.Header}>
      <img id={style.collatzImage} className={style.headerImg} src={collatzImage} alt="collatz_by_K.A.Rousan"/>
      <h1 className={style.h1}>Collatz Conjecture</h1>
    </div>
  );
};

export default Header;