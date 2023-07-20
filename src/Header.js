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
      <div className={style.logoAndTitle}>
        <img onClick={logoHandler} id={style.collatzImage} className={style.headerImg} src={collatzImage} alt="collatz_by_K.A.Rousan"/>
        <h1 className={style.h1}>Collatz Conjecture</h1>
      </div>
      <div id={style.modal} className={style.hide}>
        <button onClick={closeButtonHandler} className={style.closeButton}>X</button>
        <img className={style.modalImg} src={collatzImage} alt="collatz_by_K.A.Rousan"/>
        <p className={style.modalText}>This picture shows the computer visualization of the Collatz series for a certain amount of different numbers. Each line shows one row, and all rows eventually converge to "1".</p>
        <p className={style.modalText}>You can see how this image was drawn and look at the code of the program that draw it by clicking <a className={style.link} href='https://editor.p5js.org/K.A.Rousan/sketches/9G7kePHyd' target="_blank" rel="noopener noreferrer">here</a>.</p>
      </div>
    </div>
  );
};

export default Header;