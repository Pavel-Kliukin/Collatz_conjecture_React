import React, { useState } from 'react';
import './Main.css';

const Main = () => {
  const [number, setNumber] = useState(0);
  const [isValidNumber, setIsValidNumber] = useState(true);
  const [collatzArray, setCollatzArray] = useState([]);

  const numberHandler = (e) => {
    const { value } = e.target;
    setNumber(parseInt(value))
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsValidNumber(true)
    collatz_calculations (number)
  };

  function collatz_calculations (x) {
    if (Number.isInteger(x) && x > 0) {
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
    } else {setIsValidNumber(false)}
  }

  const resetHandler = () => {
    window.location.reload()
  }

  return (
    <div className='Main'>
      <div className='mainBox'>
        <h1>Number: {number}</h1>
        <form onSubmit={submitHandler}>
          <div className="numberInput">
            <label htmlFor="number">Enter a positive integer</label>
            <input
              type="number"
              id="number"
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
                <div key={i} className='numbers'>{i} </div>
              ); 
            })
          ) : (
            <h3 className='notValid'>The number you entered is not valid</h3>
          )
        }
      </div>
    </div>
  );

};

export default Main;