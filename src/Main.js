import React, { useState, useEffect } from 'react';
import './Main.css';

const Main = () => {
  const [number, setNumber] = useState(0);
  const [prevNumber, setPrevNumber] = useState(0);
  const [isValidNumber, setIsValidNumber] = useState(true);
  const [collatzArray, setCollatzArray] = useState([]);
  const [trigger, setTrigger] = useState(true)
  const [notTheSameNumber, setNotTheSameNumber] = useState(true);
  
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
      if (notTheSameNumber) {
        collatzArray.forEach( (element, index) => {
          const outputNumbers = document.getElementById(element)
          if (outputNumbers) {
            outputNumbers.classList.remove('blurisation') // removes class from previous output
            setTimeout ( () => {
              outputNumbers.classList.add('blurisation')
            }, index*100)
          }
        });
      }
    } else {
      const notValid = document.getElementById('notValid')
      if (notValid) {
        notValid.classList.remove('blurisation')
        setTimeout(() => {
          notValid.classList.add('blurisation')
        }, 200);
      }
    }

  }, [collatzArray, trigger])

  return (
    <div className='Main'>
      <div className='mainBox'>
        <h1>Number: {number}</h1>
        <form onSubmit={submitHandler}>
          <div className="inputBox">
            <label htmlFor="inputNumber">Enter a positive integer</label>
            <input
              type="number"
              id="inputNumber"
              onChange={numberHandler}
              required
            />
          </div>
          <div className='buttonsBox'>
            <button className='buttons' id='submitButton' type="submit">Show Collatz's row</button>
            <button className='buttons' id='resetButton' onClick={resetHandler}>Reset</button>
          </div>
        </form>
        { isValidNumber ? (
            collatzArray.map( i => {
              return (
                <div key={i} id={i} className='outputNumbers'>{i} </div>
              ); 
            })
          ) : (
            <h3 id='notValid' className='notValid'>The number you entered is not valid</h3>
          )
        }
      </div>
    </div>
  );

};

export default Main;