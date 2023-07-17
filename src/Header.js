import React from 'react';
import style from './Header.module.css';
import collatzImage from './assets/collatz_by_K.A.Rousan.webp'

const Header = () => {

  const logoHandler = () => {
    const modal = document.getElementById(style.modal)
    modal.classList.remove(style.hide)
  }

  const closeButtonHandler = () => {
    const modal = document.getElementById(style.modal)
    modal.classList.add(style.hide)
  }

  return (
    <div className={style.Header}>
      <img onClick={logoHandler} id={style.collatzImage} className={style.headerImg} src={collatzImage} alt="collatz_by_K.A.Rousan"/>
      <h1 className={style.h1}>Collatz Conjecture</h1>
      <div id={style.modal} className={style.hide}>
        <button onClick={closeButtonHandler} className={style.closeButton}>X</button>
        <img className={style.modalImg} src={collatzImage} alt="collatz_by_K.A.Rousan"/>
        <p>This image is cool</p>
      </div>
    </div>
  );
};

export default Header;