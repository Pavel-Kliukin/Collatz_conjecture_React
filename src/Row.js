import React, { useState, useEffect } from 'react';
import style from './Row.module.css';

const Row = () => {
  const [number, setNumber] = useState(0); // number that user enters
  const [prevNumber, setPrevNumber] = useState(0); // previously entered number
  const [isValidNumber, setIsValidNumber] = useState(true);
  const [collatzArray, setCollatzArray] = useState([]);
  const [trigger, setTrigger] = useState(true) // it triggers the useEffect when "submit" button pressed
  const [notTheSameNumber, setNotTheSameNumber] = useState(true); // it says are number and prevNumer equal
  
  // Gets the number from input and makes it integer
  const numberHandler = (e) => {
    const { value } = e.target;
    setNumber(parseInt(value));
  };
  
  // Starts the calculation of Collatz's row when user pressed "submit" button
  const submitHandler = (e) => {
    e.preventDefault();
    setIsValidNumber(true);
    (prevNumber !== number) ? setNotTheSameNumber(true) : setNotTheSameNumber(false);
    setPrevNumber(number);
    collatz_calculations (number)
    trigger ? setTrigger(false) : setTrigger(true)
  };
  
  
  // Calculates the Collatz's row
  function collatz_calculations (x) {
    if (x > 0) { // if x > 0 then make calculations
      var tempArray = [x];
      while (x !== 1) {
        if (x % 2) {
          x = x*3+1
          tempArray.push(x)
        } else { 
          x = x/2
          tempArray.push(x);
        }
      }
      setCollatzArray(tempArray)
    } else { // if x <= 0 then inputed number is not valid
      setIsValidNumber(false)
    }
  }

  // Reloads the page when user pressed "reset" button
  const resetHandler = () => {
    window.location.reload()
  }

  // Makes the fancy output of Collatz's row with blur and delay
  useEffect ( () => {

    if (isValidNumber) {
      if (notTheSameNumber) { // This condition prevents the re-render of the same number
        collatzArray.forEach( (element, index) => {
          const outputNumbers = document.getElementById(element)
          if (outputNumbers) {
            outputNumbers.classList.remove(style.blurisation) // removes class from previous output
            setTimeout ( () => {
              outputNumbers.classList.add(style.blurisation)
            }, index*100)
          }
        });
      }
    } else {
      const notValid = document.getElementById(style.notValid)
      if (notValid) {
        notValid.classList.remove(style.blurisation)
        setTimeout(() => {
          notValid.classList.add(style.blurisation)
        }, 200);
      }
    }

  }, [trigger, collatzArray, isValidNumber, notTheSameNumber])

  return (
    <div className={style.Row}>
      <div className={style.rowBox}>
        <h1>Number: {number}</h1>
        <form onSubmit={submitHandler}>
          <div className={style.inputBox}>
            <label htmlFor={style.inputNumber}>Enter a positive integer</label>
            <input
              type="number"
              id={style.inputNumber}
              onChange={numberHandler}
              required
            />
          </div>
          <div className={style.buttonsBox}>
            <button id={style.submitButton} type="submit">Show Collatz's row</button>
            <button id={style.resetButton} onClick={resetHandler}>Reset</button>
          </div>
        </form>
        { isValidNumber ? (
            collatzArray.map( i => {
              return (
                <div key={i} id={i} className={style.outputNumbers}>{i} </div>
              ); 
            })
          ) : (
            <h3 id={style.notValid} className={style.notValid}>The number you entered is not valid</h3>
          )
        }
      </div>
    </div>
  );

};

export default Row;